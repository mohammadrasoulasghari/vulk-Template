<script setup lang="ts">
export type PlaceloadAvatarSize = 'small' | 'medium' | 'large' | 'big' | 'xl'
export type PlaceloadAvatarRounded = 'full' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export interface PlaceloadAvatarProps {
  size?: PlaceloadAvatarSize
  rounded?: PlaceloadAvatarRounded
  centered?: boolean
  disabled?: boolean
}

const props = withDefaults(defineProps<PlaceloadAvatarProps>(), {
  size: undefined,
  rounded: 'full',
})
</script>

<template>
  <div
    class="placeload-avatar"
    :class="[
      !props.disabled && `loads`,
      props.size && `is-${props.size}`,
      props.centered && `is-centered`,
      props.rounded && `is-rounded-${props.rounded}`,
    ]"
  />
</template>

<style lang="scss">
.placeload-avatar {
  display: block;
  width: 40px;
  min-width: 40px;
  height: 40px;

  &.is-small {
    width: 32px;
    min-width: 32px;
    height: 32px;
  }

  &.is-medium {
    width: 50px;
    min-width: 50px;
    height: 50px;
  }

  &.is-large {
    width: 68px;
    min-width: 68px;
    height: 68px;
  }

  &.is-big {
    width: 80px;
    min-width: 80px;
    height: 80px;
  }

  &.is-xl {
    width: 100px;
    min-width: 100px;
    height: 100px;
  }

  &.is-centered {
    margin-inline-start: auto;
    margin-inline-end: auto;
  }

  &.is-rounded-xs {
    border-radius: 0.25rem;
  }

  &.is-rounded-sm {
    border-radius: 0.5rem;
  }

  &.is-rounded-md {
    border-radius: 0.75rem;
  }

  &.is-rounded-lg {
    border-radius: 1rem;
  }

  &.is-rounded-xl {
    border-radius: 1.25rem;
  }

  &.is-rounded-full {
    border-radius: 50%;
  }
}
</style>
