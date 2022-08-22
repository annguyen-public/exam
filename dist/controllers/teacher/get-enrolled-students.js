"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const queries_1 = require("../../queries");
exports.default = ({ params: { quizId }, user }, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId: teacherId } = user;
    try {
        const { rows: enrolledStudents } = yield (0, queries_1.getEnrolledStudentsQuery)(quizId, teacherId);
        res.json({ data: enrolledStudents, message: 'success' });
    }
    catch (error) {
        next(error);
    }
});
