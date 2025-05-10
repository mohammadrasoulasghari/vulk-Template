<script setup lang="ts">
import type { AvatarSimpleSize } from '/@src/components/base/avatar/AvatarSimple.vue'

export type HeroStackOrientation = 'left' | 'right'

export interface HeroStack {
  id: number
  order: number
  orientation: HeroStackOrientation
  picture: string
  size: AvatarSimpleSize
}

export interface HeroStacksProps {
  stacks: HeroStack[]
}

const props = withDefaults(defineProps<HeroStacksProps>(), {
  stacks: () => [],
})
</script>

<template>
  <AvatarSimple
    v-for="(avatar, index) in props.stacks"
    :key="index"
    class="float-stack"
    :class="[
      avatar.order && `float-stack-${avatar.order}`,
      avatar.orientation && `is-${avatar.orientation}`,
    ]"
    :picture="avatar.picture"
    :size="avatar.size"
  />
</template>

<style lang="scss" scoped>
.float-stack {
  position: absolute !important;
  padding: 0.35rem;
  background: var(--card-bg-color);
  border: 1px solid var(--card-border-color);
  border-radius: 50%;
  box-shadow: var(--spread-shadow);

  :deep(.avatar-image) {
    background: var(--wrap-muted-color);
  }

  &.is-left {
    &.float-stack-1 {
      top: 20%;
      inset-inline-start: 0;
    }

    &.float-stack-2 {
      top: 30%;
      inset-inline-start: 5%;
    }

    &.float-stack-3 {
      top: 28%;
      inset-inline-start: -5%;
    }

    &.float-stack-4 {
      top: 42%;
      inset-inline-start: -18%;
    }

    &.float-stack-5 {
      top: 34%;
      inset-inline-start: -12%;
    }

    &.float-stack-6 {
      top: 21%;
      inset-inline-start: -14%;
    }

    &.float-stack-7 {
      top: 10%;
      inset-inline-start: -8%;
    }

    &.float-stack-8 {
      top: 42%;
      inset-inline-start: -2%;
    }
  }

  &.is-right {
    &.float-stack-1 {
      top: 20%;
      inset-inline-end: 0;
    }

    &.float-stack-2 {
      top: 30%;
      inset-inline-end: 5%;
    }

    &.float-stack-3 {
      top: 28%;
      inset-inline-end: -5%;
    }

    &.float-stack-4 {
      top: 42%;
      inset-inline-end: -18%;
    }

    &.float-stack-5 {
      top: 34%;
      inset-inline-end: -12%;
    }

    &.float-stack-6 {
      top: 21%;
      inset-inline-end: -14%;
    }

    &.float-stack-7 {
      top: 10%;
      inset-inline-end: -8%;
    }

    &.float-stack-8 {
      top: 42%;
      inset-inline-end: -2%;
    }
  }
}

@media only screen and (width <= 767px) {
  .float-stack {
    &.is-left {
      &.float-stack-1 {
        top: 5%;
        inset-inline-start: -12%;
      }

      &.float-stack-2 {
        display: none !important;
      }

      &.float-stack-3,
      &.float-stack-4,
      &.float-stack-6,
      &.float-stack-7 {
        display: none !important;
      }

      &.float-stack-8 {
        top: 20%;
        inset-inline-start: -6%;
        transform: scale(0.7);
      }
    }

    &.is-right {
      &.float-stack-1 {
        top: -4%;
        inset-inline-end: 23%;
      }

      &.float-stack-2 {
        display: none !important;
      }

      &.float-stack-3,
      &.float-stack-4,
      &.float-stack-7 {
        display: none;
      }

      &.float-stack-5 {
        top: 30%;
      }

      &.float-stack-6 {
        top: 2%;
        inset-inline-end: -16%;
      }

      &.float-stack-8 {
        top: 17%;
        inset-inline-end: -11%;
      }
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .float-stack {
    &.is-left {
      &.float-stack-3 {
        inset-inline-start: -10%;
      }

      &.float-stack-4 {
        display: none;
      }

      &.float-stack-5 {
        top: -5%;
        inset-inline-start: -5%;
      }

      &.float-stack-6 {
        top: 4%;
        inset-inline-start: 5%;
      }
    }

    &.is-right {
      &.float-stack-3 {
        inset-inline-end: -10%;
      }

      &.float-stack-4 {
        display: none;
      }

      &.float-stack-5 {
        top: -5%;
        inset-inline-end: -5%;
      }

      &.float-stack-6 {
        top: 4%;
        inset-inline-end: 4%;
      }
    }
  }
}
</style>
