import { Request, Response } from "express";
import UserModel from "../models/user.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const secretKey = process.env.JWT_SECRET as string;

export const Signup = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await UserModel.findByEmail(email);
        if (existingUser) {
            res.status(400).json({
                message: "Email already exist",
            });
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 8);
        const newUser = await UserModel.createUser(name, email, hashedPassword);
        const token = await jwt.sign(
            { id: newUser.id, email: newUser.email, password: newUser.password },
            secretKey,
            {
                expiresIn: "1h",
            },
        );

        res.status(201).json({
            user: {
                id: newUser.id,
                name: newUser.name,
                email: newUser.email,
                created_at: newUser.created_at,
            },
            token: token,
        });
    } catch (error) {
        res.status(500).json({ error });
        console.log(error);
    }
};

export const Signin = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findByEmail(email);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        const token = await jwt.sign(
            { id: user.id, email: user.email, password: user.password },
            secretKey,
        );
        res.status(200).json({
            message: "Login successful",
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                created_at: user.created_at,
            },
            token,
        });
    } catch (error) {
        console.log(error);
    }
};

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await UserModel.getAllUsers();
        const totalUsers = users.length;
        res.status(200).json({ users, totalUsers });
    } catch (error) {
        res.status(500).json({ error });
        console.log(error);
    }
};

export const updateUser = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const { name, email, password } = req.body;
        if (!id) {
            return res.status(400).json({ message: "Invalid user id" });
        }

        let hashedPassword: string | undefined;
        if (password) {
            hashedPassword = await bcrypt.hash(password, 8);
        }
        const updatedUser = await UserModel.updateUser(
            id,
            name,
            email,
            hashedPassword,
        );

        res
            .status(200)
            .json({ message: "User updated successfully", user: updatedUser });
    } catch (error) {
        res.status(500).json({ error });
        console.log(error);
    }
};

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const userId = Number(req.params.id);
        if (!userId) {
            return res.status(400).json({ message: "Invalid user id" });
        }
        const result = await UserModel.deleteUser(userId);
        if (result.affectedRows > 0) {
            return res.status(200).json({ message: "User deleted successfully" });
        } else {
            return res.status(400).json({ message: "User does not exist" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error });
    }
};
