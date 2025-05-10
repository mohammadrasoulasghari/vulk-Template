<script setup lang="ts">
import { boxedGallery } from '/@src/data/blocks/gallery'
import {
  galleryBlockD,
  galleryBlockDProps,
  galleryBlockDSample,
} from '/@src/data/docs/blocks/gallery/blockD'
</script>

<template>
  <Section
    id="block-c-demo"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="بلوک طرح C"
        subtitle="بلوک طرح C سبک 1"
        link="block-c-props"
      />

      <GalleryBlockC :items="boxedGallery" />
    </Container>
  </Section>

  <Section
    id="block-c-props"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="پراپ‌های بلوک طرح C"
        subtitle="پراپ‌های در دسترس برای بلوک طرح C"
      />

      <div class="py-4" />

      <DemoTabs>
        <template #code>
          <PrismCode
            language="html"
            :code="galleryBlockD"
          />
        </template>
        <template #props>
          <DemoProps :props="galleryBlockDProps.props" />
        </template>
        <template #sample>
          <PrismCode
            language="javascript"
            :code="galleryBlockDSample"
          />
        </template>
        <template #usage>
          <p class="paragraph rem-95">
            Vulk با بلوک‌های گالری بسیار قابل تنظیم و چندمنظوره ارائه می‌شود که
            می‌توانید در هر صفحه‌ای از آنها استفاده کنید. هر بلوک با سبک‌ها و
            خصوصیات خاص خود ارائه می‌شود. از خصوصیات استفاده کنید تا نمونه‌های
            خود را بسازید یا از یکی از نمونه‌های از پیش ساخته‌شده استفاده کنید.
          </p>
        </template>
      </DemoTabs>
    </Container>
  </Section>
</template>
