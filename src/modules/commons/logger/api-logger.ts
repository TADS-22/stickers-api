import winston from 'winston'
import { loggerConfig } from '../config'
import { LogErrorData } from './interface'

const winstonLogger = winston.createLogger(loggerConfig)

const info = (message: string, meta?: any) => 
    winstonLogger.info(message, meta)

const error = (message: string, meta: LogErrorData) => 
    winstonLogger.error(message, meta)

export default {
    error,
    info,
}