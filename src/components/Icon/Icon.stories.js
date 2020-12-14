import Logo from './Icon.vue';

export default {
  title: 'Example/Icon',
  component: Logo,
  argTypes: {
    name: { control: { type: 'select', options: ['add', 'close', 'cross'] } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Logo },
  template: '<Logo />',
});

export const Add = Template.bind({});
Add.args = {
    name: 'add'
};


