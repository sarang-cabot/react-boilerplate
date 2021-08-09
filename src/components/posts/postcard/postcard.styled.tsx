import styled from 'styled-components';

const Title = styled.h1`
  font-family: ${({ theme: { fonts } }) => fonts.primary};
  font-weight: ${({ theme: { fonts } }) => fonts.weights.normal};
  font-size: ${({ theme: { fonts } }) => fonts.sizes.small};
  text-align: center;
  color: ${({
    theme: {
      fonts: { colors },
    },
  }) => colors.medium};
`;
export default Title;
export const PostContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
`;
export const PostImage = styled.img`
  width: 150px;
  height: 100px;
`;
