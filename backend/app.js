import { config } from "dotenv";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import User from "./models/user.js";

config(); 
const app = express();
const PORT = process.env.PORT || 5000;
const dbUrl = process.env.MONGO_URI || 'mongodb://localhost:27017/membershipDB';


mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch((error) => console.error("❌ MongoDB connection error:", error));

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
    res.send("Server is running.");
});


app.post("/submitMembership", async (req, res) => {
    const { name, email, phone, membershipType } = req.body;
    if (!name || !email || !phone || !membershipType) {
        return res.status(400).send({ message: "All fields are required." });
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send({ message: "User already registered" });
        }

        const newUser = new User({ name, email, phone, membershipType });
        await newUser.save();
        res.status(201).send({ message: "User Registered Successfully", user: newUser });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send({ message: "Error saving data" });
    }
});


app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});
