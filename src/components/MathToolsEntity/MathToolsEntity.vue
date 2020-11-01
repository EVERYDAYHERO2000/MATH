<template>
    <div class="math-tools-entity" v-bind:style="cover">
        <span class="math-tools-entity__title">{{title}}</span>
        <span class="math-tools-entity__code">{{code}}</span>
    </div>
</template>

<script>
    import entities from './entities.js';

    export default {
        name: 'MathToolsEntity',
        props: {
            name: {
                type: String,
                default: null
            }
        },
        computed: {
            cover: function(){
                console.log(this.name,entities[this.name].cover[0])
                let url = `/src/components/MathToolsEntity/assets/${entities[this.name].cover[0]}`;
                return (this.name) ? { backgroundImage: `url(${url})` } : {};
            },
            title: function(){
                return (this.name) ? entities[this.name].title : '';
            },
            code: function(){
                return (this.name) ? entities[this.name].key : '';
            }
        }
    }    
</script>

<style lang="scss">
    @import '../../css/main.scss';

    .math-tools-entity {
        height: 64px;
        box-sizing: border-box;
        padding: 12px $grid-2;
        color: $color-content;
        border-bottom: $border-sidebar-tools;
        user-select: none;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: space-between;
    }   

    .math-tools-entity:hover {
        background-color: rgba($color-black, 0.01);
    }

    .math-tools-entity__title {
        font-size: 12px;
        color: rgba($color-black, 0.5);
    }
    .math-tools-entity__code {
        font-size: 12px;
        color: $color-primary;
    }

</style>