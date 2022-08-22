"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yup_1 = require("yup");
const quizzesTitles = [
    'Music',
    'Science',
    'Film & TV',
    'Food & Drink',
    'General Knowledge',
    'Geography',
    'Society & Culture',
    'History',
    'Sport & Leisure',
    'Arts & Literature',
];
exports.default = (0, yup_1.object)({
    quizTitle: (0, yup_1.string)().trim().oneOf(quizzesTitles).required('a valid Quiz title is required'),
    score: (0, yup_1.number)().min(0, 'score must be 0 or greater').max(10, 'score must be 10 or less').required('score is required'),
});
