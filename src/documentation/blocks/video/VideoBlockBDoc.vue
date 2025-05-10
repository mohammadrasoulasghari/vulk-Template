<script setup lang="ts">
import { videoBSample, videoB, videoBProps } from '/@src/data/docs/base/video'
import { features5 } from '/@src/data/blocks/features'
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

      <VideoBlockB
        title="محصول ما"
        :features="features5"
        source="/assets/video/meeting.mp4"
        poster="/assets/demo/img/posters/poster-2g.jpg"
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح B"
        subtitle="بلوک طرح B سبک 2"
        link="block-b-props"
      />

      <VideoBlockB
        title="محصول ما"
        :features="features5"
        source="/assets/video/meeting.mp4"
        poster="/assets/demo/img/posters/poster-2a.jpg"
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

      <DemoTabs>
        <template #code>
          <PrismCode
            language="html"
            :code="videoB"
          />
        </template>
        <template #props>
          <DemoProps :props="videoBProps.props" />
        </template>
        <template #sample>
          <PrismCode
            language="javascript"
            :code="videoBSample"
          />
        </template>
        <template #usage>
          <p class="paragraph rem-95">
            کامپوننت‌های ویدیو به یک بخش مرکزی در هر وب و اپلیکیشن موبایل تبدیل
            شده‌اند. بلوک‌های ویدیو Vulk با انواع مختلفی عرضه می‌شوند. به
            پروپ‌های موجود نگاهی بیندازید و به‌راحتی اولین بلوک ویدیوی خود را
            تنظیم کنید.
          </p>
        </template>
      </DemoTabs>
    </Container>
  </Section>
</template>
