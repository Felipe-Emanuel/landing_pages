import { Footer } from './Footer';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Footer',
  component: Footer,
  args: {
    html: `<p><a href="https://github.com/Felipe-Emanuel">Feito por Felipe Sullivan</a></p>`
  },
}

export const template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  )
}
