import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const userSchema = mongoose.Schema(
    {
       /*  firstname: { type: String, required: true }, */
       
        picture: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true }
    },
    { timestamps: { createdAt: true } }
);

userSchema.plugin(uniqueValidator);

export default mongoose.model('User', userSchema);
