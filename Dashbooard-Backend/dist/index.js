"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const user_route_1 = __importDefault(require("./routes/user.route"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
dotenv_1.default.config();
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
    res.send("API is running");
});
app.use("/users", user_route_1.default);
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
exports.default = app;
