export const featureBlockLProps = {
  props: [
    {
      name: 'features',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['برای مشاهده ساختار داده نمونه، به زبانه نمونه مراجعه کنید'],
    },
    {
      name: 'blob',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
    {
      name: 'dots',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
    {
      name: 'links',
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

export const featureBlockL = `
<script setup lang="ts">
import { features9 } from '/@src/data/blocks/features'
</script>

<template>
  <FeatureBlockL :features="features9" blob dots links />
</template>
`

export const featureBlockLSample = `
export const features9: BlobFeature[] = [
  {
    subtitle: 'کار تیمی',
    title: 'به راحتی همکاری کنید',
    text: 'لورم ایپسوم دولور سیت امت، کانسکتتور آدیپیسینگ الیت. نامی حسادت‌آمیز است، بدنام و مشکوک. دوستی به دلیل سودجویی جستجو شده است. او گفت: «من درباره نام کار نمی‌کنم.» دو پادشاه: ساختار اینترنتی. آیا فکر می‌کنی که مردم باید به شیوه‌ای متفاوت از فیلسوفان صحبت کنند؟',
    image: '/assets/demo/img/features/side-feature-1.jpg',
    link: '/',
  },
  {
    subtitle: 'موثر بودن',
    title: 'ساعت‌ها زمان را صرفه‌جویی کنید',
    text: 'لورم ایپسوم دولور سیت امت، کانسکتتور آدیپیسینگ الیت. نامی حسادت‌آمیز است، بدنام و مشکوک. دوستی به دلیل سودجویی جستجو شده است. او گفت: «من درباره نام کار نمی‌کنم.» دو پادشاه: ساختار اینترنتی. آیا فکر می‌کنی که مردم باید به شیوه‌ای متفاوت از فیلسوفان صحبت کنند؟',
    image: '/assets/demo/img/features/side-feature-2.jpg',
    link: '/',
  },
  {
    subtitle: 'رضایت‌مندی',
    title: 'کار را تمام کنید',
    text: 'لورم ایپسوم دولور سیت امت، کانسکتتور آدیپیسینگ الیت. نامی حسادت‌آمیز است، بدنام و مشکوک. دوستی به دلیل سودجویی جستجو شده است. او گفت: «من درباره نام کار نمی‌کنم.» دو پادشاه: ساختار اینترنتی. آیا فکر می‌کنی که مردم باید به شیوه‌ای متفاوت از فیلسوفان صحبت کنند؟',
    image: '/assets/demo/img/features/side-feature-3.jpg',
    link: '/',
  },
]
`
