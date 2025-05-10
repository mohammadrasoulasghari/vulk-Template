<script setup lang="ts"></script>

<template>
  <FooterB
    v-background="{
      src: '/assets/shapes/lowpoly-pattern.png',
      placeholder: 'https://dummyimage.com/1920x1080/ededed/000000',
    }"
    color="dark"
  >
    <template #links>
      <li class="inline-block px-2">
        <RouterLink
          to="/"
          class="footer-link"
        >
          دموها
        </RouterLink>
      </li>
      <li class="inline-block px-2">
        <RouterLink
          to="/blocks/"
          class="footer-link"
        >
          کامپوننت‌ها
        </RouterLink>
      </li>
      <li class="inline-block px-2">
        <a
          href="https://docs.eltheme.ir/vulk"
          class="footer-link"
        >مستندات</a>
      </li>
      <li class="inline-block px-2">
        <a
          href="https://support.eltheme.ir"
          class="footer-link"
        >پشتیبانی</a>
      </li>
    </template>
  </FooterB>
</template>
