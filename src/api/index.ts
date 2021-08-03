import { Post } from './models';

const posts = async (): Promise<Post[]> => (
    await fetch('https://jsonplaceholder.typicode.com/posts?page=1')
  ).json() as Promise<Post[]>;

export default posts;
