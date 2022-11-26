import { screen } from '@testing-library/react';

import { renderTheme } from '../../styles/render-theme';
import { NavLinks } from './NavLinks';
import { theme } from '../../styles/theme';
import mook from './mook';


describe('<NavLinks />', () => {
  it('should render links', () => {
    renderTheme(<NavLinks links={mook} />);
    expect(screen.getAllByRole('link')).toHaveLength(mook.length);
  });

  it('should not render links', () => {
    renderTheme(<NavLinks />);
    expect(screen.queryAllByText(/links/i)).toHaveLength(0);
  });

  it('should work with mediaQuery', () => {
    renderTheme(<NavLinks links={mook} />);
    expect(screen.getByText(/link 10/i).parentElement).toHaveStyleRule(
      'flex-flow',
      'column wrap',
      {
        media: theme.media.ltmMedium
      },
    );
  });

  it('should match a Snapshot links', () => {
    const {container} = renderTheme(<NavLinks links={mook} />);
    expect(container).toMatchSnapshot();
  });
});
