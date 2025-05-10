<script setup lang="ts">
import { gridTeam } from '/@src/data/blocks/team'
import {
  teamBlockE,
  teamBlockEProps,
  teamBlockESample,
} from '/@src/data/docs/blocks/team/blockE'
</script>

<template>
  <Section
    id="block-e-demo"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="بلوک طرح E"
        subtitle="بلوک طرح E سبک 1"
        link="block-e-props"
      />

      <TeamBlockE :items="gridTeam" />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح E"
        subtitle="بلوک طرح E سبک 2"
        link="block-e-props"
      />

      <TeamBlockE
        :items="gridTeam"
        squared
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح E"
        subtitle="بلوک طرح E سبک 3"
        link="block-e-props"
      />

      <TeamBlockE
        :items="gridTeam"
        :limit="12"
        shapes
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح E"
        subtitle="بلوک طرح E سبک 4"
        link="block-e-props"
      />

      <TeamBlockE
        :items="gridTeam"
        :limit="12"
        squared
        shapes
        animated
      />
    </Container>
  </Section>

  <Section
    id="block-e-props"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="پراپ‌های بلوک طرح E"
        subtitle="پراپ‌های در دسترس برای بلوک طرح E"
      />

      <div class="py-4" />

      <DemoTabs>
        <template #code>
          <PrismCode
            language="html"
            :code="teamBlockE"
          />
        </template>
        <template #props>
          <DemoProps :props="teamBlockEProps.props" />
        </template>
        <template #sample>
          <PrismCode
            language="javascript"
            :code="teamBlockESample"
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
