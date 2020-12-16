import ButtonIcon from './ButtonIcon.vue';
import Ripple from '/@fn/ripple-effect/ripple-effect';

export default {
  title: 'Example/ButtonIcon',
  component: ButtonIcon,
  argTypes: {
    icon: {
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
    title: {
        control: 'text'
    },
    pressed: {
      control: 'boolean'
    },
    size: {
      control: {
        type: 'select',
        options: ['s', 'm', 'l'],
      },
    },
  },
};

const globalDirectives = {
  created: function(){
      this.$.appContext.app.directive('ripple', Ripple);
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ButtonIcon },
  ...globalDirectives,
  template: '<ButtonIcon v-bind="$props" />',
});

export const Component = Template.bind({});
Component.args = {
  icon: 'add',
  color: 'primary',
};
