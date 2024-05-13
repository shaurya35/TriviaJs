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
    option1: {
        type: String,
        required: true
    },
    option2: {
        type: String,
        required: true
    },
    option3: {
        type: String,
        required: true
    },
    option4: {
        type: String,
        required: true
    }

}, {timestamps: true})

module.exports = mongoose.model('Easy', easyQuestions)