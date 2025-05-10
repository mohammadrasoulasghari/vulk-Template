export const companyBlockDProps = {
  props: [
    {
      name: 'values',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['برای مشاهده ساختار داده نمونه، به زبانه نمونه مراجعه کنید'],
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

export const companyBlockD = `
<script setup lang="ts">
import { values } from '/@src/data/blocks/advanced/values'
</script>

<template>
  <ValuesSection :values="values" />
</template>
`

export const companyBlockDSample = `
export const values = [
  {
    id: 0,
    image: '/assets/illustrations/about/mission.svg',
    darkImage: '/assets/illustrations/about/mission-dark.svg',
    title: 'ماموریت ما',
    content:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است',
  },
  {
    id: 1,
    image: '/assets/illustrations/about/world.svg',
    darkImage: '/assets/illustrations/about/world.svg',
    title: 'چشم انداز ما',
    content:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است',
  },
  {
    id: 3,
    image: '/assets/illustrations/about/values.svg',
    darkImage: '/assets/illustrations/about/values.svg',
    title: 'ارزش های ما',
    content:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است',
  },
]
`
