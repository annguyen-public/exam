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
const utils_1 = require("../../utils");
const queries_1 = require("../../queries");
const errors_1 = require("../../errors");
exports.default = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { params: { hash } } = req;
    try {
        const user = yield (0, utils_1.verifyToken)(hash);
        const userId = user.userId;
        const role = user.role;
        const userInfo = Object.assign(Object.assign({}, user), { isVerified: true });
        const { rowCount: accountExist } = yield (0, queries_1.verifyAccount)(role, userId);
        if (!accountExist)
            throw new errors_1.CustomError('No such an account', 400);
        const { rowCount: hashDeleted } = yield (0, queries_1.deleteHash)(role, userId, hash);
        if (!hashDeleted)
            throw new errors_1.CustomError(`No such a hash for user of role ${role}`, 400);
        const token = yield (0, utils_1.signToken)(userInfo);
        res
            .cookie('token', token, { maxAge: 2592000000 })
            .redirect('/');
    }
    catch (err) {
        next(err);
    }
});
