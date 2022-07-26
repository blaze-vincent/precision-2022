import { Schema, model, models } from 'mongoose';

const ImagePostAssociationSchema = new Schema({
  f_imageId: {
    required: true,
    type: Schema.Types.ObjectId,
    ref: 'Image'
  },
  f_postId: {
    required: true,
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }
})

module.exports = models.ImagePostAssociation || model('ImagePostAssociation', ImagePostAssociationSchema)