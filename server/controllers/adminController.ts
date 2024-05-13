const Easy = require('../models/easyModel')

//easy
const createEasyQuestions = async (req: any, res: any) => {
    const {content, code, options} = req.body

    try{
        const easy = await Easy.create({content, code, options})
        res.status(200).json(easy)
    }catch(error){
        res.status(400).json({ error: (error as Error).message });
    }
}
//med

//hard

module.exports = {
    createEasyQuestions
}