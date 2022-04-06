"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const markdownToHtml_1 = require("./markdownToHtml");
const htmlToPdf_1 = require("./htmlToPdf");
const fs_1 = __importDefault(require("fs"));
if (process.argv.length < 3) {
    console.log(`Usage: ${process.argv[0]} ${process.argv[1]} [file_to_convert]`);
    process.exit(1);
}
const fileName = (_a = process.argv[2]) === null || _a === void 0 ? void 0 : _a.replace(/\.[^/.]+$/, '');
fs_1.default.writeFileSync(`${fileName}.html`, (0, markdownToHtml_1.markdownToHTML)(process.argv[2]));
(0, htmlToPdf_1.htmlToPdf)(`${fileName}.html`, `${fileName}.pdf`);
