import express from "express";
const router = express.Router();

//admmin panel route
router.get('/', (req, res) => {
    res.send('this is admin route');
});


//admin panel see all profiles
router.get('/all-profiles', (req, res) => {
    res.send('this is admin 101 route');
});


//admin profile see all questions
router.get('/questions', (req, res) => {
    res.send('this is admin 102 route');
});


//admin panel easy
router.get('/questions/easy', (req, res) => {
    res.send('this is admin 102 route');
});

router.post('/questions/easy', (req, res) => {
    res.send('this is admin 102 route');
});


//admin panel med
router.get('/questions/medium', (req, res) => {
    res.send('this is admin 102 route');
});

router.post('/questions/medium', (req, res) => {
    res.send('this is admin 102 route');
});


//admin panel hard
router.get('/questions/hard', (req, res) => {
    res.send('this is admin 102 route');
});

router.post('/questions/hard', (req, res) => {
    res.send('this is admin 102 route');
});

// export the router module so that indexcan .js file can use it
module.exports = router;