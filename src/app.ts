import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import PayRouter from './routes/PayRouter'
import dotenv from 'dotenv'
const app = express()

app.set('port', process.env.PORT || 4000)
dotenv.config()
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/payment', PayRouter)

export default app
