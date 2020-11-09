<template>
    <div 
        v-bind:class="[{'sidebar_visible': visible}, classAttachment]" 
        class="sidebar">
        <div 
            v-if="visible && backdrop"
            v-on:click="clickOutside"
            class="sidebar__backdrop"></div>
        <div class="sidebar__header">
            <slot name="header">

            </slot>
        </div>
        <div 
            v-if="visible" 
            class="sidebar__body">
            <slot name="body">

            </slot>
        </div>
    </div>    
</template>

<script>
    export default {
        name: 'Sidebar',
        props: {
            visible: {
                type: Boolean,
                default: true
            },
            attachment: {
                type: String,
                default: 'left'
            },
            backdrop: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            classAttachment: function(){
                return `sidebar_attachment_${this.attachment}`
            }
        },
        methods: {
            clickOutside: function () {
                this.$emit('clickOutside',true);
            },
        }  
    }    
</script>

<style lang="scss">
    @import '../../css/main.scss';

    $panel-width: 280px;

    .sidebar {
        pointer-events: all;
        position: absolute;
        height: 100%;
        width: $panel-width;
        background-color: rgba($color-white, 0);
        transform: translateX(224px);
        transition: all .3s ease-in-out;
        box-shadow: 0 0 0 1px rgba($color-black, 0);
        display: flex;
        flex-direction: column;
    }

    .sidebar__backdrop {
        content: '';
        display: block;
        width: 100vw;
        background-color: rgba(0, 0, 0, 0.15);
        content: "";
        position: absolute;
        height: 100vh;
        z-index: -1;
        opacity: 0;
        animation: animate-backdrop .2s ease-in-out .1s forwards;
    }

    .sidebar_attachment {
        &_left {
            left: 0;
            transform: translateX(-224px);

            .sidebar__backdrop {
                left: $panel-width;
            }

        }

        &_right {
            right: 0;
            transform: translateX(224px);

            .sidebar__backdrop {
                right: $panel-width;
            }

        }
    }

    .sidebar_visible {
        transform: translateX(0px);
        transition: all .2s .05s ease-in-out;
        background-color: rgba($color-white, 1);
        box-shadow: 0 0 0 1px rgba($color-black, 0.03);

        .sidebar__header {
            border-bottom: $border-sidebar-tools;
        }
    }

    .sidebar__header {
        padding: $grid-1;
        border-bottom: none;
        box-sizing: border-box;
        display: flex;
        min-height: 57px;
        justify-content: space-between;
    }

    .sidebar__body {
        flex-grow: 1;
        height: calc(100% - 50px);
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