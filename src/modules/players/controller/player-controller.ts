import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { createPlayerUseCase, findAllPlayersUseCase, findPlayerByIdUseCase, findPlayersByCountryUseCase } from "../use-case";

export const save = async (req: Request, res: Response) => {
    const data = req.body
    await createPlayerUseCase.execute(data)

    res.status(StatusCodes.CREATED)
    res.end()
}

export const findById = async (req: Request, res: Response) => {
    const result = await findPlayerByIdUseCase.execute(req.params.id)
    if (result) {
        res.status(StatusCodes.OK)
        res.json(result)    
    } else {
        res.status(StatusCodes.NOT_FOUND)
        res.end()
    }
}

export const findByCountry = async (req: Request, res: Response) => {
    const result = await findPlayersByCountryUseCase.execute(req.params.country)
    res.status(StatusCodes.OK)
    res.json(result)
}

export const findAll = async (req: Request, res: Response) => {
    const result = await findAllPlayersUseCase.execute()
    res.status(StatusCodes.OK)
    res.json(result)
}