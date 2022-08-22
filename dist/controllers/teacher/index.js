"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.editProfile = exports.getProfile = exports.createQuiz = exports.getQuizzes = exports.deleteQuiz = exports.getEnrolledStudents = void 0;
var get_enrolled_students_1 = require("./get-enrolled-students");
Object.defineProperty(exports, "getEnrolledStudents", { enumerable: true, get: function () { return __importDefault(get_enrolled_students_1).default; } });
var delete_quiz_1 = require("./delete-quiz");
Object.defineProperty(exports, "deleteQuiz", { enumerable: true, get: function () { return __importDefault(delete_quiz_1).default; } });
var get_quizzes_1 = require("./get-quizzes");
Object.defineProperty(exports, "getQuizzes", { enumerable: true, get: function () { return __importDefault(get_quizzes_1).default; } });
var create_new_quiz_1 = require("./create-new-quiz");
Object.defineProperty(exports, "createQuiz", { enumerable: true, get: function () { return __importDefault(create_new_quiz_1).default; } });
var get_profile_1 = require("./get-profile");
Object.defineProperty(exports, "getProfile", { enumerable: true, get: function () { return __importDefault(get_profile_1).default; } });
var edit_profile_1 = require("./edit-profile");
Object.defineProperty(exports, "editProfile", { enumerable: true, get: function () { return __importDefault(edit_profile_1).default; } });
