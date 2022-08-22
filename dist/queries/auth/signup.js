"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_escape_1 = __importDefault(require("pg-escape"));
const connections_1 = __importDefault(require("../../database/connections"));
exports.default = (data) => {
    const { destination, username, email, password, bio, avatar, } = data;
    return connections_1.default.query((0, pg_escape_1.default)(`
    INSERT INTO %I (username, email, password, bio, avatar) VALUES
      ($1, $2, $3, $4, $5)
      RETURNING id, username, email, bio, avatar
    `, destination), [username, email, password, bio, avatar]);
};
