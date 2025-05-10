export const faqBlockAProps = `
<script setup lang="ts">
export interface DoubleFaqCollapseItem {
  title: string
  content: string
}

export interface DoubleFaqCollapseProps {
  left: DoubleFaqCollapseItem[]
  right: DoubleFaqCollapseItem[]
  chevrons: boolean
}
</script>
`

export const faqBlockA = `
<script setup lang="ts">
import { faq } from '/@src/data/pages/commerce'
</script>

<template>
  <DoubleFaqCollapse :left="faq.left" :right="faq.right" chevrons />
</template>
`

export const faqBlockASample = `
export const faq = {
  left: [
    {
      title: 'قیمت آن چند است؟',
      content:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
    },
    {
      title: 'آیا واقعاً جایی کار می‌کند؟',
      content:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
    },
    {
      title: 'چه تفاوتی با سایر ابزارها دارد؟',
      content:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
    },
  ],
  right: [
    {
      title: 'چگونه کار می‌کند؟',
      content:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
    },
    {
      title: 'آیا می‌توانم آن را به صورت رایگان امتحان کنم؟',
      content:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
    },
    {
      title: 'چند نماینده مجاز هستند؟',
      content:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
    },
  ],
}
`
