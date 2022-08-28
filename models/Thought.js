const { Schema, model, Types } = require('mongoose');
const formatDate = require('../utils/formatDate');

const ReactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280
    },
    username:{
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: new Date(),
      get: (createdAtVal) => formatDate(createdAtVal)
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: [1, 'Please share more..'],
      maxLength: [280, 'Oops, you\'ve rambled on too long!']
    },
    createdAt: {
      type: Date,
      default: new Date(),
      get: (createdAtVal) => formatDate(createdAtVal)
    },
    username: {
      type: String,
      required: true
    },
    reactions: [ReactionSchema]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

ThoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;