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
const errors_1 = require("../../errors");
const utils_1 = require("../../utils");
exports.default = (role) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { token } = req.cookies;
    try {
        if (!token)
            throw new errors_1.CustomError('Unauthorized', 401);
        const user = yield (0, utils_1.verifyToken)(token);
        if (user.role !== role)
            throw new errors_1.CustomError('Unauthorized', 401);
        req.user = user;
        next();
    }
    catch (err) {
        err.toString().includes('JsonWebTokenError') ? next(new errors_1.CustomError(err.message, 401)) : next(err);
    }
});
