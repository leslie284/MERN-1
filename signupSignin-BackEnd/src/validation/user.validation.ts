import joi from 'joi'
import { Request } from 'express'
import { UserModel } from '../model/user'

export const registerValidation = (user: UserModel) => {
  const userSchema = {
    name: joi.string().min(5).required(),
    email: joi.string().required(),
    password: joi.string().min(3).required(),
  }

  return joi.validate(user, userSchema)
}

export const loginValidation = (user: UserModel) => {
  const loginSchema = {
    email: joi.string().required(),
    password: joi.string().required(),
  }
  return joi.validate(user, loginSchema)
}
