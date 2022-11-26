import { GridImage } from './GridImage';
import mock from './mock'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'GridImage',
  component: GridImage,
  args: mock
}

export const template = (args) => {
  return (
    <div>
      <GridImage {...args} />
    </div>
  )
}
