import express from "express";
import { Signup,Signin } from "../controllers/user.controller";
import { authMiddleware } from "../middleware/auth";
const router = express.Router();
router.post("/signup", Signup);
router.post("/signin", authMiddleware, Signin);
export default router;
