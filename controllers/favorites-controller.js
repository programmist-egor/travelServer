import ApiError from "../exceptions/api-error.js";
import FavoritesService from "../service/favorites-service.js";


class FavoriteController {
    async getAllFavorites(req, res, next) {
        try {
            const userId = req.params.userId
            if (!userId) {
                return new ApiError.BadRequest("Некорректные данные")
            }
            const data = await FavoritesService.getAllFavorites(userId)
            res.json(data)
        } catch (error) {
            next(error);
        }
    }
    async createFavorite(req, res, next) {
        try {
            const {dataFavorite} = req.body;
            if (!dataFavorite) {
                return new ApiError.BadRequest("Некорректные данные")
            }
          const result =  await FavoritesService.createFavorite(dataFavorite)
            res.json(result)
        } catch (error) {
            next(error);
        }
    }


    async deleteFavorite(req, res, next) {
        try {
            const hotelId = req.params.hotelId
            if (!hotelId ) {
                return new ApiError.BadRequest("Некорректные данные")
            }
            const res =  await FavoritesService.deleteFavorite(hotelId)
            res.json(res)
        } catch (error) {
            next(error);
        }
    }

}

export default new FavoriteController()