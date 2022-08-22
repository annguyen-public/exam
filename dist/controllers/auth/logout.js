"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (req, res) => {
    res.clearCookie('token').json({ message: 'Logged Out Successfully' });
};
