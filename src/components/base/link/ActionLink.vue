<script setup lang="ts">
import { computed } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

export type ActionLinkSize = 'tiny' | 'small'

export interface ActionLinkProps {
  link: RouteLocationRaw
  label?: string
  icon?: string
  size?: ActionLinkSize
  narrow?: boolean
  heavy?: boolean
}

const props = withDefaults(defineProps<ActionLinkProps>(), {
  link: undefined,
  label: '',
  icon: 'feather:arrow-right',
  size: undefined,
  narrow: false,
  heavy: false,
})

const linkClasses = computed(() => [
  props.size === 'tiny' && 'rem-90',
  props.size === 'small' && 'rem-95',
  props.narrow && 'is-narrow',
  props.heavy && 'is-heavy',
])
</script>

<template>
  <RouterLink
    :to="props.link"
    class="action-link"
    :class="linkClasses"
  >
    <slot>
      <span>{{ props.label }}</span>
    </slot>
    <i
      class="iconify"
      :data-icon="props.icon"
    />
  </RouterLink>
</template>

<style scoped lang="scss">
.action-link {
  display: inline-flex;
  align-items: center;
  margin-top: 0.5rem;
  font-family: var(--font);

  .iconify {
    [dir='rtl'] & {
      transform: rotate(180deg);
    }
  }

  &:hover {
    color: var(--primary);

    .iconify {
      transform: translateX(5px);

      [dir='rtl'] & {
        transform: translateX(-5px) rotate(180deg);
      }
    }
  }

  &.is-narrow {
    margin-top: 0;
  }

  &.is-heavy {
    font-weight: 500;
  }

  .iconify {
    vertical-align: middle;
    margin-inline-start: 0.25rem;
    transition: transform 0.3s;
  }
}
</style>
