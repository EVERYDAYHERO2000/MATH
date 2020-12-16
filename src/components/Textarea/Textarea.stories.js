import Textarea from './Textarea.vue';
import Ripple from '/@fn/ripple-effect/ripple-effect';

export default {
  title: 'Example/Textarea',
  component: Textarea,
  argTypes: {
    placeholder: {
        control: 'text'
    },
    value: {
        control: 'text'
    },
    autofocus: {
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
  components: { Textarea },
  ...globalDirectives,
  template: '<Textarea v-bind="$props" />',
});

export const Component = Template.bind({});
Component.args = {
  placeholder: 'Math Entities',
};
