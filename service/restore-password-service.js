import UsersYooking from "../models/users-yooking-model.js";
import bcrypt from "bcrypt";
import UsersCorp from "../models/users-corp-model.js";



class RestorePasswordService {
//Код при восстановлении пароля
    async sendRestorePassword(email, password) {
        try {
            const candidate = await UsersYooking.findOne({where: {email}});

            if (candidate) {
                candidate.password = await bcrypt.hash(password, 10)
                await candidate.save()
                return {success: true, message: "Пароль создан"};
            } else {
                return {success: false, message: "Ошибка создания пароля"};
            }
        } catch (error) {
            console.error('Ошибка при создании пароля:', error);
            return null;
        }
    }

    async sendRestorePasswordCorp(email, password) {
        try {
            const candidate = await UsersCorp.findOne({where: {email}});

            if (candidate) {
                candidate.password = await bcrypt.hash(password, 10)
                await candidate.save()
                return {success: true, message: "Пароль создан"};
            } else {
                return {success: false, message: "Ошибка создания пароля"};
            }
        } catch (error) {
            console.error('Ошибка при создании пароля:', error);
            return null;
        }
    }
}

export default new RestorePasswordService();