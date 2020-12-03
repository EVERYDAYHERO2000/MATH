<template>
  <Popup ref="popup" v-bind:title="D('Export As Image')">
    <template v-slot:body>
      <FormField v-bind:label="D('File Format')">
        <Select
          v-bind:options="[['png','png'], ['jpg','jpg'], ['svg','svg']]"
          v-bind:default="'png'"
          v-on:input="updateFormat"
        />
      </FormField>
    </template>
    <template v-slot:footer>
        <Button v-bind:label="D('Export')" v-on:click="exportAsImage" />
    </template>    
  </Popup>
</template>

<script>
import Popup from '/@components/Popup/Popup.vue';
import Button from '/@components/Button/Button.vue';
import Select from '/@components/Select/Select.vue';
import FormField from '/@components/FormField/FormField.vue';

export default {
  name: 'PopupAppSettings',
  props: {},
  data: function () {
    return {
      format: null,
    };
  },
  mounted: function () {
  },
  methods: {
    updateFormat: function (evt) {
      this.format = evt;
    },
    exportAsImage: function() {
        this.$root.$refs.canvas.renderToImage(this.format[0]);
    },
  },
  components: {
    Popup,
    Button,
    FormField,
    Select,
  },
};
</script>

<style lang="scss">
@import '../../../../css/main.scss';
</style>
