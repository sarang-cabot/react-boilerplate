import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Input = styled.input``;

export const Title = styled.div`
  font-size: ${({ theme: { fonts } }) => fonts.sizes.medium};
`;
