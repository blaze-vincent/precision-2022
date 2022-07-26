import { Schema, model, models } from 'mongoose';

const ServiceSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  featured: {
    type: Boolean,
    required: true,
    default: false
  },
  f_accountId: {
    required: true,
    type: Schema.Types.ObjectId,
    ref: 'Account'
  }
})

module.exports = models.Service || model('Service', ServiceSchema)