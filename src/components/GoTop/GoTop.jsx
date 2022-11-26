import * as Styled from './styles';

import {ArrowDropUp} from '@styled-icons/material-outlined/ArrowDropUp'

export const GoTop = () => {
  return (
    <Styled.Container href='#' aria-label='Go to top' title='Go to top'>
      <ArrowDropUp />
    </Styled.Container>
  );
};
