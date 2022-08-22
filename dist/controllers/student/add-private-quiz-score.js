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
const validation_1 = require("../../validation");
const errors_1 = require("../../errors");
const queries_1 = require("../../queries");
exports.default = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { user: { userId }, body: { quizId, score } } = req;
    try {
        yield validation_1.addScoreSchema.validate({ quizId, score }, { abortEarly: false });
        const { rowCount: quizDoesExist } = yield (0, queries_1.checkQuizExistsQuery)(quizId);
        if (!quizDoesExist)
            throw new errors_1.CustomError('No such a quiz', 400);
        yield (0, queries_1.addPrivateQuizScoreQuery)({ userId, quizId, score });
        next();
    }
    catch (err) {
        err.toString().includes('ValidationError') ? next(new errors_1.CustomError(err.errors, 400)) : next(err);
    }
});
