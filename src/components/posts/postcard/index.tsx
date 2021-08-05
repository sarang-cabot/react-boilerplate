import Card from 'components/card';
import Title, {
  PostContainer,
  InfoSection,
  PostImage,
} from './postcard.styled';

interface PostCardProps {
  vertical?: boolean;
  title: string;
  image: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

function PostCard({
  vertical,
  title,
  image,
  onClick,
}: PostCardProps): JSX.Element {
  return (
    <Card onClick={onClick}>
      <PostContainer>
        <PostImage src={image} alt="post" />
        <InfoSection>
          <Title>{title}</Title>
        </InfoSection>
      </PostContainer>
    </Card>
  );
}
PostCard.defaultProps = {
  vertical: true,
  onClick: () => {
    /* */
  },
};
export default PostCard;
