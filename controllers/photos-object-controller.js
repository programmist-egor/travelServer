import ApiError from "../exceptions/api-error.js";
import PhotosObjectService from "../service/photos-object-service.js";


class PhotosObjectController {
    async getAllPhotosObject(req, res, next) {
        const hotelId = req.params.hotelId;
        console.log("hotelId PHOTOS",hotelId);
        try {
            if (!hotelId) {
                return new ApiError.BadRequest("Некорректные данные")
            }
            const data = await PhotosObjectService.getAllPhotosObject(hotelId)
            return res.json(data)
        } catch (error) {
            next(error);
        }
    }

    async createPhotoObject(req, res, next) {
        try {
            const {objectPhotos} = req.body;
            if (!objectPhotos) {
                return new ApiError.BadRequest("Некорректные данные")
            }
            const data = await PhotosObjectService.createPhotoObject(objectPhotos)
            res.json(data)
        } catch (error) {
            next(error);
        }
    }

    async deletePhotoObject(req, res, next) {
        try {
            const idImg = req.params.idImg;

            if (!idImg) {
                return new ApiError.BadRequest("Некорректные данные")
            }
            const data = await PhotosObjectService.deletePhotoObject(idImg)
            res.json(data)
        } catch (error) {
            next(error);
        }
    }

    async deleteAllPhotosObject(req, res, next) {
        try {
            const hotelId = req.params.hotelId;
            if (!hotelId) {
                return new ApiError.BadRequest("Некорректные данные")
            }
            const data = await PhotosObjectService.deleteAllPhotosObject(hotelId)
            res.json(data)
        } catch (error) {
            next(error);
        }
    }

}

export default new PhotosObjectController()