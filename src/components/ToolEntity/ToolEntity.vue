<template>
  <div v-ripple="'rgba(0, 0, 0, 0.02)'" class="tool-entity" v-bind:class="[classCover]">
    <span class="tool-entity__title">{{ title }}</span>
    <span class="tool-entity__code">{{ code }}</span>
  </div>
</template>

<script>
import entities from './entities.js';

export default {
  name: 'ToolEntity',
  props: {
    name: {
      type: String,
      default: null,
    },
  },
  computed: {
    classCover: function () {
      return this.name ? `tool-entity_cover_${this.name.replace('_', '-')}` : '';
    },
    title: function () {
      return this.name ? entities[this.name].title : '';
    },
    code: function () {
      return this.name ? entities[this.name].key : '';
    },
  },
};
</script>

<style lang="scss">
@import '../../css/main.scss';

.tool-entity {
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

.tool-entity_cover {
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

  &_g-alpha {
    background-image: url('assets/ent_sign-g-alpha.svg');
  }

  &_g-beta {
    background-image: url('assets/ent_sign-g-beta.svg');
  }

  &_g-gamma {
    background-image: url('assets/ent_sign-g-gamma.svg');
  }

  &_g-delta {
    background-image: url('assets/ent_sign-g-delta.svg');
  }

  &_g-epsilon {
    background-image: url('assets/ent_sign-g-epsilon.svg');
  }

  &_g-zeta {
    background-image: url('assets/ent_sign-g-zeta.svg');
  }

  &_g-eta {
    background-image: url('assets/ent_sign-g-eta.svg');
  }

  &_g-theta {
    background-image: url('assets/ent_sign-g-theta.svg');
  }

  &_g-iota {
    background-image: url('assets/ent_sign-g-iota.svg');
  }

  &_g-kappa {
    background-image: url('assets/ent_sign-g-kappa.svg');
  }

  &_g-lambda {
    background-image: url('assets/ent_sign-g-lambda.svg');
  }

  &_g-mu {
    background-image: url('assets/ent_sign-g-mu.svg');
  }

  &_g-nu {
    background-image: url('assets/ent_sign-g-nu.svg');
  }

  &_g-xi {
    background-image: url('assets/ent_sign-g-xi.svg');
  }

  &_g-omicron {
    background-image: url('assets/ent_sign-g-omicron.svg');
  }

  &_g-pi {
    background-image: url('assets/ent_sign-g-pi.svg');
  }

  &_g-rho {
    background-image: url('assets/ent_sign-g-rho.svg');
  }

  &_g-sigma {
    background-image: url('assets/ent_sign-g-sigma.svg');
  }

  &_g-tau {
    background-image: url('assets/ent_sign-g-tau.svg');
  }

  &_g-upsilon {
    background-image: url('assets/ent_sign-g-upsilon.svg');
  }

  &_g-phi {
    background-image: url('assets/ent_sign-g-phi.svg');
  }

  &_g-chi {
    background-image: url('assets/ent_sign-g-chi.svg');
  }

  &_g-psi {
    background-image: url('assets/ent_sign-g-psi.svg');
  }

  &_g-omega {
    background-image: url('assets/ent_sign-g-omega.svg');
  }
}

.tool-entity:hover {
  background-color: rgba($color-black, 0.01);
}

.tool-entity__title {
  font-size: 12px;
  color: rgba($color-black, 0.5);
}

.tool-entity__code {
  font-size: 12px;
  color: $color-primary;
}
</style>
