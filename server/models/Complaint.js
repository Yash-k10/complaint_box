const mongoose = require('mongoose');
const s = new mongoose.Schema({ complaintId: { type: String, required: true, unique: true }, title: { type: String, required: true }, description: String, category: { type: String, default: 'Road Damage' }, urgency: { type: String, enum: ['Low','Medium','High','Critical'], default: 'Medium' }, status: { type: String, enum: ['New','Assigned','In Progress','Resolved','Escalated'], default: 'New' }, department: String, wardId: Number, location: { address: String, lat: Number, lng: Number }, language: { type: String, default: 'en' }, confidenceScore: Number, slaHoursTotal: Number, slaHoursRemaining: Number, impactScore: Number, isDuplicate: Boolean, xaiExplanation: Object, blockchainHash: String, createdAt: { type: Date, default: Date.now } });
module.exports = mongoose.model('Complaint', s);



