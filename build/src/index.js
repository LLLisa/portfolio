"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const client_1 = require("react-dom/client");
const components_1 = require("./components");
const root = document.getElementById('root');
(0, client_1.createRoot)(root).render(react_1.default.createElement(components_1.Root, null));
//# sourceMappingURL=index.js.map