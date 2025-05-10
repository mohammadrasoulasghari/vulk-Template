<script setup lang="ts">
import { videoASample, videoA, videoAProps } from '/@src/data/docs/base/video'
import { features4 } from '/@src/data/blocks/features'
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

      <VideoBlockA
        title="تحویل دقیق."
        source="/assets/video/meeting.mp4"
        poster="/assets/demo/img/posters/poster-1d.jpg"
        :features="features4"
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح A"
        subtitle="بلوک طرح A سبک 2"
        link="block-a-props"
      />

      <VideoBlockA
        title="تحویل دقیق."
        source="/assets/video/meeting.mp4"
        poster="/assets/demo/img/posters/poster-1.jpg"
        :features="features4"
        links
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

      <DemoTabs>
        <template #code>
          <PrismCode
            language="html"
            :code="videoA"
          />
        </template>
        <template #props>
          <DemoProps :props="videoAProps.props" />
        </template>
        <template #sample>
          <PrismCode
            language="javascript"
            :code="videoASample"
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
