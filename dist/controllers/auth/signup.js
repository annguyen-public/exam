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
const nodemailer_1 = require("nodemailer");
const queries_1 = require("../../queries");
const utils_1 = require("../../utils");
const validation_1 = require("../../validation");
const errors_1 = require("../../errors");
const create_hash_1 = __importDefault(require("../../queries/auth/create-hash"));
dotenv_1.default.config();
const { env: { APP_MAIL, MAIL_PASSWORD, }, } = process;
exports.default = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { role, email, username, password, bio, avatar, } = req.body;
        yield validation_1.signupSchema.validate(req.body, { abortEarly: false });
        const destination = role === 'student' ? 'students' : 'teachers';
        const { rowCount: isEmailTaken } = yield (0, queries_1.checkEmailTakenQuery)({ destination, email });
        if (isEmailTaken)
            throw new errors_1.CustomError('The email you used is taken', 409);
        const hashedPassword = yield (0, bcrypt_1.hash)(password, 10);
        const { rows: { 0: user } } = yield (0, queries_1.createNewUserQuery)({
            destination,
            email,
            username,
            password: hashedPassword,
            bio,
            avatar,
        });
        const userInfo = {
            userId: user.id, username, role, bio, avatar, isVerified: false,
        };
        const token = yield (0, utils_1.signToken)(userInfo);
        yield (0, create_hash_1.default)(role, user.id, token);
        const link = `http://quizzer-g11.herokuapp.com/api/v1/auth/confirmation/${token}`;
        const transporter = (0, nodemailer_1.createTransport)({
            service: 'gmail',
            auth: {
                user: APP_MAIL,
                pass: MAIL_PASSWORD,
            },
        });
        yield transporter.sendMail({
            from: APP_MAIL,
            to: email,
            subject: 'Quizzer Account Confirmation Email',
            html: `Click on <a href="${link}">THIS</a> link to verify your account`,
        });
        res
            .status(201)
            .cookie('token', token, { maxAge: 2592000000 })
            .json({ data: userInfo, message: 'User Created Successfully' });
    }
    catch (err) {
        err.toString().includes('ValidationError') ? next(new errors_1.CustomError(err.errors, 400)) : next(err);
    }
});
