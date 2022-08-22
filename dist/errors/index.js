"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomError = exports.serverError = exports.clientError = void 0;
const custom_error_1 = __importDefault(require("./custom-error"));
exports.CustomError = custom_error_1.default;
const clientError = (req, res, next) => {
    res.status(404).json({ message: 'Page Not Found' });
};
exports.clientError = clientError;
const serverError = (err, req, res, next) => {
    res
        .status(err.status || 500)
        .json({ message: err.status ? err.message : 'Internal Server Error' });
};
exports.serverError = serverError;
