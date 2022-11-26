import P from 'prop-types';
import * as Styled from './styles';

import { SectionBackground } from '../SectionBackground/SectionBackground';
import { Heading } from '../Heading/Heading';
import { TextComponent } from '../TextComponent/TextComponent';

export const GridTwoColumns = ({ title, text, srcImg, background = false }) => {
  return (
    <SectionBackground background={background}>
      <Styled.Container background={background}>
        <Styled.TextComponent>
          <Heading uppercase colorDark={!background} as='h2'>
            {title}
          </Heading>
          <TextComponent>{text}</TextComponent>
        </Styled.TextComponent>
        <Styled.ImageCointainer>
          <Styled.Image src={srcImg} alt={title} />
        </Styled.ImageCointainer>
      </Styled.Container>
    </SectionBackground>
  );
};

GridTwoColumns.propTypes = {
  title: P.string.isRequired,
  text: P.string.isRequired,
  background: P.bool,
  srcImg: P.string.isRequired,
};
