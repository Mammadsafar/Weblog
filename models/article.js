const mongoose = require('mongoose');
const essentialSchema = {
  type: String,
  trim: true,
};

const articleSchema = new mongoose.Schema({
  title: {
    ...essentialSchema,
    required: true,
  },
  summery: {
    ...essentialSchema,
    default: ''
  },
  text: {
    ...essentialSchema,
    default: ''
  },
  profile: {
    ...essentialSchema,
    default: '/images/articles/images/profiles/default.jpg'
  },
  owner: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  lastUpdate: {
    type: Date,
    default: new Date(),
  },

})




module.exports = mongoose.model('Article', articleSchema);