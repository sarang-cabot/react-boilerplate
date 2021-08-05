import StyledCard from './card.styled';

interface CardProps {
  children: JSX.Element | string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}
function Card({ children, onClick }: CardProps): JSX.Element {
  return <StyledCard onClick={onClick}>{children}</StyledCard>;
}
Card.defaultProps = {
  onClick: () => {
    /* */
  },
};
export default Card;
