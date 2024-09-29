import jwt from 'jsonwebtoken'
import TokenModel from "../models/token-model.js";
import secret from "../config/auth-config.js";

class TokenService {
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, secret.ACCESS_SECRET, {expiresIn: '1d'});
        const refreshToken = jwt.sign(payload, secret.REFRESH_SECRET, {expiresIn: '30d'});
        const refreshTokenExpiration = Date.now() + 30 * 24 * 60 * 60 * 1000; // Время истечения refreshToken в миллисекундах
        return {
            accessToken,
            refreshToken,
            refreshTokenExpiration
        }
    }

    validateAccessToken(token) {
        try {
            const userData = jwt.verify(token, secret.ACCESS_SECRET);
            return userData
        } catch (error) {
            return null
        }
    }

    validateRefreshToken(token) {
        try {
            const userData = jwt.verify(token, secret.REFRESH_SECRET);
            return userData
        } catch (error) {
            return null
        }
    }

    async saveToken(userId, refreshToken) {
        try {
            let tokenData = await TokenModel.findOne({ where: { userId: userId } });

            if (tokenData) {
                tokenData.refreshToken = refreshToken;
                await tokenData.save();
                console.log("TokenData updated:", tokenData.toJSON());
                return tokenData;
            } else {
                const newToken = await TokenModel.create({ userId: userId, refreshToken: refreshToken });
                console.log("New token created:", newToken.toJSON());
                return newToken;
            }
        } catch (error) {
            console.error("Error saving token:", error);
            throw new Error("Failed to save token");
        }
    }

    async removeToken(refreshToken) {
        return await TokenModel.destroy({where: {refreshToken: refreshToken}})
    }
    async findToken(refreshToken) {
        return await TokenModel.findOne({where: {refreshToken: refreshToken}})
    }
}

export default new TokenService()