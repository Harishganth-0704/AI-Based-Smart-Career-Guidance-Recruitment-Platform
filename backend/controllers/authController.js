const User = require('../models/User');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const nodemailer = require('nodemailer');

// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET || 'careercraft_secret_key_123', {
        expiresIn: '30d'
    });
};

// @desc    Register user
// @route   POST /api/auth/register
// @access  Public
exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if user exists
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ success: false, message: 'User already exists' });
        }

        // Create user
        const user = await User.create({
            name,
            email,
            password
        });

        if (user) {
            // --- Send Welcome Email (Fire and forget, don't await so it doesn't block UI) ---
            try {
                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: process.env.EMAIL_USER,
                        pass: process.env.EMAIL_PASS
                    }
                });

                const mailOptions = {
                    from: `"CareerCraft Team" <${process.env.EMAIL_USER}>`,
                    to: user.email,
                    subject: '🎉 Welcome to CareerCraft! Your Journey Begins Now',
                    html: `
                        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; background: #0a192f; color: #e0e0e0; padding: 40px; border-radius: 12px; border: 1px solid #00e676;">
                            <h2 style="color: #00e676;">Welcome aboard, ${user.name}! 🚀</h2>
                            <p>We are thrilled to have you join <strong>CareerCraft</strong>.</p>
                            <p>Get ready to explore AI-personalized roadmaps, ace your interviews, and build a resume that stands out.</p>
                            <div style="background: #112240; padding: 20px; border-radius: 8px; margin: 20px 0;">
                                <h3 style="color: #64ffda; margin-top: 0;">What's Next?</h3>
                                <ul style="line-height: 1.6;">
                                    <li>Take the Skill Assessment</li>
                                    <li>Explore your Personalized Roadmap</li>
                                    <li>Try out our AI Career Toolbox</li>
                                </ul>
                            </div>
                            <p>Let's craft your dream career together!</p>
                            <br/>
                            <p style="color: #999;">Best Regards,<br/>The CareerCraft Team</p>
                            <hr style="border-color: #333; margin-top: 30px;" />
                            <p style="color: #666; font-size: 12px; text-align: center;">© 2026 CareerCraft — Hindustan Institute of Technology</p>
                        </div>
                    `
                };
                transporter.sendMail(mailOptions).catch(err => console.log('Welcome Email Error:', err.message));
            } catch (emailErr) {
                console.log('Nodemailer setup error:', emailErr.message);
            }
            // -------------------------------------------------------------------------

            res.status(201).json({
                success: true,
                _id: user._id,
                name: user.name,
                email: user.email,
                token: generateToken(user._id)
            });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check for user email
        const user = await User.findOne({ email }).select('+password');

        if (user && (await user.matchPassword(password))) {
            res.json({
                success: true,
                _id: user._id,
                name: user.name,
                email: user.email,
                token: generateToken(user._id)
            });
        } else {
            res.status(401).json({ success: false, message: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @desc    Get current user
// @route   GET /api/auth/me
// @access  Private
exports.getMe = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        res.json({
            success: true,
            data: user
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @desc    Update user stats (points, streak, etc)
// @route   PUT /api/auth/stats
// @access  Private
exports.updateStats = async (req, res) => {
    try {
        const { points, streak, badge } = req.body;
        const user = await User.findById(req.user.id);

        if (points) user.points += points;
        if (streak) user.streak = streak;
        if (badge && !user.badges.includes(badge)) user.badges.push(badge);
        
        user.lastLogin = Date.now();
        await user.save();

        res.json({ success: true, data: user });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @desc    Get Global Leaderboard
// @route   GET /api/auth/leaderboard
// @access  Public
exports.getLeaderboard = async (req, res) => {
    try {
        const topUsers = await User.find()
            .select('name points badges streak')
            .sort({ points: -1 })
            .limit(10);
            
        res.json({ success: true, leaderboard: topUsers });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @desc    Toggle progress for a module
// @route   PUT /api/auth/progress
// @access  Private
exports.updateProgress = async (req, res) => {
    try {
        const { moduleId } = req.body;
        const user = await User.findById(req.user.id);

        if (!user.completedModules) {
            user.completedModules = [];
        }

        const index = user.completedModules.indexOf(moduleId);
        if (index > -1) {
            // Already completed, so un-complete it
            user.completedModules.splice(index, 1);
        } else {
            // Not completed, mark it as completed
            user.completedModules.push(moduleId);
        }

        await user.save();

        res.json({ success: true, completedModules: user.completedModules });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// @desc    Forgot Password - Send Reset Email
// @route   POST /api/auth/forgot-password
// @access  Public
exports.forgotPassword = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).json({ success: false, message: 'No account found with that email address.' });
        }

        // Generate a secure random token
        const resetToken = crypto.randomBytes(32).toString('hex');
        
        // Hash it and save to DB (we store hashed, send plain to email)
        user.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');
        user.resetPasswordExpire = Date.now() + 60 * 60 * 1000; // 1 hour
        await user.save({ validateBeforeSave: false });

        // Build the reset URL
        const resetUrl = `${process.env.FRONTEND_URL || 'http://localhost:5173'}/reset-password/${resetToken}`;

        // Send Email via Nodemailer
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: `"CareerCraft" <${process.env.EMAIL_USER}>`,
            to: user.email,
            subject: '🔑 CareerCraft - Password Reset Request',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; background: #0a192f; color: #e0e0e0; padding: 40px; border-radius: 12px; border: 1px solid #00e676;">
                    <h2 style="color: #00e676;">CareerCraft Password Reset</h2>
                    <p>Hi <strong>${user.name}</strong>,</p>
                    <p>You requested to reset your password. Click the button below within <strong>1 hour</strong>:</p>
                    <div style="text-align: center; margin: 30px 0;">
                        <a href="${resetUrl}" style="background: #00e676; color: #0a192f; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 16px;">Reset My Password</a>
                    </div>
                    <p style="color: #999; font-size: 13px;">If you didn't request this, just ignore this email. This link expires in 1 hour.</p>
                    <hr style="border-color: #333;" />
                    <p style="color: #666; font-size: 12px;">© 2026 CareerCraft — Hindustan Institute of Technology</p>
                </div>
            `
        };

        await transporter.sendMail(mailOptions);
        res.json({ success: true, message: `Password reset link sent to ${user.email}` });

    } catch (error) {
        // If email fails, clear the token
        console.error('Forgot Password Error:', error.message);
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            user.resetPasswordToken = undefined;
            user.resetPasswordExpire = undefined;
            await user.save({ validateBeforeSave: false });
        }
        res.status(500).json({ success: false, message: `Email could not be sent: ${error.message}` });
    }
};

// @desc    Reset Password using token
// @route   PUT /api/auth/reset-password/:token
// @access  Public
exports.resetPassword = async (req, res) => {
    try {
        // Hash the incoming token to match what's stored in DB
        const hashedToken = crypto.createHash('sha256').update(req.params.token).digest('hex');

        const user = await User.findOne({
            resetPasswordToken: hashedToken,
            resetPasswordExpire: { $gt: Date.now() }
        });

        if (!user) {
            return res.status(400).json({ success: false, message: 'Invalid or expired reset token. Please request a new one.' });
        }

        // Set new password
        user.password = req.body.password;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;
        await user.save();

        res.json({ success: true, message: 'Password reset successfully! You can now log in.' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
