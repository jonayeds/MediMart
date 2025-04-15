"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./app/routes"));
const globalErrorHandler_1 = require("./app/middlewares/globalErrorHandler");
const notFound_1 = require("./app/middlewares/notFound");
const app = (0, express_1.default)();
// persers 
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// application routes
app.use("/api/v1", routes_1.default);
app.get("/api/v1", (req, res) => {
    res.send("MediMart is running 🏃🏼‍♂️‍➡️");
});
app.use(globalErrorHandler_1.errorHandler);
app.use(notFound_1.notFound);
exports.default = app;
