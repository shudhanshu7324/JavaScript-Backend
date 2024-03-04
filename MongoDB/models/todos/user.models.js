// step 1 (importing mongoose)
import mongoose from "mongoose"


// step 2 (creating schema)
const UserSchema = new mongoose.Schema(
    {
        // username: String,
        // email: String,
        // isActive: Boolean
        username: {
            type:String,
            required: true,
            unique: true,
            lowercase: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        password: {
            type: String,
            required: [true, "Password is required"],
        }
    }, {timestamps: true}
    );


// step 3 (exporting schema)
export const User = mongoose.model("User", UserSchema);
