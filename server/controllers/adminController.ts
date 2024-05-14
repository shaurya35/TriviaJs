const Question = require("../models/questionsModel");
const mongoose = require("mongoose");

//get all questions
const getAllQuestions = async (req: any, res: any) => {
  const questions = await Question.find({}).sort({ createdAt: -1 });
  res.status(200).json(questions);
};

//get question by id
const getQuestionById = async (req: any, res: any) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such valid id" });
  }
  const question = await Question.findById(id);
  if (!question) {
    return res.status(404).json({ error: "No Such Question" });
  }
  res.status(200).json(question);
};

//delete question
const deleteQuestion = async (req: any, res: any) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such valid id" });
  }
  const question = await Question.findOneAndDelete({ _id: id });
  if (!question) {
    return res.status(404).json({ error: "No Such Question" });
  }
  res.status(200).json(question);
};

//update question
const updateQuestion = async (req: any, res: any) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such valid id" });
  }
  const question = await Question.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!question) {
    return res.status(404).json({ error: "No Such Question" });
  }
  res.status(200).json(question);
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
  getAllQuestions,
  getQuestionById,
  createQuestions,
  deleteQuestion,
  updateQuestion,
  getEasyQuestions,
  getMedQuestions,
  getHardQuestions,
};
