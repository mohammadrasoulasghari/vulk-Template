<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
import DocumentationFooter from '/@src/documentation/demo/DocumentationFooter.vue'
import TitleBase from '/@src/documentation/base/typography/TitleBase.vue'
import SubtitleBase from '/@src/documentation/base/typography/SubtitleBase.vue'
import PageTitleBase from '/@src/documentation/base/typography/PageTitleBase.vue'
import SectionTitleBase from '/@src/documentation/base/typography/SectionTitleBase.vue'
import CollectionTitleBase from '/@src/documentation/base/typography/CollectionTitleBase.vue'
import ParagraphBase from '/@src/documentation/base/typography/ParagraphBase.vue'
import LinkBase from '/@src/documentation/base/typography/LinkBase.vue'

const demoLinks = [
  {
    label: 'عنوان',
    target: 'title-base-demo',
  },
  {
    label: 'زیرعنوان',
    target: 'subtitle-base-demo',
  },
  {
    label: 'عنوان صفحه',
    target: 'page-title-base-demo',
  },
  {
    label: 'عنوان ثانوی',
    target: 'section-title-base-demo',
  },
  {
    label: 'عنوان کلکسیونی',
    target: 'collection-title-base-demo',
  },
  {
    label: 'پاراگراف',
    target: 'paragraph-base-demo',
  },
  {
    label: 'پیوند',
    target: 'link-base-demo',
  },
]
</script>

<template>
  <div>
    <HeroSub
      title="تایپوگرافی"
      subtitle="تایپوگرافی چیزی است که تفاوت بین یک وب‌سایت خوب طراحی شده و یک وب‌سایت متوسط را ایجاد می‌کند. تایپوگرافی ولک را کاوش کنید."
    />

    <DemoLinks
      :links="demoLinks"
      width="750px"
    />

    <!--Title base demo-->
    <TitleBase />

    <!--Subtitle base demo-->
    <SubtitleBase />

    <!--Page title base demo-->
    <PageTitleBase />

    <!--Section title base demo-->
    <SectionTitleBase />

    <!--Collection title base demo-->
    <CollectionTitleBase />

    <!--Paragraph base demo-->
    <ParagraphBase />

    <!--Link base demo-->
    <LinkBase />

    <!--Docs footer-->
    <DocumentationFooter />
  </div>
</template>
