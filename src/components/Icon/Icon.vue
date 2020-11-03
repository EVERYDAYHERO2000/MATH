<template>
    <div class="icon" v-bind:class="[classColor]">
        <IconAdd v-if="name === 'add'" />
        <IconRemove v-else-if="name === 'remove'" />
        <IconClose v-else-if="name === 'close'" />
        <IconConsole v-else-if="name === 'console'" />
        <IconLayers v-else-if="name === 'layers'" />
        <IconMenu v-else-if="name === 'menu'" />
        <IconMath v-else-if="name === 'math'" />
        <IconConst v-else-if="name === 'constant'" />
        <IconSearch v-else-if="name === 'search'" />
    </div>
</template>

<script>
    import { VueComponent as IconAdd } from './assets/icon_add_24.svg';
    import { VueComponent as IconClose } from './assets/icon_close_24.svg';
    import { VueComponent as IconConsole } from './assets/icon_console_24.svg';
    import { VueComponent as IconLayers } from './assets/icon_layers_24.svg';
    import { VueComponent as IconMenu } from './assets/icon_menu_24.svg';
    import { VueComponent as IconRemove } from './assets/icon_remove_24.svg';
    import { VueComponent as IconMath } from './assets/icon_math_24.svg';
    import { VueComponent as IconConst } from './assets/icon_const_24.svg';
    import { VueComponent as IconSearch } from './assets/icon_search_24.svg';

    export default {
        name: 'Icon',
        props: {
            name: {
                type: String
            },
            color: {
                type: String,
                default: 'black'
            }
        },
        computed: {
            classColor: function(){
                return `icon_color-${this.color}`
            }
        },
        components: {
            IconAdd,
            IconClose,
            IconConsole,
            IconLayers,
            IconMenu,
            IconRemove,
            IconMath,
            IconConst,
            IconSearch
        }
    }    
</script>

<style lang="scss">
    @import '../../css/main.scss';

    .icon {
        display: inline-flex;
        transform-origin: center;

        svg {
            rect, path {
            
            } 
        }

        &_color-black {
            rect, path {
                fill: $color-black;
            }
        }
        &_color-primary {
            rect, path {
                fill: $color-primary;
            }
        }
        &_color-active {
            rect, path {
                fill: $color-active;
            }
        }
        &_color-content {
            rect, path {
                fill: $color-content;
            }
        }
        &_color-danger {
            rect, path {
                fill: $color-danger;
            }
        }
        &_color-success {
            rect, path {
                fill: $color-success;
            }
        }
    }
</style>