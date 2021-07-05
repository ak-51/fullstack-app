import mongoose from 'mongoose'
import app from './server.js'
dotenv.config()
const port = process.env.PORT || 8000
const url = process.env.DB_URI

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const noteSchema = new mongoose.Schema({
    title: String,
    content: String,
    favnum: Number
})

const Note = mongoose.model('Note', noteSchema)

const nt1 = new Note({
    title: "2nd note",
    content: "im learning react + mongoose",
    favnum: 75
})

nt1.save().then(result => {
    console.log('note saved')
    mongoose.connection.close()
})