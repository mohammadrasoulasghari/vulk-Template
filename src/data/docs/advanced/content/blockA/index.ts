export const contentBlockAProps = {
  props: [
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
      name: 'inverted',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
    {
      name: 'blob',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
  ],
  slots: [],
}

export const contentBlockA = `
<script setup lang="ts">
import { baseFeatures } from '/@src/data/blocks/advanced/features'
</script>

<template>
  <AppSection
    :features="baseFeatures"
    image="/@src/assets/illustrations/apps/hero-app-screen.png"
    dark-image="/@src/assets/illustrations/apps/hero-app-screen-dark.png"
    blob
  />
</template>
`

export const contentBlockASample = `
export const baseFeatures: BaseFeature[] = [
  {
    title: "مجهز به هوش مصنوعی",
    text: 'هوش مصنوعی ما هر عملیات پیچیده را انجام می‌دهد و به شما امکان می‌دهد تمرکز کنید.',
  },
  {
    title: 'داده های زمان واقعی',
    text: 'تمام داده های شما برای عملکرد بهتر در زمان واقعی پردازش می‌شوند.',
  },
  {
    title: 'سریع و ایمن',
    text: 'داده های شما در مقایسه با شبکه های سنتی عملا غیرقابل هک هستند.',
  },
]
`
