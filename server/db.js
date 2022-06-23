const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/diary');

const diarySchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  headline: {
    type: String,
    required: true,
  },
  accomplishments: String,
  gratitude: String,
  tomorrow: String,
  mood: Number,
  picture: String,
})

const Diary = mongoose.model('Diary', diarySchema);

module.exports = Diary;