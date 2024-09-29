import UserCorpService from "../service/user-corp-service.js";
import ApiError from "../exceptions/api-error.js";



class UserCorpController {
    async registration(req, res, next) {
        try {
            const { newUser } = req.body;
            console.log("newUser",newUser);
            const data = await UserCorpService.registration(newUser);

            res.cookie(`refreshToken`, data.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true
            });
            return res.json(data);
        } catch (error) {
            next(error);
        }
    }

    async login(req, res, next) {
        try {
            const { email, password } = req.body;
            console.log("email",email);
            console.log("password",password);
            const userData = await UserCorpService.login(email, password);
            console.log("userData",userData);
            res.cookie(`refreshToken`, userData.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true
            });
            return res.json(userData);
        } catch (error) {
            next(error);
        }
    }

    async logout(req, res, next) {
        try {
            const {refreshToken} = req.body;
            const token = await UserCorpService.logout(refreshToken);
            res.clearCookie("refreshToken")
            res.json(token)
        } catch (error) {
            next(error);
        }
    }

    async activate(req, res, next) {
        try {
            const activationLink = req.params.link;
            await UserCorpService.activate(activationLink);
            res.redirect(`${process.env.API_CLIENT}/api/login`)
        } catch (e) {
            console.log(e);
        }
    }

    async refresh(req, res, next) {
        try {
            const {refreshToken} = req.cookies;
            const userData = await UserCorpService.refresh(refreshToken);
            res.cookie(`refreshToken`, userData.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true
            });
            return res.json(userData)
        } catch (error) {
            next(error);
        }
    }

    async getUserCorp(req, res, next) {
        try {
            const userId = req.params.userId
            if (!userId) {
                return new ApiError.BadRequest("Некорректные данные")
            }
            const data = await UserCorpService.getUserCorp(userId)
            // Удаляем ненужные параметры из объекта data
            delete data.dataValues.password;
            delete data.dataValues.codeConfirmForPhone;
            res.json(data)
        } catch (error) {
            next(error);
        }
    }
    async updateUserCorp(req, res, next) {
        try {
            const userId = req.params.userId
            const {dataUser} = req.body
            console.log("dataUserCorp",dataUser);
            if (!userId && !dataUser) {
                return new ApiError.BadRequest("Некорректные данные")
            }
            const data = await UserCorpService.updateUserCorp(userId, dataUser)
            res.json(data)
        } catch (error) {
            next(error);
        }
    }
}

 export default new UserCorpController()