require('dotenv').config();
module.exports = { PORT: process.env.PORT || 5000, MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/civicflow_db', JWT_SECRET: process.env.JWT_SECRET || 'secret', AI_SERVICE_URL: process.env.AI_SERVICE_URL || 'http://localhost:8000' };
