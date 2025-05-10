<script setup lang="ts">
import { avatarTeam } from '/@src/data/blocks/team'
import {
  teamBlockB,
  teamBlockBProps,
  teamBlockBSample,
} from '/@src/data/docs/blocks/team/blockB'
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

      <TeamBlockB :items="avatarTeam" />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح B"
        subtitle="بلوک طرح B سبک 2"
        link="block-b-props"
      />

      <TeamBlockB
        :items="avatarTeam"
        squared
        bubbles
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
            :code="teamBlockB"
          />
        </template>
        <template #props>
          <DemoProps :props="teamBlockBProps.props" />
        </template>
        <template #sample>
          <PrismCode
            language="javascript"
            :code="teamBlockBSample"
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
