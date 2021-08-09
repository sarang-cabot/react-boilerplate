import { Post } from 'api/models';
import {
  Container, Title, PostImage, Description,
} from './postdetail.styled';

interface PostDetailProps {
  post: Post;
}

function PostDetail({
  post: { title, description, image },
}: PostDetailProps): JSX.Element {
  return (
    <Container>
      <PostImage src={image} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
}
export default PostDetail;
