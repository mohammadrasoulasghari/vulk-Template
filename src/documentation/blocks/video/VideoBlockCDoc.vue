<script setup lang="ts">
import { videoCSample, videoC, videoCProps } from '/@src/data/docs/base/video'
import { features4 } from '/@src/data/blocks/features'
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

      <VideoBlockC
        title="محصول ما"
        :features="features4"
        source="/assets/video/meeting.mp4"
        poster="/assets/demo/img/posters/poster-3d.jpg"
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح C"
        subtitle="بلوک طرح C سبک 2"
        link="block-c-props"
      />

      <VideoBlockC
        title="محصول ما"
        :features="features4"
        source="/assets/video/meeting.mp4"
        poster="/assets/demo/img/posters/poster-3a.jpg"
        links
      />
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

      <DemoTabs>
        <template #code>
          <PrismCode
            language="html"
            :code="videoC"
          />
        </template>
        <template #props>
          <DemoProps :props="videoCProps.props" />
        </template>
        <template #sample>
          <PrismCode
            language="javascript"
            :code="videoCSample"
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
