import RouterExp from "express";
import {authMiddleware} from "../middlewares/auth-middleware.js";
import ObjectController from "../controllers/object-controller.js";
import PhotosObjectController from "../controllers/photos-object-controller.js";
import NumberController from "../controllers/number-controller.js";
import PhotosNumberController from "../controllers/photos-number-controller.js";
import CategoryController from "../controllers/category-controller.js";
import BookingController from "../controllers/booking-controller.js";
import UserYookingController from "../controllers/user-yooking-controller.js";
import FavoritesController from "../controllers/favorites-controller.js";
import RatingController from "../controllers/rating-controller.js";
import SettingPageController from "../controllers/setting-page-controller.js";
import UserCorpController from "../controllers/user-corp-controller.js";
import {authCorpMiddleware} from "../middlewares/auth-corp-middleware.js";
import ConfirmCodeEmailAndPhoneController from "../controllers/confirm-code-email-and-phone-controller.js";
import RestorePasswordController from "../controllers/restore-password-controller.js";
import ChatSupportController from "../controllers/chat-support-controller.js";
import CardBankController from "../controllers/card-bank-controller.js";
const Router = RouterExp.Router
const mainRoute = new Router()

//USERS YOOKING
mainRoute.get("/user/yooking", authMiddleware, UserYookingController.getAllUsersYooking)
mainRoute.get("/user/get_by_id/:userId", authMiddleware, UserYookingController.getUserYooking)
mainRoute.put("/user/yooking/:userId", authMiddleware, UserYookingController.updateUserYooking)
mainRoute.put("/user/yooking/code/:userId", authMiddleware, UserYookingController.generateCode)
mainRoute.delete("/user/yooking/:userId", authMiddleware, UserYookingController.deleteUserYooking)
//CONFIRM EMAIL AND PHONE
mainRoute.put("/code/email/:userId",  ConfirmCodeEmailAndPhoneController.sendCodeForEmail)
mainRoute.put("/code/email/corp/:userId",  ConfirmCodeEmailAndPhoneController.sendCodeForEmailCorp)
mainRoute.post("/code/email/confirm/:userId",  ConfirmCodeEmailAndPhoneController.confirmCodeForEmail)
mainRoute.post("/code/email/confirm/corp/:userId",  ConfirmCodeEmailAndPhoneController.confirmCodeForEmailCorp)
mainRoute.post("/code/email/restore",  ConfirmCodeEmailAndPhoneController.confirmRestorePasswordCodeForEmail)
mainRoute.post("/code/email/restore/corp",  ConfirmCodeEmailAndPhoneController.confirmRestorePasswordCodeForEmailCorp)
mainRoute.post("/code/email/codeRestore",  ConfirmCodeEmailAndPhoneController.sendCodeRestorePassword)
mainRoute.post("/code/email/codeRestore/corp",  ConfirmCodeEmailAndPhoneController.sendCodeRestorePasswordCorp)
mainRoute.put("/code/phone/:userId",  ConfirmCodeEmailAndPhoneController.sendCodeForPhone)
//RESTORE PASSWORD
mainRoute.post("/code/restorePassword",  RestorePasswordController.sendRestorePassword)
mainRoute.post("/code/restorePassword/corp",  RestorePasswordController.sendRestorePasswordCorp)
//USERS CORP
mainRoute.get("/user/corp/get_by_id/:userId", authMiddleware, UserCorpController.getUserCorp)
mainRoute.put("/user/corp/:userId", authMiddleware, UserCorpController.updateUserCorp)
//NUMBER
mainRoute.get('/numbers/:hotelId', NumberController.getAllNumbers);
mainRoute.post('/numbers/hotels', NumberController.getAllHotelIdNumbers);
mainRoute.get('/number_one/:numberId',  NumberController.getNumberById);
mainRoute.post('/numbers', authMiddleware, NumberController.createNumber);
mainRoute.put('/numbers/:numberId', authMiddleware, NumberController.updateNumber);
mainRoute.post('/numbers/:numberId', authMiddleware, NumberController.deleteNumberById);
mainRoute.delete('/numbers/:id', authMiddleware, NumberController.deleteNumbersByLastCategory);
mainRoute.delete('/numbers/:categoryId', authMiddleware, NumberController.deleteAllNumbersByCategory);
mainRoute.delete('/numbers/:hotelId', authMiddleware, NumberController.deleteAllNumberByObject);
//OBJECT
mainRoute.get("/",  ObjectController.getAllObject)
mainRoute.get("/object/:hotelId",  ObjectController.getObject)
mainRoute.get("/:userId",  ObjectController.getObjectByUserId)
mainRoute.post("/", ObjectController.searchObject)
mainRoute.put("/object/:hotelId", authMiddleware, ObjectController.updateObject)
mainRoute.delete("/object/:hotelId", authMiddleware, ObjectController.deleteObject)
//OBJECT PHOTOS
mainRoute.get("/by_hotelId/:hotelId", PhotosObjectController.getAllPhotosObject);
mainRoute.post('/object/photos', authMiddleware, PhotosObjectController.createPhotoObject);
mainRoute.delete('/object/photo/:idImg', authMiddleware, PhotosObjectController.deletePhotoObject);
mainRoute.delete('/object/photos/:hotelId', authMiddleware, PhotosObjectController.deleteAllPhotosObject);
//NUMBER PHOTOS
mainRoute.get('/numbers/photos/:categoryId',  PhotosNumberController.getAllPhotosCategoryNumber);
mainRoute.get('/number/photos/:numberId',  PhotosNumberController.getAllPhotosNumber);
mainRoute.post('/number/photos', authMiddleware, PhotosNumberController.createNumberPhotos);
mainRoute.delete('/number/photo/:idImg', authMiddleware, PhotosNumberController.deleteNumberPhoto);
mainRoute.delete('/number/photos/:numberId', authMiddleware, PhotosNumberController.deleteAllNumberPhotos);
mainRoute.delete('/number/photos/:categoryId', authMiddleware, PhotosNumberController.deleteAllCategoryNumberPhotos);
mainRoute.delete('/number/photos/:hotelId', authMiddleware, PhotosNumberController.deleteAllObjectNumberPhotos);

