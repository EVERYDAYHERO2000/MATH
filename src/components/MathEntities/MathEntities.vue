<template>
    <div class="math-entities">
        <component 
            :is="entityName(into.type)" 
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
        components: {
            ...Enities
        },
        created: function () {
            
        },
        data: function () {
            return {
                items: this.into || []
            }
        },
        methods: {
            entityName: function (type) {
                return `Entity${type.charAt(0).toUpperCase() + type.slice(1)}`
            }
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