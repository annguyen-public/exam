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
const nodemailer_1 = require("nodemailer");
const dotenv_1 = __importDefault(require("dotenv"));
const queries_1 = require("../../queries");
const utils_1 = require("../../utils");
dotenv_1.default.config();
const { env: { APP_MAIL, MAIL_PASSWORD } } = process;
exports.default = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { user: { userId, username }, body: { quizId, score } } = req;
    try {
        const { rows: { 0: info } } = yield (0, queries_1.getQuizDetailsQuery)(quizId);
        const { rows: { 0: emailObj } } = yield (0, queries_1.getStudentEmailQuery)(userId);
        const quizDetails = Object.assign(Object.assign({}, info), { student_name: username, student_score: score });
        const { email: userEmail } = emailObj;
        const transporter = (0, nodemailer_1.createTransport)({
            service: 'gmail',
            auth: {
                user: APP_MAIL,
                pass: MAIL_PASSWORD,
            },
        });
        yield transporter.sendMail({
            from: APP_MAIL,
            to: userEmail,
            subject: `${quizDetails.quiz_title} Test Result`,
            html: (0, utils_1.emailResponse)(quizDetails),
        });
        res.json({ message: 'Score added to database and an email was sent to the student Successfully' });
    }
    catch (err) {
        next(err);
    }
});
