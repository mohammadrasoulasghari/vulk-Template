<script setup lang="ts">
import { CssUnitRe } from '/@src/utils/regex'

export interface PlaceloadParapgraphProps {
  width?: string
  lastLineWidth?: string
  lines?: number
  disabled?: boolean
  centered?: boolean
}

const props = withDefaults(defineProps<PlaceloadParapgraphProps>(), {
  width: '100%',
  lastLineWidth: '100%',
  lines: 2,
})
if (props.width.match(CssUnitRe) === null) {
  console.warn(
    `PlaceloadParapgraph: invalid "${props.width}" width. Should be a valid css unit value.`,
  )
}
if (props.lastLineWidth.match(CssUnitRe) === null) {
  console.warn(
    `PlaceloadParapgraph: invalid "${props.lastLineWidth}" lastLineWidth. Should be a valid css unit value.`,
  )
}
</script>

<template>
  <div class="content-shape-group">
    <PlaceloadText
      v-for="line of props.lines - 1"
      :key="line"
      :width="props.width"
      :centered="props.centered"
    />
    <PlaceloadText
      :width="props.lastLineWidth"
      :centered="props.centered"
    />
  </div>
</template>

<style lang="scss">
.content-shape-group {
  width: 100%;
  max-width: 100%;

  .content-shape {
    &:not(:last-child) {
      margin-bottom: 0.5rem;
    }
  }

  &.is-grow-1 {
    flex-grow: 1;
  }

  &.is-grow-2 {
    flex-grow: 2;
  }

  &.is-grow-3 {
    flex-grow: 3;
  }

  &.is-grow-4 {
    flex-grow: 4;
  }

  &.mw-30 {
    max-width: 30%;
  }

  &.mw-60 {
    max-width: 60%;
  }

  &.mw-80 {
    max-width: 80%;
  }

  &.is-centered {
    margin-inline-start: auto;
    margin-inline-end: auto;
  }
}
</style>
