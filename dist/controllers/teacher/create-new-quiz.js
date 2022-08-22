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
const nanoid_1 = require("nanoid");
const validation_1 = require("../../validation");
const errors_1 = require("../../errors");
const queries_1 = require("../../queries");
exports.default = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { user: { userId: teacherId }, body: { title, description, mark, time, questions, }, } = req;
    const quizId = (0, nanoid_1.nanoid)(18);
    try {
        yield validation_1.addQuizSchema.validate(req.body, { abortEarly: false });
        questions.forEach(({ type, answers: { answer, options } }) => {
            if (type === 'mcq') {
                if (options.indexOf(answer) === -1)
                    throw new errors_1.CustomError('Correct answer should be in options', 400);
            }
            else if (type === 'true_false') {
                const notAllBooleans = options.some((option) => typeof option !== 'boolean');
                const sameOptions = options[0] === options[1];
                const validTrueFalseQuestion = typeof answer !== 'boolean' || options.length !== 2 || notAllBooleans || sameOptions;
                if (validTrueFalseQuestion)
                    throw new errors_1.CustomError('Invalid answers for question of type true_false', 400);
            }
        });
        const { rows: { 0: quiz } } = yield (0, queries_1.createQuizQuery)({
            quizId, teacherId, title, description, mark, time,
        });
        const { id } = quiz;
        const promises = questions.map(({ question, type, answers }) => {
            const stringifiedAnswers = JSON.stringify(answers);
            return (0, queries_1.createQuestionQuery)({
                quizId: id, question, type, answers: stringifiedAnswers,
            });
        });
        const allQuestions = (yield (Promise.all(promises))).map((question) => question.rows[0]);
        res
            .status(201)
            .json({
            data: {
                quiz,
                questions: allQuestions,
            },
            message: 'Quiz Created Successfully',
        });
    }
    catch (err) {
        err.toString().includes('ValidationError') ? next(new errors_1.CustomError(err.errors, 400)) : next(err);
    }
});
