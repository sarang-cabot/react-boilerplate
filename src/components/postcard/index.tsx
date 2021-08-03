import Card from 'components/card';
import Title, {
  PostContainer,
  InfoSection,
  PostImage,
  PostContent,
} from './postcard.styled';

interface PostCardProps {
  vertical?: boolean;
  title: string;
  content: string;
  image: string;
}

function PostCard({
  vertical,
  title,
  content,
  image,
}: PostCardProps): JSX.Element {
  return (
    <Card>
      <PostContainer>
        <PostImage src={image} alt="post" />
        <InfoSection>
          <Title>{title}</Title>
          <PostContent>{content}</PostContent>
        </InfoSection>
      </PostContainer>
    </Card>
  );
}
PostCard.defaultProps = {
  vertical: true,
};
export default PostCard;
