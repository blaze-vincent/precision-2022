import { Schema, model, models } from 'mongoose';

const ImageSchema = new Schema({
  description: String,
  resourceURL: {
    type: String,
    required: true
  },
  f_accountId: {
    required: true,
    type: Schema.Types.ObjectId,
    ref: 'Account'
  }
})

module.exports = models.Image || model('Image', ImageSchema)