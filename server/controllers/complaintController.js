const sampleComplaints = require('../../data/sample_complaints.json');
let store = [...sampleComplaints];
const getComplaints = (req, res) => res.json({ success: true, data: store });
const getComplaintById = (req, res) => { const c = store.find(x => x.complaintId === req.params.id); res.json({ success: true, data: c }); };
const createComplaint = (req, res) => { const id = `CMP-2026-${store.length+1}`; const c = { complaintId: id, ...req.body, status: 'New', createdAt: new Date() }; store.unshift(c); res.status(201).json({ success: true, data: c }); };
const updateStatus = (req, res) => { const c = store.find(x => x.complaintId === req.params.id); if(c) c.status = req.body.status; res.json({ success: true, data: c }); };
module.exports = { getComplaints, getComplaintById, createComplaint, updateStatus };
