import styled, { css } from 'styled-components';

export const Container = styled.footer`
  text-align: center;

  ${({ theme }) => css`
    a {
      color: inherit;
      text-decoration: none;
      font-size: ${theme.font.sizes.small};
    }
  `}
`;
