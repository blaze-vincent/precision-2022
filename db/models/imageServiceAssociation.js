import { Schema, model, models } from 'mongoose';

const ImageServiceAssociationSchema = new Schema({
  f_imageId: {
    required: true,
    type: Schema.Types.ObjectId,
    ref: 'Image'
  },
  f_serviceId: {
    required: true,
    type: Schema.Types.ObjectId,
    ref: 'Service'
  }
})

module.exports = models.ImageServiceAssociation || model('ImageServiceAssociation', ImageServiceAssociationSchema)