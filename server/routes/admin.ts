import express from "express";
const router = express.Router();

router.get('/', (req, res) => {
    res.send('this is admin route');
//admin panel
});

router.get('/all-profiles', (req, res) => {
    res.send('this is admin 101 route');
//see all profile registered
});

router.get('/questions', (req, res) => {
    res.send('this is admin 102 route');
//see all the questions added 
});

router.get('/questions/easy', (req, res) => {
    res.send('this is admin 102 route');
//see all the questions added 
});
router.get('/questions/easy', (req, res) => {
    res.send('this is admin 102 route');
//see all the questions added 
});

router.get('/questions/medium', (req, res) => {
    res.send('this is admin 102 route');
//see all the questions added 
});

router.get('/questions/hard', (req, res) => {
    res.send('this is admin 102 route');
//see all the questions added 
});

// export the router module so that indexcan .js file can use it
module.exports = router;