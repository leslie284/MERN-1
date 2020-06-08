import express, { Application } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { LoginLogoutController } from './controllers/LoginLogout.controller'
import mongoose from 'mongoose'
import { MONGO_URL } from './config/config'
class App {
  public app: Application

  constructor() {
    this.app = express()
    this.setMongoConfig()
    this.setConfig()

    //Creating and assigning a new instance of our controller
  }

  private setConfig() {
    //Allows us to receive requests with data in json format
    this.app.use(bodyParser.json({ limit: '50mb' }))

    //Allows us to receive requests with data in x-www-form-urlencoded format
    this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))

    //Enables cors
    this.app.use(cors())
  }

  //Connecting to our MongoDB database
  private setMongoConfig() {
    mongoose.Promise = global.Promise
    mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
    })
  }
}

export default App
