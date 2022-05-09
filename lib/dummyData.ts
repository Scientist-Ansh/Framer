export type Post = {
  id: string;
  title: string;
  date: string;
  content: string;
};
export const Posts: Post[] = [
  {
    id: '1',
    title: 'Post 1',
    date: '2022-05-06',
    content: `A dummy Post, which will be rendered on the screen
some thing good here
It has formatting as well thats it`,
  },
  {
    id: '2',
    title: 'Post 2',
    date: '2022-05-07',
    content: `A dummy Post, which will be rendered on the screen
some thing good here`,
  },
];
