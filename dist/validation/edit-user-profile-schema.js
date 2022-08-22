"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yup_1 = require("yup");
exports.default = (0, yup_1.object)({
    username: (0, yup_1.string)().trim().min(3, 'Username must be at least 3 characters long').max(50, 'Maximum username is 50 characters long')
        .required('Your username is required'),
    bio: (0, yup_1.string)().trim(),
    avatar: (0, yup_1.string)().trim().url('Your avatar should be an image url'),
});
