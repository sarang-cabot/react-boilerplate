import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.background};
`;

export const Title = styled.div`
  font-size: ${({ theme: { fonts } }) => fonts.sizes.medium};
`;

export const DetailContainer = styled.div`
  margin-top: 50px;
  width: 90%;
`;
