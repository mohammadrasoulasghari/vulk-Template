export const featureBlockFProps = {
  props: [
    {
      name: 'title',
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

export const featureBlockF = `
<script setup lang="ts">
import { features4 } from '/@src/data/blocks/features'
</script>

<template>
  <FeatureBlockF
    title="تحویل دقیق."
    :features="features4"
    image="/@src/assets/illustrations/features/flying.svg"
    dark-image="/@src/assets/illustrations/features/flying-dark.svg"
    links
  />
</template>
`

export const featureBlockFSample = `
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
