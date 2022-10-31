import winston, { LoggerOptions } from 'winston'

const loggerConfig: LoggerOptions = {
    level: 'debug',
    format: winston.format.combine(
        winston.format.errors(),
        winston.format.timestamp(),
        winston.format.logstash(),
    ),
    transports: [
        new winston.transports.Console()
    ]
}

export default loggerConfig
