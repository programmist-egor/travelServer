import ApiError from "../exceptions/api-error.js";
import UsersExtranet from "../models/users-extranet-model.js";
import {generateNumericId} from "../utils/generatorId.js";


class UserExtranetService {
    async getAllUsersExtranet() {
        return await UsersExtranet.findAll();

    }

    async getUserExtranet(userId) {
        const result = await UsersExtranet.findOne({where: {id: userId}});
        if (!result) {
            throw ApiError.BadRequest("Нет такого пользователя!");
        }
        return result
    }

    async updateUserExtranet(userId, dataUserExtranet) {
        return await UsersExtranet.update(dataUserExtranet, {where: {id: userId}});
    }

    async generateCode(userId) {
        try {
            const result = await UsersExtranet.findOne({where: {id: userId}});
            if (result) {
                result.codeConfirmForPhone = generateNumericId();
                await result.save();
                return result;
            } else {
                throw new Error('Пользователь не найден');
            }
        } catch (error) {
            console.error('Ошибка при генерации кода:', error);
            return null;
        }
    }

    async deleteUserExtranet(userId) {
        await UsersExtranet.destroy({where: {id: userId}});
    }
}

export default new UserExtranetService();