import { LoginLogoutInterface } from './base/loginlogout.repository'
import { UserModel } from '../model/user'
import { Model } from 'mongoose'
import { UserSchema } from '../schema/user.model'

export class LoginLogoutService implements LoginLogoutInterface<UserModel> {
  private user: Model<UserModel>

  constructor() {
    this.user = UserSchema
  }
  async findByEmail(email: string): Promise<UserModel | null> {
    return await this.user.findOne({ email: email })
  }
  async registerUser(model: UserModel): Promise<UserModel | null> {
    return await new this.user(model).save()
  }
}
