"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const auth_1 = require("../middleware/auth");
const router = express_1.default.Router();
router.post("/signup", user_controller_1.Signup);
router.post("/signin", user_controller_1.Signin);
router.get("/get-users", auth_1.authMiddleware, user_controller_1.getAllUsers);
router.put("/update-user/:id", auth_1.authMiddleware, user_controller_1.updateUser);
router.delete("/delete-user/:id", auth_1.authMiddleware, user_controller_1.deleteUser);
exports.default = router;
