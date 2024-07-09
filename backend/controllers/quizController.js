
const Quiz = require('../models/Quiz');

exports.createQuiz = async (req, res) => {
  const { title, questions } = req.body;
  try {
    const quiz = new Quiz({ title, questions });
    await quiz.save();
    res.status(201).json(quiz);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getQuiz = async (req, res) => {
  const { id } = req.params;
  try {
    const quiz = await Quiz.findById(id);
    res.status(200).json(quiz);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.status(200).json(quizzes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.submitQuiz = async (req, res) => {
  const { quizId, answers } = req.body;
  try {
    const quiz = await Quiz.findById(quizId);
    let score = 0;
    quiz.questions.forEach((question, index) => {
      if (question.correctAnswer === answers[index]) {
        score++;
      }
    });
    res.status(200).json({ score });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
