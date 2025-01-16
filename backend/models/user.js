import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { 
        type: String, 
        required: true, 
        validate: {
            validator: (value) => /\d{10}/.test(value),
            message: "Phone number should be 10 digits."
        }
    },
    membershipType: { type: String, required: true }
});

const User = mongoose.model("User", userSchema);
export default User;
