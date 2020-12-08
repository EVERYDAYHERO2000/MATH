import Button from './Button.vue';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Button },
  template: '<button v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  title: 'Button',
};


