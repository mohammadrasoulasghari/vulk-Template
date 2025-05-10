<script setup lang="ts">
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import type { Nft } from '/@src/types'

export interface NftCarouselProps {
  slides: Nft[]
  pulled?: boolean
}

const props = withDefaults(defineProps<NftCarouselProps>(), {
  slides: () => [],
  inverted: false,
})

const breakpoints = {
  // 700px and up
  700: {
    itemsToShow: 1,
    snapAlign: 'center',
  },
  768: {
    itemsToShow: 2,
    snapAlign: 'center',
  },
  800: {
    itemsToShow: 3,
    snapAlign: 'center',
  },
  // 1024 and up
  1100: {
    itemsToShow: 4,
    snapAlign: 'start',
  },
}

const rtl: boolean | undefined = inject('rtl')
</script>

<template>
  <div class="py-6">
    <div class="nft-carousel">
      <slot name="title" />

      <div class="carousel-wrapper">
        <carousel
          :items-to-show="1"
          :breakpoints="breakpoints"
          :class="rtl && 'rtl'"
        >
          <slide
            v-for="(slide, index) in props.slides"
            :key="index"
          >
            <div class="slide-container">
              <NftCard
                :content="slide"
                flat
              />
            </div>
          </slide>

          <template #addons>
            <navigation />
          </template>
        </carousel>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.nft-carousel {
  position: relative;

  :deep(.collection-title) {
    margin-bottom: 1.5rem;
  }

  .carousel-wrapper {
    position: relative;

    .carousel {
      [dir='rtl'] & {
        direction: ltr;
      }
    }

    .slide-container {
      padding: 0 0.5rem;

      [dir='rtl'] & {
        direction: rtl;
      }
    }
  }
}

:deep(.carousel__next--in-active),
:deep(.carousel__prev--in-active) {
  opacity: 0.7;
}

:deep(.carousel__next) {
  inset-inline-end: 5px;

  svg {
    inset-inline-end: -1px;
  }
}

:deep(.carousel__prev) {
  inset-inline-end: 40px;

  svg {
    inset-inline-start: -1px;
  }
}

:deep(.carousel__next),
:deep(.carousel__prev) {
  position: absolute;
  top: -35px;
  inset-inline-start: initial;
  background: var(--card-bg-color);
  border: 1px solid var(--card-border-color);
  color: var(--light-text);
  box-shadow: var(--light-box-shadow);
  transition:
    border-color 0.3s,
    color 0.3s;

  svg {
    position: relative;
    width: 1em;
  }

  &:hover {
    border-color: var(--primary);
    color: var(--primary);
  }
}

:deep(.rtl .carousel__next) {
  inset-inline-start: 40px;
  inset-inline-end: unset;

  svg {
    inset-inline-start: -1px;
    inset-inline-end: unset;
  }
}

:deep(.rtl .carousel__prev) {
  inset-inline-start: 5px;
  inset-inline-end: unset;

  svg {
    inset-inline-start: -1px;
    inset-inline-end: unset;
  }
}

:deep(.rtl .carousel__next),
:deep(.rtl .carousel__prev) {
  inset-inline-end: initial;
}
</style>
