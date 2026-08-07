const mongoose = require('mongoose');
const s = new mongoose.Schema({ name: String, email: { type: String, unique: true }, password: String, role: { type: String, enum: ['citizen','officer','admin'], default: 'citizen' }, department: String, wardId: Number, createdAt: { type: Date, default: Date.now } });
module.exports = mongoose.model('User', s);
