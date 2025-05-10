export const testimonialsBlockCProps = {
  props: [
    {
      name: 'testimonials',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['برای مشاهده ساختار داده نمونه، به زبانه نمونه مراجعه کنید'],
    },
    {
      name: 'limit',
      type: 'number',
      required: 'false',
      default: '3',
      values: ['number'],
    },
    {
      name: 'squared',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
  ],
  slots: [],
}

export const testimonialsBlockC = `
<script setup lang="ts">
import { boxedTestimonials } from '/@src/data/blocks/testimonials'
</script>

<template>
  <TestimonialBlockC :testimonials="boxedTestimonials" squared />
</template>
`

export const testimonialsBlockCSample = `
export const boxedTestimonials = [
  {
    content:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز.',
    avatar: '/assets/demo/img/avatars/25.jpg',
    name: 'هنری استاترمن',
    position: 'مدیر فروش',
    logo: '/assets/brands/infinite.svg',
  },
  {
    content:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز.',
    avatar: '/assets/demo/img/avatars/19.jpg',
    name: 'جوی باگارا',
    position: 'مدیر پروژه',
    logo: '/assets/brands/proactive.svg',
  },
  {
    content:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز.',
    avatar: '/assets/demo/img/avatars/21.jpg',
    name: 'لیندا استینسون',
    position: 'کارگردان هنری',
    logo: '/assets/brands/tribe.svg',
  },
  {
    content:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز.',
    avatar: '/assets/demo/img/avatars/17.jpg',
    name: 'آنیکا گلر',
    position: 'تحلیلگر کسب و کار',
    logo: '/assets/brands/kromo.svg',
  },
]
`
