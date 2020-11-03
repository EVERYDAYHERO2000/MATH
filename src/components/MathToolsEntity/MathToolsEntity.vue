<template>
    <div 
        v-ripple="'rgba(0, 0, 0, 0.02)'"
        class="math-tools-entity" 
        v-bind:class="[classCover]">
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
            classCover: function () {
                return (this.name) ? `math-tools-entity_cover_${this.name.replace('_','-')}` : '';
            },
            title: function () {
                return (this.name) ? entities[this.name].title : '';
            },
            code: function () {
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
        background-repeat: no-repeat;
    }

    .math-tools-entity_cover {
        &_abs {
            background-image: url('assets/ent_abs.svg');
        }

        &_addition {
            background-image: url('assets/ent_addition.svg');
        }

        &_subtraction {
            background-image: url('assets/ent_subtraction.svg');
        }

        &_approximation {
            background-image: url('assets/ent_approximation.svg');
        }

        &_cos {
            background-image: url('assets/ent_cos.svg');
        }

        &_cot {
            background-image: url('assets/ent_cot.svg');
        }

        &_csc {
            background-image: url('assets/ent_csc.svg');
        }

        &_division {
            background-image: url('assets/ent_division_default.svg');
        }

        &_equality {
            background-image: url('assets/ent_equality.svg');
        }

        &_exponent {
            background-image: url('assets/ent_exponent.svg');
        }

        &_fraction {
            background-image: url('assets/ent_fraction_1.svg');
        }

        &_fraction-mixed {
            background-image: url('assets/ent_fraction_2.svg');
        }

        &_inequality {
            background-image: url('assets/ent_inequality.svg');
        }

        &_inequality-less {
            background-image: url('assets/ent_less-than-or-equal-to.svg');
        }

        &_inequality-great {
            background-image: url('assets/ent_greater-than-or-equal-to.svg');
        }

        &_less {
            background-image: url('assets/ent_less-than.svg');
        }

        &_great {
            background-image: url('assets/ent_greater-than.svg');
        }

        &_system-and {
            background-image: url('assets/ent_group.svg');
        }

        &_integral {
            background-image: url('assets/ent_integral.svg');
        }

        &_log {
            background-image: url('assets/ent_log.svg');
        }

        &_mod {
            background-image: url('assets/ent_mod.svg');
        }

        &_multiplication {
            background-image: url('assets/ent_multiplication_default.svg');
        }

        &_parentheses {
            background-image: url('assets/ent_parentheses_default.svg');
        }

        &_per-mile {
            background-image: url('assets/ent_per-mille.svg');
        }

        &_percent {
            background-image: url('assets/ent_percent.svg');
        }

        &_plus-minus {
            background-image: url('assets/ent_plus-minus.svg');
        }

        &_radical {
            background-image: url('assets/ent_radical.svg');
        }

        &_sec {
            background-image: url('assets/ent_sec.svg');
        }

        &_sin {
            background-image: url('assets/ent_sin.svg');
        }

        &_tan {
            background-image: url('assets/ent_tan.svg');
        }

        &_pi {
            background-image: url('assets/ent_pi.svg');
        }

        &_tau {
            background-image: url('assets/ent_tau.svg');
        }

        &_phi {
            background-image: url('assets/ent_phi.svg');
        }

        &_gamma {
            background-image: url('assets/ent_gamma.svg');
        }

        &_e {
            background-image: url('assets/ent_e.svg');
        }
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