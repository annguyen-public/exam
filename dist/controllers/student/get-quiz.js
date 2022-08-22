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
exports.default = ({ params: { quizId } }, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { rows: { 0: quiz }, rowCount: quizFound } = yield (0, queries_1.getQuizQuery)(quizId);
        if (!quizFound)
            throw new errors_1.CustomError('No quiz found', 404);
        res.json({ data: quiz, message: 'Success' });
    }
    catch (error) {
        next(error);
    }
});
