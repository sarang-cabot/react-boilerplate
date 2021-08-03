import { useQuery } from 'react-query';
import postsAPI from 'api';
import PostCard from 'components/postcard';

const imageURL = 'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg';
function PostsPage(): JSX.Element {
  const { isLoading, isError, data } = useQuery('posts', postsAPI);
  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Something went wrong!</div>;

  return (
    <div>
      {data?.map(({ title, body }) => (
        <PostCard title={title} content={body} image={imageURL} />
      ))}
    </div>
  );
}
export default PostsPage;
