<template>
    <button class="button-icon" v-bind:title="title">
        <Icon v-bind:name="icon" color="primary" />
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

    .button-icon:focus {
        outline: none;
    }

    .button-icon:hover {
        background: rgba(0, 0, 0, 0.1);

    }
</style>