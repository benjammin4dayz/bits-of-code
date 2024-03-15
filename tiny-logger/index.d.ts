declare enum LogLevel {
    trace = 0,
    debug = 1,
    info = 2,
    warn = 3,
    error = 4,
    fatal = 5
}
declare const setLevel: (level: LogLevel) => void;
declare const trace: (message: string) => void;
declare const debug: (message: string) => void;
declare const info: (message: string) => void;
declare const warn: (message: string) => void;
declare const error: (message: string) => void;
declare const fatal: (message: string) => void;
export { LogLevel, setLevel, trace, debug, info, warn, error, fatal };
