export const contentBlockIProps = {
  props: [
    {
      name: 'counters',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['برای مشاهده ساختار داده نمونه، به زبانه نمونه مراجعه کنید'],
    },
    {
      name: 'icons',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
    {
      name: 'inverted',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
  ],
  slots: [],
}

export const contentBlockI = `
<script setup lang="ts">
import { content14 } from '/@src/data/blocks/content'
</script>

<template>
  <ContentBlockI :counters="content14" />
</template>
`

export const contentBlockISample = `
export const content14 = [
  {
    icon: 'ion:card-outline',
    number: 74,
    text: 'درگاه های پرداخت موجود',
  },
  {
    icon: 'ion:diamond-outline',
    number: 9718,
    text: 'مشتریان در سراسر جهان',
  },
  {
    icon: 'ion:timer-outline',
    number: 534,
    text: 'معیارهای تعادل زمان واقعی',
  },
  {
    icon: 'ion:business-outline',
    number: 92,
    text: 'دفاتر منطقه ای و محلی',
  },
]
`
