"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = require("bcrypt");
const dotenv_1 = __importDefault(require("dotenv"));
const queries_1 = require("../../queries");
const utils_1 = require("../../utils");
const validation_1 = require("../../validation");
const errors_1 = require("../../errors");
dotenv_1.default.config();
exports.default = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { role, email, password, } = yield validation_1.loginSchema.validate(req.body, { abortEarly: false });
        const destination = role === 'student' ? 'students' : 'teachers';
        const { rowCount: isEmailTaken, rows } = yield (0, queries_1.checkEmailTakenQuery)({ destination, email });
        if (!isEmailTaken)
            throw new errors_1.CustomError('Incorrect email or password', 401);
        const { password: hashedPassword, username, id: userId, bio, avatar, is_verified: isVerified, } = rows[0];
        const isPasswordMatch = yield (0, bcrypt_1.compare)(password, hashedPassword);
        if (!isPasswordMatch)
            throw new errors_1.CustomError('Incorrect email or password', 401);
        const user = {
            userId, username, role, bio, avatar, isVerified,
        };
        const token = yield (0, utils_1.signToken)(user);
        res
            .cookie('token', token, { maxAge: 2592000000 })
            .json({ data: user, message: 'User Logged Successfully' });
    }
    catch (err) {
        err.toString().includes('ValidationError') ? next(new errors_1.CustomError(err.errors, 400)) : next(err);
    }
});
