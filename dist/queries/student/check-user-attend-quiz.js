"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connections_1 = __importDefault(require("../../database/connections"));
exports.default = ({ userId: studentId, quizId }) => connections_1.default.query(`
    SELECT * FROM scores WHERE student_id = $1 AND quiz_id = $2
  `, [studentId, quizId]);
