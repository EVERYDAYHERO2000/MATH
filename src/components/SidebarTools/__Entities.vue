<template>
    <div class="sidebar-tools__entities">
        <div class="sidebar-tools__entities-list">

            <MethToolsEntity name="addition" />
            <MethToolsEntity name="subtraction" />
            <MethToolsEntity name="plus_minus" />
            <MethToolsEntity name="multiplication" />
            <MethToolsEntity name="division" />

            <MethToolsEntity name="parentheses" />

            <MethToolsEntity name="equality" />
            <MethToolsEntity name="inequality" />
            <MethToolsEntity name="approximation" />
            <MethToolsEntity name="inequality_less" />
            <MethToolsEntity name="inequality_great" />
            <MethToolsEntity name="less" />
            <MethToolsEntity name="great" />

            <MethToolsEntity name="exponent" />
            <MethToolsEntity name="radical" />

            <MethToolsEntity name="percent" />
            <MethToolsEntity name="per_mile" />

            <MethToolsEntity name="fraction" />
            <MethToolsEntity name="fraction_mixed" />

            <MethToolsEntity name="cos" />
            <MethToolsEntity name="sin" />

            <MethToolsEntity name="tan" />
            <MethToolsEntity name="cot" />

            <MethToolsEntity name="sec" />
            <MethToolsEntity name="csc" />
            
            <MethToolsEntity name="abs" />
            <MethToolsEntity name="log" />
            <MethToolsEntity name="mod" />
            
            <MethToolsEntity name="system_and" />
            <MethToolsEntity name="integral" />
            
        </div>
        <div class="sidebar-tools__entities-menu">
            <div class="sidebar-tools__menu-item">
                <ButtonIcon icon="math" title="Math" />
            </div>
            <div class="sidebar-tools__menu-item">
                <ButtonIcon icon="constant" title="Constant" />
            </div>
        </div>
    </div>
</template>

<script>
    import ButtonIcon from '../ButtonIcon/ButtonIcon.vue';
    import MethToolsEntity from '../MathToolsEntity/MathToolsEntity.vue';

    export default {
        name: 'SidebarToolsEntities',
        components: {
            ButtonIcon,
            MethToolsEntity
        },
        props: {
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