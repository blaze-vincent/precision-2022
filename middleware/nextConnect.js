import nc from 'next-connect'

export default function nextConnect(){
  return _ => nc({
    onError: (err, req, res) => {
      console.error(err.stack);
      res.status(500).end('A server-side error occurred.')
    },
    onNoMatch: (req, res) => {
      res.status(405).json({error: `Method ${req.method} is not facilitated for this route.`})
    }
  })
}