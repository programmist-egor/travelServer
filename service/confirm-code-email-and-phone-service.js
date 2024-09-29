import UsersYooking from "../models/users-yooking-model.js";
import {generateNumericId} from "../utils/generatorId.js";
import UsersCorp from "../models/users-corp-model.js";


class ConfirmCodeEmailAndPhoneService {

    async sendCodeForEmail(userId) {
        try {
            const result = await UsersYooking.findOne({where: {id: userId}});
            if (result) {
                result.activationCodeEmail = generateNumericId();
                await result.save();

                // Проверка успешного сохранения кода в базе данных
                const updatedResult = await UsersYooking.findOne({
                    where: {
                        id: userId,
                        activationCodeEmail: result.activationCodeEmail
                    }
                });
                if (updatedResult) {
                    return result;
                } else {
                    throw new Error('Ошибка при сохранении активационного кода');
                }
            } else {
                throw new Error('Пользователь не найден');
            }
        } catch (error) {
            console.error('Ошибка при генерации кода:', error);
            return null;
        }
    }

    async sendCodeForEmailCorp(userId) {
        try {
            const result = await UsersCorp.findOne({where: {id: userId}});
            if (result) {
                result.activationCodeEmail = generateNumericId();
                await result.save();

                // Проверка успешного сохранения кода в базе данных
                const updatedResult = await UsersCorp.findOne({
                    where: {
                        id: userId,
                        activationCodeEmail: result.activationCodeEmail
                    }
                });
                if (updatedResult) {
                    return result;
                } else {
                    throw new Error('Ошибка при сохранении активационного кода');
                }
            } else {
                throw new Error('Пользователь не найден');
            }
        } catch (error) {
            console.error('Ошибка при генерации кода:', error);
            return null;
        }
    }
//Код при восстановлении пароля
    async sendCodeRestorePassword(email, code) {
        try {
            const result = await UsersYooking.findOne({where: {email}});
            if (result) {
                console.log("result service", result.dataValues.activationCodeEmail, code);
                if (+result.dataValues.activationCodeEmail === +code) {
                    return {success: true, message: "Email подтвержден"};
                } else {
                    return {success: false, message: "Код неверный"};
                }

            } else {
                throw new Error('Пользователь не найден');
            }
        } catch (error) {
            console.error('Ошибка при проверки кода:', error);
            return null;
        }
    }

    async sendCodeRestorePasswordCorp(email, code) {
        try {
            const result = await UsersCorp.findOne({where: {email}});
            if (result) {
                console.log("result service", result.dataValues.activationCodeEmail, code);
                if (+result.dataValues.activationCodeEmail === +code) {
                    return {success: true, message: "Email подтвержден"};
                } else {
                    return {success: false, message: "Код неверный"};
                }

            } else {
                throw new Error('Пользователь не найден');
            }
        } catch (error) {
            console.error('Ошибка при проверки кода:', error);
            return null;
        }
    }

    async confirmCodeForEmail(userId, code) {
        try {
            const result = await UsersYooking.findOne({where: {id: userId}});
            if (result) {
                console.log("result service", result.dataValues.activationCodeEmail, code);
                if (+result.dataValues.activationCodeEmail === +code) {
                    result.isActivated = true;
                    await result.save();
                    return {success: true, message: "Email подтвержден"};
                } else {
                    return {success: false, message: "Код неверный"};
                }

            } else {
                throw new Error('Пользователь не найден');
            }
        } catch (error) {
            console.error('Ошибка при проверки кода:', error);
            return null;
        }
    }

    async confirmCodeForEmailCorp(userId, code) {
        try {
            const result = await UsersCorp.findOne({where: {id: userId}});
            if (result) {
                console.log("result service", result.dataValues.activationCodeEmail, code);
                if (+result.dataValues.activationCodeEmail === +code) {
                    result.isActivated = true;
                    await result.save();
                    return {success: true, message: "Email подтвержден"};
                } else {
                    return {success: false, message: "Код неверный"};
                }

            } else {
                throw new Error('Пользователь не найден');
            }
        } catch (error) {
            console.error('Ошибка при проверки кода:', error);
            return null;
        }
    }

    async confirmRestorePasswordCodeForEmail(email) {
        console.log("email services: ",email);
        try {
            const result = await UsersYooking.findOne({where: {email}});
            if (result) {
                console.log("result email", result);
                result.activationCodeEmail = generateNumericId();
                await result.save();
                return {success: true, message: "Код отправлен Вам на почту", data: result};
            } else {
                return {success: false, message: "Неверный email"};
            }
        } catch (error) {
            console.error('Ошибка:', error);
            return null;
        }
    }

    async confirmRestorePasswordCodeForEmailCorp(email) {
        console.log("email services: ",email);
        try {
            const result = await UsersCorp.findOne({where: {email}});
            if (result) {
                console.log("result email", result);
                result.activationCodeEmail = generateNumericId();
                await result.save();
                return {success: true, message: "Код отправлен Вам на почту", data: result};
            } else {
                return {success: false, message: "Неверный email"};
            }
        } catch (error) {
            console.error('Ошибка:', error);
            return null;
        }
    }

    async sendCodeForPhone(userId) {
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
}

export default new ConfirmCodeEmailAndPhoneService();