const mongoose = require('mongoose')

const incomeSchema = new mongoose.Schema({
  item: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Income', incomeSchema)
