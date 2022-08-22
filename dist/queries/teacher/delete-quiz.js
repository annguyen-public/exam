"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connections_1 = __importDefault(require("../../database/connections"));
exports.default = (quizId, teacherId) => connections_1.default
    .query('DELETE FROM quizzes WHERE id=$1 AND teacher_id = $2', [quizId, teacherId]);
