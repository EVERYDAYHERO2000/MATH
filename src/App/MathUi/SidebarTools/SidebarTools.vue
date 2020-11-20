<template>
  <Sidebar class="sidebar-tools" v-bind:visible="isVisible" attachment="right">
    <template v-slot:header>
      <ButtonIcon v-on:click="toggleVisible" icon="search" title="Elements" />
      <InputSearch v-on:updateSearch="searchValue = $event" v-bind:value="searchValue" />
    </template>

    <template v-slot:body>
      <SidebarToolsEntities
        v-on:updateScroll="scroll = $event"
        v-on:changeTab="activeTab = $event"
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
import SidebarToolsEntities from './Entities/Entities.vue';
import InputSearch from '/@components/InputSearch/InputSearch.vue';

export default {
  name: 'SidebarTools',
  components: {
    Sidebar,
    ButtonIcon,
    SidebarToolsEntities,
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
  mounted: function () {},
  methods: {
    toggleVisible: function () {
      this.isVisible = !this.isVisible;
    },
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
