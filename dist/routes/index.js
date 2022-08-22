"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = __importDefault(require("./auth"));
const student_1 = __importDefault(require("./student"));
const teacher_1 = __importDefault(require("./teacher"));
const router = (0, express_1.Router)();
router.use('/auth', auth_1.default);
router.use('/student', student_1.default);
router.use('/teacher', teacher_1.default);
exports.default = router;
