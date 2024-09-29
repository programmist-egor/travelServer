import ApiError from "../exceptions/api-error.js";
import Favorites from "../models/favorites-model.js";



class FavoriteService {
    async getAllFavorites(userId) {
        const data = await Favorites.findAll({where: {userId: userId}})
        if (!data) {
            throw new ApiError.BadRequest("Нет такого номера в избранном")
        }
        return data
    }
    async createFavorite(dataFavorite) {
        try {
            await Favorites.create(dataFavorite);
              console.log("Номер добавлен в избранное");
            return true
        } catch (error) {
            return console.error("Ошибка при создании бронирования:", error);
            // Дополнительные действия при возникновении ошибки, например, логирование или уведомление пользователя
        }
    }

    async deleteFavorite(hotelId) {
        try {
            console.log("Номер удален из избранного");
            return await Favorites.destroy( { where: { hotelId: hotelId } });
        } catch (error) {
            return console.error("Ошибка при создании бронирования:", error);
            // Дополнительные действия при возникновении ошибки, например, логирование или уведомление пользователя
        }
    }
}

export default new FavoriteService()