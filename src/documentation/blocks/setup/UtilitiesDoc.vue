<script setup lang="ts">
import { themeUtilities } from '/@src/data/docs/setup/utilities'
</script>

<template>
  <div class="theme-utilities pb-6">
    <DemoTitle
      title="ابزارهای قالب"
      subtitle="کلاس‌های CSS کاربردی و نحوه استفاده از آن‌ها"
    />

    <div class="max-w-6 mb-5">
      <p class="paragraph">
        Vulk با برخی از ابزارهای داخلی ارائه می‌شود که به شما کمک می‌کند بدون
        نوشتن CSS اضافی کدنویسی کنید. برخی از ابزارها دارای مقادیری هستند که در
        اینجا نیز فهرست شده‌اند. با بررسی کد قالب، ابزارهای مفید بیشتری پیدا
        خواهید کرد.
      </p>
    </div>

    <div class="theme-utilities-inner">
      <DemoUtilities :utilities="themeUtilities" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.theme-utilities {
  position: relative;
}
</style>
