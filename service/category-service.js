import ApiError from "../exceptions/api-error.js";
import CategoryNumbersExtranet from "../models/category-number-extranet-model.js";
import NumberExtranet from "../models/numbers-model.js";
import PhotoNumberObjectModel from "../models/photo-number-object-model.js";
import PhotoNumberObjectExtranet from "../models/photo-number-object-model.js";


class CategoryService {
    async getAllCategoryNumber(hotelId) {
        const result = await CategoryNumbersExtranet.findAll({where: {hotelId: hotelId}});
        return result

    }

    async getOneCategoryNumber(categoryId) {
        const result = await CategoryNumbersExtranet.findOne({where: {categoryId: categoryId}});
        return result

    }

    async createCategoryNumber(dataCategory) {
        try {
            return await CategoryNumbersExtranet.create(dataCategory)

        } catch (e) {
            throw new ApiError.BadRequest("Ошибка создании категории");
        }
    }

    async updateCategory(categoryId, categoryData) {
        return await CategoryNumbersExtranet.update(categoryData, {where: {categoryId: categoryId}});
    }

    async updateCategoryNumber(categoryId, categoryData, condition) {
        const category = await CategoryNumbersExtranet.findOne({where: {categoryId: categoryId}});
        console.log("category", category);
        if (category) {
            if (condition === "add") {
                category.countNumbers += categoryData
                return category.save();
            }
            if (condition === "del") {
                category.countNumbers -= categoryData
                return category.save();
            }
        } else {
            throw new ApiError.BadRequest("Ошибка обновления категории");
        }
    }

    async updateCategoryNumberLimit(categoryLimitId, dataCategory) {
        const category = await CategoryNumbersExtranet.findOne({where: {categoryId: categoryLimitId}});
        if (category) {
            category.countNumbers = dataCategory
            return category.save();
        } else {
            throw new ApiError.BadRequest("Ошибка обновления категории");
        }
    }

    async deleteCategoryNumber(categoryId) {
        try {
            await CategoryNumbersExtranet.destroy({where: {categoryId: categoryId}});
            await NumberExtranet.destroy({where: {categoryId: categoryId}});
            await PhotoNumberObjectExtranet.destroy({where: {categoryId: categoryId}});
            console.log("Категория номеров успешно удалена");
        } catch (error) {
            console.error("Ошибка при удалении категории номеров:", error);
            throw new Error("Ошибка при удалении категории номеров");
        }
    }

    async deleteAllCategoryNumber(hotelId) {
        const result = await CategoryNumbersExtranet.destroy({where: {hotelId: hotelId}});
        if (result === 1) {
            return true
        } else {
            return null
        }
    }

}

export default new CategoryService()