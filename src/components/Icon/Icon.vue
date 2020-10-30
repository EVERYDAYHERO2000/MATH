<template>
    <div class="icon">
        <IconAdd v-if="name === 'add'" />
        <IconRemove v-else-if="name === 'remove'" />
        <IconClose v-else-if="name === 'close'" />
        <IconConsole v-else-if="name === 'console'" />
        <IconLayers v-else-if="name === 'layers'" />
        <IconMenu v-else-if="name === 'menu'" />
    </div>
</template>

<script>
    import { VueComponent as IconAdd } from './svg/icon_add_24.svg';
    import { VueComponent as IconClose } from './svg/icon_close_24.svg';
    import { VueComponent as IconConsole } from './svg/icon_console_24.svg';
    import { VueComponent as IconLayers } from './svg/icon_layers_24.svg';
    import { VueComponent as IconMenu } from './svg/icon_menu_24.svg';
    import { VueComponent as IconRemove } from './svg/icon_remove_24.svg';

    export default {
        name: 'Icon',
        props: {
            name: {
                type: String
            },
        },
        components: {
            IconAdd,
            IconClose,
            IconConsole,
            IconLayers,
            IconMenu,
            IconRemove
        }
    }    
</script>

<style lang="scss">
    @import '../../css/main.scss';

    .icon {
        display: inline-flex;
        transform-origin: center;

        & svg {

        }
    }
</style>