// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import mongoConnect from "../../db/connect"
import Test from "../../db/models/test";

export default async function handler(req, res) {
  try {
    await mongoConnect();

    await Test.create({name: 'first', email: 'something2@test.com'})

    const data = await Test.find()
    res.status(200).json({data});
  } catch (error) {
    res.status(500).json({error})
  }
}
