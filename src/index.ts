import 'express-async-errors'
import express from 'express'
import { errorHandler } from './modules/middlewares/error'
import { stickerRouter } from './modules/stickers/router'
import { playerRouter } from './modules/players/router'

const app = express()

app.use(express.json())
app.use('/api/stickers', stickerRouter)
app.use('/api/players', playerRouter)

app.use(errorHandler)

app.listen(3000, () => console.log('Server is up!'))
