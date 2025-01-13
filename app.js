const express = require('express');
const bookingRoutes = require('./routes/bookingRoutes');

const app = express();
app.use(express.json());
app.use('/api', bookingRoutes);

// Global error-handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
  });
  

const PORT = 3000;

const server = app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

module.exports = { app, server };
