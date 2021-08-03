import StyledCard from './card.styled';

interface CardProps {
  children: JSX.Element | string;
}
function Card({ children }: CardProps): JSX.Element {
  return <StyledCard>{children}</StyledCard>;
}
export default Card;
