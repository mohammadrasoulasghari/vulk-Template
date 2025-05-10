<script setup lang="ts">
import type { AvatarSimpleSize } from '/@src/components/base/avatar/AvatarSimple.vue'

export type HeroAvatarOrientation = 'left' | 'right'

export interface HeroAvatar {
  id: number
  order: number
  orientation: HeroAvatarOrientation
  picture: string
  size: AvatarSimpleSize
}

export interface HeroAvatarsProps {
  avatars: HeroAvatar[]
}

const props = withDefaults(defineProps<HeroAvatarsProps>(), {
  avatars: () => [],
})
</script>

<template>
  <AvatarSimple
    v-for="(avatar, index) in props.avatars"
    :key="index"
    class="float-avatar"
    :class="[
      avatar.order && `float-avatar-${avatar.order}`,
      avatar.orientation && `is-${avatar.orientation}`,
    ]"
    :picture="avatar.picture"
    :size="avatar.size"
  />
</template>

<style lang="scss" scoped>
.float-avatar {
  position: absolute !important;

  &.is-left {
    &.float-avatar-1 {
      top: 0;
      inset-inline-start: 0;
    }

    &.float-avatar-2 {
      top: 10%;
      inset-inline-start: 5%;
    }

    &.float-avatar-3 {
      top: 8%;
      inset-inline-start: -5%;
    }

    &.float-avatar-4 {
      top: 22%;
      inset-inline-start: -18%;
    }

    &.float-avatar-5 {
      top: 16%;
      inset-inline-start: -12%;
    }

    &.float-avatar-6 {
      top: 3%;
      inset-inline-start: -12%;
    }
  }

  &.is-right {
    &.float-avatar-1 {
      top: 0;
      inset-inline-end: 0;
    }

    &.float-avatar-2 {
      top: 10%;
      inset-inline-end: 5%;
    }

    &.float-avatar-3 {
      top: 8%;
      inset-inline-end: -5%;
    }

    &.float-avatar-4 {
      top: 22%;
      inset-inline-end: -18%;
    }

    &.float-avatar-5 {
      top: 16%;
      inset-inline-end: -12%;
    }

    &.float-avatar-6 {
      top: 3%;
      inset-inline-end: -12%;
    }
  }
}

@media only screen and (width <= 767px) {
  .float-avatar {
    &.is-left {
      &.float-avatar-1 {
        top: -9%;
        inset-inline-start: -7%;
      }

      &.float-avatar-2 {
        display: none !important;
      }

      &.float-avatar-3 {
        display: none !important;
      }

      &.float-avatar-4 {
        top: 35%;
        inset-inline-start: -9%;

        :deep(img) {
          height: 50px !important;
          width: 50px !important;
          min-width: 50px !important;
        }
      }

      &.float-avatar-6 {
        top: 9%;
        inset-inline-start: -2%;
        display: none;
      }
    }

    &.is-right {
      &.float-avatar-1 {
        top: -4%;
        inset-inline-end: 23%;
      }

      &.float-avatar-2 {
        display: none !important;
      }

      &.float-avatar-3 {
        display: none;
      }

      &.float-avatar-4 {
        top: 35%;
        inset-inline-end: -9%;

        :deep(img) {
          height: 50px !important;
          width: 50px !important;
          min-width: 50px !important;
        }
      }

      &.float-avatar-6 {
        top: 2%;
        inset-inline-end: -10%;
      }
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .float-avatar {
    &.is-left {
      &.float-avatar-3 {
        inset-inline-start: -7%;
      }

      &.float-avatar-4 {
        display: none;
      }

      &.float-avatar-5 {
        top: -7%;
        inset-inline-start: 9%;
      }

      &.float-avatar-6 {
        top: 24%;
        inset-inline-start: 2%;
      }
    }

    &.is-right {
      &.float-avatar-3 {
        inset-inline-end: -7%;
      }

      &.float-avatar-4 {
        display: none;
      }

      &.float-avatar-5 {
        top: -7%;
        inset-inline-end: 9%;
      }

      &.float-avatar-6 {
        top: 24%;
        inset-inline-end: 2%;
      }
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: landscape) {
  .float-avatar {
    &.is-left {
      &.float-avatar-6 {
        top: 21%;
        inset-inline-start: -1%;
      }
    }

    &.is-right {
      &.float-avatar-6 {
        top: 21%;
        inset-inline-end: -1%;
      }
    }
  }
}
</style>
