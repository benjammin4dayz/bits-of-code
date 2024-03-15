enum LogLevel {
  trace,
  debug,
  info,
  warn,
  error,
  fatal,
}

let currentLevel = LogLevel.info;

const setLevel = (level: LogLevel) => {
  currentLevel = level;
};

function log(level: LogLevel) {
  return function (message: string) {
    if (level >= currentLevel) {
      const timestamp = new Date(Date.now()).toISOString();
      console.log(`[${timestamp}] ${LogLevel[level]}: ${message}`);
    }
  };
}

const trace = log(LogLevel.trace);
const debug = log(LogLevel.debug);
const info = log(LogLevel.info);
const warn = log(LogLevel.warn);
const error = log(LogLevel.error);
const fatal = log(LogLevel.fatal);

export { LogLevel, setLevel, trace, debug, info, warn, error, fatal };
