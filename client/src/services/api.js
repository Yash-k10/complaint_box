import axios from 'axios';
export const fetchComplaints = () => axios.get('/api/complaints').then(r=>r.data);
export const submitComplaint = (data) => axios.post('/api/complaints', data).then(r=>r.data);
