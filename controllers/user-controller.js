import UserService from "../service/user-service.js";

class UserController {
    async registration(req, res, next) {
        try {
            const { newUser } = req.body;
            console.log("newUser",newUser);
            const data = await UserService.registration(newUser);

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
            const userData = await UserService.login(email, password);
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
            console.log("refreshToken",refreshToken);
            const token = await UserService.logout(refreshToken);
            res.clearCookie("refreshToken")
            res.json(token)
        } catch (error) {
            next(error);
        }
    }

    async activate(req, res, next) {
        try {
            const activationLink = req.params.link;
            await UserService.activate(activationLink);
            res.redirect(`${process.env.API_CLIENT}/api/login`)
        } catch (e) {
            console.log(e);
        }
    }

    async refresh(req, res, next) {
        try {
            const {refreshToken} = req.cookies;
            const userData = await UserService.refresh(refreshToken);
            res.cookie(`refreshToken`, userData.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true
            });
            return res.json(userData)
        } catch (error) {
            next(error);
        }
    }

    async getUsers(req, res, next) {
        try {
            res.json(["123", "ert"])
        } catch (e) {

        }
    }
}

 export default new UserController()