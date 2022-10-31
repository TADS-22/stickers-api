import { NextFunction, Request, Response } from "express";
import { DefaultError } from "../../commons/errors";

const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
    let code: string;
    let status: number;

    if (error instanceof DefaultError) {
        status = error.status
        code = error.code
    } else {
        status = 500
        code = 'SERVER-ERROR'
    }

    res.status(status)
    res.json({ code, message: error.message })
}

export default errorHandler
