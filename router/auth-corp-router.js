import RouterExp from "express"
import UserCorpController from "../controllers/user-corp-controller.js";
import {authCorpMiddleware} from "../middlewares/auth-corp-middleware.js";
const Router = RouterExp.Router
const routerCorp = new Router()

routerCorp.post('/api/registration/corp', UserCorpController.registration)
routerCorp.post('/api/login/corp', UserCorpController.login)
routerCorp.post('/api/logout/corp', UserCorpController.logout)
routerCorp.get('/api/active/:link',authCorpMiddleware, UserCorpController.activate)
routerCorp.get('/api/refresh/corp', authCorpMiddleware,UserCorpController.refresh)


export default routerCorp