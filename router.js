import express from 'express'
import Controller from './Controller/userController.js'
import Middleware from './middleware.js'

const RootRouter=express.Router()

RootRouter.post('/users/register',Middleware.checkPost,Controller.registerUser)
RootRouter.post('users/login',Controller.loginUser)
RootRouter.post('/posts',Middleware.checkId,Controller.postContent)
export default RootRouter