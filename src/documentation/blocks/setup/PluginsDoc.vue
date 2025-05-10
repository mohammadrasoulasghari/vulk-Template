<script setup lang="ts">
import { plugins } from '/@src/data/docs/setup/plugins'
</script>

<template>
  <div class="theme-plugins pb-6">
    <DemoTitle
      title="پلاگین‌های قالب"
      subtitle="پلاگین‌های Vue و جاوا اسکریپت شامل Vulk"
    />

    <div class="max-w-6 mb-5">
      <p class="paragraph">
        Vulk با برخی پلاگین‌های با کیفیت بالا ارائه می‌شود که به شما در تولید کد
        عالی و تمیز کمک می‌کنند. تمام پلاگین‌های Vulk در زیر با پیوندی به
        مستندات آنها فهرست شده‌اند. وقت بگذارید تا مستندات هر پلاگین را مشاهده
        کنید و بیشترین بهره را از آن ببرید.
      </p>
    </div>

    <DemoPlugins :items="plugins" />
  </div>
</template>

<style scoped lang="scss">
.theme-plugins {
  position: relative;
  max-width: 1040px;
  margin: 0 auto;
}
</style>
