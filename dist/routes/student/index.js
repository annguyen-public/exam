"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../../controllers");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const router = (0, express_1.Router)();
router
    .route('/leaderboard/:quizTitle')
    .get(controllers_1.leaderboard)
    .post((0, auth_1.default)('student'), controllers_1.updateLeaderboard);
router.get('/quiz/:quizId', controllers_1.getQuiz);
router.use((0, auth_1.default)('student'));
router.get('/public-quizzes', controllers_1.getStdPublicQuizzes);
router.get('/questions/:quizId', controllers_1.getQuestions);
router.route('/profile').get(controllers_1.getStudentProfile).patch(controllers_1.editStudentProfile);
router.post('/score', controllers_1.checkUserAttendQuiz, controllers_1.addPrivateQuizScore, controllers_1.sendEmail);
exports.default = router;
