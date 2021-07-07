import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import bcrypt from 'bcryptjs'

const app = express()
app.use(cors())
app.use(express.json())

dotenv.config()
const port = process.env.PORT || 8000
const url = process.env.DB_URI

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = mongoose.model('User', userSchema)

app.post('/api/register', (req, res) => {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(req.body.password, salt, function(err, hash) {
            const user = new User({
                name: req.body.name,
                email: req.body.email,
                password: hash
            })
            user.save().then(result => {
                res.json({note:"saved"})
                mongoose.connection.close()
            })
        })
    })
    
})