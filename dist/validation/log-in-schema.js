"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yup_1 = require("yup");
exports.default = (0, yup_1.object)({
    email: (0, yup_1.string)().email('Please Enter a valid email').required('Email is required'),
    password: (0, yup_1.string)().min(6, 'Password must be at least 6 characters long').required('Password is required'),
    role: (0, yup_1.string)().oneOf(['student', 'teacher']).required('User role is required'),
});
