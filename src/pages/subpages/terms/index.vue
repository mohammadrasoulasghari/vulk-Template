<script setup lang="ts">
import { termsOfService } from '/@src/data/pages/terms'
</script>

<template>
  <div>
    <TermsBlock
      title="شرایط استفاده از خدمات"
      subtitle="شما باید تمام شرایط خدمات زیر را بخوانید و با تمام جزئیات آن موافقت کنید قبل از اینکه از هر یک از سایت‌های ما استفاده کنید."
      updated="1 مرداد ۱۴۰۳"
      image="/assets/illustrations/hero/terms-hero.svg"
      dark-image="/assets/illustrations/hero/terms-hero.svg"
      image-height="1152"
      image-width="517"
      :terms="termsOfService"
    />
  </div>
</template>
