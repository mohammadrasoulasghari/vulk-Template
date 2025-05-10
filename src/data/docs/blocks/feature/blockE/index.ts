export const featureBlockEProps = {
  props: [
    {
      name: 'title',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'content',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'features',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['برای مشاهده ساختار داده نمونه، به زبانه نمونه مراجعه کنید'],
    },
    {
      name: 'image',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'darkImage',
      type: 'string',
      required: 'false',
      default: 'undefined',
      values: ['string'],
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

export const featureBlockE = `
<script setup lang="ts">
import { features3 } from '/@src/data/blocks/features'
</script>

<template>
  <FeatureBlockE
    title="واقعیت افزوده و کسب و کارها."
    content="لورم ایپسوم دولور سیت آمت، کانسکتتور آدیپیسینگ الیت. ایلی
      اینیم اینتر سه دیسنتیونت. اکپکتوکیو کید آد اید، کواد
      کوایره‌با، ریسپوندیاس. نسکیو کو موڈو پرايتیولاوِیت اوراتیو.
      دو رجس: کانستروکسیو اینتررته. دیسرندی آرتِم نوللام
      هابوی. ویدسنه کوم سیت مگنا دیسنسیو؟ اکِ آلید سیمیله
      دیسیمیله."
    :features="features3"
    image="/@src/assets/illustrations/features/vr.svg"
    dark-image="/@src/assets/illustrations/features/vr-dark.svg"
    links
  />
</template>
`

export const featureBlockESample = `
export const features3: SimpleFeature[] = [
  {
    title: 'گزارش‌های ماهانه',
    text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
    link: '/',
  },
  {
    title: 'داشبورد حرفه‌ای',
    text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
    link: '/',
  },
]
`
