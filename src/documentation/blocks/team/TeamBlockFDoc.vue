<script setup lang="ts">
import { cardTeam } from '/@src/data/blocks/team'
import {
  teamBlockF,
  teamBlockFProps,
  teamBlockFSample,
} from '/@src/data/docs/blocks/team/blockF'
</script>

<template>
  <Section
    id="block-f-demo"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="بلوک طرح F"
        subtitle="بلوک طرح F سبک 1"
        link="block-f-props"
      />

      <TeamBlockF :items="cardTeam" />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح F"
        subtitle="بلوک طرح F سبک 2"
        link="block-f-props"
      />

      <TeamBlockF
        :items="cardTeam"
        squared
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح F"
        subtitle="بلوک طرح F سبک 3"
        link="block-f-props"
      />

      <TeamBlockF
        :items="cardTeam"
        animated
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح F"
        subtitle="بلوک طرح F سبک 4"
        link="block-f-props"
      />

      <TeamBlockF
        :items="cardTeam"
        squared
        animated
      />
    </Container>
  </Section>

  <Section
    id="block-f-props"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="پراپ‌های بلوک طرح F"
        subtitle="پراپ‌های در دسترس برای بلوک طرح F"
      />

      <div class="py-4" />

      <DemoTabs>
        <template #code>
          <PrismCode
            language="html"
            :code="teamBlockF"
          />
        </template>
        <template #props>
          <DemoProps :props="teamBlockFProps.props" />
        </template>
        <template #sample>
          <PrismCode
            language="javascript"
            :code="teamBlockFSample"
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
