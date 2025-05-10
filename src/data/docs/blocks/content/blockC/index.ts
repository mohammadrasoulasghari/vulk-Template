export const contentBlockCProps = {
  props: [
    {
      name: 'title',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'subtitle',
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
      name: 'links',
      type: 'string',
      required: 'false',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'linksLabel',
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

export const contentBlockC = `
<script setup lang="ts">
import { content5 } from '/@src/data/blocks/content'
</script>

<template>
  <ContentBlockC
    :title="content5.title"
    :subtitle="content5.subtitle"
    :text="content5.text"
    :image="content5.image"
  />
</template>
`

export const contentBlockCSample = `
export const content5 = {
  title: 'راه حل شماره یک',
  subtitle: 'ویژگی‌های عالی',
  image: '/assets/demo/img/content/600x400/1.jpg',
  text: [
    {
      paragraph:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
      link: 'index',
    },
    {
      paragraph:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
      link: 'index',
    },
  ],
}
`
