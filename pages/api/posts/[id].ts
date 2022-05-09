import { NextApiRequest, NextApiResponse } from 'next';

import { getPostData } from '../../../lib/posts';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const post = getPostData(req.query.id as string);
  res.status(200).json(post);
};
