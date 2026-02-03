import express from "express";
import { Signup,Signin,getAllUsers, updateUser, deleteUser } from "../controllers/user.controller";
import { authMiddleware } from "../middleware/auth";
const router = express.Router();
router.post("/signup", Signup);
router.post("/signin", Signin);
router.get("/get-users",authMiddleware,getAllUsers)
router.put("/update-user/:id",authMiddleware,updateUser)
router.delete("/delete-user/:id",authMiddleware,deleteUser);
export default router;
