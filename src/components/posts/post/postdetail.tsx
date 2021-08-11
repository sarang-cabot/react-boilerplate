import { Post } from 'api/models';
// eslint-disable-next-line no-use-before-define
import React from 'react';
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
export default React.memo(PostDetail);
