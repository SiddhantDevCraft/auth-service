import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

import authMiddleware from './middlewares/auth.middleware.js';
import { router as authRouter } from './routes/auth.route.js';

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use('/api/auth', authRouter);

app.get('/api/profile', authMiddleware, (req, res) => {
    res.json({ message: "Protected data", user: req.user });
});

try {
    await mongoose.connect(process.env.MONGO_URI);
} catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
}

app.listen(PORT, () => {
    console.log(`Auth service running on port ${PORT}`);
});