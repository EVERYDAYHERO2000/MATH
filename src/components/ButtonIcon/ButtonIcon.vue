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
            icon : {
                type: String
            }
        }    
    }    
</script>

<style lang="scss">
    @import '../../css/main.scss';

    .button-icon {
        display: inline-flex;
        padding: $grid-2;
        cursor: pointer;
    }
</style>