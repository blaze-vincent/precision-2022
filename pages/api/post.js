import nextConnect from "../../middleware/nextConnect";
import requireAuthentication from "../../middleware/requireAuthentication";
import multer from "multer";
import path from "path";
import Image from '../../db/models/image'
import Post from '../../db/models/post'
import ImagePostAssociation from '../../db/models/imagePostAssociation'

const storage = multer.diskStorage({
  destination: path.join(__dirname, "../../../../public/uploads"),
  filename: function(req, file, cb){
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
})

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const mimeWhitelist = ["image/png", "image/jpg", "image/jpeg"]
    if(mimeWhitelist.includes(file.mimetype)){
      cb(null, true);
    } else {
      if(!req.failedFiles){
        req.failedFiles = [];
      }
      req.failedFiles.push(file.originalname);
      return cb(null, false);
    }
  }
})

export const config = {
  api: {
    bodyParser: false,
  },
}

const handler = new nextConnect()
.use(requireAuthentication)
.post(upload.array('image'), async (req, res) => {
  if(req.failedFiles){
    return res
      .status(415)
      .json({
        error: `The following images were rejected on the basis of file format: ${
          req.failedFiles.join(', ')
        }. Accepted file formats are .png, .jpg, and .jpeg.`
      })
  }

  const {textContent} = req.body; 

  const post = await Post.create({
    textContent,
    f_accountId: req.session.uid
  });

  const ipaIds = [];
  for(let image of req.files){
    const description = req.body['description-' + image.originalname];

    const dbImage = await Image.create({
      resourceURL: image.filename,
      f_accountId: req.session.uid,
      description
    })

    const ipa = await ImagePostAssociation.create({
      f_postId: post._id,
      f_imageId: dbImage._id
    });
    ipaIds.push(ipa._id);
  }

  //create database objects
  return res.status(200).json({ipaIds})
})

export default handler;