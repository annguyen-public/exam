"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connections_1 = __importDefault(require("../../database/connections"));
exports.default = (role, userId) => (role === 'teacher'
    ? connections_1.default.query(`
      UPDATE teachers SET is_verified = TRUE WHERE id = $1 RETURNING *
      `, [userId])
    : connections_1.default.query(`
    UPDATE students SET is_verified = TRUE WHERE id = $1 RETURNING *
    `, [userId]));
