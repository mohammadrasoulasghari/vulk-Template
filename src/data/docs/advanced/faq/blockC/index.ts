export const faqBlockCProps = `
<script setup lang="ts">
export interface FaqStaticItem {
  title: string
  content: string
  icon: string
  color: IconBoxColor
}

export interface FaqStaticProps {
  items: FaqStaticItem[]
}
</script>
`

export const faqBlockC = `
<script setup lang="ts">
import { staticFaq } from '/@src/data/blocks/faq'
</script>

<template>
  <FaqStatic :items="staticFaq" />
</template>
`

export const faqBlockCSample = `
import type { FaqStaticItem } from '/@src/components/advanced/faq/FaqStatic.vue'

export const staticFaq: FaqStaticItem[] = [
  {
    icon: 'ph:gear-six-duotone',
    color: 'primary',
    title: 'چگونه کار می‌کند؟',
    content:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
  },
  {
    icon: 'ph:crown-duotone',
    color: 'success',
    title: "عضویت شامل چه مواردی می‌شود؟",
    content:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
  },
  {
    icon: 'ph:phone-duotone',
    color: 'yellow',
    title: 'همه تماس های رایگان با مربیان واقعا نامحدود است؟',
    content:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
  },
  {
    icon: 'ph:confetti-duotone',
    color: 'info',
    title: 'آیا مربیان به صورت رایگان تماس می‌گیرند؟',
    content:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
  },
  {
    icon: 'ph:lightbulb-filament-duotone',
    color: 'orange',
    title: "گرفتاری چیست؟ آیا مربیان به سادگی مرا درگیر میکنند؟",
    content:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
  },
  {
    icon: 'ph:trophy-duotone',
    color: 'green',
    title: 'چگونه می‌توانم یک مربی وولک شوم؟',
    content:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
  },
]
`
