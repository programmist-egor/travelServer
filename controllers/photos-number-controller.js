import ApiError from "../exceptions/api-error.js";
import PhotosNumberService from "../service/photos-number-service.js"


class PhotosNumberController {
    async getAllPhotosCategoryNumber(req, res, next) {
        try {
            const categoryId = req.params.categoryId;
            if (!categoryId) {
                return new ApiError.BadRequest("Некорректные данные")
            }
            const data = await PhotosNumberService.getAllPhotosCategoryNumber(categoryId)
             res.json(data)
        } catch (error) {
            next(error);
        }
    }
    async getAllPhotosNumber(req, res, next) {
        try {
            const numberId = req.params.numberId;
            if (!numberId) {
                return new ApiError.BadRequest("Некорректные данные")
            }
            const data = await PhotosNumberService.getAllPhotosNumber(numberId)
            res.json(data)
        } catch (error) {
            next(error);
        }
    }
    async createNumberPhotos(req, res, next) {
        try {
            const {numberPhotos} = req.body;
            if (!numberPhotos) {
                return new ApiError.BadRequest("Некорректные данные")
            }
           const data = await PhotosNumberService.createNumberPhotos(numberPhotos)
             res.json(data)
        } catch (error) {
            next(error);
        }
    }
    async deleteNumberPhoto(req, res, next) {
        try {
            const idImg = req.params.idImg;
            if (!idImg) {
                return new ApiError.BadRequest("Некорректные данные")
            }
            const data = await PhotosNumberService.deleteNumberPhoto(idImg)
            res.json(data)
        } catch (error) {
            next(error);
        }
    }

    async deleteAllNumberPhotos(req, res, next) {
        try {
            const numberId = req.params.numberId;
            if (!numberId) {
                return new ApiError.BadRequest("Некорректные данные")
            }
            const data = await PhotosNumberService.deleteAllNumberPhotos(numberId)
            res.json(data)
        } catch (error) {
            next(error);
        }
    }

    async deleteAllCategoryNumberPhotos(req, res, next) {
        try {
            const categoryId = req.params.categoryId;
            if (!categoryId) {
                return new ApiError.BadRequest("Некорректные данные")
            }
            const data = await PhotosNumberService.deleteAllCategoryNumberPhotos(categoryId)
            res.json(data)
        } catch (error) {
            next(error);
        }
    }
    async deleteAllObjectNumberPhotos(req, res, next) {
        try {
            const hotelId = req.params.hotelId;
            if (!hotelId) {
                return new ApiError.BadRequest("Некорректные данные")
            }
            const data = await PhotosNumberService.deleteAllObjectNumberPhotos(hotelId)
            res.json(data)
        } catch (error) {
            next(error);
        }
    }

}

export default new PhotosNumberController()