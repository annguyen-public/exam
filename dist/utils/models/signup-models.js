"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invalidAvatar = exports.invalidUsername = exports.invalidPassword = exports.takenEmail = exports.successSignup = void 0;
const successSignup = {
    username: 'Ali',
    password: 'ali123',
    email: 'zoher@gmail.com',
    bio: "it's me",
    role: 'student',
    avatar: 'https://github.com/zoher.png',
};
exports.successSignup = successSignup;
const takenEmail = {
    username: 'Ali',
    password: 'ali123',
    email: 'zaherabuamro@gmail.com',
    bio: "it's me",
    role: 'student',
    avatar: 'https://github.com/zaher.png',
};
exports.takenEmail = takenEmail;
const invalidPassword = {
    username: 'Ali',
    password: 'uru',
    email: 'zaherabuamro@gmail.com',
    bio: "it's me",
    role: 'student',
    avatar: 'https://github.com/zaher.png',
};
exports.invalidPassword = invalidPassword;
const invalidUsername = {
    username: 'f',
    password: 'jfjfjiowefj',
    email: 'zaherabuamro@gmail.com',
    bio: "it's me",
    role: 'student',
    avatar: 'https://github.com/zaher.png',
};
exports.invalidUsername = invalidUsername;
const invalidAvatar = {
    username: 'Ali',
    password: 'ali123',
    email: 'zoher@gmail.com',
    bio: "it's me",
    role: 'student',
    avatar: 'hello, world',
};
exports.invalidAvatar = invalidAvatar;
