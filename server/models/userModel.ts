import { Timestamp } from "mongodb"

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const questionSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    userName: {
        type: String,
        required: true,
        unique: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Question', questionSchema)