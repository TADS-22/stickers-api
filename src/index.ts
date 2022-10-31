import 'express-async-errors'
import express from 'express'
import { errorHandler } from './modules/middlewares/error'

const app = express()

app.use(express.json())
app.use(errorHandler)

app.listen(3000, () => console.log('Server is up!'))
