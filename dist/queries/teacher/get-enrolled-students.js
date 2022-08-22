"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connections_1 = __importDefault(require("../../database/connections"));
const query = `select students.username, scores.student_score, quizzes.mark
from students
join scores on students.id = scores.student_id 
join quizzes on quizzes.id = scores.quiz_id JOIN teachers on teachers.id = quizzes.teacher_id 
where quizzes.id = $1 and teachers.id = $2`;
exports.default = (quizId, teacherId) => connections_1.default.query(query, [quizId, teacherId]);
