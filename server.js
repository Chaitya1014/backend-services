const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});
require('dotenv').config();

const mongoose = require('mongoose');
const jwtSecret = process.env.JWT_SECRET;
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const dns = require('dns');

dns.resolveSrv('_mongodb._tcp.cluster0.mongodb.net', (err, addresses) => {
  if (err) {
    console.error('DNS resolution error:', err);
  } else {
    console.log('DNS resolved:', addresses);
  }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});
