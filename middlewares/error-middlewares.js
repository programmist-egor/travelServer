import ApiError from "../exceptions/api-error.js";

export const errorMiddlewares = (err, req, res, next) => {
    // console.log("err", err);

    if (err instanceof ApiError) {
        return res.status(err.status).json({ message: err.message, error: err.errors });
    }

    // Добавляем обработку ошибок без указания типа ошибки
    if (err.status) {
        return res.status(err.status).json({ message: err.message });
    }

    // Устанавливаем статус 500 для всех остальных ошибок
     //return res.status(500).json({ message: "Непредвиденная ошибка" });
};