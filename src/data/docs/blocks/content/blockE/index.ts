export const contentBlockEProps = {
  props: [
    {
      name: 'title',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'text',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'image',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'icons',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['برای مشاهده ساختار داده نمونه، به زبانه نمونه مراجعه کنید'],
    },
    {
      name: 'iconSquared',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
    {
      name: 'imageSquared',
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

export const contentBlockE = `
<script setup lang="ts">
import { content8 } from '/@src/data/blocks/content'
</script>

<template>
  <ContentBlockE
    :title="content8.title"
    :text="content8.text"
    :icons="content8.icons"
    :image="content8.image"
  />
</template>
`

export const contentBlockESample = `
export const content8 = {
  title: 'با اکثر فریم‌ورک‌ها کار می‌کند',
  image: '/assets/demo/img/content/800x600/2.png',
  icons: [
    {
      url: '/assets/stacks/js.svg',
      label: 'featured image',
    },
    {
      url: '/assets/stacks/vuejs.svg',
      label: 'featured image',
    },
    {
      url: '/assets/stacks/reactjs.svg',
      label: 'featured image',
    },
    {
      url: '/assets/stacks/angular.svg',
      label: 'featured image',
    },
    {
      url: '/assets/stacks/alpinejs.svg',
      label: 'featured image',
    },
  ],
  text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز.',
}
`
