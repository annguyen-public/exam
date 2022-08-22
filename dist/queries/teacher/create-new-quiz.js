"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createQuestionQuery = exports.createQuizQuery = void 0;
const connections_1 = __importDefault(require("../../database/connections"));
const createQuizQuery = ({ quizId, teacherId, title, description, mark, time, }) => connections_1.default.query(`
    INSERT INTO quizzes (id, teacher_id, title, description, mark, time) VALUES
      ($1, $2, $3, $4, $5, $6)
      RETURNING *;
  `, [quizId, teacherId, title, description, mark, time]);
exports.createQuizQuery = createQuizQuery;
const createQuestionQuery = ({ quizId, question, type, answers, }) => connections_1.default.query(`
    INSERT INTO questions (quiz_id, question, type, answers) VALUES
      ($1, $2, $3, $4)
      RETURNING *;
  `, [quizId, question, type, answers]);
exports.createQuestionQuery = createQuestionQuery;
