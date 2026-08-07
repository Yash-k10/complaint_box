const express = require('express');
const cors = require('cors');
const env = require('./config/env');
const connectDB = require('./config/db');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/api/health', (req, res) => res.json({ status: 'ok', service: 'CivicFlow API' }));
app.use('/api/complaints', require('./routes/complaints'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/officers', require('./routes/officers'));
app.use('/api/analytics', require('./routes/analytics'));
app.use('/api/audit', require('./routes/audit'));
connectDB();
app.listen(env.PORT, () => console.log(`Server running on port ${env.PORT}`));




