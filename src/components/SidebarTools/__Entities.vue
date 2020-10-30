<template>
    <div class="sidebar-tools__entities">
        <div class="sidebar-tools__entities-list">

            <div class="sidebar-tools__entities-item" v-for="n in 100">{{ n }} </div>

        </div>
        <div class="sidebar-tools__entities-menu">
            <div class="sidebar-tools__menu-item" v-for="n in 5"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SidebarToolsEntities',
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
        height: 100px;
        box-sizing: border-box;
        padding: $grid-2;
        color: $color-content;
        border-bottom: $border-sidebar-tools;
        user-select: none;
    }
    .sidebar-tools__menu-item {
        height: 64px;
        box-sizing: border-box;
        border-bottom: $border-sidebar-tools;
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