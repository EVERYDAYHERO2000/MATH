<template>
    <div class="sidebar-tools__entities">
        <div class="sidebar-tools__entities-list">

            <div class="sidebar-tools__entities-item" v-for="n in 100">{{ n }} </div>

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

    export default {
        name: 'SidebarToolsEntities',
        components: {
            ButtonIcon
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
    }
    .sidebar-tools__entities-menu {
        flex-basis: 52px;
        border-left: $border-sidebar-tools
    }
    .sidebar-tools__entities-item {
        height: 64px;
        box-sizing: border-box;
        padding: $grid-2;
        color: $color-content;
        border-bottom: $border-sidebar-tools;
        user-select: none;
    }
    .sidebar-tools__menu-item {
        height: 52px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .sidebar-tools {
        .sidebar-tools__entities-item {
            opacity: 0;
        }
    }

    .sidebar-tools_visible {
        .sidebar-tools__entities-item {
            opacity: 1;
        }
    }
</style>