import App from './app'
import { PORT } from '../src/config/config'
import { Request, Response } from 'express'
import { LoginLogoutRoute } from './routes/loginlogout.route'
import { JWTMiddleWare } from './middleware/jwt.middleware'
const app = new App().app

let initializeMiddleWare = (_: Request, __: Response, next: any) => {
  new LoginLogoutRoute(app)
  new JWTMiddleWare(app)
  next()
}
app.use(initializeMiddleWare)
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
