export const contentBlockBProps = {
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

export const contentBlockB = `
<script setup lang="ts">
import { content3 } from '/@src/data/blocks/content'
</script>

<template>
  <ContentBlockB
    :title="content3.title"
    :subtitle="content3.subtitle"
    :text="content3.text"
    :images="content3.images"
    link="index"
  />
</template>
`

export const contentBlockBSample = `
export const content3 = {
  title: 'هیئت تصمیم‌گیری ما',
  subtitle: 'ملاقات با مشاوران ما',
  text: [
    {
      paragraph:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز.',
    },
    {
      paragraph:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز.',
    },
  ],
  images: [
    {
      url: '/assets/demo/img/avatars/21.jpg',
      name: 'میلان جنسن',
      position: 'طراح UX',
      description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
    },
    {
      url: '/assets/demo/img/avatars/19.jpg',
      name: 'راب کارلیله',
      position: 'برنامه‌نویس وب',
      description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
    },
    {
      url: '/assets/demo/img/avatars/57.jpg',
      name: 'دنی اسپیتز',
      position: 'مهندس نرم‌افزار',
      description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
    },
    {
      url: '/assets/demo/img/avatars/42.jpg',
      name: 'ملانی کمبل',
      position: 'تحلیلگر کسب و کار',
      description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
    },
    {
      url: '/assets/demo/img/avatars/41.jpg',
      name: 'نواد پراساد',
      position: 'مدیر فروش',
      description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
    },
  ],
}
`
