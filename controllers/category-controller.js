import ApiError from "../exceptions/api-error.js";
import CategoryService from "../service/category-service.js";


class CategoryController {
    async getAllCategoryNumber(req, res, next) {
        try {
            const hotelId = req.params.hotelId;
            if (!hotelId) {
                return new ApiError.BadRequest("Некорректные данные")
            }
            const data = await CategoryService.getAllCategoryNumber(hotelId)
            res.json(data)
        } catch (error) {
            next(error);
        }
    }
    async getOneCategoryNumber(req, res, next) {
        try {
            const categoryId = req.params.categoryId;
            if (!categoryId) {
                return new ApiError.BadRequest("Некорректные данные")
            }
            const data = await CategoryService.getOneCategoryNumber(categoryId)
            res.json(data)
        } catch (error) {
            next(error);
        }
    }
    async createCategoryNumber(req, res, next) {
        try {
            const {categoryData} = req.body;
            if (!categoryData) {
                return new ApiError.BadRequest("Некорректные данные")
            }
            const data = await CategoryService.createCategoryNumber(categoryData)
            res.json(data)
        } catch (error) {
            next(error);
        }
    }
    async updateCategory(req, res, next) {
        try {
            const categoryId = req.params.categoryId;
            const {categoryData} = req.body;
            if (!categoryId && !categoryData) {
                return new ApiError.BadRequest("Некорректные данные")
            }
            const data = await CategoryService.updateCategory(categoryId, categoryData)
            res.json(data)
        } catch (error) {
            next(error);
        }
    }
    async updateCategoryNumber(req, res, next) {
        try {
            const categoryId = req.params.categoryId;
            const {categoryData, condition} = req.body;
            console.log("categoryId",categoryId);
            console.log("categoryData",categoryData);
            console.log("categoryId",categoryId);
            if (!categoryId && !categoryData) {
                return new ApiError.BadRequest("Некорректные данные")
            }
            const data = await CategoryService.updateCategoryNumber(categoryId, categoryData, condition)
            res.json(data)
        } catch (error) {
            next(error);
        }
    }

    async updateCategoryNumberLimit(req, res, next) {
        try {
            const categoryLimitId = req.params.categoryLimitId;
            const {categoryData} = req.body;
            if (!categoryLimitId && !categoryData) {
                return new ApiError.BadRequest("Некорректные данные")
            }
            await CategoryService.updateCategoryNumberLimit(categoryLimitId, categoryData)
        } catch (error) {
            next(error);
        }
    }

    async deleteCategoryNumber(req, res, next) {
        try {
            const categoryId = req.params.categoryId;
            if (!categoryId) {
                return new ApiError.BadRequest("Некорректные данные")
            }
            const data = await CategoryService.deleteCategoryNumber(categoryId)
            res.json(data)
        } catch (error) {
            next(error);
        }
    }

    async deleteAllCategoryNumber(req, res, next) {
        try {
            const hotelId = req.params.hotelId;
            if (!hotelId) {
                return new ApiError.BadRequest("Некорректные данные")
            }
            const data = await CategoryService.deleteAllCategoryNumber(hotelId)
            res.json(data)
        } catch (error) {
            next(error);
        }
    }
}

export default new CategoryController()