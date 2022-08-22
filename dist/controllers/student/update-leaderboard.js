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
    const { body: { score }, user: { userId: studentId }, params: { quizTitle }, } = req;
    try {
        yield validation_1.updateLeaderboardSchema.validate({ score, quizTitle }, { abortEarly: false });
        const { rows: { 0: attempt }, } = yield (0, queries_1.updateLeaderboardQuery)({ quizTitle, studentId, score });
        let message = 'leaderboard updated successfully';
        if (attempt.score > +score)
            message = 'You scored less than last time';
        return res.json({ data: attempt, message });
    }
    catch (err) {
        return err.toString().includes('ValidationError')
            ? next(new errors_1.CustomError(err.errors, 400))
            : next(err);
    }
});
