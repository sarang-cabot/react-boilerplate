import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  font-size: ${({ theme: { fonts } }) => fonts.sizes.medium};
`;

export const DetailContainer = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const PostImage = styled.img`
  max-width: 150px;
  max-height: 200px;
`;

export const Description = styled.div`
  padding: 10px;
`;
