"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connections_1 = __importDefault(require("../../database/connections"));
exports.default = ({ userId: studentId, quizId, score }) => connections_1.default.query(`
  INSERT INTO scores (student_id, quiz_id, student_score) VALUES
    ($1, $2, $3)
    RETURNING *
  `, [studentId, quizId, score]);
