import mongoose from 'mongoose'

const MONGODB_API_URI = process.env.MONGODB_API_URI

if (!MONGODB_API_URI) {
  throw new Error(
    'missing MONGODB_API_URI environment variable'
  )
}

let cached = global.mongoose
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

export default async function dbConnect() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_API_URI).then(mongoose => {
      return mongoose
    })
  }
  cached.conn = await cached.promise
  return cached.conn
}