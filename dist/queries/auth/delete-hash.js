"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connections_1 = __importDefault(require("../../database/connections"));
exports.default = (role, userId, hash) => (role === 'teacher'
    ? connections_1.default.query('DELETE FROM teachers_hashes WHERE user_id = $1 AND hash = $2 RETURNING *', [userId, hash])
    : connections_1.default.query('DELETE FROM students_hashes WHERE user_id = $1 AND hash = $2 RETURNING *', [userId, hash]));
