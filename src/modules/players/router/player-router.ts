import { Router } from "express";
import { requestBodyValidator } from "../../middlewares/validation";
import { playerController } from "../controller";
import { createPlayerValidator } from "../validator";

const playerRouter = Router()

playerRouter.post('/', 
    requestBodyValidator(createPlayerValidator), 
    playerController.save
)

playerRouter.get('/', playerController.findAll)
playerRouter.get('/:id', playerController.findById)
playerRouter.get('/country/:country', playerController.findByCountry)

export {
    playerRouter
}