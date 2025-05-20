const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();
dotenv.config({path: __dirname + '/.env'});

// Connect Database
connectDB();  // 🔥🔥🔥

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes

// Routes for authentication
app.use('/api/auth',authRoutes);
// Routes for user profile
app.use('/api/user',userRoutes);
// Routes for products
app.use('/api/products',productRoutes);


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT} ✅😁`);
});
