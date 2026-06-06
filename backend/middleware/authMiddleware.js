const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Full protect — blocks if no token (kept for reference, not used)
const protect = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET || 'careercraft_secret_key_123');
            req.user = await User.findById(decoded.id).select('-password');
            next();
        } catch (error) {
            console.error(error);
            res.status(401).json({ success: false, message: 'Not authorized, token failed' });
        }
    }

    if (!token) {
        res.status(401).json({ success: false, message: 'Not authorized, no token' });
    }
};

// Optional auth — attaches user if token present, continues as guest if not
const optionalAuth = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (authHeader && authHeader.startsWith('Bearer')) {
            const token = authHeader.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET || 'careercraft_secret_key_123');
            req.user = await User.findById(decoded.id).select('-password');
        } else {
            req.user = null;
        }
    } catch (error) {
        // Invalid token — treat as guest
        req.user = null;
    }
    next();
};

module.exports = { protect, optionalAuth };
