const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

// Routes
const gameRoutes = require('./routes/gameRoutes');
const userRoutes = require('./routes/userRoutes');

// Initialize express app
const app = express();

// Middleware
const corsOptions = {
    origin: 'http://your-frontend-origin.com', // Replace with your frontend's URL
  };
app.use(cors());
app.use(bodyParser.json());

// Database connection
// const db = require('./config/db');
// db.connect();

// Use routes
app.use('/api/game', gameRoutes);
app.use('/api/user', userRoutes);

// Health check endpoint for load balancer
app.get('/health', (req, res) => {
    res.send('Server is running away from you! hehe');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke! Fix it please!');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
