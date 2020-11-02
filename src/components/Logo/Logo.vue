<template>
    <div class="logo">
        <LogoSidebar />
    </div>
</template>

<script>
    import { VueComponent as LogoSidebar } from './assets/logo_sidebar.svg';

    export default {
        name: 'Button',
        props: {
        },
        components: {
            LogoSidebar
        }    
    }    
</script>

<style lang="scss">
    @import '../../css/main.scss';

</style>