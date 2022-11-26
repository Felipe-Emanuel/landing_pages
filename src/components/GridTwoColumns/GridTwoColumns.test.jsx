import { renderTheme } from '../../styles/render-theme';
import { GridTwoColumns } from './GridTwoColumns';
import mock from './mock';

describe('<GridTwoColumns />', () => {
  it('should render Grid Two Columns', () => {
    const {container} = renderTheme(<GridTwoColumns {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
