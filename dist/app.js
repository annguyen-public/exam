"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const express_1 = __importDefault(require("express"));
const compression_1 = __importDefault(require("compression"));
const dotenv_1 = __importDefault(require("dotenv"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const errors_1 = require("./errors");
const app = (0, express_1.default)();
dotenv_1.default.config();
const { env: { PORT, NODE_ENV }, } = process;
app.set('port', PORT || 5000);
app.disable('x-powered-by');
app.use([
    express_1.default.json(),
    express_1.default.urlencoded({ extended: false }),
    (0, cookie_parser_1.default)(),
    (0, compression_1.default)(),
    (0, cors_1.default)(),
]);
app.use('/api/v1/', routes_1.default);
if (NODE_ENV === 'development' || NODE_ENV === 'test') {
    app.get('/', (req, res) => {
        res.json({ message: 'Server Is Running' });
    });
}
if (NODE_ENV === 'production') {
    app.use(express_1.default.static((0, path_1.join)(__dirname, '..', 'client', 'build')));
    app.get('*', (req, res) => {
        res.sendFile((0, path_1.join)(__dirname, '..', 'client', 'build', 'index.html'));
    });
}
app.use(errors_1.clientError);
app.use(errors_1.serverError);
exports.default = app;
