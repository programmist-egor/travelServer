import TokenCorpService from "./token-corp-service.js";
import ApiError from "../exceptions/api-error.js";
import UserDtos from "../dtos/user-dtos.js";
import dotenv from "dotenv";
import UsersCorp from "../models/users-corp-model.js";
import bcrypt from "bcrypt";

dotenv.config()

class UserCorpService {
    async registration(newUser) {
        try {
            const { email, phone, password } = newUser;
            const candidate = await UsersCorp.findOne({ where: { email } });

            if (candidate) {
                return {success: false, message: `Пользователь с почтовым адресом ${email} уже существует`};
            }

            const phoneUser = await UsersCorp.findOne({ where: { phone } });

            if (phoneUser) {
                return {success: false, message: `Пользователь с таким номером ${phone} уже существует`};
            }

            const hashPassword = await bcrypt.hash(password, 10);

            const dataUser = {
                ...newUser,
                email,
                password: hashPassword,
                phone,
            };

            const user = await UsersCorp.create(dataUser);
            const userSaveToDtos = {
                id: user.id,
                email: user.email,
                phone: user.phone,
                isActivated: user.isActivated,
            };

            // Отправка письма активации
            const userDto = new UserDtos(userSaveToDtos);
            const tokens = TokenCorpService.generateTokens({ ...userDto });

            try {
                await TokenCorpService.saveToken(userDto.id, tokens.refreshToken);
            } catch (tokenError) {
                throw new Error(`Ошибка сохранения токена: ${tokenError.message}`);
            }

            return {success: true, message: "Регистрация пройдена", data: {...tokens, user: userDto}}
        } catch (error) {
            console.error("Ошибка регистрации пользователя:", error);
            throw new Error("Ошибка регистрации пользователя");
        }
    }

    async login(email, password) {
        const user = await UsersCorp.findOne({ where: { email } });

        if (!user) {
            return {success: false, message: "Пользователь с таким email не найден"};
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return {success: false, message: "Неверный пароль"};
        }

        const userSaveToDtos = {
            id: user.id,
            email: user.email,
            phone: user.phone,
            isActivated: user.isActivated,
        };

        const userDto = new UserDtos(userSaveToDtos);
        const tokens = TokenCorpService.generateTokens({ ...userDto });

        await TokenCorpService.saveToken(userDto.id, tokens.refreshToken);

        return {success: true, message: "Авторизация пройдена", data: {...tokens, user: userDto} };
    }

    async activate(activationLink) {
        const user = await UsersCorp.findOne({where: {activationLink}});
        if (!user) {
            throw new ApiError.BadRequest("Некорректная ссылка активации")
        }
        user.isActivated = true
        await user.save()
    }

    async logout(refreshToken) {
        return await TokenCorpService.removeToken(refreshToken)
    }

    async refresh(refreshToken) {
        if (!refreshToken) {
            throw new ApiError.UnauthorizedError()
        }
        const userData = TokenCorpService.validateRefreshToken(refreshToken)
        const tokenFromDB = await TokenCorpService.findToken(refreshToken)
        if (!userData || !tokenFromDB) {
            throw new ApiError.UnauthorizedError()
        }
        const user = await UsersCorp.findOne({where: {id: userData.id}});
        const userSaveToDtos = {
            id: user.id,
            email: user.email,
            phone: user.phone,
            isActivated: user.isActivated,
        }
        const userDto = new UserDtos(userSaveToDtos)
        const tokens = TokenCorpService.generateTokens({...userDto})
        await TokenCorpService.saveToken(userDto.id, tokens.refreshToken)
        return {success: true, message: "Перезапись токена успешна", data: {...tokens, user: userDto}};

    }
    async getUserCorp (userId) {
        return await UsersCorp.findOne({ where: { id: userId } });
    }
    async updateUserCorp(userId, dataUser) {
        console.log("userId",userId);
        console.log("dataUserCorp",dataUser);
        return await UsersCorp.update(dataUser, { where: { id: userId } });

    }
}

export default new UserCorpService()