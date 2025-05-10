<script setup lang="ts">
import { cardTeam } from '/@src/data/blocks/team'
import {
  teamBlockD,
  teamBlockDProps,
  teamBlockDSample,
} from '/@src/data/docs/blocks/team/blockD'
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

      <TeamBlockD :items="cardTeam" />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح D"
        subtitle="بلوک طرح D سبک 2"
        link="block-d-props"
      />

      <TeamBlockD
        :items="cardTeam"
        bubbles
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

      <TeamBlockD
        :items="cardTeam"
        bubbles
        animated
        squared
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
            :code="teamBlockD"
          />
        </template>
        <template #props>
          <DemoProps :props="teamBlockDProps.props" />
        </template>
        <template #sample>
          <PrismCode
            language="javascript"
            :code="teamBlockDSample"
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
