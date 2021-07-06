import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

dotenv.config()
const port = process.env.PORT || 8000
const url = process.env.DB_URI

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const noteSchema = new mongoose.Schema({
    title: String,
    content: String,
    favnum: Number
})

const Note = mongoose.model('Note', noteSchema)

app.post('/api/notes', (req, res) => {
    const ttl = req.body.ttl
    Note.find({ title: ttl }).then(notes => {
        res.json(notes)
    })
})