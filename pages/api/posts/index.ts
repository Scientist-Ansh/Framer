import { NextApiRequest, NextApiResponse } from 'next';

import { getAllPostsData } from '../../../lib/posts';

export default (_: NextApiRequest, res: NextApiResponse) => {
  const posts = getAllPostsData();
  res.status(200).json(posts);
};
