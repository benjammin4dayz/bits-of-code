"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fatal = exports.error = exports.warn = exports.info = exports.debug = exports.trace = exports.setLevel = exports.LogLevel = void 0;
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["trace"] = 0] = "trace";
    LogLevel[LogLevel["debug"] = 1] = "debug";
    LogLevel[LogLevel["info"] = 2] = "info";
    LogLevel[LogLevel["warn"] = 3] = "warn";
    LogLevel[LogLevel["error"] = 4] = "error";
    LogLevel[LogLevel["fatal"] = 5] = "fatal";
})(LogLevel || (LogLevel = {}));
exports.LogLevel = LogLevel;
let currentLevel = LogLevel.info;
const setLevel = (level) => {
    currentLevel = level;
};
exports.setLevel = setLevel;
function log(level) {
    return function (message) {
        if (level >= currentLevel) {
            const timestamp = new Date(Date.now()).toISOString();
            console.log(`[${timestamp}] ${LogLevel[level]}: ${message}`);
        }
    };
}
const trace = log(LogLevel.trace);
exports.trace = trace;
const debug = log(LogLevel.debug);
exports.debug = debug;
const info = log(LogLevel.info);
exports.info = info;
const warn = log(LogLevel.warn);
exports.warn = warn;
const error = log(LogLevel.error);
exports.error = error;
const fatal = log(LogLevel.fatal);
exports.fatal = fatal;
