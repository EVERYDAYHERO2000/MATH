<template>
    <div class="math-ui">
        <SidebarTools />
        <MainMenu />
    </div>
</template>

<script>
    import SidebarTools from '../SidebarTools/SidebarTools.vue';
    import MainMenu from '../MainMenu/MainMenu.vue';

    export default {
        name: 'MathUi',
        components: {
            SidebarTools,
            MainMenu
        },
        props: {
        }
    }    
</script>

<style lang="scss">
    @import '../../css/main.scss';

    .math-ui {
        font-family: $font-family-sans-serif;
        position: absolute;
        width: 100%;
        height: 100%;
        pointer-events: none;
        overflow: hidden;
    }
</style>