<template>
  <Popup ref="popup" v-bind:title="D('App Settings')">
    <template v-slot:body>
      <FormField v-bind:label="D('Change language')">
        <Select
          v-bind:options="[['ru','Russian Русский'], ['eng','English'], ['zh','Chinese 中文']]"
          v-bind:default="currentLang"
          v-on:input="updateLang"
        />
      </FormField>
      <FormField v-bind:label="D('Dark UI theme')">
        <Switcher v-bind:check="theme == 'dark'" v-on:toggle="toggleTheme" />
      </FormField>
    </template>
  </Popup>
</template>

<script>
import Popup from '/@components/Popup/Popup.vue';
import Button from '/@components/Button/Button.vue';
import Switcher from '/@components/Switcher/Switcher.vue';
import Select from '/@components/Select/Select.vue';
import FormField from '/@components/FormField/FormField.vue';

export default {
  name: 'PopupAppSettings',
  props: {},
  data: function () {
    return {
      theme: null,
    };
  },
  computed: {
    currentLang: function(){
      return (localStorage.lang) ? localStorage.lang : 'eng';
    }
  },
  mounted: function () {
    let ls = localStorage.theme;
    this.theme = ls ? ls : 'light';
  },
  methods: {
    toggleTheme: function (evt) {
      this.theme = evt ? 'dark' : 'light';
      localStorage.setItem('theme', this.theme);
      this.$root.theme = this.theme;
    },
    updateLang: function(evt) {
      localStorage.setItem('lang',evt[0]);

      for (let l in window.lang){
        window.lang[l].$forceUpdate();
      }
    }
  },
  components: {
    Popup,
    Button,
    Switcher,
    FormField,
    Select,
  },
};
</script>

<style lang="scss">
@import '../../../../css/main.scss';
</style>
