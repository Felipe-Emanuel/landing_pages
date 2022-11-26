import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles'

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    gap: ${theme.spacings.large};

    @media ${theme.media.ltmMedium} {
      grid-template-columns: 1fr;
    }

    ${Title} {
      margin-bottom: ${theme.spacings.xlarge};
    }
  `}
`;

export const TextComponent = styled.div`
  ${({ theme }) => css`
  @media ${theme.media.ltmMedium} {
      margin-bottom: ${theme.spacings.large};
      text-align: center;
    }`}
`;

export const ImageCointainer = styled.div`
  ${({ theme }) => css``}
`;

export const Image = styled.img`
  ${({ theme }) => css``}
`;
