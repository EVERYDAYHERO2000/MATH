<template>
    <button 
        class="button-icon" 
        v-bind:class="{'button-icon_pressed' : pressed}"
        v-bind:title="title">
        <Icon v-bind:name="icon" v-bind:color="iconColor" />
    </button>
</template>

<script>
    import Icon from '../Icon/Icon.vue';

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
            color: {
                rype: String,
                default: 'primary'
            }
        },
        computed: {
            iconColor: function(){
                return (this.pressed) ? 'black' : this.color;
            }
        }
    }    
</script>

<style lang="scss">
    @import '../../css/main.scss';

    .button-icon {
        display: inline-flex;
        padding: $grid-1;
        cursor: pointer;
        border-radius: $grid-1;
        background: rgba(0, 0, 0, 0);
        transition: background-color .2s;
        border: none;
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