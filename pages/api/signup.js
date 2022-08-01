import nextConnect from "../../middleware/nextConnect";
import bcrypt from 'bcryptjs'
import Account from '../../db/models/account'

//todo: enforce superadmin privileges
const handler = nextConnect()
.post(async (req, res) => {
  const {
    username,
    password
  } = req.body;

  if(await Account.findOne({username})){
    return res.status(409).json({error: "This username is unavailable."});
  }

  const passwordHash = await bcrypt.hash(password, 12);

  const account = await Account.create({
    username, passwordHash
  });

  return res.status(201).json({id: account._id});
  
})

export default handler;