import { MenuLink } from './MenuLink';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'MenuLink',
  component: MenuLink,
  args: {
    children: 'MenuLink',
    link: 'https://www.google.com.br/',
  },
  argTypes: {
    children: { type: 'string' },
  }
}

export const template = (args) => {
  return (
    <div style={{ display: 'flex' }}>
      <MenuLink {...args} />
    </div>
  )
}
