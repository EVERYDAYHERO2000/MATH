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
      <FormField v-bind:label="D('Multiplication sign')">
        <Select
          v-bind:options="[['cross','×'], ['dot','·']]"
          v-bind:default="currentMultiplicationSign"
          v-on:input="updateMultiplicationSign"
        />
      </FormField>
      <FormField v-bind:label="D('Division sign')">
        <Select
          v-bind:options="[['colon',':'],['division','÷']]"
          v-bind:default="currentDivisionSign"
          v-on:input="updateDivisionSign"
        />
      </FormField>
      <FormField v-bind:label="D('Decimal separator')">
        <Select
          v-bind:options="[['point','.'], ['comma',',']]"
          v-bind:default="currentDecimalSign"
          v-on:input="updateDecimalSign"
        />
      </FormField>
      <FormField v-bind:label="D('Dark UI theme')">
        <Switcher v-bind:check="theme == 'dark'" v-on:toggle="updateTheme" />
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
    },
    currentMultiplicationSign: function(){
      return (localStorage.multiplicationSign) ? localStorage.multiplicationSign : 'dot'
    },
    currentDivisionSign: function(){
      return (localStorage.divisionSign) ? localStorage.divisionSign : 'colon'
    },
    currentDecimalSign: function(){
      return (localStorage.decimalSign) ? localStorage.decimalSign : 'point'
    }
  },
  mounted: function () {
    let ls = localStorage.theme;
    this.theme = ls ? ls : 'light';
  },
  methods: {
    updateTheme: function (evt) {
      this.theme = evt ? 'dark' : 'light';
      localStorage.setItem('theme', this.theme);
      this.$root.theme = this.theme;
    },
    updateLang: function(evt) {
      localStorage.setItem('lang',evt[0]);

      for (let l in window.lang){
        window.lang[l].$forceUpdate();
      }
    },
    updateMultiplicationSign: function(evt) {
      localStorage.setItem('multiplicationSign',evt[0]);
    },
    updateDivisionSign: function(evt) {
      localStorage.setItem('divisionSign',evt[0]);
    },
    updateDecimalSign: function(evt) {
      localStorage.setItem('decimalSign',evt[0]);
    },  
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
</style>
