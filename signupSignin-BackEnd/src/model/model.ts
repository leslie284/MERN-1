import { UserModel } from './user'
import { Model } from 'mongoose'

export interface IModel {
  user: Model<UserModel>
}
