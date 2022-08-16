// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nextConnect from "../../middleware/nextConnect"

import multer from 'multer'

const upload = multer()
export const config = {
  api: {
    bodyParser: false,
  },
}

const handler = nextConnect()
.post(upload.none(), (req, res) => {
  res.status(200).json({"test": "success"})
})

export default handler;