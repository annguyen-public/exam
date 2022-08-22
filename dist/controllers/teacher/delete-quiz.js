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
const errors_1 = require("../../errors");
const validation_1 = require("../../validation");
exports.default = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { user: { userId: teacherId }, params: { quizId } } = req;
    try {
        yield validation_1.quizIdSchema.validate({ quizId });
        const { rowCount } = yield (0, queries_1.deleteQuiz)(quizId, teacherId);
        if (!rowCount)
            throw new errors_1.CustomError('No quiz to delete it', 400);
        res.json({ message: 'Success delete' });
    }
    catch (err) {
        err.toString().includes('ValidationError') ? next(new errors_1.CustomError(err.errors, 400)) : next(err);
    }
});
