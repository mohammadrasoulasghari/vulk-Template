export const featureBlockKProps = {
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

export const featureBlockK = `
<script setup lang="ts">
import { features4 } from '/@src/data/blocks/features'
</script>

<template>
  <FeatureBlockK
    title="سبزیجات تازه"
    content="لورم ایپسوم دولور سیت آمت، کانسکتتور آدیپیسینگ الیت. ایلی
      اینیم اینتر سه دیسنتیونت. اکپکتوکیو کید آد اید، کواد
      کوایره‌با، ریسپوندیاس. نسکیو کو موڈو پرايتیولاوِیت اوراتیو.
      دو رجس: کانستروکسیو اینتررته. دیسرندی آرتِم نوللام
      هابوی. ویدسنه کوم سیت مگنا دیسنسیو؟ اکِ آلید سیمیله
      دیسیمیله."
    :features="features4"
    links
  />
</template>
`

export const featureBlockKSample = `
export const features4: SimpleFeature[] = [
  {
    title: 'ارسال سریع',
    text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
    link: '/',
  },
  {
    title: 'اپلیکیشن مسیریابی',
    text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
    link: '/',
  },
  {
    title: 'سفارش‌های ثبت شده',
    text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
    link: '/',
  },
  {
    title: 'فروش‌های اختصاصی',
    text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
    link: '/',
  },
]

`
