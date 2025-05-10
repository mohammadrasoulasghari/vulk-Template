<script setup lang="ts">
import { masonryGallery } from '/@src/data/blocks/gallery'
import {
  galleryBlockA,
  galleryBlockAProps,
  galleryBlockASample,
} from '/@src/data/docs/blocks/gallery/blockA'
</script>

<template>
  <Section
    id="block-a-demo"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="بلوک طرح A"
        subtitle="بلوک طرح A سبک 1"
        link="block-a-props"
      />

      <GalleryBlockA :items="masonryGallery" />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح A"
        subtitle="بلوک طرح A سبک 2"
        link="block-a-props"
      />

      <GalleryBlockA
        :items="masonryGallery"
        squared
      />
    </Container>
  </Section>

  <Section
    id="block-a-props"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="پراپ‌های بلوک طرح A"
        subtitle="پراپ‌های در دسترس برای بلوک طرح A"
      />

      <div class="py-4" />

      <DemoTabs>
        <template #code>
          <PrismCode
            language="html"
            :code="galleryBlockA"
          />
        </template>
        <template #props>
          <DemoProps :props="galleryBlockAProps.props" />
        </template>
        <template #sample>
          <PrismCode
            language="javascript"
            :code="galleryBlockASample"
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
