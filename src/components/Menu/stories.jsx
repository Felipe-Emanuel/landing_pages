import { Menu } from './Menu';

import linksMock from '../NavLinks/mook';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Menu',
  component: Menu,
  args: {
    links: linksMock,
    logoData: {
      text: 'Logo',
      link: '#target',
      srcImg: '',
    },
  },
};

export const template = (args) => {
  return (
    <div>
      <Menu {...args} />
    </div>
  );
};
