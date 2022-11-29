import { stickerRepository } from ".."
import { DatabaseError, DatabaseErrorCodes } from "../../../../commons/errors"
import { apiLogger } from "../../../../commons/logger"
import { ISticker } from "../../../../domain"
import { Sticker } from "../../entity"

const mockDisconnect = jest.fn()
const mockConnect = jest.fn(() => ({
  disconnect: () => mockDisconnect()
}))

jest.mock('../../../../infra/database', () => {
  return {
    database: {
      connect: () => mockConnect()
    }
  }
})

const mockLoggerError = jest.fn()
jest.spyOn(apiLogger, "error").mockImplementation(mockLoggerError)

const mockSave = jest.fn()
const mockSticker: ISticker = {
  player: 'abc123',
  legend: true,  
}

const mockSaveSuccess = () => {
  jest.spyOn(Sticker.prototype, 'save')
    .mockImplementation(mockSave)
}

const mockSaveError = () => {
  jest.spyOn(Sticker.prototype, 'save')
    .mockRejectedValue(new Error('error saving sticker'))
}

describe('StickerRepository | UnitTest', () => {
  
  describe('when creating a sticker', () => {
  
    describe("and it's succesful", () => {
      beforeAll(async () => {
        mockSaveSuccess()
        await stickerRepository.save(mockSticker)
      })

      it('connects to the database', () => {
        expect(mockConnect).toHaveBeenCalledTimes(1)
      })

      it('saves the sticker', () => {
        expect(mockSave).toHaveBeenCalledTimes(1)
      })

      it('disconnects from the database', () => {
        expect(mockDisconnect).toHaveBeenCalledTimes(1)
      })
    })

    describe('and there is an error', () => {
      beforeAll(() => {
        mockSaveError()
      })

      it('throws an exception', async () => {
        expect(async () => await stickerRepository.save(mockSticker))
          .rejects.toEqual(new DatabaseError("Error creating sticker",
            DatabaseErrorCodes.SAVE))
      })

      it('generates an error log', () => {
        expect(mockLoggerError).toHaveBeenCalledTimes(1)
        expect(mockLoggerError).toHaveBeenCalledWith("Error creating sticker", {
          local: 'sticker-repository',
          method: 'save',
          code: DatabaseErrorCodes.SAVE,
          exception: 'error saving sticker',
        })
      })
    })
  })
})
