"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connections_1 = __importDefault(require("../../database/connections"));
exports.default = (studentId) => connections_1.default
    .query('SELECT q.title, q.description, scores.student_score FROM scores JOIN quizzes AS q on scores.quiz_id = q.id WHERE student_id = $1', [studentId]);
