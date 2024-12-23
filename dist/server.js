"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const app_2 = __importDefault(require("@src/config/app"));
const port = app_2.default.port;
app_1.default.listen(port, () => {
    console.log(`🚀 Server is running on http://localhost:${port}`);
});
