"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getAllUsers = exports.Signin = exports.Signup = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const secretKey = process.env.JWT_SECRET;
const Signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await user_model_1.default.findByEmail(email);
        if (existingUser) {
            res.status(400).json({
                message: "Email already exist",
            });
        }
        const hashedPassword = await bcryptjs_1.default.hash(req.body.password, 8);
        const newUser = await user_model_1.default.createUser(name, email, hashedPassword);
        const token = await jsonwebtoken_1.default.sign({ id: newUser.id, email: newUser.email, password: newUser.password }, secretKey, {
            expiresIn: "1h",
        });
        res.status(201).json({
            user: {
                id: newUser.id,
                name: newUser.name,
                email: newUser.email,
                created_at: newUser.created_at,
            },
            token: token,
        });
    }
    catch (error) {
        res.status(500).json({ error });
        console.log(error);
    }
};
exports.Signup = Signup;
const Signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await user_model_1.default.findByEmail(email);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const isPasswordMatch = await bcryptjs_1.default.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        const token = await jsonwebtoken_1.default.sign({ id: user.id, email: user.email, password: user.password }, secretKey);
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
    }
    catch (error) {
        console.log(error);
    }
};
exports.Signin = Signin;
const getAllUsers = async (req, res) => {
    try {
        const users = await user_model_1.default.getAllUsers();
        const totalUsers = users.length;
        res.status(200).json({ users, totalUsers });
    }
    catch (error) {
        res.status(500).json({ error });
        console.log(error);
    }
};
exports.getAllUsers = getAllUsers;
const updateUser = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const { name, email, password } = req.body;
        if (!id) {
            return res.status(400).json({ message: "Invalid user id" });
        }
        let hashedPassword;
        if (password) {
            hashedPassword = await bcryptjs_1.default.hash(password, 8);
        }
        const updatedUser = await user_model_1.default.updateUser(id, name, email, hashedPassword);
        res
            .status(200)
            .json({ message: "User updated successfully", user: updatedUser });
    }
    catch (error) {
        res.status(500).json({ error });
        console.log(error);
    }
};
exports.updateUser = updateUser;
const deleteUser = async (req, res) => {
    try {
        const userId = Number(req.params.id);
        if (!userId) {
            return res.status(400).json({ message: "Invalid user id" });
        }
        const result = await user_model_1.default.deleteUser(userId);
        if (result.affectedRows > 0) {
            return res.status(200).json({ message: "User deleted successfully" });
        }
        else {
            return res.status(400).json({ message: "User does not exist" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error });
    }
};
exports.deleteUser = deleteUser;
