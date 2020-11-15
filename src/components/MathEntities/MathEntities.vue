<template>
    <div class="math-entities">
        <component 
            :is="entityName" 
            v-on:calc=""
            v-bind:into="into" />
    </div>
</template>

<script>
    import Enities from './entities.js';

    export default {
        name: 'MathEntities',
        props: {
            into: Object
        },
        computed: {
            entityName: function(){
                let type = this.into.type;
                return `Entity${type.charAt(0).toUpperCase() + type.slice(1)}`;
            } 
        },
        components: {
            ...Enities
        },
        created: function () {
           
        }
    }
</script>

<style lang="scss">
    @import '../../css/main.scss';
    @import './MathEntities.scss';

    .math-entities {
        display: inline-flex;
        align-items: baseline;
        white-space: nowrap;
        color: $color-entity;
    }
</style>