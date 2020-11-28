<template>
  <Sidebar
    class="sidebar-tools"
    v-on:clickOutside="toggleVisible"
    v-bind:visible="isVisible"
    attachment="right"
  >
    <template v-slot:header>
      <ButtonIcon v-on:click="toggleVisible" icon="search" v-bind:title="D('Elements')" />
      <InputSearch v-on:updateSearch="searchValue = $event" v-bind:value="searchValue" />
    </template>

    <template v-slot:body>
      <EntitiesPanel
        v-on:updateScroll="scroll = $event"
        v-on:changeTab="changeTab"
        v-bind:scrollTop="scroll"
        v-bind:activeTab="activeTab"
        v-bind:searchValue="searchValue"
        v-if="isVisible"
      />
    </template>
  </Sidebar>
</template>

<script>
import Sidebar from '/@components/Sidebar/Sidebar.vue';
import ButtonIcon from '/@components/ButtonIcon/ButtonIcon.vue';
import EntitiesPanel from './EntitiesPanel/EntitiesPanel.vue';
import InputSearch from '/@components/InputSearch/InputSearch.vue';

export default {
  name: 'SidebarTools',
  components: {
    Sidebar,
    ButtonIcon,
    EntitiesPanel,
    InputSearch,
  },
  data: function () {
    return {
      isVisible: false,
      activeTab: 'math',
      searchValue: '',
      scroll: 0,
    };
  },
  props: {},
  watch: {
    isVisible: function () {
      this.saveValue('isVisible');
    },
    activeTab: function () {
      this.saveValue('activeTab');
    },
    searchValue: function () {
      this.saveValue('searchValue');
    },
    scroll: function () {
      this.saveValue('scroll');
    },
  },
  created: function () {
    let ls = localStorage.SidebarTools;
    if (ls) {
      let lsData = JSON.parse(ls);
      this.activeTab = lsData.activeTab;
      this.isVisible = lsData.isVisible;
      this.searchValue = lsData.searchValue;
      this.scroll = lsData.scroll;
    } else {
      localStorage.setItem('SidebarTools', JSON.stringify(this.$data));
    }
  },
  methods: {
    saveValue: function (dataKey) {
      let ls = JSON.parse(localStorage.SidebarTools);
      ls[dataKey] = this[dataKey];
      localStorage.SidebarTools = JSON.stringify(ls);
    },
    toggleVisible: function () {
      this.isVisible = !this.isVisible;
    },
    changeTab: function(evt) {
      this.activeTab = evt;
    }
  },
};
</script>

<style lang="scss">
@import '../../../css/main.scss';

.sidebar-tools {
  .input-search {
    flex-grow: 1;
    margin-left: $grid-1;
  }
}
</style>
