<script setup lang="ts">
export interface FieldProps {
  grouped?: boolean
}

const props = withDefaults(defineProps<FieldProps>(), {
  grouped: false,
})

const fieldClasses = computed(() => [props.grouped && `is-grouped`])
</script>

<template>
  <div
    class="field"
    :class="fieldClasses"
  >
    <slot />
  </div>
</template>

<style scoped lang="scss">
@media only screen and (width <= 767px) {
  .field {
    &.is-grouped {
      flex-direction: column;

      :deep(.control) {
        margin: 0;

        &:not(:last-child) {
          margin: 0;
          margin-bottom: 0.75rem;
        }
      }

      :deep(.button) {
        width: 100%;
      }
    }
  }
}
</style>
