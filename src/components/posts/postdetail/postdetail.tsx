import { Post } from 'api/models';
import { Container, Title } from './postdetail.styled';

interface PostDetailProps {
  post: Post;
}

function PostDetail({
  post: { title, description },
}: PostDetailProps): JSX.Element {
  return (
    <Container>
      <Title>{title}</Title>
      <div>{description}</div>
    </Container>
  );
}
export default PostDetail;
