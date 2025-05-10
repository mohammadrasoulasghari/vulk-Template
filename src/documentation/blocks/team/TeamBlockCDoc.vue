<script setup lang="ts">
import { longTeam, longTeam2 } from '/@src/data/blocks/team'
import {
  teamBlockC,
  teamBlockCProps,
  teamBlockCSample,
} from '/@src/data/docs/blocks/team/blockC'
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

      <TeamBlockC :items="longTeam" />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح C"
        subtitle="بلوک طرح C سبک 2"
        link="block-c-props"
      />

      <TeamBlockC
        :items="longTeam2"
        squared
        bubbles
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح C"
        subtitle="بلوک طرح C سبک 3"
        link="block-c-props"
      />

      <TeamBlockC
        :items="longTeam2"
        squared
        grayscale
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

      <div class="py-4" />

      <DemoTabs>
        <template #code>
          <PrismCode
            language="html"
            :code="teamBlockC"
          />
        </template>
        <template #props>
          <DemoProps :props="teamBlockCProps.props" />
        </template>
        <template #sample>
          <PrismCode
            language="javascript"
            :code="teamBlockCSample"
          />
        </template>
        <template #usage>
          <p class="paragraph rem-95">
            Vulk با بلوک‌های تیم بسیار قابل تنظیم و همه‌کاره عرضه می‌شود که
            می‌توانید در هر صفحه‌ای استفاده کنید. هر بلوک دارای سبک‌ها و
            پراپ‌های خاص خود است. از پراپ‌ها برای ساخت نمونه‌های خود استفاده
            کنید یا از یکی از نمونه‌های از پیش ساخته شده استفاده کنید.
          </p>
        </template>
      </DemoTabs>
    </Container>
  </Section>
</template>
