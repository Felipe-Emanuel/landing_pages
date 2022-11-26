import { renderTheme } from '../../styles/render-theme';
import { GridContent } from './GridContent';
import mock from './mock'

describe('<GridContent />', () => {
  it('should match a snapshot', () => {
    const{ container } = renderTheme(<GridContent {...mock} />);
    expect(container).toMatchSnapshot();
  });

  it('should match a false background', () => {
    const{ container } = renderTheme(<GridContent {...mock} background={undefined}/>);
    expect(container).toMatchSnapshot();
  });
});
