const Question = require("../models/questionsModel");

//get all questions
const getAllQuestions = async (req: any, res: any) => {
  const question = await Question.find({});
};

//get easy questions
const getEasyQuestions = async (req: any, res: any) => {
  const question = await Question.find({ level: "easy" });
};

//get med questions
const getMedQuestions = async (req: any, res: any) => {
  const question = await Question.find({ level: "medium" });
};

//get hard questions
const getHardQuestions = async (req: any, res: any) => {
  const question = await Question.find({ level: "hard" });
};

//create questions
const createQuestions = async (req: any, res: any) => {
  const { level, content, code, options } = req.body;

  try {
    const question = await Question.create({ level, content, code, options });
    res.status(200).json(question);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};
//med

//hard

module.exports = {
  createQuestions,
};
