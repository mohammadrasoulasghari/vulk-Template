<script setup lang="ts">
import { advancedGallery } from '/@src/data/blocks/gallery'
import {
  galleryBlockB,
  galleryBlockBProps,
  galleryBlockBSample,
} from '/@src/data/docs/blocks/gallery/blockB'
</script>

<template>
  <Section
    id="block-b-demo"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="بلوک طرح B"
        subtitle="بلوک طرح B سبک 1"
        link="block-b-props"
      />

      <GalleryBlockB :items="advancedGallery" />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح B"
        subtitle="بلوک طرح B سبک 2"
        link="block-b-props"
      />

      <GalleryBlockB
        :items="advancedGallery"
        squared
      />
    </Container>
  </Section>

  <Section
    id="block-b-props"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="پراپ‌های بلوک طرح B"
        subtitle="پراپ‌های در دسترس برای بلوک طرح B"
      />

      <div class="py-4" />

      <DemoTabs>
        <template #code>
          <PrismCode
            language="html"
            :code="galleryBlockB"
          />
        </template>
        <template #props>
          <DemoProps :props="galleryBlockBProps.props" />
        </template>
        <template #sample>
          <PrismCode
            language="javascript"
            :code="galleryBlockBSample"
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
