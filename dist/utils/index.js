"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentNameError = exports.studentInfoSuccessEdited = exports.studentImageError = exports.studentQuizzes = exports.teacherNameError = exports.teacherImageError = exports.teacherInfoSuccessEdited = exports.invalidTrueFalseAnswers = exports.noOptions = exports.noAnswerQuestion = exports.noAnswersQuestion = exports.invalidQuestionType = exports.noQuestionAnswerTypeQuiz = exports.noQuestionQuiz = exports.noQuestionsQuiz = exports.noTimeQuiz = exports.noMarkQuiz = exports.noDescriptionQuiz = exports.noTitleQuiz = exports.validQuiz = exports.quizQuestions = exports.incorrectPassword = exports.incorrectEmail = exports.successTechLogin = exports.successStdLogin = exports.successReturnData = exports.invalidUserPassword = exports.invalidAvatar = exports.invalidUsername = exports.invalidPassword = exports.takenEmail = exports.successSignup = exports.emailResponse = exports.verifyToken = exports.signToken = void 0;
var jwt_1 = require("./jwt");
Object.defineProperty(exports, "signToken", { enumerable: true, get: function () { return jwt_1.signToken; } });
Object.defineProperty(exports, "verifyToken", { enumerable: true, get: function () { return jwt_1.verifyToken; } });
var email_response_1 = require("./email-response");
Object.defineProperty(exports, "emailResponse", { enumerable: true, get: function () { return __importDefault(email_response_1).default; } });
var models_1 = require("./models");
Object.defineProperty(exports, "successSignup", { enumerable: true, get: function () { return models_1.successSignup; } });
Object.defineProperty(exports, "takenEmail", { enumerable: true, get: function () { return models_1.takenEmail; } });
Object.defineProperty(exports, "invalidPassword", { enumerable: true, get: function () { return models_1.invalidPassword; } });
Object.defineProperty(exports, "invalidUsername", { enumerable: true, get: function () { return models_1.invalidUsername; } });
Object.defineProperty(exports, "invalidAvatar", { enumerable: true, get: function () { return models_1.invalidAvatar; } });
Object.defineProperty(exports, "invalidUserPassword", { enumerable: true, get: function () { return models_1.invalidUserPassword; } });
Object.defineProperty(exports, "successReturnData", { enumerable: true, get: function () { return models_1.successReturnData; } });
Object.defineProperty(exports, "successStdLogin", { enumerable: true, get: function () { return models_1.successStdLogin; } });
Object.defineProperty(exports, "successTechLogin", { enumerable: true, get: function () { return models_1.successTechLogin; } });
Object.defineProperty(exports, "incorrectEmail", { enumerable: true, get: function () { return models_1.incorrectEmail; } });
Object.defineProperty(exports, "incorrectPassword", { enumerable: true, get: function () { return models_1.incorrectPassword; } });
Object.defineProperty(exports, "quizQuestions", { enumerable: true, get: function () { return models_1.quizQuestions; } });
Object.defineProperty(exports, "validQuiz", { enumerable: true, get: function () { return models_1.validQuiz; } });
Object.defineProperty(exports, "noTitleQuiz", { enumerable: true, get: function () { return models_1.noTitleQuiz; } });
Object.defineProperty(exports, "noDescriptionQuiz", { enumerable: true, get: function () { return models_1.noDescriptionQuiz; } });
Object.defineProperty(exports, "noMarkQuiz", { enumerable: true, get: function () { return models_1.noMarkQuiz; } });
Object.defineProperty(exports, "noTimeQuiz", { enumerable: true, get: function () { return models_1.noTimeQuiz; } });
Object.defineProperty(exports, "noQuestionsQuiz", { enumerable: true, get: function () { return models_1.noQuestionsQuiz; } });
Object.defineProperty(exports, "noQuestionQuiz", { enumerable: true, get: function () { return models_1.noQuestionQuiz; } });
Object.defineProperty(exports, "noQuestionAnswerTypeQuiz", { enumerable: true, get: function () { return models_1.noQuestionAnswerTypeQuiz; } });
Object.defineProperty(exports, "invalidQuestionType", { enumerable: true, get: function () { return models_1.invalidQuestionType; } });
Object.defineProperty(exports, "noAnswersQuestion", { enumerable: true, get: function () { return models_1.noAnswersQuestion; } });
Object.defineProperty(exports, "noAnswerQuestion", { enumerable: true, get: function () { return models_1.noAnswerQuestion; } });
Object.defineProperty(exports, "noOptions", { enumerable: true, get: function () { return models_1.noOptions; } });
Object.defineProperty(exports, "invalidTrueFalseAnswers", { enumerable: true, get: function () { return models_1.invalidTrueFalseAnswers; } });
Object.defineProperty(exports, "teacherInfoSuccessEdited", { enumerable: true, get: function () { return models_1.teacherInfoSuccessEdited; } });
Object.defineProperty(exports, "teacherImageError", { enumerable: true, get: function () { return models_1.teacherImageError; } });
Object.defineProperty(exports, "teacherNameError", { enumerable: true, get: function () { return models_1.teacherNameError; } });
Object.defineProperty(exports, "studentQuizzes", { enumerable: true, get: function () { return models_1.studentQuizzes; } });
Object.defineProperty(exports, "studentImageError", { enumerable: true, get: function () { return models_1.studentImageError; } });
Object.defineProperty(exports, "studentInfoSuccessEdited", { enumerable: true, get: function () { return models_1.studentInfoSuccessEdited; } });
Object.defineProperty(exports, "studentNameError", { enumerable: true, get: function () { return models_1.studentNameError; } });
