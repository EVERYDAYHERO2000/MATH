<template>
  <div class="sidebar-tools__entities">
    <div
      v-if="currentTab == 'math' && !searchValue"
      v-on:scroll="getScrollPosition"
      ref="list"
      class="sidebar-tools__entities-list"
    >
      <MathToolsEntity name="addition" />
      <MathToolsEntity name="subtraction" />
      <MathToolsEntity name="plus_minus" />
      <MathToolsEntity name="multiplication" />
      <MathToolsEntity name="division" />

      <MathToolsEntity name="parentheses" />

      <MathToolsEntity name="equality" />
      <MathToolsEntity name="inequality" />
      <MathToolsEntity name="approximation" />
      <MathToolsEntity name="inequality_less" />
      <MathToolsEntity name="inequality_great" />
      <MathToolsEntity name="less" />
      <MathToolsEntity name="great" />

      <MathToolsEntity name="exponent" />
      <MathToolsEntity name="radical" />

      <MathToolsEntity name="percent" />
      <MathToolsEntity name="per_mile" />

      <MathToolsEntity name="fraction" />
      <MathToolsEntity name="fraction_mixed" />

      <MathToolsEntity name="abs" />
      <MathToolsEntity name="log" />
      <MathToolsEntity name="mod" />

      <MathToolsEntity name="system_and" />
      <MathToolsEntity name="integral" />
    </div>

    <div
      v-else-if="currentTab == 'trigonometry' && !searchValue"
      v-on:scroll="getScrollPosition"
      ref="list"
      class="sidebar-tools__entities-list"
    >
      <MathToolsEntity name="cos" />
      <MathToolsEntity name="sin" />

      <MathToolsEntity name="tan" />
      <MathToolsEntity name="cot" />

      <MathToolsEntity name="sec" />
      <MathToolsEntity name="csc" />

      <MathToolsEntity name="pi" />
      <MathToolsEntity name="tau" />
    </div>

    <div
      v-else-if="currentTab == 'constant' && !searchValue"
      v-on:scroll="getScrollPosition"
      ref="list"
      class="sidebar-tools__entities-list"
    >
      <MathToolsEntity name="pi" />
      <MathToolsEntity name="tau" />
      <MathToolsEntity name="phi" />
      <MathToolsEntity name="e" />
    </div>

    <div
      v-else-if="currentTab == 'variable' && !searchValue"
      v-on:scroll="getScrollPosition"
      ref="list"
      class="sidebar-tools__entities-list"
    >
      <MathToolsEntity name="g_alpha" />
      <MathToolsEntity name="g_beta" />
      <MathToolsEntity name="g_gamma" />
      <MathToolsEntity name="g_delta" />
      <MathToolsEntity name="g_epsilon" />
      <MathToolsEntity name="g_zeta" />
      <MathToolsEntity name="g_eta" />
      <MathToolsEntity name="g_theta" />
      <MathToolsEntity name="g_iota" />
      <MathToolsEntity name="g_kappa" />
      <MathToolsEntity name="g_lambda" />
      <MathToolsEntity name="g_mu" />
      <MathToolsEntity name="g_nu" />
      <MathToolsEntity name="g_xi" />
      <MathToolsEntity name="g_omicron" />
      <MathToolsEntity name="g_pi" />
      <MathToolsEntity name="g_rho" />
      <MathToolsEntity name="g_sigma" />
      <MathToolsEntity name="g_tau" />
      <MathToolsEntity name="g_upsilon" />
      <MathToolsEntity name="g_phi" />
      <MathToolsEntity name="g_chi" />
      <MathToolsEntity name="g_psi" />
      <MathToolsEntity name="g_omega" />
    </div>

    <div v-else-if="searchValue" class="sidebar-tools__entities-list">
      <div v-for="(eValue, eName) in MathEntities">
        <MathToolsEntity v-if="isFind(eValue.keywords, searchValue)" v-bind:name="eName" />
      </div>
    </div>

    <div v-if="!searchValue" class="sidebar-tools__entities-menu">
      <div class="sidebar-tools__menu-item">
        <ButtonIcon
          icon="math"
          title="Math"
          ref="buttonMath"
          v-bind:pressed="currentTab == 'math'"
          v-on:click="setActiveTab('math')"
        />
      </div>
      <div class="sidebar-tools__menu-item">
        <ButtonIcon
          icon="trigonometry"
          title="Trigonometry"
          ref="buttonConstant"
          v-bind:pressed="currentTab == 'trigonometry'"
          v-on:click="setActiveTab('trigonometry')"
        />
      </div>
      <div class="sidebar-tools__menu-item">
        <ButtonIcon
          icon="constant"
          title="Constant"
          ref="buttonConstant"
          v-bind:pressed="currentTab == 'constant'"
          v-on:click="setActiveTab('constant')"
        />
      </div>
      <div class="sidebar-tools__menu-item">
        <ButtonIcon
          icon="variable"
          title="Variable"
          ref="buttonConstant"
          v-bind:pressed="currentTab == 'variable'"
          v-on:click="setActiveTab('variable')"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonIcon from '/@components/ButtonIcon/ButtonIcon.vue';
import MathToolsEntity from '/@components/MathToolsEntity/MathToolsEntity.vue';
import MathEntities from '/@components/MathToolsEntity/entities.js';

export default {
  name: 'SidebarToolsEntities',
  components: {
    ButtonIcon,
    MathToolsEntity,
  },
  props: {
    scrollTop: {
      type: Number,
      default: 0,
    },
    activeTab: String,
    searchValue: String,
  },
  data: function () {
    return {
      currentTab: null,
      MathEntities: MathEntities,
    };
  },
  mounted: function () {
    this.setActiveTab();

    setTimeout(() => {
      this.setScrollPosition();
    }, 100);
  },
  methods: {
    setScrollPosition: function () {
      if (this.$refs.list) this.$refs.list.scrollTop = this.scrollTop;
    },
    getScrollPosition: function (event) {
      this.$emit('updateScroll', event.target.scrollTop);
    },
    setActiveTab: function (tabName) {
      this.currentTab = tabName || this.activeTab;
      this.$emit('changeTab', this.currentTab);
    },
    isFind: function (entryStr, str) {
      return entryStr ? entryStr.toLowerCase().includes(str.toLowerCase()) : '';
    },
  },
};
</script>

<style lang="scss">
@import '../../../../css/main.scss';

.sidebar-tools__entities {
  display: flex;
  height: 100%;
}
.sidebar-tools__entities-list {
  flex-grow: 1;
  overflow: auto;
  padding-bottom: $grid-4;
}
.sidebar-tools__entities-menu {
  flex-basis: 52px;
  border-left: $border-sidebar-tools;
}
.sidebar-tools__menu-item {
  height: 52px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
