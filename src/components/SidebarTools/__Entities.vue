<template>
    <div class="sidebar-tools__entities">
        
        <div 
            v-if="currentTab == 'math'"
            v-on:scroll="getScrollPosition" 
            ref="list" 
            class="sidebar-tools__entities-list">

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

            <MathToolsEntity name="cos" />
            <MathToolsEntity name="sin" />

            <MathToolsEntity name="tan" />
            <MathToolsEntity name="cot" />

            <MathToolsEntity name="sec" />
            <MathToolsEntity name="csc" />
            
            <MathToolsEntity name="abs" />
            <MathToolsEntity name="log" />
            <MathToolsEntity name="mod" />
            
            <MathToolsEntity name="system_and" />
            <MathToolsEntity name="integral" />
            
        </div>

        <div 
            v-else-if="currentTab == 'constant'"
            v-on:scroll="getScrollPosition" 
            ref="list" 
            class="sidebar-tools__entities-list">

            <MathToolsEntity name="pi" />
            <MathToolsEntity name="tau" />
            <MathToolsEntity name="phi" />
            <MathToolsEntity name="e" />

        </div>    

        <div class="sidebar-tools__entities-menu">
            <div class="sidebar-tools__menu-item">
                <ButtonIcon icon="math" title="Math" ref="buttonMath" v-bind:pressed="currentTab == 'math'" v-on:click="setActiveTab('math')" />
            </div>
            <div class="sidebar-tools__menu-item">
                <ButtonIcon icon="constant" title="Constant" ref="buttonConstant" v-bind:pressed="currentTab == 'constant'" v-on:click="setActiveTab('constant')" />
            </div>
        </div>
    </div>
</template>

<script>
    import ButtonIcon from '../ButtonIcon/ButtonIcon.vue';
    import MathToolsEntity from '../MathToolsEntity/MathToolsEntity.vue';

    export default {
        name: 'SidebarToolsEntities',
        components: {
            ButtonIcon,
            MathToolsEntity
        },
        props: {
            scrollTop: {
                type: Number,
                default: 0
            },
            activeTab: String
        },
        data: function(){
            return {
                currentTab: null  
            }
        },
        mounted: function () {
            this.setActiveTab();

            setTimeout(() => {
                this.setScrollPosition();
            }, 100);
            
        },
        methods: {
            setScrollPosition: function(){
                if (this.$refs.list) this.$refs.list.scrollTop = this.scrollTop;
            },
            getScrollPosition: function(event) {
                this.$emit('updateScroll', event.target.scrollTop);
            },
            setActiveTab: function(tabName){
                this.currentTab = tabName || this.activeTab;
                this.$emit('changeTab', this.currentTab);
            }
        }    
    }    
</script>

<style lang="scss">
    @import '../../css/main.scss';
    
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
        border-left: $border-sidebar-tools
    }
    .sidebar-tools__menu-item {
        height: 52px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>