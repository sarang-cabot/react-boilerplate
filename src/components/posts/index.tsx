import { useQuery, useQueryClient } from 'react-query';
import { posts as postsAPI } from 'api';
import { useEffect, useState } from 'react';
import Layout from 'components/layout';
import Button from 'components/buttton';
import PostCard from './postcard';
import PostDetail from './postdetail';
import { PostContainer, PostCardSection, ButtonContainer } from './post.styled';

function PostsPage(): JSX.Element {
  const { isError, isLoading, data } = useQuery('posts', postsAPI);
  const queryClient = useQueryClient();
  const [selectedPost, setPost] = useState<number>();
  useEffect(() => {
    if (data && !selectedPost) setPost(data[0]?.id);
  }, [data, selectedPost]);

  function cardHandler(id: number) {
    return function onClick() {
      setPost(id);
    };
  }
  function reloadPostsHandler() {
    queryClient.refetchQueries(['posts'], { exact: true });
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
          <ButtonContainer>
            <Button onClick={reloadPostsHandler}> Reload Posts</Button>
          </ButtonContainer>
        </PostCardSection>
        {selectedPost && <PostDetail postId={selectedPost} />}
      </PostContainer>
    </Layout>
  );
}
export default PostsPage;
