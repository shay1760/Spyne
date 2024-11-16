import express from 'express';
import 'dotenv/config';
import userRouter from './routes/userRouter.js';
import productRouter from './routes/productRouter.js';
import connectDB from './config/mongoDb.js';


// Initialize Express app
const app = express();
const port = process.env.PORT || 4000;

// Connect to MongoDB and Cloudinary
connectDB();
// Middleware setup
app.use(express.json());
/*
app.use(cookieParser());  // For handling cookies
app.use(cors({
    origin: process.env.CLIENT_URL,  // Set allowed origin from .env
    credentials: true,  // Allow cookies in cross-origin requests
}));
*/
// Routes

app.use('/api/v1/user', userRouter);
app.use('/api/v1/product', productRouter);

// Root route
app.get('/', (req, res) => {
    res.send("API is working");
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ message: 'Something went wrong!' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
