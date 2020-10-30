<template>
    <div class="math-ui">
        <SidebarTools />
    </div>
</template>

<script>
    import SidebarTools from '../SidebarTools/SidebarTools.vue';

    export default {
        name: 'MathUi',
        components: {
            SidebarTools
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