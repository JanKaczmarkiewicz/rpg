import { NextApiHandler } from 'next';

const handler: NextApiHandler = (req, res) => {
  res.statusCode = 200;
  res.json({ maps: [] });
};

export default handler;