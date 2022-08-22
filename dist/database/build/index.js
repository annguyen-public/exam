"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const connections_1 = __importDefault(require("../connections"));
exports.default = () => {
    const query = (0, fs_1.readFileSync)((0, path_1.join)(__dirname, '../build/init.sql')).toString()
        + (0, fs_1.readFileSync)((0, path_1.join)(__dirname, '../build/fakeData.sql')).toString();
    return connections_1.default.query(query);
};
