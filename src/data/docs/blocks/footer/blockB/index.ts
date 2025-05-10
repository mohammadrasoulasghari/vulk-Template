export const footerBProps = `
<script setup lang="ts">
export type FooterColors = 'light' | 'dark'

export interface FooterBProps {
  color?: FooterColors
  bubbles?: boolean
}
</script>
`

export const footerB = `
<template>
  <FooterB color="dark">
    <template #links>
      <li class="inline-block px-2">
        <RouterLink :to="{ name: 'index' }" class="footer-link">Demos</RouterLink>
      </li>
      <li class="inline-block px-2">
        <RouterLink :to="{ name: 'index' }" class="footer-link">کامپوننت‌ها</RouterLink>
      </li>
      <li class="inline-block px-2">
        <RouterLink :to="{ name: 'index' }" class="footer-link">مستندات</RouterLink>
      </li>
      <li class="inline-block px-2">
        <RouterLink :to="{ name: 'index' }" class="footer-link">پشتیبانی</RouterLink>
      </li>
    </template>
  </FooterB>
</template>
`

export const footerBSample = `
const socialLinks = [
  {
    name: 'فیسبوک',
    url: 'https://facebook.com',
    icon: 'fa:facebook',
  },
  {
    name: 'ایکس',
    url: 'https://twitter.com',
    icon: 'fa:twitter',
  },
  {
    name: 'لینکدین',
    url: 'https://linkedin.com',
    icon: 'fa:linkedin',
  },
  {
    name: 'گیت هاب',
    url: 'https://github.com',
    icon: 'fa:github',
  },
]
`
