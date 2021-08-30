"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GENERATOR_DIR = exports.CWD = void 0;
const path_1 = require("path");
exports.CWD = process.cwd();
exports.GENERATOR_DIR = path_1.join(__dirname, '../generators');
