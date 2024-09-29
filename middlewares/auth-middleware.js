import ApiError from "../exceptions/api-error.js";
import TokenService from "../service/token-service.js";

export const authMiddleware = (req,res, next) => {
    try{
const authorizationHeader = req.headers.authorization
        if(!authorizationHeader) {
            return next(new ApiError.UnauthorizedError())
        }
        const accessToken = authorizationHeader.split(" ")[1];
        if(!accessToken) {
            return next(new ApiError.UnauthorizedError())
        }
        const userData = TokenService.validateAccessToken(accessToken)
        if(!userData) {
            return next(new ApiError.UnauthorizedError())
        }
        req.user = userData
        next()
    } catch (error) {
        return next(new ApiError.UnauthorizedError())
    }
}