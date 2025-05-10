export const contentBlockFProps = {
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

export const contentBlockF = `
<script setup lang="ts">
import { content10 } from '/@src/data/blocks/content'
</script>

<template>
  <ContentBlockF
    :title="content10.title"
    :text="content10.text"
    :image="content10.image"
    :logos="content10.logos"
  />
</template>
`

export const contentBlockFSample = `
export const content10 = {
  title: 'به برند ما اعتماد دارند',
  image: '/assets/demo/img/content/800x600/3.png',
  logos: [
    {
      url: '/assets/brands/infinite.svg',
      label: 'featured image',
    },
    {
      url: '/assets/brands/kromo.svg',
      label: 'featured image',
    },
    {
      url: '/assets/brands/tribe.svg',
      label: 'featured image',
    },
    {
      url: '/assets/brands/gutwork.svg',
      label: 'featured image',
    },
  ],
  text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز.',
}
`
