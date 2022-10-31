import { StatusCodes } from 'http-status-codes'
import { DefaultError } from "./default-error";

export enum DatabaseErrorCodes {
    CONNECTION = 'DB-CONNECTION-ERROR',
    SAVE = 'DB-SAVE-ERROR',
    FIND = 'DB-FIND-ERROR',
}

export class DatabaseError extends DefaultError {
    constructor(message: string, code: DatabaseErrorCodes) {
        super(message, StatusCodes.INTERNAL_SERVER_ERROR, code)
    }
}
