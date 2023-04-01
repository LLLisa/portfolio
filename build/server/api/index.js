"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use('/public', express_1.default.static(path_1.default.join(__dirname, '../../../public')));
app.use('/dist', express_1.default.static(path_1.default.join(__dirname, '../../../dist')));
app.get('/', (req, res, next) => {
    try {
        res.sendFile(path_1.default.join(__dirname, '../../../public/index.html'));
    }
    catch (error) {
        next(error);
    }
});
app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500).send(err.message);
});
exports.default = app;
//# sourceMappingURL=index.js.map