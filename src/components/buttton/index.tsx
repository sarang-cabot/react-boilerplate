import StyledButton from './button.styled';

interface ButtonProps {
  children: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function Button({ children, onClick }: ButtonProps): JSX.Element {
  return (
    <StyledButton onClick={onClick}>
      {' '}
      {children}
      {' '}
    </StyledButton>
  );
}
export default Button;
