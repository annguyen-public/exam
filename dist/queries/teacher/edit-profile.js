"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connections_1 = __importDefault(require("../../database/connections"));
exports.default = ({ username, bio, avatar, teacherId, }) => connections_1.default
    .query('UPDATE teachers SET username = $1, bio = $2 , avatar= $3 WHERE id = $4 RETURNING *', [username, bio, avatar, teacherId]);
