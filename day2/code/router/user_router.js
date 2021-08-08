import express from 'express'
import { getAllUser } from '../controller/user_ctrl.js'

//创建路由
const router = new express.Router();
//当用户以get请求访问/user路径的时候,就会调用getAllUser方法处理此次请求
router.get('/user', getAllUser)

//导出路由
export default router