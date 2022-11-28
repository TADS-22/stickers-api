import { DatabaseError, DatabaseErrorCodes } from "../../../commons/errors";
import { apiLogger } from "../../../commons/logger";
import { IPlayer } from "../../../domain";
import { database } from "../../../infra/database";
import { Player } from "../entity";

export const findAll = async (): Promise<IPlayer[]> => {
    try {
        const con = await database.connect()
        const result = await Player.find()

        con.disconnect()

        return result
    } catch (error: Error | any) {
        apiLogger.error("Error finding all players", {
            local: 'player-repository',
            method: 'findAll',
            code: DatabaseErrorCodes.FIND,
            exception: error.message,
        })

        throw new DatabaseError("Error finding all players",
            DatabaseErrorCodes.FIND)
    }
}

export const findById = async (id: string): Promise<IPlayer | null> => {
    try {
        const con = await database.connect()
        const result = await Player.findById(id)

        con.disconnect()

        return result
    } catch (error: Error | any) {
        apiLogger.error("Error finding player by id", {
            local: 'player-repository',
            method: 'findById',
            code: DatabaseErrorCodes.FIND,
            exception: error.message,
        })

        throw new DatabaseError("Error finding player by id",
            DatabaseErrorCodes.FIND)
    }
}

export const findByCountry = async (country: string): Promise<IPlayer[]> => {
    try {
        const con = await database.connect()
        const result = await Player.find({ country })

        con.disconnect()

        return result
    } catch (error: Error | any) {
        apiLogger.error("Error finding player by country", {
            local: 'player-repository',
            method: 'findByCountry',
            code: DatabaseErrorCodes.FIND,
            exception: error.message,
        })

        throw new DatabaseError("Error finding players by country",
            DatabaseErrorCodes.FIND)
    }
}

export const save = async (data: IPlayer): Promise<void> => {
    try {
        const con = await database.connect()
        const sticker = new Player(data)

        await sticker.save()
        con.disconnect()
    } catch (error: Error | any) {
        apiLogger.error("Error creating player", {
            local: 'player-repository',
            method: 'save',
            code: DatabaseErrorCodes.SAVE,
            exception: error.message,
        })

        throw new DatabaseError("Error creating player",
            DatabaseErrorCodes.SAVE)
    }
}
