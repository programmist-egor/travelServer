import UserYookingService from "../service/user-yooking-service.js";
import ApiError from "../exceptions/api-error.js";
import UsersYooking from "../models/users-yooking-model.js";
import MailService from "../service/mail-service.js";

class UserYookingController {
    async getAllUsersYooking(req, res, next) {
        try {
            const data = await UserYookingService.getAllUsersYooking()
            res.json(data)
        } catch (error) {
            next(error);
        }
    }
    async getUserYooking(req, res, next) {
        try {
            const userId = req.params.userId
            if (!userId) {
                return new ApiError.BadRequest("Некорректные данные")
            }
            const data = await UserYookingService.getUserYooking(userId)
            // Удаляем ненужные параметры из объекта data
            delete data.dataValues.password;
            delete data.dataValues.codeConfirmForPhone;
            res.json(data)
        } catch (error) {
            next(error);
        }
    }
    async updateUserYooking(req, res, next) {
        try {
            const userId = req.params.userId
            const {dataUserYooking} = req.body
            console.log("dataUserYooking",dataUserYooking + " " + userId);
            if (!userId && !dataUserYooking) {
                return new ApiError.BadRequest("Некорректные данные")
            }
            const data = await UserYookingService.updateUserYooking(userId, dataUserYooking)
            res.json(data)
        } catch (error) {
            next(error);
        }
    }
    async generateCode(req, res, next) {
        try {
            const userId = req.params.userId
            if (!userId) {
                return new ApiError.BadRequest("Некорректные данные")
            }
            const result = await UsersYooking.findOne({ where: { id: userId } });
            const data = await UserYookingService.generateCode(userId)
            await MailService.sendConfirmPhoneCodeMail(result.email, data.dataValues.codeConfirmForPhone)
            res.json(data)
        } catch (error) {
            next(error);
        }
    }
    async deleteUserYooking(req, res, next) {
        try {
            const userId = req.params.userId
            if (!userId) {
                return new ApiError.BadRequest("Некорректные данные")
            }
            await UserYookingService.deleteUserYooking(userId)

        } catch (error) {
            next(error);
        }
    }
}

export default new UserYookingController()