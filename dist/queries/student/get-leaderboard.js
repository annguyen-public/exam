"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connections_1 = __importDefault(require("../../database/connections"));
const getLeaderboard = (quizTitle) => connections_1.default
    .query('SELECT st.username, board.score from leaderboard as board join students as st on board.student_id = st.id where board.quiz_title = $1', [quizTitle]);
exports.default = getLeaderboard;
