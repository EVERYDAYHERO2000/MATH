import Logo from './Logo.vue';

export default {
  title: 'Example/Logo',
  component: Logo,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Logo },
  template: '<Logo />',
});

export const Primary = Template.bind({});
Primary.args = {
};


