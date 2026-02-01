import { Request, Response } from "express";
import UserModel from "../models/user.model";
import bcrypt from 'bcryptjs';
export const Signup = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await UserModel.findByEmail(email);
       if(existingUser){
        res.status(400).json({
            message:"Email already exist"
        })
       }
       const hashedPassword = await bcrypt.hash(req.body.password,8);
       const newUser = await UserModel.createUser(
        name , email , hashedPassword
       )
       res.status(201).json({
        user:newUser
       })
    }catch(error){
        res.status(500).json({error})
    }
}


export const Signin = async (req: Request, res: Response) => {
    try {
          const { email, password } = req.body;
          const user = await UserModel.findByEmail(email);
          if (!user) {
            return res.status(404).json({ message: 'User not found' });
          }
          const isPasswordMatch = await bcrypt.compare(password, user.password);
          if (!isPasswordMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
          }
          res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        
    }
}
