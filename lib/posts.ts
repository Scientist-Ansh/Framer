import { Posts } from './dummyData';
import { Post } from './dummyData';

globalThis.posts = globalThis.posts ?? Posts;

export function getAllPostsData() {
  // return id, title, date
  return globalThis.posts.map((post) => {
    return {
      id: post.id,
      title: post.title,
      date: post.date,
    };
  });
}

export function getPostData(id: string): Post | null {
  // return post with id from Posts
  const post = globalThis.posts.find((post) => post.id === id);
  if (!post) {
    return null;
  }
  return post;
}

// create a function to add post
export function addPost(post: Post) {
  // add post to Posts
  globalThis.posts.push(post);
}
