import { GoTop } from './GoTop';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'GoTop',
  component: GoTop,
  args: {
    children: 'GoTop'
  },
  argTypes: {
    children: { type: 'string' },
  }
}

export const template = (args) => {
  return (
    <div style={{ height: '400vh' }}>
      <GoTop {...args} />
    </div>
  )
}
