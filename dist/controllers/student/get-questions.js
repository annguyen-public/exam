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
Object.defineProperty(exports, "__esModule", { value: true });
const queries_1 = require("../../queries");
const validation_1 = require("../../validation");
const errors_1 = require("../../errors");
exports.default = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { params: { quizId } } = req;
    const { user: { userId } } = req;
    try {
        yield validation_1.quizIdSchema.validate({ quizId });
        const { rowCount: studentDidAttendQuiz } = yield (0, queries_1.checkUserAttendQuizQuery)({ userId, quizId });
        if (studentDidAttendQuiz)
            throw new errors_1.CustomError('Student can\'t attend a quiz more than once', 401);
        const { rows } = yield (0, queries_1.getQuestionsQuery)(quizId);
        if (!rows.length)
            throw new errors_1.CustomError('No data for this quiz', 404);
        res.json({ data: rows, message: 'Receiving Quiz Questions Successfully' });
    }
    catch (err) {
        err.toString().includes('ValidationError') ? next(new errors_1.CustomError(err.errors, 400)) : next(err);
    }
});
