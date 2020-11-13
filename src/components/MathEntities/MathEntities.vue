<template>
    <div class="math-entities">
        <template v-for="(item, index) in items">

            <component
                :key="item.id"
                v-bind:data-id="item.id"
                :is="entityName(item.type)"
                v-on:calc=""
                v-bind:into="item" />

        </template>
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
        data: function () {
            return {
                items: this.into || []
            }
        },
        methods: {
            entityName : function(type) {
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
