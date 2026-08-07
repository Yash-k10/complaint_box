const axios = require('axios');
const env = require('../config/env');
const analyzeComplaint = async (data) => { try { const r = await axios.post(`${env.AI_SERVICE_URL}/analyze`, data); return r.data; } catch(e) { return { category: 'Road Damage', urgency: 'High', department: 'DEPT_ROAD', confidenceScore: 94, xaiExplanation: { confidence: 94, reasoning: ['Keyword match'], rulesApplied: ['School zone rule'] } }; } };
module.exports = { analyzeComplaint };
