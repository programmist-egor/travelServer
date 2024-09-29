import ApiError from "../exceptions/api-error.js";
import MailService from "../service/mail-service.js";
import RestorePasswordService from "../service/restore-password-service.js";

class RestorePasswordController {
//Восстановление пароля и отправка сообщения на почту
    async sendRestorePassword(req, res, next) {
        try {
            const {email,password} = req.body
            if (!email && !password) {
                return new ApiError.BadRequest("Некорректные данные")
            }
            const data = await RestorePasswordService.sendRestorePassword(email, password)

            if(data.success === false) {
                return res.status(500).json({error: "Ошибка создания нового пароля"});
            }

            const resultMail = await MailService.sendRestorePasswordMail(email);

            // Проверка успешной отправки письма
            if (!resultMail) {
                return res.status(500).json({error: "Ошибка при отправке письма на почту"});
            }

            res.json(data)
        } catch (error) {
            next(error);
        }
    }
    async sendRestorePasswordCorp(req, res, next) {
        try {
            const {email,password} = req.body
            if (!email && !password) {
                return new ApiError.BadRequest("Некорректные данные")
            }
            const data = await RestorePasswordService.sendRestorePasswordCorp(email, password)

            if(data.success === false) {
                return res.status(500).json({error: "Ошибка создания нового пароля"});
            }

            const resultMail = await MailService.sendRestorePasswordMail(email);

            // Проверка успешной отправки письма
            if (!resultMail) {
                return res.status(500).json({error: "Ошибка при отправке письма на почту"});
            }

            res.json(data)
        } catch (error) {
            next(error);
        }
    }
}

export default new RestorePasswordController()