import UsersYooking from "../models/users-yooking-model.js";
import {generateNumericId} from "../utils/generatorId.js";


class UserYookingService {
    async getAllUsersYooking() {
       return await UsersYooking.findAll();
    }
    async getUserYooking(userId) {
        return await UsersYooking.findOne({ where: { id: userId } });


    }
    async updateUserYooking(userId, dataUserYooking) {
        console.log("userId",userId);
        console.log("dataUserYooking",dataUserYooking);
        const result = await UsersYooking.update(dataUserYooking, { where: { id: userId } });
        return result

    }
    async generateCode(userId) {
        try {
            const result = await UsersYooking.findOne({where: {id: userId}});
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
    async deleteUserYooking(userId) {
        await UsersYooking.destroy( { where: { id: userId } });
    }
}
export default new UserYookingService();