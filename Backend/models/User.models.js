import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Admin Name
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'teacher', 'student'], required: true },
  contactNumber: { type: String, required: true },
  schoolName: { type: String },
  firstLogin: { type: Boolean, default: true }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
export default User;
