import { Schema, model, models } from 'mongoose';

const PostSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  isSuperAdmin: {
    type: Boolean,
    default: false
  },
  passwordHash: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  f_accountId: {
    required: true,
    type: Schema.Types.ObjectId,
    ref: 'Account'
  }
})

module.exports = models.Post || model('Post', PostSchema)