"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentNameError = exports.studentImageError = exports.studentInfoSuccessEdited = exports.teacherNameError = exports.teacherImageError = exports.teacherInfoSuccessEdited = exports.invalidTrueFalseAnswers = exports.noOptions = exports.noAnswerQuestion = exports.noAnswersQuestion = exports.invalidQuestionType = exports.noQuestionAnswerTypeQuiz = exports.noQuestionQuiz = exports.noQuestionsQuiz = exports.noTimeQuiz = exports.noMarkQuiz = exports.noDescriptionQuiz = exports.noTitleQuiz = exports.validQuiz = exports.studentQuizzes = exports.successReturnData = exports.quizQuestions = exports.invalidUserPassword = exports.incorrectPassword = exports.incorrectEmail = exports.successTechLogin = exports.successStdLogin = exports.invalidAvatar = exports.invalidUsername = exports.invalidPassword = exports.takenEmail = exports.successSignup = void 0;
var signup_models_1 = require("./signup-models");
Object.defineProperty(exports, "successSignup", { enumerable: true, get: function () { return signup_models_1.successSignup; } });
Object.defineProperty(exports, "takenEmail", { enumerable: true, get: function () { return signup_models_1.takenEmail; } });
Object.defineProperty(exports, "invalidPassword", { enumerable: true, get: function () { return signup_models_1.invalidPassword; } });
Object.defineProperty(exports, "invalidUsername", { enumerable: true, get: function () { return signup_models_1.invalidUsername; } });
Object.defineProperty(exports, "invalidAvatar", { enumerable: true, get: function () { return signup_models_1.invalidAvatar; } });
var login_models_1 = require("./login-models");
Object.defineProperty(exports, "successStdLogin", { enumerable: true, get: function () { return login_models_1.successStdLogin; } });
Object.defineProperty(exports, "successTechLogin", { enumerable: true, get: function () { return login_models_1.successTechLogin; } });
Object.defineProperty(exports, "incorrectEmail", { enumerable: true, get: function () { return login_models_1.incorrectEmail; } });
Object.defineProperty(exports, "incorrectPassword", { enumerable: true, get: function () { return login_models_1.incorrectPassword; } });
Object.defineProperty(exports, "invalidUserPassword", { enumerable: true, get: function () { return login_models_1.invalidUserPassword; } });
var questions_1 = require("./questions");
Object.defineProperty(exports, "quizQuestions", { enumerable: true, get: function () { return __importDefault(questions_1).default; } });
var quizzes_models_1 = require("./quizzes-models");
Object.defineProperty(exports, "successReturnData", { enumerable: true, get: function () { return __importDefault(quizzes_models_1).default; } });
var student_quizzes_modal_1 = require("./student-quizzes-modal");
Object.defineProperty(exports, "studentQuizzes", { enumerable: true, get: function () { return __importDefault(student_quizzes_modal_1).default; } });
var quiz_models_1 = require("./quiz-models");
Object.defineProperty(exports, "validQuiz", { enumerable: true, get: function () { return quiz_models_1.validQuiz; } });
Object.defineProperty(exports, "noTitleQuiz", { enumerable: true, get: function () { return quiz_models_1.noTitleQuiz; } });
Object.defineProperty(exports, "noDescriptionQuiz", { enumerable: true, get: function () { return quiz_models_1.noDescriptionQuiz; } });
Object.defineProperty(exports, "noMarkQuiz", { enumerable: true, get: function () { return quiz_models_1.noMarkQuiz; } });
Object.defineProperty(exports, "noTimeQuiz", { enumerable: true, get: function () { return quiz_models_1.noTimeQuiz; } });
Object.defineProperty(exports, "noQuestionsQuiz", { enumerable: true, get: function () { return quiz_models_1.noQuestionsQuiz; } });
Object.defineProperty(exports, "noQuestionQuiz", { enumerable: true, get: function () { return quiz_models_1.noQuestionQuiz; } });
Object.defineProperty(exports, "noQuestionAnswerTypeQuiz", { enumerable: true, get: function () { return quiz_models_1.noQuestionAnswerTypeQuiz; } });
Object.defineProperty(exports, "invalidQuestionType", { enumerable: true, get: function () { return quiz_models_1.invalidQuestionType; } });
Object.defineProperty(exports, "noAnswersQuestion", { enumerable: true, get: function () { return quiz_models_1.noAnswersQuestion; } });
Object.defineProperty(exports, "noAnswerQuestion", { enumerable: true, get: function () { return quiz_models_1.noAnswerQuestion; } });
Object.defineProperty(exports, "noOptions", { enumerable: true, get: function () { return quiz_models_1.noOptions; } });
Object.defineProperty(exports, "invalidTrueFalseAnswers", { enumerable: true, get: function () { return quiz_models_1.invalidTrueFalseAnswers; } });
var teacher_profile_edited_1 = require("./teacher-profile-edited");
Object.defineProperty(exports, "teacherInfoSuccessEdited", { enumerable: true, get: function () { return teacher_profile_edited_1.teacherInfoSuccessEdited; } });
Object.defineProperty(exports, "teacherImageError", { enumerable: true, get: function () { return teacher_profile_edited_1.teacherImageError; } });
Object.defineProperty(exports, "teacherNameError", { enumerable: true, get: function () { return teacher_profile_edited_1.teacherNameError; } });
var student_profile_edited_1 = require("./student-profile.edited");
Object.defineProperty(exports, "studentInfoSuccessEdited", { enumerable: true, get: function () { return student_profile_edited_1.studentInfoSuccessEdited; } });
Object.defineProperty(exports, "studentImageError", { enumerable: true, get: function () { return student_profile_edited_1.studentImageError; } });
Object.defineProperty(exports, "studentNameError", { enumerable: true, get: function () { return student_profile_edited_1.studentNameError; } });