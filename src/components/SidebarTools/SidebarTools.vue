<template>
    <div v-bind:class="{ 'sidebar-tools_visible': isVisible }" class="sidebar-tools">
        <div class="sidebar-tools__header">
            <ButtonIcon v-on:click="toggleVisible" icon="add" />
        </div>
        <div class="sidebar-tools__body">
            <SidebarToolsEntities />
        </div>
    </div>
</template>

<script>
    import ButtonIcon from '../ButtonIcon/ButtonIcon.vue';
    import SidebarToolsEntities from './__Entities.vue';

    export default {
        name: 'SidebarTools',
        components: {
            ButtonIcon,
            SidebarToolsEntities
        },
        data: function() {
            return {
                isVisible: false
            }    
        },
        props: {
            
        },
        methods: {
            toggleVisible: function() {
                this.isVisible = !this.isVisible;
            }
        }    
    }    
</script>

<style lang="scss">
    @import '../../css/main.scss';

    .sidebar-tools {
        pointer-events: all;
        position: absolute;
        height: 100%;
        width: 280px;
        right: 0;
        background-color: rgba($color-white, 0);
        transform: translateX(224px);
        transition: all .3s ease-in-out;
        box-shadow: 0 0 0 1px rgba($color-black, 0);
        display: flex;
        flex-direction: column;
    }
    .sidebar-tools_visible {
        transform: translateX(0px);
        transition: all .2s ease-in-out;
        background-color: rgba($color-white, 0.8);
        box-shadow: 0 0 0 1px rgba($color-black, 0.03);
        backdrop-filter: blur(20px);

        .sidebar-tools__header {
            border-bottom: $border-sidebar-tools;
        }
    }
    .sidebar-tools__header {
        padding: $grid-1;
        border-bottom: none;
        box-sizing: border-box;
    }

    .sidebar-tools__body {
        flex-grow: 1;
        height: calc(100% - 50px);
    }
</style>