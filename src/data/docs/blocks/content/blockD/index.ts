export const contentBlockDProps = {
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
      name: 'images',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['برای مشاهده ساختار داده نمونه، به زبانه نمونه مراجعه کنید'],
    },
    {
      name: 'limit',
      type: 'number',
      required: 'false',
      default: '2',
      values: ['number'],
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

export const contentBlockD = `
<script setup lang="ts">
import { content7 } from '/@src/data/blocks/content'
</script>

<template>
  <ContentBlockD
    :title="content7.title"
    :subtitle="content7.subtitle"
    :text="content7.text"
    :images="content7.images"
    link="index"
    inverted
  />
</template>
`

export const contentBlockDSample = `
export const content7 = {
  title: 'راه حل شماره یک',
  subtitle: 'ویژگی‌های عالی',
  images: [
    {
      url: '/assets/demo/img/content/600x400/1.jpg',
      label: 'featured image',
    },
    {
      url: '/assets/demo/img/content/600x400/2.jpg',
      label: 'featured image',
    },
    {
      url: '/assets/demo/img/content/600x400/3.jpg',
      label: 'featured image',
    },
    {
      url: '/assets/demo/img/content/600x400/4.jpg',
      label: 'featured image',
    },
  ],
  text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می‌باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده.',
  link: 'index',
}
`
