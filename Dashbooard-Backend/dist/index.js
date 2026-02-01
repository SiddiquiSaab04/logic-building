import express from "express";
import "dotenv/config";
const app = express();
const PORT = process.env.PORT;
app.use((express.json()));
app.get("/", (req, res) => {
    res.send("API is running on port 3000");
});
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
