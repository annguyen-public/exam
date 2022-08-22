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
const errors_1 = require("../../errors");
const validation_1 = require("../../validation");
const utils_1 = require("../../utils");
exports.default = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { user: { userId: teacherId, role }, } = req;
    try {
        const { username, bio, avatar, } = yield validation_1.editProfileSchema.validate(req.body);
        const { rows: { 0: { is_verified: isVerified } } } = yield (0, queries_1.editStdProfile)({
            username, bio, avatar, teacherId,
        });
        const userInfo = {
            userId: teacherId, username, role, bio, avatar, isVerified,
        };
        const token = yield (0, utils_1.signToken)(userInfo);
        res
            .cookie('token', token, { maxAge: 2592000000, httpOnly: true, secure: process.env.NODE_ENV === 'production' })
            .json({ message: 'User profile edited successfully' });
    }
    catch (err) {
        err.toString().includes('ValidationError') ? next(new errors_1.CustomError(err.errors, 400)) : next(err);
    }
});
