<route lang="yaml">
meta:
  navbar:
    enabled: false
  footer:
    enabled: false
</route>

<script setup lang="ts">
useHead({
  title: 'قالب صفحه ثبت نام',
})
</script>

<template>
  <div>
    <SignupSingle />
  </div>
</template>
