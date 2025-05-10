<script setup lang="ts">
export interface ContainerProps {
  maxWidth?: boolean
}

const props = defineProps<ContainerProps>()
</script>

<template>
  <div
    class="container"
    :style="props.maxWidth && 'max-width:100%;width:100%;'"
  >
    <slot />
  </div>
</template>
