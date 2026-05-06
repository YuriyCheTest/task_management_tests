import log4js from 'log4js';

log4js.configure({
  appenders: {
    console: { type: 'console' },
    file: { type: 'file', filename: 'logs/test-run.log' }
  },
  categories: {
    default: { appenders: ['console', 'file'], level: 'info' }
  }
});

export const logger = log4js.getLogger();