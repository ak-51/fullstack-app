import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import dotenv from 'dotenv'


const app = express()
app.use(cors())
app.use(express.json())

export default app