//CATEGORY
mainRoute.get('/categories/:hotelId',  CategoryController.getAllCategoryNumber);
mainRoute.get('/category/:categoryId',  CategoryController.getOneCategoryNumber);
mainRoute.post('/category', authMiddleware, CategoryController.createCategoryNumber);
mainRoute.put('/category/sale/:categoryId', authMiddleware, CategoryController.updateCategory);
mainRoute.put('/add__del/:categoryId', authMiddleware, CategoryController.updateCategoryNumber);
mainRoute.put('/category/:categoryLimitId', authMiddleware, CategoryController.updateCategoryNumberLimit);
mainRoute.delete('/category/:categoryId', authMiddleware, CategoryController.deleteCategoryNumber);
mainRoute.delete('/categories/:hotelId', authMiddleware, CategoryController.deleteAllCategoryNumber);
//BOOKING
mainRoute.get('/', authCorpMiddleware, BookingController.getAllBooking);
mainRoute.get('/archive/:email', authCorpMiddleware, BookingController.getBookingArchiveToEmail);
mainRoute.get('/active/:id',  authCorpMiddleware, BookingController.getBookingActiveToId);
mainRoute.get('/bookings/by_object/:hotelId', BookingController.getAllBookingByObject);
mainRoute.get('/booking/:id', authCorpMiddleware, BookingController.getBooking);
mainRoute.get('/booking/reporting/:id', authCorpMiddleware, BookingController.getBookingReporting);
mainRoute.post('/booking', authCorpMiddleware, BookingController.createBooking);
mainRoute.post('/booking/create/corp', authCorpMiddleware, BookingController.createBookingCorp);
mainRoute.put('/booking/:id', authCorpMiddleware, BookingController.updateBooking);
mainRoute.post('/booking/delete/:id', authCorpMiddleware, BookingController.deleteBooking);
//CHAT SUPPORT
mainRoute.get('/chat/msg/:userId', authMiddleware,ChatSupportController.getMsgUser);
mainRoute.get('/chat', authMiddleware,ChatSupportController.getAllUsers);
mainRoute.put('/chat/:userId', authMiddleware, ChatSupportController.saveMessage);
mainRoute.put('/chat/viewMsg/:userId', authMiddleware, ChatSupportController.viewMessage);
mainRoute.post('/chat/add', authMiddleware, ChatSupportController.newDialogue);
mainRoute.post('/chat/delete/:userId', authMiddleware, ChatSupportController.deleteDialogue);
//FAVORITE
mainRoute.get('/get/corp/:userId', authCorpMiddleware, FavoritesController.getAllFavorites);
mainRoute.get('/get/:userId', authMiddleware, FavoritesController.getAllFavorites);
mainRoute.post('/add', authMiddleware, FavoritesController.createFavorite);
mainRoute.post('/add/corp', authCorpMiddleware, FavoritesController.createFavorite);
mainRoute.delete('/delete/corp/:hotelId', authCorpMiddleware, FavoritesController.deleteFavorite);
mainRoute.delete('/delete/:hotelId', authMiddleware, FavoritesController.deleteFavorite);
//RATING
mainRoute.get('/rating/:hotelId', RatingController.getAllRatingObject);
mainRoute.get('/rating/review/:bookingId', RatingController.getOneReviewUser);
mainRoute.get('/rating/city/:city', RatingController.getAllCityRatingObject);
mainRoute.post('/rating', authMiddleware, RatingController.createRatingObject);
mainRoute.post('/rating/check/:userId', authMiddleware, RatingController.checkRatingObject);
//SETTING PAGE
mainRoute.get('/setting_page/all', SettingPageController.getSettingPage);
//CARD BANK
mainRoute.get('/cards/get/:id', CardBankController.initCardHandler);
mainRoute.post('/cards/add', CardBankController.addCardHandler);
mainRoute.put('/cards/update/:id', CardBankController.updateCardHandler);
mainRoute.post('/cards/delete/:id', CardBankController.deleteCardHandler);
export default mainRoute;