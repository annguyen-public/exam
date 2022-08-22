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
exports.default = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { user: { userId } } = req;
    try {
        const { rows: { 0: userData } } = yield (0, queries_1.userInfo)(userId);
        const { rows: quizzesData } = yield (0, queries_1.getMyQuizzes)(userId);
        res.json({ data: { userData, quizzesData }, message: 'Success' });
    }
    catch (err) {
        next(err);
    }
});
