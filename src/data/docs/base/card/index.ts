export const cardProps = `
<script setup lang="ts">
export type CardShape = 'straight' | 'squared' | 'curved'

export interface CardProps {
  padding?: string
  shape?: CardShape
  shadow?: boolean
  overflow?: boolean
  animated?: boolean
}
</script>
`

export const cardShapes = `
<template>
  <Card shape="squared">
    <Title tag="h2" weight="semi" :size="6" leading>کارت مربع</Title>
    <p class="paragraph rem-90">این یک کارت نرمال مربع می‌باشد</p>
  </Card>
</template>
`

export const cardPadding = `
<template>
  <Card shape="curved" padding="3rem">
    <p class="paragraph leading-tight rem-90">کارت با فاصله داخلی دلخواه</p>
  </Card>
</template>
`

export const cardShadows = `
<template>
  <Card shape="squared" shadow>
    <Title tag="h2" weight="semi" :size="6" leading>کارت مربع</Title>
    <p class="paragraph rem-90">این یک کارت نرمال مربع می‌باشد</p>
  </Card>
</template>
`

export const cardAnimation = `
<template>
  <Card shape="squared" animated>
    <Title tag="h2" weight="semi" :size="6" leading>کارت مربع</Title>
    <p class="paragraph rem-90">این یک کارت نرمال مربع می‌باشد</p>
  </Card>
</template>
`
