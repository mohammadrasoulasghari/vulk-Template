<script setup lang="ts">
import { simpleGallery } from '/@src/data/blocks/gallery'
import {
  galleryBlockD,
  galleryBlockDProps,
  galleryBlockDSample,
} from '/@src/data/docs/blocks/gallery/blockD'
</script>

<template>
  <Section
    id="block-d-demo"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="بلوک طرح D"
        subtitle="بلوک طرح D سبک 1"
        link="block-d-props"
      />

      <GalleryBlockD :items="simpleGallery" />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح D"
        subtitle="بلوک طرح D سبک 2"
        link="block-d-props"
      />

      <GalleryBlockD
        :items="simpleGallery"
        gap="sm"
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح D"
        subtitle="بلوک طرح D سبک 3"
        link="block-d-props"
      />

      <GalleryBlockD
        :items="simpleGallery"
        gap="xs"
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح D"
        subtitle="بلوک طرح D سبک 4"
        link="block-d-props"
      />

      <GalleryBlockD
        :items="simpleGallery"
        gap="sm"
        squared
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح D"
        subtitle="بلوک طرح D سبک 5"
        link="block-d-props"
      />

      <GalleryBlockD
        :items="simpleGallery"
        gap="xs"
        :columns="4"
        :limit="6"
      />
    </Container>
  </Section>

  <Section
    id="block-d-props"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="پراپ‌های بلوک طرح D"
        subtitle="پراپ‌های در دسترس برای بلوک طرح D"
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
