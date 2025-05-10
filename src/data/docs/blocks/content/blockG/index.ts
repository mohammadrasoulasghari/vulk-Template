export const contentBlockGProps = {
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
      name: 'images',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['برای مشاهده ساختار داده نمونه، به زبانه نمونه مراجعه کنید'],
    },
    {
      name: 'logos',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['برای مشاهده ساختار داده نمونه، به زبانه نمونه مراجعه کنید'],
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

export const contentBlockG = `
<script setup lang="ts">
import { content12 } from '/@src/data/blocks/content'
</script>

<template>
  <ContentBlockG
    :title="content12.title"
    :text="content12.text"
    :images="content12.images"
    :logos="content12.logos"
  />
</template>
`

export const contentBlockGSample = `
export const content12 = {
  title: 'به برند ما اعتماد دارند',
  text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
  images: [
    {
      url: '/assets/demo/img/content/800x600/5.jpg',
      label: 'featured image',
    },
    {
      url: '/assets/demo/img/content/800x600/6.jpg',
      label: 'featured image',
    },
    {
      url: '/assets/demo/img/content/800x600/7.jpg',
      label: 'featured image',
    },
    {
      url: '/assets/demo/img/content/800x600/8.jpg',
      label: 'featured image',
    },
  ],
  logos: [
    {
      url: '/assets/brands/covenant.svg',
      label: 'featured image',
    },
    {
      url: '/assets/brands/proactive.svg',
      label: 'featured image',
    },
    {
      url: '/assets/brands/tribe.svg',
      label: 'featured image',
    },
    {
      url: '/assets/brands/infinite.svg',
      label: 'featured image',
    },
  ],
}
`
