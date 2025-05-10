<script setup lang="ts">
import { boxTeam } from '/@src/data/blocks/team'
import {
  teamBlockA,
  teamBlockAProps,
  teamBlockASample,
} from '/@src/data/docs/blocks/team/blockA'
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

      <TeamBlockA :items="boxTeam" />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح A"
        subtitle="بلوک طرح A سبک 2"
        link="block-a-props"
      />

      <TeamBlockA
        :items="boxTeam"
        :columns="4"
        :limit="6"
        scale
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح A"
        subtitle="بلوک طرح A سبک 3"
        link="block-a-props"
      />

      <TeamBlockA
        :items="boxTeam"
        grayscale
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح A"
        subtitle="بلوک طرح A سبک 3"
        link="block-a-props"
      />

      <TeamBlockA
        :items="boxTeam"
        plain
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح A"
        subtitle="بلوک طرح A سبک 3"
        link="block-a-props"
      />

      <TeamBlockA
        :items="boxTeam"
        plain
        curved
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
            :code="teamBlockA"
          />
        </template>
        <template #props>
          <DemoProps :props="teamBlockAProps.props" />
        </template>
        <template #sample>
          <PrismCode
            language="javascript"
            :code="teamBlockASample"
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
