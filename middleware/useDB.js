import dbConnect from "../db/connect"

export default function connectDB(){
  return async (req, res, next) => {
    await dbConnect();
    next();
  }
}