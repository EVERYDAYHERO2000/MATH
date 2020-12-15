import Icon from './Icon.vue';

export default {
  title: 'Example/Icon',
  component: Icon,
  argTypes: {
    name: {
      control: {
        type: 'select',
        options: [
          'add',
          'close',
          'console',
          'layers',
          'menu',
          'remove',
          'math',
          'constant',
          'search',
          'variable',
          'trigonometry',
          'check',
          'dropdown',
        ],
      },
    },
    color: {
      control: {
        type: 'select',
        options: ['black', 'primary', 'active', 'content', 'danger', 'success'],
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Icon },
  template: '<div class="app_theme_light"><Icon v-bind="$props" /></div>',
});

export const Add = Template.bind({});
Add.args = {
  name: 'add',
  color: 'primary',
};
