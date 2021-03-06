import { Application, Request, Response } from 'express'
import { TOKEN_SECRET } from '../statuscode/statuscode'
import jwt, { verify } from 'jsonwebtoken'

export class JWTMiddleWare {
  private app: Application
  constructor(app: Application) {
    this.app = app
    this.app.use(this.verifyRoute)
  }

  verifyRoute = async (req: Request, res: Response, next: any) => {
    console.log(req.header)
    let token = req.header('authorization')

    if (!token)
      return res.status(401).json({
        message: 'Access Denied',
      })

    try {
      token = token.split(' ')[1]

      const verified: any = await jwt.verify(token, TOKEN_SECRET)
      req.body.userId = verified._id
    } catch (err) {
      res.status(401).json({
        message: 'Token Invalid',
      })
    }
    next()
  }
}
