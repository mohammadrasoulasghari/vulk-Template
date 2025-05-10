export const contentBlockAProps = {
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
      name: 'link',
      type: 'string',
      required: 'false',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'linkLabel',
      type: 'string',
      required: 'false',
      default: 'اطلاعات بیشتر',
      values: ['string'],
    },
    {
      name: 'squared',
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

export const contentBlockA = `
<script setup lang="ts">
import { content } from '/@src/data/blocks/content'
</script>

<template>
  <ContentBlockA
    :title="content.title"
    :text="content.text"
    link="index"
    :images="content.images"
  />
</template>
`

export const contentBlockASample = `
export const content = {
  title: 'زبان‌های پشتیبانی شده',
  text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
  link: 'index',
  linkLabel: 'بیشتر بدانید',
  images: [
    {
      url: '/assets/stacks/bulma.svg',
      label: 'programming language',
    },
    {
      url: '/assets/stacks/html5.svg',
      label: 'programming language',
    },
    {
      url: '/assets/stacks/js.svg',
      label: 'programming language',
    },
    {
      url: '/assets/stacks/sass.svg',
      label: 'programming language',
    },
    {
      url: '/assets/stacks/photoshop.svg',
      label: 'programming language',
    },
    {
      url: '/assets/stacks/illustrator.svg',
      label: 'programming language',
    },
    {
      url: '/assets/stacks/vuejs.svg',
      label: 'programming language',
    },
    {
      url: '/assets/stacks/reactjs.svg',
      label: 'programming language',
    },
    {
      url: '/assets/stacks/alpinejs.svg',
      label: 'programming language',
    },
    {
      url: '/assets/stacks/nodejs.svg',
      label: 'programming language',
    },
  ],
}
`
