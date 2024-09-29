import RouterExp from "express"
import {authMiddleware} from "../middlewares/auth-middleware.js";
import UserController from "../controllers/user-controller.js";
const Router = RouterExp.Router
const router = new Router()

router.post('/api/registration', UserController.registration)
router.post('/api/login', UserController.login)
router.post('/api/logout', UserController.logout)
router.get('/api/active/:link',authMiddleware, UserController.activate)
router.get('/api/refresh', authMiddleware,UserController.refresh)
router.get('/api/users', authMiddleware,UserController.getUsers)

export default router