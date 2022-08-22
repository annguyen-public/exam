"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connections_1 = __importDefault(require("../../database/connections"));
exports.default = (teacherId) => connections_1.default
    .query('SELECT q.title, q.id, q.description,(SELECT COUNT(*) FROM scores WHERE scores.quiz_id = q.id) AS students_count FROM quizzes AS q JOIN teachers AS t ON t.id = q.teacher_id WHERE t.id = $1', [teacherId]);
