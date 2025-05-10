<script setup lang="ts">
export interface DarkImageProps {
  src: string
  srcDark?: string
  alt?: string
  width?: string | number
  height?: string | number
  inline?: boolean
  mirror?: boolean
}

const props = withDefaults(defineProps<DarkImageProps>(), {
  alt: undefined,
  srcDark: undefined,
  width: undefined,
  height: undefined,
  mirror: undefined,
})
const classes = computed(() =>
  props.inline ? 'is-image is-image-inline' : 'is-image is-image-block',
)
</script>

<template>
  <component :is="props.inline ? 'span' : 'div'">
    <img
      :class="[classes, { mirror: props.mirror }]"
      :src="props.src"
      :alt="props.alt"
      :width="props.width"
      :height="props.height"
      loading="lazy"
      class="is-image is-image-light"
    >
    <img
      :class="[classes, { mirror: props.mirror }]"
      :src="props.srcDark || props.src"
      :alt="props.alt"
      :width="props.width"
      :height="props.height"
      loading="lazy"
      class="is-image is-image-dark"
    >
  </component>
</template>
