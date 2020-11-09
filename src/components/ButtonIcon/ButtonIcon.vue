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

    $size-s: $grid-3;
    $size-m: $grid-5;

    .button-icon {
        display: inline-flex;
        padding: $grid-1;
        border-radius: $grid-1;
        background: rgba($color-black, 0);
        transition: background-color .2s;
        border: none;

        &_size {
            &_s {
                min-width: $size-s;
                max-width: $size-s;
                min-height: $size-s;
                max-height: $size-s;
            }

            &_m {
                min-width: $size-m;
                max-width: $size-m;
                min-height: $size-m;
                max-height: $size-m;
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