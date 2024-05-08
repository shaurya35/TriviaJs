import express from "express";
const app = express();

app.get('/', (req, res) => {
    res.send('<h1> hello world </h1>');
});

// Include route files
const adminRoute = require('./routes/admin');
const quizRoute = require('./routes/quiz');

// Use routes
app.use('/admin', adminRoute);
app.use('/quiz', quizRoute);


const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});