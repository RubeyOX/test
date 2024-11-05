import express from "express";
import mongoose from "mongoose";
import RootRouter from "./router.js";
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;
const users=express()

users.use(express.send())

// Kết nối tới MongoDB sử dụng biến môi trường
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Đã kết nối đến MongoDB'))
.catch((error) => console.error('Lỗi kết nối MongoDB:', error));


users.use('/api',RootRouter)

//listen
users.listen(PORT, () => {
    console.log(`Server run`);
});

