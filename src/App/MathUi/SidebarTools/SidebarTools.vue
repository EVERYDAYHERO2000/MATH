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
      isVisible: (localStorage.sidebarIsVisible == 'true') || false,
      activeTab: localStorage.sidebarActiveTab || 'math',
      searchValue: localStorage.sidebarSearchValue || '',
      scroll: +localStorage.sidebarScroll || 0,
    };
  },
  props: {},
  watch: {
    isVisible: function () {
      localStorage.sidebarIsVisible = this.isVisible;
    },
    activeTab: function () {
      localStorage.sidebarActiveTab = this.activeTab;
    },
    searchValue: function () {
      localStorage.sidebarSearchValue = this.searchValue;
    },
    scroll: function () {
      localStorage.sidebarScroll = this.scroll;
    },
  },
  methods: {
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

.sidebar-tools {
  .input-search {
    flex-grow: 1;
    margin-left: $grid-1;
  }
}
</style>
