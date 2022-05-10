// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connect from "../../db/connect"

export default async function handler(req, res) {
  try {
    await connect();
    res.status(200).send('it must be working')
  } catch (error) {
    res.status(500).error(error)
  }
}
