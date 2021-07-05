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

app.get('/api/notes', (req, res) =>{
    Note.find({}).then(notes => {
        res.json(notes)
        mongoose.connection.close()
    })
})

```
const nt1 = new Note({
    title: "2nd note",
    content: "im learning react + mongoose",
    favnum: 75
})

nt1.save().then(result => {
    console.log('note saved')
    mongoose.connection.close()
})
```