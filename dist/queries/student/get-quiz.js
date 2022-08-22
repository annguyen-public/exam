"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connections_1 = __importDefault(require("../../database/connections"));
exports.default = (id) => connections_1.default
    .query('SELECT quizzes.*, teachers.username as teacher_name from quizzes join teachers on quizzes.teacher_id = teachers.id where quizzes.id = $1', [id]);
