<template>
    <button 
        class="button-icon" 
        v-ripple="'rgba(255, 255, 255, 0.35)'"
        v-bind:class="[{'button-icon_pressed' : pressed}, classSize]"
        v-bind:title="title">
        <Icon v-bind:name="icon" v-bind:color="iconColor" />
    </button>
</template>

<script>
    import Icon from '../Icon/Icon.vue';
    import {size, color} from '../../fn/propsType/propsType.js';

    export default {
        name: 'ButtonIcon',
        components: {
            Icon
        },
        props: {
            icon: {
                type: String
            },
            title: {
                type: String
            },
            pressed: {
                type: Boolean
            },
            color: color('primary'),
            size: size('m')
        },
        computed: {
            iconColor: function(){
                return (this.pressed) ? 'black' : this.color;
            },
            classSize: function(){
                return `button-icon_size_${this.size}`;
            }
        }
    }    
</script>

<style lang="scss">
    @import '../../css/main.scss';

    .button-icon {
        display: inline-flex;
        padding: $grid-1;
        border-radius: $grid-1;
        background: rgba($color-black, 0);
        transition: background-color .2s;
        border: none;

        &_size {
            &_s {
                min-width: 24px;
                max-width: 24px;
                min-height: 24px;
                max-height: 24px;
            }

            &_m {
                min-width: 40px;
                max-width: 40px;
                min-height: 40px;
                max-height: 40px;
            }

            &_l {

            }
        }
    }

    .button-icon_pressed {
        fill: $color-content;
        background-color: rgba($color-black, 0.05);
        pointer-events: none;
    }

    .button-icon:focus {
        outline: none;
    }

    .button-icon:hover {
        background-color: rgba($color-black, 0.1);

    }
</style>