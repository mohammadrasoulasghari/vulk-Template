export const featureBlockBProps = {
  props: [
    {
      name: 'alignment',
      type: 'string',
      required: 'false',
      default: 'undefined',
      values: ['centered'],
    },
    {
      name: 'features',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['برای مشاهده ساختار داده نمونه، به زبانه نمونه مراجعه کنید'],
    },
    {
      name: 'columns',
      type: 'number',
      required: 'false',
      default: '4',
      values: ['3', '4', '6'],
    },
    {
      name: 'limit',
      type: 'number',
      required: 'false',
      default: '6',
      values: ['number'],
    },
    {
      name: 'size',
      type: 'string',
      required: 'false',
      default: 'undefined',
      values: ['small', 'medium'],
    },
    {
      name: 'rounded',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
    {
      name: 'links',
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

export const featureBlockB = `
<script setup lang="ts">
import { features2 } from '/@src/data/blocks/features'
</script>

<template>
  <FeatureBlockB
    alignment="centered"
    :features="features"
    :columns="4"
    :limit="6"
    size="medium"
    inverted
  />
</template>
`

export const featureBlockBSample = `
export const features2: ImageFeature[] = [
  {
    title: 'کمپین ها',
    text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
    image: '/assets/icons/colored/laptop-mail.svg',
    darkImage: '/assets/icons/colored/laptop-mail.svg',
    link: '/',
  },
  {
    title: 'مدیریت کارها',
    text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
    image: '/assets/icons/colored/papers.svg',
    darkImage: '/assets/icons/colored/papers.svg',
    link: '/',
  },
  {
    title: 'داشبورد شخصی',
    text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
    image: '/assets/icons/colored/compass.svg',
    darkImage: '/assets/icons/colored/compass.svg',
    link: '/',
  },
  {
    title: 'درگاه های پرداخت',
    text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
    image: '/assets/icons/colored/credit-card.svg',
    darkImage: '/assets/icons/colored/credit-card.svg',
    link: '/',
  },
  {
    title: 'مدیریت زمان',
    text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
    image: '/assets/icons/colored/clock.svg',
    darkImage: '/assets/icons/colored/clock.svg',
    link: '/',
  },
  {
    title: 'اطلاعیه',
    text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
    image: '/assets/icons/colored/bell.svg',
    darkImage: '/assets/icons/colored/bell.svg',
    link: '/',
  },
  {
    title: 'ادغام های اجتماعی',
    text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
    image: '/assets/icons/colored/puzzle.svg',
    darkImage: '/assets/icons/colored/puzzle.svg',
    link: '/',
  },
  {
    title: 'پیام رسانی فوری',
    text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
    image: '/assets/icons/colored/chat.svg',
    darkImage: '/assets/icons/colored/chat.svg',
    link: '/',
  },
]
`
