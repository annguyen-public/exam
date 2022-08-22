"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yup_1 = require("yup");
exports.default = (0, yup_1.object)({
    quizId: (0, yup_1.string)().trim().length(18, 'quizId must be exactly 18 characters').required('QuizId can\'t be empty'),
    score: (0, yup_1.number)().min(0, 'score must be 0 or greater').required('score is required'),
});
