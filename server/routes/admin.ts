import express from "express";
const router = express.Router();
const Easy = require('../models/easyModel')

//admmin panel route
router.get('/', (req, res) => {
    res.send('admin here');
});


//admin panel see all profiles
router.get('/all-profiles', (req, res) => {
    res.send('admin here- all profiles');
});


//admin profile see all questions
router.get('/questions', (req, res) => {
    res.send('admin here- questions ');
});


//admin panel easy
router.get('/questions/easy', (req, res) => {
    res.send('admin here- questions - getEasy');
});

router.post('/questions/easy', async (req, res) => {
    const {content, code, options} = req.body

    try{
        const easy = await Easy.create({content, code, options})
        res.status(200).json(easy)
    }catch(error){
        res.status(400).json({ error: (error as Error).message });
    }
});

router.delete('/questions/easy/:id', (req, res) => {
    res.send('admin here- questions - deleteEasyById');
});

router.patch('/questions/easy/:id', (req, res) => {
    res.send('admin here- questions - updateEasyById');
});


//admin panel med
router.get('/questions/medium', (req, res) => {
    res.send('admin here- questions - getMed');
});

router.post('/questions/medium', (req, res) => {
    res.send('admin here- questions - postMed');
});

router.delete('/questions/medium/:id', (req, res) => {
    res.send('admin here- questions - deleteMedById');
});

router.patch('/questions/medium/:id', (req, res) => {
    res.send('admin here- questions - updateMedById');
});

//admin panel hard
router.get('/questions/hard', (req, res) => {
    res.send('admin here- questions - getHard');
});

router.post('/questions/hard', (req, res) => {
    res.send('admin here- questions - postHard');
});

router.delete('/questions/hard/:id', (req, res) => {
    res.send('admin here- questions - deleteHardById');
});

router.patch('/questions/hard/:id', (req, res) => {
    res.send('admin here- questions - updateHardById');
});

// export the router module so that indexcan .js file can use it
module.exports = router;