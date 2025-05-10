export const footerAProps = `
<script setup lang="ts">
export type FooterColors = 'light' | 'dark'

export interface FooterASocialLink {
  url: string
  name: string
  icon: string
}

export interface FooterAProps {
  color?: FooterColors
  socialLinks?: FooterASocialLink[]
  bubbles?: boolean
  curved?: boolean
}
</script>
`

export const footerA = `
<template>
  <FooterA color="dark" :social-links="socialLinks">
    <template #left-links>
      <RouterLink :to="{ name: 'index' }" class="level-item footer-link">محصول</RouterLink>
      <RouterLink :to="{ name: 'index' }" class="level-item footer-link">ویژگی‌ها</RouterLink>
      <RouterLink :to="{ name: 'index' }" class="level-item footer-link">مستندات</RouterLink>
    </template>
    <template #right-links>
      <RouterLink :to="{ name: 'index' }" class="level-item footer-link">شرکت</RouterLink>
      <RouterLink :to="{ name: 'index' }" class="level-item footer-link">در مورد</RouterLink>
      <RouterLink :to="{ name: 'index' }" class="level-item footer-link">پشتیبانی</RouterLink>
    </template>
  </FooterA>
</template>
`

export const footerASample = `
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
