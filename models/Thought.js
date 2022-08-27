const { Schema, model, Types } = require('mongoose');

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: [1, 'Please share more of your thoughts'],
      maxLength: [280, 'Oops, you\'ve rambled on too long!']
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    username: {
      type: String,
      required: true
    }
  }
)

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;