import { Application } from 'express'
import { LoginLogoutController } from '../controllers/LoginLogout.controller'

export class LoginLogoutRoute {
  private app: Application
  private loginLogoutController: LoginLogoutController

  constructor(app: Application) {
    this.app = app

    this.loginLogoutController = new LoginLogoutController()
    this.initRoute()
  }

  public initRoute() {
    this.app.post('/v1/register', this.loginLogoutController.register)
    this.app.post('/v1/login', this.loginLogoutController.login)
  }
}
