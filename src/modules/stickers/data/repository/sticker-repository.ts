import { DatabaseError, DatabaseErrorCodes } from '../../../commons/errors'
import { apiLogger } from '../../../commons/logger'
import { ISticker } from '../../../domain'
import { database } from '../../../infra/database'
import { Sticker } from '../entity'

export const findById = async (id: string): Promise<ISticker | null> => {
    try {
        const con = await database.connect()
        const result = await Sticker
            .findById(id)
            .populate("player")
            .exec();

        con.disconnect()
        return result
    } catch (error: Error | any) {
        apiLogger.error("Error finding sticker by id", {
            local: 'sticker-repository',
            method: 'findById',
            code: DatabaseErrorCodes.FIND,
            exception: error.message,
        })

        throw new DatabaseError("Error finding sticker by id",
            DatabaseErrorCodes.FIND)
    }
}

export const save = async (data: ISticker): Promise<void> => {
    try {
        const con = await database.connect()
        const sticker = new Sticker(data)

        await sticker.save()
        con.disconnect()
    } catch (error: Error | any) {
        apiLogger.error("Error creating sticker", {
            local: 'sticker-repository',
            method: 'save',
            code: DatabaseErrorCodes.SAVE,
            exception: error.message,
        })

        throw new DatabaseError("Error creating sticker",
            DatabaseErrorCodes.SAVE)
    }
}
