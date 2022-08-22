"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../../controllers");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const router = (0, express_1.Router)();
router.use((0, auth_1.default)('teacher'));
router.get('/quiz/:quizId/enrolled-students', controllers_1.getEnrolledStudents);
router.route('/profile').get(controllers_1.getProfile).patch(controllers_1.editProfile);
router.get('/quizzes', controllers_1.getQuizzes);
router.post('/quiz', controllers_1.createQuiz);
router.delete('/quiz/:quizId', controllers_1.deleteQuiz);
exports.default = router;
