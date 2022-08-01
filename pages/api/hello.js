// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Account from '../../db/models/account'

import nextConnect from "../../middleware/nextConnect"

const handler = nextConnect()
.get(async (req, res) => {
  req.session.isAuth = true;
  const data = await Account.find()
  res.status(200).json({
    session: req.session,
    data
  });
})

export default handler;