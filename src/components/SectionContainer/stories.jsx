import { SectionContainer } from './SectionContainer';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nostrum consectetur neque omnis ducimus temporibus accusantium deleniti impedit, tempore itaque sunt commodi perspiciatis sint voluptatibus repellat? Itaque, possimus officia? Tenetur.</p>
      </div>
    )
  },
  argTypes: {
    children: { type: '' },
  }
}

export const template = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  )
}
