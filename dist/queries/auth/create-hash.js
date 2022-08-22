"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connections_1 = __importDefault(require("../../database/connections"));
exports.default = (role, userId, hash) => (role === 'teacher'
    ? connections_1.default.query('INSERT INTO teachers_hashes (user_id, hash) VALUES ($1, $2) RETURNING hash', [userId, hash])
    : connections_1.default.query('INSERT INTO students_hashes (user_id, hash) VALUES ($1, $2) RETURNING hash', [userId, hash]));
