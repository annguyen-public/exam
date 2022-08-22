"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invalidUserPassword = exports.incorrectPassword = exports.incorrectEmail = exports.successTechLogin = exports.successStdLogin = void 0;
const successStdLogin = {
    password: 'zaher123',
    email: 'zaherabuamro@gmail.com',
    role: 'student',
};
exports.successStdLogin = successStdLogin;
const successTechLogin = {
    password: 'ali123',
    email: 'ali@gmail.com',
    role: 'teacher',
};
exports.successTechLogin = successTechLogin;
const incorrectEmail = {
    password: 'zaher123',
    email: 'zaher@gmail.com',
    role: 'student',
};
exports.incorrectEmail = incorrectEmail;
const incorrectPassword = {
    password: 'zaher1231',
    email: 'zaherabuamro@gmail.com',
    role: 'student',
};
exports.incorrectPassword = incorrectPassword;
const invalidUserPassword = {
    password: 'za',
    email: 'zaherabuamro@gmail.com',
    role: 'student',
};
exports.invalidUserPassword = invalidUserPassword;
