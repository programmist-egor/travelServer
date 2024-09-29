// index.js

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./router/auth-router.js";
import routerCorp from "./router/auth-corp-router.js";
import cookieParser from "cookie-parser";
import { sequelizeExtranet } from "./config/db-connect.js";
import http from "http";
import ApiError from "./exceptions/api-error.js";
import { errorMiddlewares } from "./middlewares/error-middlewares.js";
import { fileURLToPath } from "url";
import mainRouter from "./router/main-router.js";
import path from "path"; // Используем import для path

dotenv.config();

const corsOptions = {
    credentials: true,
    origin: [process.env.REACT_APP_API_BASE_URL_YOOKING, ],
};

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url)); // Получаем путь к текущему модулю

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use('/', router);
app.use('/', routerCorp);
app.use('/', mainRouter);
app.use('/hotels_city', mainRouter);
app.use('/corp/search', mainRouter);
app.use('/hotels_map', mainRouter);
app.use('/add_object', mainRouter);
app.use('/hotel', mainRouter);
app.use('/pay', mainRouter);
app.use('/person', mainRouter);
app.use('/personCorp', mainRouter);
app.use('/edit_user', mainRouter);
app.use('/booking', mainRouter);
app.use('/booking/corp', mainRouter);
app.use('/favorites', mainRouter);

app.use(ApiError);
app.use(errorMiddlewares);
const server = http.createServer(app);
server.timeout = 12000000;

const PORT = process.env.NODE_LOCAL_PORT_YOOKING || 5009;

// Настройка статических файлов React
const buildPath = path.resolve(__dirname, "client/build/"); // Путь к папке сборки React приложения
app.use(express.static(buildPath)); // Обслуживаем статические файлы React
console.log("buildPath",buildPath);
app.get("*", (req, res) => {
    // Отправляем index.html для всех маршрутов, чтобы SPA могла обрабатывать их
    res.sendFile(path.join(buildPath, "index.html"));
});

// Запускаем сервер
const start = async () => {
    try {
        await sequelizeExtranet.sync();
        server.listen(PORT, () => console.log(`Сервер работает на порту ${PORT}`));
    } catch (e) {
        console.log(e);
    }
};
start();