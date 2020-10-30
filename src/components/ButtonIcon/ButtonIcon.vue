<template>
    <div class="button-icon">
        <Icon v-bind:name="icon" />
    </div>
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

    }

    .button-icon:hover {
        background: rgba(0, 0, 0, 0.1);

    }
</style>