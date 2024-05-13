import { Timestamp } from "mongodb"

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const easyQuestions = new Schema({
    content: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: false
    },
    options: {
        type: [String],
        required: true
    }

}, {timestamps: true})

module.exports = mongoose.model('Easy', easyQuestions)