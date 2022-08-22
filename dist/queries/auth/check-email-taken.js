"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_escape_1 = __importDefault(require("pg-escape"));
const connections_1 = __importDefault(require("../../database/connections"));
exports.default = ({ destination, email }) => connections_1.default.query((0, pg_escape_1.default)('SELECT * from %I WHERE email = $1', destination), [email]);
