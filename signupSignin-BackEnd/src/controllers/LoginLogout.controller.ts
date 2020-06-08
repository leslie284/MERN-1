import { IModel } from '../model/model'
import { LoginLogoutService } from '../services/loginlogout.service'
import { Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import {
  loginValidation,
  registerValidation,
} from '../validation/user.validation'
import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from '../statuscode/statuscode'
import { UserModel } from '../model/user'

export class LoginLogoutController {
  private loginlogoutService: LoginLogoutService

  constructor() {
    this.loginlogoutService = new LoginLogoutService()
  }

  register = async (req: Request, res: Response) => {
    const { error } = registerValidation(req.body)
    if (error) {
      return res
        .status(200)
        .json({ message: error.details[0].message, isSuccess: false })
    }
    let emailExist = await this.loginlogoutService.findByEmail(req.body.email)
    if (emailExist) {
      return res.status(200).json({
        message: 'Email Already exists',
        isSuccess: false,
      })
    }
    //hash password
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(req.body.password, salt)

    const userModel: UserModel = req.body
    userModel.password = hashPassword
    const user = await this.loginlogoutService.registerUser(userModel)
    if (user) {
      return res.status(201).json({
        user: user,
        isSuccess: true,
        message: 'Successfully registered',
      })
    }
  }

  login = async (req: Request, res: Response) => {
    const { error } = loginValidation(req.body)
    if (error) {
      res.status(200).json({
        error: error.details[0].message,
      })
    }

    let user = await this.loginlogoutService.findByEmail(req.body.email)
    if (!user)
      res.status(200).json({
        message: "Email or password doesn't exits",
        isSuccess: false,
      })

    // password check

    const validPassword = await bcrypt.compare(
      req.body.password,
      user?.password as string
    )
    if (!validPassword)
      return res.status(200).json({
        message: 'Invalid password',
        isSuccess: false,
      })

    const token = jwt.sign(
      { _id: user?._id, exp: Math.floor(Date.now() / 1000) + 60 * 60 },
      TOKEN_SECRET
    )
    res.header('x-header-token', token).status(200).json({
      message: 'Successfully loggedin',
      token: token,
      isSuccess: true,
    })
  }
}
