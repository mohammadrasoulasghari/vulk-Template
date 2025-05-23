<script setup lang="ts">
import { UseElementVisibility } from '@vueuse/components'

export interface DemoFeaturesProps {
  features: any[]
}

const props = withDefaults(defineProps<DemoFeaturesProps>(), {
  features: () => [],
})
</script>

<template>
  <div class="demo-features pt-12 pb-6">
    <div class="columns b-columns-half-tablet-p">
      <div class="column is-5">
        <!--Feature-->
        <div
          v-for="(feature, index) in props.features"
          :key="index"
          class="demo-feature-wrapper"
        >
          <UseElementVisibility v-slot="{ isVisible }">
            <div
              class="demo-feature"
              :class="isVisible && 'is-active'"
            >
              <div class="svg-icon">
                <i
                  class="iconify"
                  :data-icon="feature.icon"
                />
              </div>
              <div class="feature-meta">
                <h4 class="top-title">
                  {{ feature.subtitle }}
                </h4>
                <Title
                  tag="h3"
                  :size="4"
                  weight="bold"
                  leading
                >
                  <span>{{ feature.title }}</span>
                </Title>
                <p>{{ feature.text }}</p>
              </div>
            </div>
          </UseElementVisibility>
        </div>
      </div>
      <div class="column is-7">
        <img
          class="is-image is-image-block is-image-light long-screenshot"
          src="/assets/screenshots/vulk-page-1.png"
          alt="Long screenshot"
        >
        <img
          class="is-image is-image-block is-image-dark long-screenshot"
          src="/assets/screenshots/vulk-page-1-dark.png"
          alt="Long screenshot"
        >
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.demo-features {
  .long-screenshot {
    border: 1px solid var(--card-border-color);
    border-radius: 0.75rem;
    box-shadow: var(--light-box-shadow);
  }

  .demo-feature-wrapper {
    &:not(:last-child) {
      margin-bottom: 4rem;
    }
  }

  .demo-feature {
    padding-inline-end: 2rem;
    display: flex;
    opacity: 0;
    transform: translateY(0.75rem);
    transition:
      opacity 0.3s,
      transform 0.3s;
    transition-delay: 0.25s;

    &.is-active {
      opacity: 1;
      transform: translateY(0);
    }

    .svg-icon {
      margin-inline-end: 1rem;
      font-size: 2rem;
      color: var(--primary);

      .iconify {
        vertical-align: top;
      }
    }

    .feature-meta {
      .top-title {
        font-family: var(--font);
        font-weight: 500;
        font-size: 0.7rem;
        color: var(--primary);
        text-transform: uppercase;
      }

      p {
        font-family: var(--font);
        font-size: 0.9rem;
        color: var(--medium-text);

        a {
          color: var(--primary);
          font-weight: 500;
        }
      }
    }
  }
}

@media only screen and (width <= 767px) {
  .demo-features {
    position: relative;
    overflow: hidden;

    .long-screenshot {
      position: absolute;
      top: 0;
      inset-inline-end: -130px;
      z-index: 0;
    }

    .demo-feature {
      position: relative;
      flex-direction: column;
      padding: 1.5rem;
      background: var(--card-bg-color);
      border: 1px solid var(--card-border-color);
      border-radius: 0.65rem;
      box-shadow: var(--light-box-shadow);
      margin-bottom: 2rem;
      z-index: 1;
    }

    .py-8 {
      display: none;
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .demo-features {
    .long-screenshot {
      position: sticky;
      top: 110px;
    }

    .py-8 {
      padding-top: 2rem !important;
      padding-bottom: 2rem !important;
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: landscape) {
  .demo-features {
    .long-screenshot {
      position: sticky;
      top: 110px;
    }
  }
}
</style>
