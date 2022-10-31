import { StatusCodes } from "http-status-codes";
import { DefaultError } from "./default-error";

export enum ValidationErrorCodes { 
    REQUEST_BODY = 'REQUEST-BODY-ERROR',
    REQUEST_QUERY = 'REQUEST-QUER-ERROR',
}

export class ValidationError extends DefaultError { 
    constructor(message: string, code: ValidationErrorCodes) {
        super(message, StatusCodes.UNPROCESSABLE_ENTITY, code)
    }
}
