import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';
import './Roadmap.css'; // Reusing existing roadmap styles

const LanguageRoadmap = () => {
    const { languageId } = useParams();
    const [roadmap, setRoadmap] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // Map ID to readable name
    const languageMap = {
        'mandarin': 'Mandarin Chinese',
        'german': 'German',
        'japanese': 'Japanese',
        'korean': 'Korean',
        'french': 'French',
        'arabic': 'Arabic',
        'russian': 'Russian',
        'spanish': 'Spanish',
        'portuguese': 'Portuguese',
        'hindi': 'Hindi',
        'swahili': 'Swahili',
        'pashto': 'Pashto',
        'italian': 'Italian',
        'turkish': 'Turkish',
        'dutch': 'Dutch',
        'tamil': 'Tamil'
    };

    const languageName = languageMap[languageId] || languageId;

    const fallbackRoadmaps = {
        'mandarin': `### Mandarin Chinese Roadmap
Phase 1: Basics
- Learn Pinyin (pronunciation system)
- Master the 4 basic tones
- Learn basic greetings (Ni hao, Xie xie)

Phase 2: Beginner
- HSK 1 Vocabulary (150 words)
- Basic sentence structure (Subject + Time + Place + Verb + Object)
- Numbers and dates

Phase 3: Intermediate
- HSK 2 & 3 Level
- Common radicals for writing
- Essential particles (le, de, ma)`,

        'german': `### German Roadmap
Phase 1: Foundations
- German Alphabet & Pronunciation
- Basic Greetings & Introductions
- Numbers 1-100

Phase 2: Level A1
- Basic Grammar (Definite/Indefinite articles)
- Present tense of common verbs
- Sentence structure (V2 rule)

Phase 3: Level A2
- Past tenses (Perfekt)
- Prepositions and Cases (Nominative, Accusative, Dative)`,

        'japanese': `### Japanese Roadmap
Phase 1: Scripts
- Master Hiragana (46 characters)
- Master Katakana (46 characters)
- Basic greetings (Ohayou, Konnichiwa)

Phase 2: Grammar & Vocab
- Particles (wa, ga, o, ni, de)
- JLPT N5 Vocabulary
- Basic Verb conjugations (~masu form)`,

        'french': `### French Roadmap
Phase 1: Pronunciation
- French Alphabet & Accents
- Basic Nasal sounds
- Greetings (Bonjour, Salut)

Phase 2: Essentials
- Subject Pronouns
- Verbs 'Être' and 'Avoir'
- Common adjectives and gender agreement`,

        'spanish': `### Spanish Roadmap
Phase 1: Basics
- Spanish Alphabet & Pronunciation
- Numbers 1-100
- Basic Greetings (Hola, Cómo estás)

Phase 2: Verbs
- Regular -ar, -er, -ir verbs
- Essential irregulars (Ser, Estar, Ir)
- Sentence structure basics`,

        'hindi': `### Hindi Roadmap
Phase 1: Devanagari Script
- Learn Vowels (Swar)
- Learn Consonants (Vyanjan)
- Basic Greetings (Namaste)`,

        'korean': `### Korean Roadmap
Phase 1: Hangul
- Master the Korean Alphabet (Hangul)
- Vowels and Consonants
- Basic Greetings (Annyeonghaseyo)`,

        'arabic': `### Arabic Roadmap
Phase 1: Alphabet
- Learn the Arabic Script
- Letter forms (Initial, Medial, Final)
- Basic greetings (Marhaba, As-salamu alaykum)`,

        'tamil': `### Tamil Roadmap
Phase 1: Foundations
- Learn Tamil Vowels (Uyir eluthu)
- Learn Consonants (Mei eluthu)
- Basic greetings (Vanakkam, Eppadi irukkeenga?)

Phase 2: Sentence Structure
- Basic nouns and pronouns
- Present tense markers
- Simple sentence construction (Subject-Object-Verb)`,

        'italian': `### Italian Roadmap
Phase 1: Basics
- Italian Pronunciation & Phonics
- Numbers 1-100
- Common Greetings (Ciao, Buongiorno)

Phase 2: Verbs & Grammar
- Regular -are, -ere, -ire verbs
- Essential irregulars (Essere, Avere)
- Articles and gender agreement`,

        'turkish': `### Turkish Roadmap
Phase 1: Basics
- Turkish Alphabet & Phonetic rules
- Vowel Harmony (Crucial!)
- Basic Greetings (Merhaba, Selam)

Phase 2: Agglutination
- Suffix system basics
- Present continuous tense
- Case markers`,

        'swahili': `### Swahili Roadmap
Phase 1: Basics
- Swahili Pronunciation
- Noun classes (M/Wa class)
- Greetings (Jambo, Habari)`,

        'pashto': `### Pashto Roadmap
Phase 1: Script
- Learn Pashto Alphabet
- Pronunciation of unique sounds
- Basic greetings (Salam, Senga ye?)`,

        'dutch': `### Dutch Roadmap
Phase 1: Basics
- Dutch Pronunciation & Digraphs
- Basic Vocabulary
- Greetings (Hoi, Goedendag)`,

        'russian': `### Russian Roadmap
Phase 1: Cyrillic
- Master the Cyrillic Alphabet
- Hard and Soft signs
- Basic greetings (Privet, Zdravstvuyte)`,

        'portuguese': `### Portuguese Roadmap
Phase 1: Basics
- Portuguese Pronunciation
- European vs Brazilian differences
- Basic Greetings (Olá, Tudo bem)`
    };

    const fetchLanguageRoadmap = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await api.post('/career/chat', {
                message: `Generate a detailed, step-by-step learning roadmap for ${languageName}. 
                Include: 
                1. Phase 1: Basics (Alphabet, Greetings)
                2. Phase 2: Beginner (Grammar, Common Verbs)
                3. Phase 3: Intermediate (Conversations, Tenses)
                4. Phase 4: Advanced (Business/Professional context)
                5. Resources (Books, Apps, Sites)
                Format it with clear headings.`,
                history: []
            });
            
            if (response.success) {
                setRoadmap(response.response);
            } else {
                throw new Error('Failed to generate roadmap');
            }
        } catch (err) {
            console.error(err);
            // Check for fallback
            if (fallbackRoadmaps[languageId]) {
                setRoadmap(fallbackRoadmaps[languageId]);
                setError(null); // Clear error if fallback is available
            } else if (err.response && err.response.status === 429) {
                setError('AI is currently busy (Quota Limit). Please wait 30 seconds and click Retry.');
            } else {
                setError('Could not load the roadmap. Please try again later.');
            }
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchLanguageRoadmap();
    }, [languageId, languageName]);

    if (isLoading) {
        return (
            <div className="roadmap-container loading" style={{ textAlign: 'center', padding: '100px' }}>
                <div className="loader"></div>
                <h2 style={{ color: '#00ff88' }}>AI is crafting your {languageName} roadmap...</h2>
                <p>This usually takes 5-10 seconds.</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="error-container" style={{ textAlign: 'center', padding: '100px', color: '#ff4444' }}>
                <h2>Oops! {error}</h2>
                <button 
                    onClick={fetchLanguageRoadmap}
                    style={{ 
                        marginTop: '20px', 
                        padding: '10px 30px', 
                        backgroundColor: '#00ff88', 
                        border: 'none', 
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontWeight: 'bold'
                    }}
                >
                    Retry
                </button>
            </div>
        );
    }

    return (
        <div className="roadmap-page" style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
            <div className="roadmap-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h1 style={{ fontSize: '3rem', color: '#00ff88' }}>{languageName} Mastery</h1>
                <p style={{ fontSize: '1.2rem', opacity: 0.8 }}>Your personalized AI-generated learning path.</p>
            </div>
            
            <div className="roadmap-content" style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '15px', lineHeight: '1.8' }}>
                <div className="roadmap-markdown" style={{ color: '#eee', whiteSpace: 'pre-wrap' }}>
                    {roadmap}
                </div>
            </div>
            
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                <button onClick={() => window.print()} className="print-btn" style={{ padding: '10px 20px', borderRadius: '20px', border: '1px solid #00ff88', background: 'transparent', color: '#00ff88', cursor: 'pointer' }}>
                    Download as PDF
                </button>
            </div>
        </div>
    );
};

export default LanguageRoadmap;
