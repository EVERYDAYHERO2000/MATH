<template>
    <div v-bind:class="{ 'main-menu_visible': isVisible }" class="main-menu">
        <div 
            v-if="isVisible" 
            v-on:click="toggleVisible"
            class="main-menu__backdrop" />
        <div class="main-menu__header">
            <Logo />
            <ButtonIcon v-on:click="toggleVisible" icon="menu" title="Main Menu" />
        </div>
        <div class="main-menu__body">
            <button v-on:click="exportToPng">Export as png</button>
        </div>
    </div>
</template>

<script>
    import ButtonIcon from '../ButtonIcon/ButtonIcon.vue';
    import Logo from '../Logo/Logo.vue';

    export default {
        name: 'MainMenu',
        props: {
        },
        components: {
            ButtonIcon,
            Logo
        },
        data: function () {
            return {
                isVisible: false
            }
        },
        methods: {
            toggleVisible: function () {
                this.isVisible = !this.isVisible;
            },
            exportToPng: function() {
                this.$emit('exportToPng',true)
            }
        }
    }    
</script>

<style lang="scss">
    @import '../../css/main.scss';

    $panel-width: 280px;

    .main-menu {
        pointer-events: all;
        position: absolute;
        height: 100%;
        width: $panel-width;
        left: 0;
        background-color: rgba($color-white, 0);
        transform: translateX(-224px);
        transition: all .3s ease-in-out;
        box-shadow: 0 0 0 1px rgba($color-black, 0);
        display: flex;
        flex-direction: column;
    }

    .main-menu_visible {
        transform: translateX(0px);
        transition: all .2s .05s ease-in-out;
        background-color: rgba($color-white, 1);
        box-shadow: 0 0 0 1px rgba($color-black, 0.03);

        .main-menu__header {
            border-bottom: $border-sidebar-tools;
        }

    }

    .main-menu__header {
        padding: $grid-1;
        border-bottom: none;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        min-height: 57px;
    }

    .main-menu__body {
        flex-grow: 1;
        height: calc(100% - 50px);
    }

    .main-menu__backdrop {
        content: '';
        display: block;
        width: 100vw;
        background-color: rgba(0, 0, 0, 0.15);
        content: "";
        position: absolute;
        left: $panel-width;
        height: 100vh;
        z-index: -1;
        opacity: 0;
        animation: animate-backdrop .2s ease-in-out .1s forwards;
    }

    @keyframes animate-backdrop {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
</style>