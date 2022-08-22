"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yup_1 = require("yup");
exports.default = (0, yup_1.object)({
    quizId: (0, yup_1.string)().trim().length(18, 'Must be exactly 18 characters').required('QuizId can\'t be empty'),
});
