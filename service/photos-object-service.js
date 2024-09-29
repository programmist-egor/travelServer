import PhotoObjectExtranet from "../models/photo-object-extranet-model.js";

class PhotosObjectService {
    async getAllPhotosObject(hotelId) {
        return await PhotoObjectExtranet.findAll({where: {hotelId: hotelId}});
    }

    async createPhotoObject(objectPhotos) {
        return await PhotoObjectExtranet.create(objectPhotos)
    }

    async deletePhotoObject(idImg) {
        const result = await PhotoObjectExtranet.destroy({where: {idImg: idImg}});
        if (result === 1) {
            return true
        }
    }

    async deleteAllPhotosObject(hotelId) {
        const result = await PhotoObjectExtranet.destroy({where: {hotelId: hotelId}});
        if (result === 1) {
            return true
        }
    }
}

export default new PhotosObjectService()


