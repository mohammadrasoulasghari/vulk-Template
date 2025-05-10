export const featureBlockJProps = {
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

export const featureBlockJ = `
<script setup lang="ts">
import { features8 } from '/@src/data/blocks/features'
</script>

<template>
  <FeatureBlockJ
    title="سبزیجات تازه"
    content="لورم ایپسوم دولور سیت آمت، کانسکتتور آدیپیسینگ الیت. ایلی
      اینیم اینتر سه دیسنتیونت. اکپکتوکیو کید آد اید، کواد
      کوایره‌با، ریسپوندیاس. نسکیو کو موڈو پرايتیولاوِیت اوراتیو.
      دو رجس: کانستروکسیو اینتررته. دیسرندی آرتِم نوللام
      هابوی. ویدسنه کوم سیت مگنا دیسنسیو؟ اکِ آلید سیمیله
      دیسیمیله."
    image="/@src/assets/illustrations/features/carrying-vegetables.svg"
    dark-image="/@src/assets/illustrations/features/carrying-vegetables.svg"
    :features="features8"
    links
  />
</template>
`

export const featureBlockJSample = `
export const features8: SimpleFeature[] = [
  {
    title: 'ارسال به آدرس شما',
    text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
    link: '/',
  },
  {
    title: 'تازه و خوشمزه',
    text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
    link: '/',
  },
  {
    title: 'بدون دستکاری ژنتیکی',
    text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
    link: '/',
  },
  {
    title: 'دریافت نمایندگی',
    text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
    link: '/',
  },
]
`
