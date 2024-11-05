import bcrypt from 'bcrypt'
import crypto from 'crypto'

import UserModel from "../schema/user.js";

const Controller = {
    registerUser: async (req, res) => {
        const { username, password, email } = req.body;
        try {
            const existUser = await UserModel.findOne({ email });
            if (existUser) {
                return res.status(400).send({ message: 'Email is already registered' });
            }
            const numCrypt = 10;
            const hashPassword = await bcrypt.hash(password, numCrypt);

            const newUser = new UserModel({
                username,
                email,
                password: hashPassword
            })
            await newUser.save();
            res.status(201).send({ message: 'User registered successfully' });
        } catch (error) {
            res.status(500).send({ message: 'Server error' })

        }
    },loginUser:async (req, res) => {
        const user = req.user; 

        const randomString = crypto.randomBytes(16).toString("hex");
        const apiKey = `mern-$${user._id}$$${user.email}$$${randomString}`;

        res.status(200).send({ apiKey });
    },postContent: async (req, res) => {
        try {
            await req.newPost.save();
            res.status(201).send({ message: 'Post created successfully!' });
        } catch (error) {
            res.status(500).send({ message: 'Server error' });
        }
    }
}
export default Controller