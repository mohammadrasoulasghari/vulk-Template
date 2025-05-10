export const featureBlockIProps = {
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
      name: 'columns',
      type: 'number',
      required: 'false',
      default: '4',
      values: ['3', '4', '6'],
    },
    {
      name: 'limit',
      type: 'number',
      required: 'false',
      default: '6',
      values: ['number'],
    },
    {
      name: 'size',
      type: 'string',
      required: 'false',
      default: 'undefined',
      values: ['small', 'medium'],
    },
    {
      name: 'rounded',
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

export const featureBlockI = `
<script setup lang="ts">
import { features7 } from '/@src/data/blocks/features'
</script>

<template>
  <FeatureBlockI
    title="ویژگی های شگفت انگیز"
    content="لورم ایپسوم دولور سیت آمت، کانسکتتور آدیپیسینگ الیت. ایلی اینیم
    اینتر سه دیسنتیونت. اکپکتوکیو کید آد اید، کواد کوایره‌با،
    ریسپوندیاس. نسکیو کو موڈو پرايتیولاوِیت اوراتیو. دو رجس:
    کانستروکسیو اینتررته. دیسرندی آرتِم نوللام هابوی."
    :features="features7"
    links
    rounded
  />
</template>
`

export const featureBlockISample = `
export const features7: ImageFeature[] = [
  {
    title: 'مکان‌های داخل جنگل',
    text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
    image: '/assets/illustrations/features/standard-landscape-1.svg',
    darkImage: '/assets/illustrations/features/standard-landscape-1.svg',
    link: '/',
  },
  {
    title: 'مکان‌های آشنا',
    text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
    image: '/assets/illustrations/features/standard-landscape-2.svg',
    darkImage: '/assets/illustrations/features/standard-landscape-2.svg',
    link: '/',
  },
  {
    title: 'مکان‌های مرزی',
    text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
    image: '/assets/illustrations/features/standard-landscape-3.svg',
    darkImage: '/assets/illustrations/features/standard-landscape-3.svg',
    link: '/',
  },
  {
    title: 'مکان‌های آبشاری',
    text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
    image: '/assets/illustrations/features/standard-landscape-4.svg',
    darkImage: '/assets/illustrations/features/standard-landscape-4.svg',
    link: '/',
  },
]
`
