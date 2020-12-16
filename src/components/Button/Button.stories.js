import Button from './Button.vue';
import Ripple from '/@fn/ripple-effect/ripple-effect';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['black', 'primary', 'active', 'content', 'danger', 'success'],
      },
    },
    title: {
        control: 'text'
    },
    lable: {
        control: 'text'
    }
  },
};

const globalDirectives = {
    created: function(){
        this.$.appContext.app.directive('ripple', Ripple);
    }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Button },
  ...globalDirectives,
  template: '<Button v-bind="$props" />',
});

export const component = Template.bind({});
component.args = {
  color: 'primary',
  label: 'Купить'
};
