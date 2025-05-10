export const footerDProps = `
<script setup lang="ts">
export type FooterColors = 'light' | 'dark' | 'default'

export interface FooterDSocialLink {
  url: string
  name: string
  icon: string
}

export interface FooterDProps {
  text: string
  color?: FooterColors
  socialLinks?: FooterDSocialLink[]
  bubbles?: boolean
  curved?: boolean
  image?: string
}
</script>
`

export const footerD = `
<template>
  <FooterD text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
    color="light"
    :social-links="socialLinks"
    bubbles
  >
    <template #column-1>
      <Title tag="h3" :size="6" weight="thin" inverted>
        <span>كشف كردن</span>
      </Title>
      <ul>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">شروع کنید</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">محصول</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">ویژگی‌ها</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">ثبت نام</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">ورود</RouterLink>
        </li>
      </ul>
    </template>
    <template #column-2>
      <Title tag="h3" :size="6" weight="thin" inverted>
        <span>شرکت</span>
      </Title>
      <ul>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">شرکت</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">در مورد</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">آموزش</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">سوالات پر تکرار</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">تماس</RouterLink>
        </li>
      </ul>
    </template>
    <template #column-3>
      <Title tag="h3" :size="6" weight="thin" inverted>
        <span>پشتیبانی</span>
      </Title>
      <ul>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">مرکز راهنمایی</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">راهنماها</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">مستند رابط برنامه نویسی کاربردی</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Terms</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">حریم خصوصی</RouterLink>
        </li>
      </ul>
    </template>
  </FooterD>
</template>
`

export const footerDSample = `
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
