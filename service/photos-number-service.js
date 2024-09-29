import PhotoNumberObjectExtranet from "../models/photo-number-object-model.js";

class PhotosNumberService {
    async getAllPhotosCategoryNumber(categoryId) {
        const result = await PhotoNumberObjectExtranet.findAll({where: {categoryId: categoryId}});
        return result
    }
    async getAllPhotosNumber(numberId) {
        const result = await PhotoNumberObjectExtranet.findAll({where: {numberId: numberId}});
        return result
    }
    async createNumberPhotos(numberPhotos) {
        const result = await PhotoNumberObjectExtranet.create(numberPhotos)
        return result
    }

    async deleteNumberPhoto(idImg) {
        const result = await PhotoNumberObjectExtranet.destroy({where: {idImg: idImg}});
        if (result === 1) {
            return true
        }
    }
    async deleteAllNumberPhotos(numberId) {
        const result = await PhotoNumberObjectExtranet.destroy({where: {numberId: numberId}});
        if (result === 1) {
            return true
        }
    }
    async deleteAllCategoryNumberPhotos(categoryId) {
        const result = await PhotoNumberObjectExtranet.destroy({where: {categoryId: categoryId}});
        if (result === 1) {
            return true
        }
    }
    async deleteAllObjectNumberPhotos(hotelId) {
        const result = await PhotoNumberObjectExtranet.destroy({where: {hotelId: hotelId}});
        if (result === 1) {
            return true
        }
    }

}

export default new PhotosNumberService()


