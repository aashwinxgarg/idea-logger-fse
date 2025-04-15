const mongoose = require('mongoose');

const ideaSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is empty'],
    minlength: [3, 'Title is short'],
    maxlength: [100, 'Title too long'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    minlength: [10, 'Description mis short'],
    maxlength: [1000, 'Description is too long'],
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
}, {
  timestamps: true,
});

module.exports = mongoose.model('Idea', ideaSchema);
