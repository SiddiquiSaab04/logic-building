import express from "express";
import { Signup,Signin,getAllUsers } from "../controllers/user.controller";
import { authMiddleware } from "../middleware/auth";
const router = express.Router();
router.post("/signup", Signup);
router.post("/signin", authMiddleware, Signin);
router.get("/get-users",authMiddleware,getAllUsers)
export default router;
