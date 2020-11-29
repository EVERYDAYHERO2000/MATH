<template>
  <div v-ripple class="tool-entity" v-bind:class="[classCover]">
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
  data: function () {
    return {};
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
  user-select: none;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  background-repeat: no-repeat;

  .app_theme_light & {
    color: $color-content_theme-light;
    border-bottom: solid 1px rgba($color-background-invert_theme-light, 0.08);
  }

  .app_theme_dark & {
    color: $color-content_theme-dark;
    border-bottom: solid 1px rgba($color-black, 0.3);
  }

  &_cover {
    &_abs {
      .app_theme_light & {
        background-image: url('assets/ent_abs_theme-light.svg');
      }
      .app_theme_dark & {
        background-image: url('assets/ent_abs_theme-dark.svg');
      }
    }

    &_addition {
      .app_theme_light & {
        background-image: url('assets/ent_addition_theme-light.svg');
      }
      .app_theme_dark & {
        background-image: url('assets/ent_addition_theme-dark.svg');
      }
    }

    &_subtraction {
      .app_theme_light & {
        background-image: url('assets/ent_subtraction_theme-light.svg');
      }
      .app_theme_dark & {
        background-image: url('assets/ent_subtraction_theme-dark.svg');
      }
    }

    &_approximation {
      .app_theme_light & {
        background-image: url('assets/ent_approximation_theme-light.svg');
      }
      .app_theme_dark & {
        background-image: url('assets/ent_approximation_theme-dark.svg');
      }
    }

    &_cos {
      .app_theme_light & {
        background-image: url('assets/ent_cos_theme-light.svg');
      }
      .app_theme_dark & {
        background-image: url('assets/ent_cos_theme-dark.svg');
      }
    }

    &_cot {
      .app_theme_light & {
        background-image: url('assets/ent_cot_theme-light.svg');
      }
      .app_theme_dark & {
        background-image: url('assets/ent_cot_theme-dark.svg');
      }
    }

    &_csc {
      .app_theme_light & {
        background-image: url('assets/ent_csc_theme-light.svg');
      }
      .app_theme_dark & {
        background-image: url('assets/ent_csc_theme-dark.svg');
      }
    }

    &_division {
      .app_theme_light & {
        background-image: url('assets/ent_division_default_theme-light.svg');
      }
      .app_theme_dark & {
        background-image: url('assets/ent_division_default_theme-dark.svg');
      }
    }

    &_equality {
      .app_theme_light & {
        background-image: url('assets/ent_equality_theme-light.svg');
      }
      .app_theme_dark & {
        background-image: url('assets/ent_equality_theme-dark.svg');
      }
    }

    &_exponent {
      .app_theme_light & {
        background-image: url('assets/ent_exponent_theme-light.svg');
      }
      .app_theme_dark & {
        background-image: url('assets/ent_exponent_theme-dark.svg');
      }
    }

    &_fraction {
      .app_theme_light & {
        background-image: url('assets/ent_fraction_1_theme-light.svg');
      }
      .app_theme_dark & {
        background-image: url('assets/ent_fraction_1_theme-dark.svg');
      }
    }

    &_fraction-mixed {
      .app_theme_light & {
        background-image: url('assets/ent_fraction_2_theme-light.svg');
      }
      .app_theme_dark & {
        background-image: url('assets/ent_fraction_2_theme-dark.svg');
      }
    }

    &_inequality {
      .app_theme_light & {
        background-image: url('assets/ent_inequality_theme-light.svg');
      }
      .app_theme_dark & {
        background-image: url('assets/ent_inequality_theme-dark.svg');
      }
    }

    &_inequality-less {
      .app_theme_light & {
        background-image: url('assets/ent_less-than-or-equal-to_theme-light.svg');
      }
      .app_theme_dark & {
        background-image: url('assets/ent_less-than-or-equal-to_theme-dark.svg');
      }
    }

    &_inequality-great {
      .app_theme_light & {
        background-image: url('assets/ent_greater-than-or-equal-to_theme-light.svg');
      }
      .app_theme_dark & {
        background-image: url('assets/ent_greater-than-or-equal-to_theme-dark.svg');
      }
    }

    &_less {
      .app_theme_light & {
        background-image: url('assets/ent_less-than_theme-light.svg');
      }
      .app_theme_dark & {
        background-image: url('assets/ent_less-than_theme-dark.svg');
      }
    }

    &_great {
      .app_theme_light & {
        background-image: url('assets/ent_greater-than_theme-light.svg');
      }
      .app_theme_dark & {
        background-image: url('assets/ent_greater-than_theme-dark.svg');
      }
    }

    &_system-and {
      .app_theme_light & {
        background-image: url('assets/ent_group_theme-light.svg');
      }
      .app_theme_dark & {
        background-image: url('assets/ent_group_theme-dark.svg');
      }
    }

    &_integral {
      .app_theme_light & {
        background-image: url('assets/ent_integral_theme-light.svg');
      }
      .app_theme_dark & {
        background-image: url('assets/ent_integral_theme-dark.svg');
      }
    }

    &_log {
      .app_theme_light & {
        background-image: url('assets/ent_log_theme-light.svg');
      }
      .app_theme_dark & {
        background-image: url('assets/ent_log_theme-dark.svg');
      }
    }

    &_mod {
      .app_theme_light & {
        background-image: url('assets/ent_mod_theme-light.svg');
      }
      .app_theme_dark & {
        background-image: url('assets/ent_mod_theme-dark.svg');
      }
    }

    &_multiplication {
      .app_theme_light & {
        background-image: url('assets/ent_multiplication_default_theme-light.svg');
      }
      .app_theme_dark & {
        background-image: url('assets/ent_multiplication_default_theme-dark.svg');
      }
    }

    &_parentheses {
      .app_theme_light & {
        background-image: url('assets/ent_parentheses_default_theme-light.svg');
      }
      .app_theme_dark & {
        background-image: url('assets/ent_parentheses_default_theme-dark.svg');
      }
    }

    &_per-mile {
      .app_theme_light & {
        background-image: url('assets/ent_per-mille_theme-light.svg');
      }
      .app_theme_dark & {
        background-image: url('assets/ent_per-mille_theme-dark.svg');
      }
    }

    &_percent {
      .app_theme_light & {
        background-image: url('assets/ent_percent_theme-light.svg');
      }
      .app_theme_dark & {
        background-image: url('assets/ent_percent_theme-dark.svg');
      }
    }

    &_plus-minus {
      .app_theme_light & {
        background-image: url('assets/ent_plus-minus_theme-light.svg');
      }
      .app_theme_dark & {
        background-image: url('assets/ent_plus-minus_theme-dark.svg');
      }
    }

    &_radical {
      .app_theme_light & {
        background-image: url('assets/ent_radical_theme-light.svg');
      }
      .app_theme_dark & {
        background-image: url('assets/ent_radical_theme-dark.svg');
      }
    }

    &_sec {
      .app_theme_light & {
        background-image: url('assets/ent_sec_theme-light.svg');
      }
      .app_theme_dark & {
        background-image: url('assets/ent_sec_theme-dark.svg');
      }
    }

    &_sin {
      .app_theme_light & {
        background-image: url('assets/ent_sin_theme-light.svg');
      }
      .app_theme_dark & {
        background-image: url('assets/ent_sin_theme-dark.svg');
      }
    }

    &_tan {
      .app_theme_light & {
        background-image: url('assets/ent_tan_theme-light.svg');
      }
      .app_theme_dark & {
        background-image: url('assets/ent_tan_theme-dark.svg');
      }
    }

    &_pi {
      .app_theme_light & {
        background-image: url('assets/ent_pi_theme-light.svg');
      }
      .app_theme_dark & {
        background-image: url('assets/ent_pi_theme-dark.svg');
      }
    }

    &_tau {
      .app_theme_light & {
        background-image: url('assets/ent_tau_theme-light.svg');
      }
      .app_theme_dark & {
        background-image: url('assets/ent_tau_theme-dark.svg');
      }
    }

    &_phi {
      .app_theme_light & {
        background-image: url('assets/ent_phi_theme-light.svg');
      }
      .app_theme_dark & {
        background-image: url('assets/ent_phi_theme-dark.svg');
      }
    }

    &_gamma {
      .app_theme_light & {
        background-image: url('assets/ent_gamma_theme-light.svg');
      }
      .app_theme_dark & {
        background-image: url('assets/ent_gamma_theme-dark.svg');
      }
    }

    &_e {
      .app_theme_light & {
        background-image: url('assets/ent_e_theme-light.svg');
      }
      .app_theme_dark & {
        background-image: url('assets/ent_e_theme-dark.svg');
      }
    }

    &_g-alpha {
      .app_theme_light & {
        background-image: url('assets/ent_sign-g-alpha_theme-light.svg');
      }
      .app_theme_dark & {
        background-image: url('assets/ent_sign-g-alpha_theme-dark.svg');
      }
    }

    &_g-beta {
      .app_theme_light & {
        background-image: url('assets/ent_sign-g-beta_theme-light.svg');
      }
      .app_theme_dark & {
        background-image: url('assets/ent_sign-g-beta_theme-dark.svg');
      }
    }

    &_g-gamma {
      .app_theme_light & {
        background-image: url('assets/ent_sign-g-gamma_theme-light.svg');
      }
      .app_theme_dark & {
        background-image: url('assets/ent_sign-g-gamma_theme-dark.svg');
      }
    }

    &_g-delta {
      .app_theme_light & {
        background-image: url('assets/ent_sign-g-delta_theme-light.svg');
      }
      .app_theme_dark & {
        background-image: url('assets/ent_sign-g-delta_theme-dark.svg');
      }
    }

    &_g-epsilon {
      .app_theme_light & {
        background-image: url('assets/ent_sign-g-epsilon_theme-light.svg');
      }
      .app_theme_dark & {
        background-image: url('assets/ent_sign-g-epsilon_theme-dark.svg');
      }
    }

    &_g-zeta {
      .app_theme_light & {
        background-image: url('assets/ent_sign-g-zeta_theme-light.svg');
      }
      .app_theme_dark & {
        background-image: url('assets/ent_sign-g-zeta_theme-dark.svg');
      }
    }

    &_g-eta {
      .app_theme_light & {
        background-image: url('assets/ent_sign-g-eta_theme-light.svg');
      }
      .app_theme_dark & {
        background-image: url('assets/ent_sign-g-eta_theme-dark.svg');
      }
    }

    &_g-theta {
      .app_theme_light & {
        background-image: url('assets/ent_sign-g-theta_theme-light.svg');
      }
      .app_theme_dark & {
        background-image: url('assets/ent_sign-g-theta_theme-dark.svg');
      }
    }

    &_g-iota {
      .app_theme_light & {
        background-image: url('assets/ent_sign-g-iota_theme-light.svg');
      }
      .app_theme_dark & {
        background-image: url('assets/ent_sign-g-iota_theme-dark.svg');
      }
    }

    &_g-kappa {
      .app_theme_light & {
        background-image: url('assets/ent_sign-g-kappa_theme-light.svg');
      }
      .app_theme_dark & {
        background-image: url('assets/ent_sign-g-kappa_theme-dark.svg');
      }
    }

    &_g-lambda {
      .app_theme_light & {
        background-image: url('assets/ent_sign-g-lambda_theme-light.svg');
      }
      .app_theme_dark & {
        background-image: url('assets/ent_sign-g-lambda_theme-dark.svg');
      }
    }

    &_g-mu {
      .app_theme_light & {
        background-image: url('assets/ent_sign-g-mu_theme-light.svg');
      }
      .app_theme_dark & {
        background-image: url('assets/ent_sign-g-mu_theme-dark.svg');
      }
    }

    &_g-nu {
      .app_theme_light & {
        background-image: url('assets/ent_sign-g-nu_theme-light.svg');
      }
      .app_theme_dark & {
        background-image: url('assets/ent_sign-g-nu_theme-dark.svg');
      }
    }

    &_g-xi {
      .app_theme_light & {
        background-image: url('assets/ent_sign-g-xi_theme-light.svg');
      }
      .app_theme_dark & {
        background-image: url('assets/ent_sign-g-xi_theme-dark.svg');
      }
    }

    &_g-omicron {
      .app_theme_light & {
        background-image: url('assets/ent_sign-g-omicron_theme-light.svg');
      }
      .app_theme_dark & {
        background-image: url('assets/ent_sign-g-omicron_theme-dark.svg');
      }
    }

    &_g-pi {
      .app_theme_light & {
        background-image: url('assets/ent_sign-g-pi_theme-light.svg');
      }
      .app_theme_dark & {
        background-image: url('assets/ent_sign-g-pi_theme-dark.svg');
      }
    }

    &_g-rho {
      .app_theme_light & {
        background-image: url('assets/ent_sign-g-rho_theme-light.svg');
      }
      .app_theme_dark & {
        background-image: url('assets/ent_sign-g-rho_theme-dark.svg');
      }
    }

    &_g-sigma {
      .app_theme_light & {
        background-image: url('assets/ent_sign-g-sigma_theme-light.svg');
      }
      .app_theme_dark & {
        background-image: url('assets/ent_sign-g-sigma_theme-dark.svg');
      }
    }

    &_g-tau {
      .app_theme_light & {
        background-image: url('assets/ent_sign-g-tau_theme-light.svg');
      }
      .app_theme_dark & {
        background-image: url('assets/ent_sign-g-tau_theme-dark.svg');
      }
    }

    &_g-upsilon {
      .app_theme_light & {
        background-image: url('assets/ent_sign-g-upsilon_theme-light.svg');
      }
      .app_theme_dark & {
        background-image: url('assets/ent_sign-g-upsilon_theme-dark.svg');
      }
    }

    &_g-phi {
      .app_theme_light & {
        background-image: url('assets/ent_sign-g-phi_theme-light.svg');
      }
      .app_theme_dark & {
        background-image: url('assets/ent_sign-g-phi_theme-dark.svg');
      }
    }

    &_g-chi {
      .app_theme_light & {
        background-image: url('assets/ent_sign-g-chi_theme-light.svg');
      }
      .app_theme_dark & {
        background-image: url('assets/ent_sign-g-chi_theme-dark.svg');
      }
    }

    &_g-psi {
      .app_theme_light & {
        background-image: url('assets/ent_sign-g-psi_theme-light.svg');
      }
      .app_theme_dark & {
        background-image: url('assets/ent_sign-g-psi_theme-dark.svg');
      }
    }

    &_g-omega {
      .app_theme_light & {
        background-image: url('assets/ent_sign-g-omega_theme-light.svg');
      }
      .app_theme_dark & {
        background-image: url('assets/ent_sign-g-omega_theme-dark.svg');
      }
    }
  }

  &:hover {
    .app_theme_light & {
      background-color: rgba($color-background-invert_theme-light, 0.01);
    }

    .app_theme_dark & {
      background-color: rgba($color-background-invert_theme-dark, 0.01);
    }
  }

  &__title {
    font-size: 12px;

    .app_theme_light & {
      color: rgba($color-background-invert_theme-light, 0.5);
    }

    .app_theme_dark & {
      color: rgba($color-background-invert_theme-dark, 0.5);
    }
  }

  &__code {
    font-size: 12px;

    .app_theme_light & {
      color: $color-primary_theme-light;
    }

    .app_theme_dark & {
      color: $color-primary_theme-dark;
    }
  }
}
</style>
