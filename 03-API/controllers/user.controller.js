import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { env } from '../config.js';
import { User } from './user.model.js';

export const signup = async (req, res, next) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        await User.create({ 
            ...req.body,
            password: hashedPassword
        });

        res.status(201).json("L'utilisateur a été créé !");
    } catch (error) {
        
        console.log(error);
        next(error);
    }
};
