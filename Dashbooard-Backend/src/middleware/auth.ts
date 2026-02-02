import jwt from 'jsonwebtoken';
import UserModel from "../models/user.model";
import dotenv from "dotenv";

dotenv.config();
const secretKey = process.env.JWT_SECRET as string;

export const authMiddleware = (req: any, res: any, next: any) => {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
        return res.status(401).json({ message: "No token provided" });
    }
    try {
        const decoded = jwt.verify(token  as string, secretKey);
        const user = UserModel.findById((decoded as any).id);
        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({ message: "Invalid token" });
    }
}