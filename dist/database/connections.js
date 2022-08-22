"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const pg_1 = require("pg");
dotenv_1.default.config();
const { NODE_ENV, DEV_DB_URL, TEST_DB_URL, DATABASE_URL, } = process.env;
let DB_URL = '';
switch (NODE_ENV) {
    case 'production':
        DB_URL = DATABASE_URL;
        break;
    case 'development':
        DB_URL = DEV_DB_URL;
        break;
    case 'test':
        DB_URL = TEST_DB_URL;
        break;
    default:
        throw new Error('No Database Found');
}
exports.default = new pg_1.Pool({
    connectionString: DB_URL,
    ssl: NODE_ENV === 'production'
        ? {
            rejectUnauthorized: false,
        }
        : false,
});
