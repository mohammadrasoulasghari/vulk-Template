export const videoAProps = {
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
      name: 'source',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'poster',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'links',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['string'],
    },
  ],
  slots: [],
}

export const videoA = `
<script setup lang="ts">
import { features4 } from '/@src/data/blocks/features'
</script>

<template>
  <VideoBlockA
    title="تحویل دقیق."
    source="/assets/video/meeting.mp4"
    poster="/assets/demo/img/posters/poster-1d.jpg"
    :features="features4"
  />
</template>
`

export const videoASample = `
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

export const videoBProps = {
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
      name: 'source',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'poster',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'links',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['string'],
    },
  ],
  slots: [],
}

export const videoB = `
<script setup lang="ts">
import { features5 } from '/@src/data/blocks/features'
</script>

<template>
  <VideoBlockB
    title="محصول ما"
    :features="features5"
    source="/assets/video/meeting.mp4"
    poster="/assets/demo/img/posters/poster-2g.jpg"
  />
</template>
`

export const videoBSample = `
export const features5: IconFeature[] = [
  {
    title: 'حفظ آرامش',
    text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
    color: 'primary',
    icon: 'feather:coffee',
    link: '/',
  },
  {
    title: 'صرفه جویی زمان',
    text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
    color: 'green',
    icon: 'feather:clock',
    link: '/',
  },
  {
    title: 'درآمد بیشتر',
    text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
    color: 'info',
    icon: 'feather:zap',
    link: '/',
  },
]
`

export const videoCProps = {
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
      name: 'source',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'poster',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'links',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['string'],
    },
  ],
  slots: [],
}

export const videoC = `
<script setup lang="ts">
import { features4 } from '/@src/data/blocks/features'
</script>

<template>
  <VideoBlockC
    title="محصول ما"
    :features="features4"
    source="/assets/video/meeting.mp4"
    poster="/assets/demo/img/posters/poster-3d.jpg"
  />
</template>
`

export const videoCSample = `
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
