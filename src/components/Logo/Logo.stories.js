import Logo from './Logo.vue';

export default {
  title: 'Example/Logo',
  component: Logo,
};

const Template = (args, { argTypes }) => ({
  components: { Logo },
  template: '<Logo />',
});

export const Component = Template.bind({});


