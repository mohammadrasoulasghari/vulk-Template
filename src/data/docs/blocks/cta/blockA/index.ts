export const ctaBlockAProps = {
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
      name: 'logosText',
      type: 'string',
      required: 'false',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'logos',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['برای مشاهده ساختار داده نمونه، به زبانه نمونه مراجعه کنید'],
    },
    {
      name: 'ctaPrimary',
      type: 'string',
      required: 'false',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'ctaSecondary',
      type: 'string',
      required: 'false',
      default: 'اطلاعات بیشتر',
      values: ['string'],
    },
    {
      name: 'ctaPrimaryLink',
      type: 'string',
      required: 'false',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'ctaSecondaryLink',
      type: 'string',
      required: 'false',
      default: 'اطلاعات بیشتر',
      values: ['string'],
    },
    {
      name: 'boxed',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
    {
      name: 'color',
      type: 'string',
      required: 'false',
      default: 'false',
      values: ['Works only when the boxed prop is true .'],
    },
    {
      name: 'shapes',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['Works only when the boxed prop is true .'],
    },
    {
      name: 'animated',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['Works only when the boxed prop is true .'],
    },
  ],
  slots: [],
}

export const ctaBlockA = `
<script setup lang="ts">
import { customerLogos2 } from '/@src/data/pages/logos'
</script>

<template>
  <CtaBlockA
    title="آماده‌ی رفتن هستید؟"
    subtitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
    cta-primary="شروع کنید"
    cta-primary-link="index"
    cta-secondary="بیشتر بدانید"
    cta-secondary-link="index"
    :logos="customerLogos2"
    boxed
    shapes
    animated
    color="darker"
  />
</template>
`

export const ctaBlockASample = `
export const customerLogos2 = [
  {
    id: 0,
    logo: '/assets/brands/kromo.svg',
  },
  {
    id: 1,
    logo: '/assets/brands/proactive.svg',
  },
  {
    id: 2,
    logo: '/assets/brands/tribe.svg',
  },
  {
    id: 3,
    logo: '/assets/brands/infinite.svg',
  },
  {
    id: 4,
    logo: '/assets/brands/grubspot.svg',
  },
]
`
