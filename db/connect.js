import mongoose from 'mongoose'

export default async function connect(){
  return mongoose.connect(process.env.MONGO_URI);
}