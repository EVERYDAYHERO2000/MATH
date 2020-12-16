import Switcher from './Switcher.vue';
import Ripple from '/@fn/ripple-effect/ripple-effect';

export default {
  title: 'Example/Switcher',
  component: Switcher,
  argTypes: {
    check: {
        control: 'boolean'
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
  components: { Switcher },
  ...globalDirectives,
  template: '<Switcher v-bind="$props" />',
});

export const Component = Template.bind({});
Component.args = {
  check: true,
};
