import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { createStickerUseCase, findStickerUseCase } from "../use-case";

export const findById = async (req: Request, res: Response) => {
    const id = req.params.id
    const result = await findStickerUseCase.execute(id)

    if (result) {
        res.status(StatusCodes.OK)
        res.json(result)
    } else {
        res.status(StatusCodes.NOT_FOUND)
    }
}

export const save = async (req: Request, res: Response) => {
    const data = req.body
    await createStickerUseCase.execute(data)
    
    res.status(StatusCodes.CREATED)
}
