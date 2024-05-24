import express from "express";
const app = express();
const mongoose = require("mongoose");
// import cors from 'cors';

//dotenv
require("dotenv").config();


// Include route files
const adminRoute = require("./routes/admin");
const quizRoute = require("./routes/quiz");


//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//cors
// const corsOptions = {
//   origin: 'http://localhost:5173',
//   optionsSuccessStatus: 200 
// };

// app.use(cors(corsOptions));


//routes
app.get("/", (req, res) => {
  // res.json({ message: "Hello World" })
  res.send("<h1> HomePage </h1>");
});


// Use routes
app.use("/admin", adminRoute);
app.use("/quiz", quizRoute);


// global error handler
app.use(function (err: any, req: any, res: any, next: any) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});


// connect db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Connected to DB & Server is running on port", process.env.PORT);
    });

  })
  .catch((error: any) => {
    console.log(error);
  });

