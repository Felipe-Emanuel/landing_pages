import { NavLinks } from './NavLinks';
import links from './mook'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'NavLinks',
  component: NavLinks,
  args: {
    links: links
  },
  argsTypes: {
    links: { type: '' },
  }
}

export const template = (args) => {
  return (
    <div>
      <NavLinks {...args} />
    </div>
  )
}
