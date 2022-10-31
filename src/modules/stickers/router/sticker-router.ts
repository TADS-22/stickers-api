import { Router } from "express";
import { requestBodyValidator } from "../../middlewares/validation";
import { stickerController } from "../controller";
import { createStickerValidator } from "../validator";

const stickerRouter = Router()

stickerRouter.get('/:id', stickerController.findById)

stickerRouter.post('/', 
    requestBodyValidator(createStickerValidator),
    stickerController.save
)

export {
    stickerRouter
}
