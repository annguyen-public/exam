"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yup_1 = require("yup");
exports.default = (0, yup_1.object)({
    username: (0, yup_1.string)().trim().min(3, 'Username must be at least 3 characters long').max(50, 'Maximum username is 50 characters long')
        .required('Your username is required'),
    email: (0, yup_1.string)().trim().email('Please Enter a valid email').required('Email is required'),
    password: (0, yup_1.string)().trim().min(6, 'Password must be at least 6 characters long').required('Password is required'),
    role: (0, yup_1.string)().trim().oneOf(['student', 'teacher']).required('User role is required'),
    bio: (0, yup_1.string)().trim(),
    avatar: (0, yup_1.string)().trim().url('Your avatar should be an image url'),
});
