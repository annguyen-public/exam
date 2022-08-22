"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { env: { SECRET_KEY } } = process;
exports.default = (token) => new Promise((resolve, reject) => {
    (0, jsonwebtoken_1.verify)(token, SECRET_KEY, (err, match) => {
        if (err)
            return reject(err);
        return resolve(match);
    });
});
