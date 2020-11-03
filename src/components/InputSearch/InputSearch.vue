<template>
    <div class="input-search">
        <input 
            class="input-search__input"
            type="text" 
            v-model="searchValue"
            v-on:keyup="update"
            placeholder="Element name" />
        <ButtonIcon 
            class="input-search__clear-button"
            v-if="searchValue" 
            v-on:click="clear"
            title="Clear"
            icon="close" />
    </div>    
</template>

<script>
    import ButtonIcon from '../ButtonIcon/ButtonIcon.vue';

    export default {
        name: 'Input',
        props: {
            value: {
                type: String,
                default: '' 
            }
        },
        data: function(){
            return {
                searchValue : this.value
            }
        },
        methods: {
            clear: function() {
                this.searchValue = '';
                this.update();
            },
            update: function() {
                this.$emit('updateSearch', this.searchValue);
            }
        },
        components: {
            ButtonIcon
        }    
    }    
</script>

<style lang="scss">
    @import '../../css/main.scss';

    .input-search {
        display: flex;
        position: relative;
    }

    .input-search__input {
        border: none;
        font-size: 16px;
        display: block;
        width: 100%;
        padding-right: 40px;
        box-sizing: border-box;
        font-family: $font-family-sans-serif;

        &:focus {
            outline: none;
        }

        &::placeholder {
            color: rgba(0,0,0,0.3);
        }
    }

    .input-search__clear-button {
        position: absolute;
        right: 0;
    }

</style>