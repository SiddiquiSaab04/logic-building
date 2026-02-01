"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Signin = exports.Signup = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const Signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await user_model_1.default.findByEmail(email);
        if (existingUser) {
            res.status(400).json({
                message: "Email already exist"
            });
        }
        const hashedPassword = await bcryptjs_1.default.hash(req.body.password, 8);
        const newUser = await user_model_1.default.createUser(name, email, hashedPassword);
        res.status(201).json({
            user: newUser
        });
    }
    catch (error) {
        res.status(500).json({ error });
    }
};
exports.Signup = Signup;
const Signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await user_model_1.default.findByEmail(email);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const isPasswordMatch = await bcryptjs_1.default.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        res.status(200).json({ message: 'Login successful', user });
    }
    catch (error) {
    }
};
exports.Signin = Signin;
