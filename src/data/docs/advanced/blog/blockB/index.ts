export const blogPostsBlockBProps = {
  props: [
    {
      name: 'posts',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['برای مشاهده ساختار داده نمونه، به زبانه نمونه مراجعه کنید'],
    },
    {
      name: 'limit',
      type: 'number',
      required: 'false',
      default: '20',
      values: ['number'],
    },
    {
      name: 'upsideDown',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
  ],
  slots: [],
}

export const blogPostsBlockB = `
<script setup lang="ts">
import { resources } from '/@src/data/pages/blog'
</script>

<template>
  <ResourceGrid :posts="posts" :limit="3" upside-down />
</template>
`

export const blogPostsBlockBSample = `
export const resources = [
  {
    id: 0,
    image: '/assets/illustrations/blog/landscape-abstract-1.svg',
    title: 'نحوه برگزاری جلسات تیمی رقابتی',
    likes: '۲۳۴',
    categories: [
      {
        name: 'کسب و کار',
      },
      {
        name: 'فنی',
      },
      {
        name: 'بهره وری',
      },
    ],
    date: '17 مرداد ۱۴۰۳',
    duration: 2,
  },
  {
    id: 1,
    image: '/assets/illustrations/blog/landscape-abstract-2.svg',
    title: 'همه آنچه باید در مورد جلسه یک به یک بدانید',
    likes: '۹۳',
    categories: [
      {
        name: 'تکنیک',
      },
      {
        name: 'گفتار',
      },
      {
        name: 'work',
      },
    ],
    date: '17 مرداد ۱۴۰۳',
    duration: 2,
  },
  {
    id: 2,
    image: '/assets/illustrations/blog/landscape-abstract-3.svg',
    title: 'نکات برتر جف جردن در مورد کارایی مدیریت تیم',
    likes: '۵۴',
    categories: [
      {
        name: 'مدیریت',
      },
      {
        name: 'تیم',
      },
      {
        name: 'منابع انسانی',
      },
    ],
    date: '17 مرداد ۱۴۰۳',
    duration: 2,
  },
]
`
