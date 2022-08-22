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
exports.default = ({ params: { quizTitle } }, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { rows: leaderboard } = yield (0, queries_1.getLeaderboardQuery)(quizTitle);
        res.json({ data: leaderboard, message: 'Success' });
    }
    catch (error) {
        next(error);
    }
});
