import nextConnect from "../../middleware/nextConnect";
import requireAuthentication from "../../middleware/requireAuthentication";
import multer from "multer";

const upload = multer({dest: __dirname + "/public/uploads"})

const handler = new nextConnect()
.use(requireAuthentication)
.post(upload.array('photos'), (req, res) => {
  console.log(req.body)
  return res.status(200).json({message: "success"})
})

export default handler;