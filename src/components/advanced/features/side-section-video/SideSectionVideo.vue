<script setup lang="ts">
import { computed } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

export interface SideSectionVideoProps {
  title: string
  subtitle: string
  content: string
  to?: RouteLocationRaw
  cta?: string
  source: string
  poster: string
  bordered?: boolean
  inverted?: boolean
  reverse?: boolean
}

const props = withDefaults(defineProps<SideSectionVideoProps>(), {
  cta: undefined,
  to: undefined,
  bordered: false,
  inverted: false,
  reverse: false,
})

const sideSectionClasses = computed(() => [
  props.bordered && `is-bordered`,
  props.inverted && `is-inverted`,
  props.reverse && `is-reverse`,
])

const textClasses = computed(() => [props.inverted && `is-inverted`])
</script>

<template>
  <div
    class="side-section mobile:py-0 small:py-6 z-1"
    :class="sideSectionClasses"
  >
    <div class="columns is-vcentered">
      <div class="column is-5">
        <Subtitle
          tag="h3"
          :size="6"
          weight="bold"
          class="pb-4"
          leading
        >
          <span class="text-gradient">{{ props.subtitle }}</span>
        </Subtitle>
        <Title
          tag="h2"
          :size="2"
          weight="bold"
          :inverted="props.inverted"
        >
          {{ props.title }}
        </Title>
        <p
          class="paragraph rem-115 mb-4"
          :class="textClasses"
        >
          {{ props.content }}
        </p>
        <RouterLink
          v-if="props.cta && props.to"
          :to="props.to"
          class="rem-115"
        >
          <span class="action-link">{{ props.cta }}</span>
          <i
            class="iconify"
            data-icon="feather:arrow-right"
          />
        </RouterLink>
        <slot name="content" />
      </div>
      <div class="column is-6 has-text-centered is-relative is-offset-1">
        <div class="video-player-container-wrapper">
          <VidStack
            ratio="square"
            :source="props.source"
            :poster="props.poster"
            :title="props.title"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.side-section {
  .morphing-blob-wrapper {
    position: absolute;
    transform: scale(1.8);
    opacity: 0.15;
  }

  .action-link {
    font-weight: 500;
    margin-inline-end: 0.75rem;

    &:hover {
      color: var(--primary);

      + .iconify {
        color: var(--primary);
        transform: translateX(5px) !important;

        [dir='rtl'] & {
          transform: translateX(-5px) rotate(180deg) !important;
        }
      }
    }
  }

  .iconify {
    transition: transform 0.3s;
    vertical-align: middle;

    [dir='rtl'] & {
      transform: rotate(180deg);
    }
  }

  &.is-bordered {
    border-bottom: 1px solid var(--border);
  }

  &.is-reverse {
    .columns {
      flex-direction: row-reverse;

      .column {
        &.is-offset-1 {
          margin-inline-start: 0;
          margin-inline-end: 8.3333%;
        }
      }
    }
  }

  &.is-inverted {
    &.is-bordered {
      border-bottom-color: var(--dark-border);
    }
  }
}

@media only screen and (width <= 767px) {
  .side-section {
    :deep(.title) {
      &.is-2 {
        font-size: 2rem;
      }
    }

    .field {
      &.is-grouped {
        flex-direction: column;
      }
    }

    .morphing-blob-wrapper {
      transform: scale(1.3);
      top: -17px;
      inset-inline-end: -18px;
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .side-section {
    text-align: center;

    .morphing-blob-wrapper {
      transform: scale(1.6);
      top: 40px;
      inset-inline-end: 146px;
    }

    .column {
      &.is-5 {
        max-width: 660px;
        margin: 0 auto 2rem;
      }
    }

    img {
      max-width: 490px !important;
    }

    .spinner-container {
      max-width: 490px;
      margin: 0 auto;
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: landscape) {
  .side-section {
    :deep(.title) {
      &.is-2 {
        font-size: 2rem;
      }
    }
  }
}
</style>
