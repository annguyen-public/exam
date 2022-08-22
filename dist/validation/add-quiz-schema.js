"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yup_1 = require("yup");
exports.default = (0, yup_1.object)({
    title: (0, yup_1.string)().trim().required('A quiz mush have a title'),
    description: (0, yup_1.string)().trim().required('Quiz description is required'),
    mark: (0, yup_1.number)().required('Quiz mark is required'),
    time: (0, yup_1.number)().required('Quiz duration must be specified'),
    questions: (0, yup_1.array)().of((0, yup_1.object)({
        question: (0, yup_1.string)().trim().required('Question is not allowed to be empty'),
        type: (0, yup_1.string)().trim().oneOf(['mcq', 'short_answer', 'true_false'], 'Question type must be either MCQ, Short Answer, or True/False').required('Question type must be specified'),
        answers: (0, yup_1.object)({
            answer: (0, yup_1.string)().trim().required('Correct answer is required'),
            options: (0, yup_1.array)().required('options are required'),
        }),
    })).required('Questions can\'t be empty'),
});
