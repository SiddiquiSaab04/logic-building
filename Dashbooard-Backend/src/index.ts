import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route";

const app = express();

app.use(express.json());
dotenv.config();

const port = process.env.PORT || 3000;


app.get("/", (req, res) => {
  res.send("API is running on port 3000");
});
app.use("/users", userRoutes);
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;

