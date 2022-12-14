"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPublicQuizzes = exports.editStdProfile = exports.getStdProfile = exports.updateLeaderboardQuery = exports.getQuestionsQuery = exports.getQuizQuery = exports.getStudentEmailQuery = exports.checkUserAttendQuizQuery = exports.getQuizDetailsQuery = exports.addPrivateQuizScoreQuery = exports.getLeaderboardQuery = void 0;
var get_leaderboard_1 = require("./get-leaderboard");
Object.defineProperty(exports, "getLeaderboardQuery", { enumerable: true, get: function () { return __importDefault(get_leaderboard_1).default; } });
var add_private_quiz_score_1 = require("./add-private-quiz-score");
Object.defineProperty(exports, "addPrivateQuizScoreQuery", { enumerable: true, get: function () { return __importDefault(add_private_quiz_score_1).default; } });
var get_quiz_details_1 = require("./get-quiz-details");
Object.defineProperty(exports, "getQuizDetailsQuery", { enumerable: true, get: function () { return __importDefault(get_quiz_details_1).default; } });
var check_user_attend_quiz_1 = require("./check-user-attend-quiz");
Object.defineProperty(exports, "checkUserAttendQuizQuery", { enumerable: true, get: function () { return __importDefault(check_user_attend_quiz_1).default; } });
var get_student_email_1 = require("./get-student-email");
Object.defineProperty(exports, "getStudentEmailQuery", { enumerable: true, get: function () { return __importDefault(get_student_email_1).default; } });
var get_quiz_1 = require("./get-quiz");
Object.defineProperty(exports, "getQuizQuery", { enumerable: true, get: function () { return __importDefault(get_quiz_1).default; } });
var get_questions_1 = require("./get-questions");
Object.defineProperty(exports, "getQuestionsQuery", { enumerable: true, get: function () { return __importDefault(get_questions_1).default; } });
var update_leaderboard_1 = require("./update-leaderboard");
Object.defineProperty(exports, "updateLeaderboardQuery", { enumerable: true, get: function () { return __importDefault(update_leaderboard_1).default; } });
var get_student_profile_1 = require("./get-student-profile");
Object.defineProperty(exports, "getStdProfile", { enumerable: true, get: function () { return __importDefault(get_student_profile_1).default; } });
var edit_student_profile_1 = require("./edit-student-profile");
Object.defineProperty(exports, "editStdProfile", { enumerable: true, get: function () { return __importDefault(edit_student_profile_1).default; } });
var get_public_quizzes_1 = require("./get-public-quizzes");
Object.defineProperty(exports, "getPublicQuizzes", { enumerable: true, get: function () { return __importDefault(get_public_quizzes_1).default; } });
