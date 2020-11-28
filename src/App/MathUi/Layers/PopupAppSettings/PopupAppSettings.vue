<template>
  <Popup ref="popup" v-bind:title="D('App Settings')">
    <template v-slot:body>
      <FormField v-bind:label="D('Dark UI theme')">
        <switcher v-bind:check="theme == 'dark'" v-on:toggle="toggleTheme" />
      </FormField>
    </template>
  </Popup>
</template>

<script>
import Popup from '/@components/Popup/Popup.vue';
import Button from '/@components/Button/Button.vue';
import Switcher from '/@components/Switcher/Switcher.vue';
import FormField from '/@components/FormField/FormField.vue';

export default {
  name: 'PopupAppSettings',
  props: {},
  data: function () {
    return {
      theme: null,
    };
  },
  mounted: function(){
    let ls = localStorage.theme;
    this.theme = (ls) ? ls : 'light';
  },
  methods: {
    toggleTheme: function (evt) {
      this.theme = evt ? 'dark' : 'light';
      localStorage.setItem('theme', this.theme);
      this.$root.theme = this.theme
    },
  },
  components: {
    Popup,
    Button,
    Switcher,
    FormField,
  },
};
</script>

<style lang="scss">
@import '../../../../css/main.scss';
</style>
