import { Document } from 'mongoose'

export interface UserModel extends Document {
  _id: string
  name: string
  email: string
  password: string
}
