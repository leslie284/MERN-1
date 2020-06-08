import mongoose from 'mongoose'
import { UserModel } from '../model/user'

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: 'name required' },
    email: {
      type: String,
      required: 'Email is required',
      unique: true,
    },
    password: { type: String, required: 'Password is required' },
  },
  {
    timestamps: {
      createdAt: 'created_at',
    },
  }
)
//Creating our model
export const UserSchema = mongoose.model<UserModel>('User', userSchema)
