const jwt = require('jsonwebtoken');
const env = require('../config/env');
const login = (req, res) => { const { email, password } = req.body; const token = jwt.sign({ email, role: email.includes('officer') ? 'officer' : 'citizen' }, env.JWT_SECRET, { expiresIn: '24h' }); res.json({ success: true, token, user: { name: email.split('@')[0], email } }); };
module.exports = { login };
