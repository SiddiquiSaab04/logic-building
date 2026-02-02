import express from "express";
import { Signup,Signin,getAllUsers, updateUser } from "../controllers/user.controller";
import { authMiddleware } from "../middleware/auth";
const router = express.Router();
router.post("/signup", Signup);
router.post("/signin", authMiddleware, Signin);
router.get("/get-users",authMiddleware,getAllUsers)
router.put("/update-user/:id",authMiddleware,updateUser)
export default router;
