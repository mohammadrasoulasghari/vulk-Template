export const contentBlockJProps = {
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
      name: 'counters',
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

export const contentBlockJ = `
<script setup lang="ts">
import { content16 } from '/@src/data/blocks/content'
</script>

<template>
  <ContentBlockJ
    :title="content16.title"
    :text="content16.text"
    :image="content16.image"
    :counters="content16.counters"
  />
</template>
`

export const contentBlockJSample = `
export const content16 = {
  title: 'کیت‌های شروع کننده عالی',
  text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
  image: '/assets/demo/img/content/800x600/7.jpg',
  link: 'index',
  counters: [
    {
      icon: 'logos:bootstrap',
      number: 250,
      text: 'کامپوننت‌های بوت‌استرپ',
    },
    {
      icon: 'logos:bulma',
      number: 180,
      text: 'کامپوننت‌های بولما',
    },
    {
      icon: 'logos:android-icon',
      number: 94,
      text: 'کامپوننت‌های اندروید',
    },
  ],
}
`
