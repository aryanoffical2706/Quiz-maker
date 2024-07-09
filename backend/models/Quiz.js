
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  questionText: String,
  options: [String],
  correctAnswer: Number,
});

const quizSchema = new Schema({
  title: String,
  questions: [questionSchema],
});

module.exports = mongoose.model('Quiz', quizSchema);
