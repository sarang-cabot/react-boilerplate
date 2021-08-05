import { useQuery } from 'react-query';
import { getPost } from 'api';
import Layout from 'components/layout';
import { Post as PostType } from 'api/models';
import { useState } from 'react';
import Button from 'components/buttton';
import PostDetail from './postdetail';
import EditPost from './editpost';

interface PostProps {
  postId: number;
}
const initialData: PostType = {
  id: 0,
  image: '',
  title: '',
  description: '',
};

function Post({ postId }: PostProps): JSX.Element {
  const [isEditing, setEditing] = useState(false);
  const {
    isError,
    isLoading,
    data = initialData,
  } = useQuery(`posts/${postId}`, getPost(postId));

  return (
    <Layout error={isError} loading={isLoading}>
      <div>
        {isEditing ? (
          <EditPost post={data} onSave={() => setEditing(false)} />
        ) : (
          <PostDetail post={data} />
        )}
        {!isEditing && (
          <Button onClick={() => setEditing((prevVal) => !prevVal)}>
            Edit
          </Button>
        )}
      </div>
    </Layout>
  );
}
export default Post;
