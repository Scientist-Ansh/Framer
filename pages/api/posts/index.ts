import { NextApiRequest, NextApiResponse } from 'next';

import { getAllPostsData, addPost } from '../../../lib/posts';
import { Post } from '../../../lib/dummyData';

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    addPost(req.body as Post);
  }
  const posts = getAllPostsData();
  console.log(posts);
  res.status(200).json(posts);
};
