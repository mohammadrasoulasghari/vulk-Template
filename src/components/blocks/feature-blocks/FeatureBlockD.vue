<script setup lang="ts">
import { computed } from 'vue'
import type { ImageFeature } from '/@src/types'

export type FeatureBlockSize = 'small' | 'medium'

export interface FeatureBlockDProps {
  features: ImageFeature[]
  limit?: number
  size?: FeatureBlockSize
  links?: boolean
  animated?: boolean
  horizontal?: boolean
}

const props = withDefaults(defineProps<FeatureBlockDProps>(), {
  limit: 3,
  size: undefined,
  links: false,
  animated: false,
  horizontal: false,
})

const columnClasses = computed(() => [props.horizontal ? `is-6` : `is-4`])

const boxClasses = computed(() => [
  props.animated && `animated`,
  !props.horizontal && `has-text-centered p-6 large:p-10`,
])

const imageClasses = computed(() => [props.size && `is-${props.size}`])

const textClasses = computed(() => [
  props.size === 'small' && 'rem-90',
  props.links && `mb-4`,
  !props.horizontal && `mx-auto max-w-2`,
])
</script>

<template>
  <div class="py-6 mx-auto max-w-9">
    <div class="columns is-multiline b-columns-half-tablet-p">
      <div
        v-for="(feature, index) in props.features.slice(0, props.limit)"
        :key="index"
        class="column"
        :class="columnClasses"
      >
        <div
          class="box"
          :class="boxClasses"
        >
          <slot
            name="column"
            :feature="feature"
            :index="index"
          >
            <DarkImage
              :src="feature.image"
              :src-dark="feature.darkImage"
              :class="['feature-block-image', ...imageClasses]"
              alt=""
            />
            <Title
              tag="h3"
              :size="6"
              weight="semi"
              leading
            >
              <span>{{ feature.title }}</span>
            </Title>
            <p class="paragraph rem-95">
              {{ feature.text }}
            </p>
            <RouterLink
              v-if="props.links"
              class="action"
              :class="textClasses"
              :to="feature.link"
            >
              <span>بیشتر بخوانید</span>
              <i
                class="iconify"
                data-icon="feather:arrow-right"
              />
            </RouterLink>
            <div class="bubble bubble-1" />
            <div class="bubble bubble-2" />
            <div class="bubble bubble-3" />
            <div class="bubble bubble-4" />
            <div class="bubble bubble-5" />
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box {
  position: relative;
  overflow: hidden;
  background: var(--feature-block-c-box-bg);
  border: 1px solid var(--feature-block-c-box-border);
  box-shadow: var(--light-box-shadow);
  border-radius: 1rem;
  transition:
    transform 0.3s,
    box-shadow 0.3s;

  .feature-block-image:deep(img) {
    margin: 0 auto 0.75rem;
    height: 60px;
    width: 60px;
    transition: transform 0.3s;

    &.is-small {
      height: 50px;
      width: 50px;
    }

    &.is-medium {
      height: 75px;
      width: 75px;
    }
  }

  *:not(.bubble) {
    position: relative;
    z-index: 1;
  }

  .action {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.5rem;
    font-size: 0.95rem;
    font-family: var(--font);

    &:hover {
      color: var(--primary);

      .iconify {
        transform: translateX(5px);

        [dir='rtl'] & {
          transform: translateX(-5px) rotate(180deg);
        }
      }
    }

    .iconify {
      vertical-align: middle;
      margin-inline-start: 0.25rem;
      transition: transform 0.3s;

      [dir='rtl'] & {
        transform: rotate(180deg);
      }
    }
  }

  .bubble {
    position: absolute;
    border-radius: 50%;
    background: var(--feature-block-c-box-bubble-bg);
    transition: transform 0.3s;

    &.bubble-1 {
      top: -1rem;
      inset-inline-start: -1rem;
      height: 65px;
      width: 65px;
      transition-delay: 0.35s;
    }

    &.bubble-2 {
      top: 4rem;
      inset-inline-start: 4rem;
      height: 32px;
      width: 32px;
      transition-delay: 0.15s;
    }

    &.bubble-3 {
      bottom: 3rem;
      inset-inline-start: -3rem;
      height: 80px;
      width: 80px;
      transition-delay: 0.05s;
    }

    &.bubble-4 {
      bottom: 3rem;
      inset-inline-end: 2rem;
      height: 30px;
      width: 30px;
      transition-delay: 0.5s;
    }

    &.bubble-5 {
      top: 1rem;
      inset-inline-end: 2rem;
      height: 20px;
      width: 20px;
      transition-delay: 0.65s;
    }
  }

  &.animated {
    .bubble {
      transform: scale(0);
    }
  }

  &:not(.has-text-centered) {
    .feature-block-image:deep(img) {
      margin: 0 0 0.75rem;
    }

    .bubble {
      &.bubble-3 {
        inset-inline-start: 40%;
        top: -3rem;
      }
    }
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--light-box-shadow-md);

    .feature-block-image:deep(img) {
      transform: rotate(15deg);
    }

    &.animated {
      .bubble {
        transform: scale(1) !important;
      }
    }
  }
}
</style>
