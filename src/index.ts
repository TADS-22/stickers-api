import 'express-async-errors'
import express from 'express'
import { errorHandler } from './modules/middlewares/error'
import { stickerRouter } from './modules/stickers/router'

const app = express()

app.use(express.json())
app.use(errorHandler)

app.use('/api/stickers', stickerRouter)

app.listen(3000, () => console.log('Server is up!'))
