<script setup lang="ts">
import { resources, resources2 } from '/@src/data/pages/blog'
import {
  blogPostsBlockB,
  blogPostsBlockBProps,
  blogPostsBlockBSample,
} from '/@src/data/docs/advanced/blog/blockB'
</script>

<template>
  <Section
    id="block-b-demo"
    bordered-bottom
  >
    <Container>
      <DemoTitle
        title="بلوک طرح B"
        subtitle="بلوک پیشرفته طرح B سبک 1"
        link="block-b-props"
      />

      <div class="py-4" />

      <ResourceGrid
        :posts="resources"
        :limit="3"
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="بلوک طرح B"
        subtitle="بلوک پیشرفته طرح B سبک 2"
        link="block-b-props"
      />

      <div class="py-4" />

      <ResourceGrid
        :posts="resources2"
        :limit="3"
        upside-down
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
            :code="blogPostsBlockB"
          />
        </template>
        <template #props>
          <DemoProps :props="blogPostsBlockBProps.props" />
        </template>
        <template #sample>
          <PrismCode
            language="javascript"
            :code="blogPostsBlockBSample"
          />
        </template>
        <template #usage>
          <p class="paragraph rem-95">
            Vulk با بلوک‌های ویژگی پیشرفته و شگفت‌انگیز عرضه می‌شود که می‌توانید
            از آن‌ها در هر صفحه‌ای استفاده کنید. هر بلوک با استایل‌ها و پروپ‌های
            خاص خود عرضه می‌شود. از پروپ‌ها برای ساخت نمونه‌های خود استفاده کنید
            یا یکی از نمونه‌های آماده را به کار ببرید. هر بلوک به‌طور پیش‌فرض از
            حالت تاریک پشتیبانی می‌کند. برای جزئیات بیشتر در مورد استفاده، به تب
            مارک‌آپ و پروپ‌ها مراجعه کنید.
          </p>
        </template>
      </DemoTabs>
    </Container>
  </Section>
</template>
