import { useQuery } from 'react-query';
import { posts as postsAPI } from 'api';
import { useEffect, useState } from 'react';
import Layout from 'components/layout';
import PostCard from './postcard';
import PostDetail from './postdetail';
import { PostContainer, PostCardSection } from './post.styled';

function PostsPage(): JSX.Element {
  const { isError, isLoading, data } = useQuery('posts', postsAPI);
  const [selectedPost, setPost] = useState<number>();

  useEffect(() => {
    if (data) setPost(data[0]?.id);
  }, [data]);

  function cardHandler(id: number) {
    return function onClick() {
      setPost(id);
    };
  }

  return (
    <Layout error={isError} loading={isLoading}>
      <PostContainer>
        <PostCardSection>
          {data?.map(({ title, image, id }) => (
            <PostCard
              onClick={cardHandler(id)}
              title={title}
              image={image}
              key={id}
            />
          ))}
        </PostCardSection>
        {selectedPost && <PostDetail postId={selectedPost} />}
      </PostContainer>
    </Layout>
  );
}
export default PostsPage;
