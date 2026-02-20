import { model, models, Schema } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { 
        type: String, 
        required: true, 
        unique: true, 
        lowercase: true, 
        trim: true 
    },
    phone: { type: String },
    password: { type: String },
    image: { type: String },
    favorites: [{ type: Schema.Types.ObjectId, ref: 'Video' }],
    role: { type: String, enum: ['admin', 'user'], default: 'user' },
}, { timestamps: true });

userSchema.pre('save', async function () {
    if (this.password && this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
});

const User = models.User || model('User', userSchema);

export default User;
