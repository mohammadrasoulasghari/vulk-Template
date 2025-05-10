export const titleProps = `
<script setup lang="ts">
export type TitleSize = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
export type TitleWeight = 'thin' | 'stressed' | 'semi' | 'bold'
export type TitleTag = 'h1' | 'h2' | 'h3'

export interface TitleProps {
  size?: TitleSize
  weight?: TitleWeight
  inverted?: boolean
  narrow?: boolean
  leading?: boolean
  uppercase?: boolean
  tag: TitleTag
}

</script>
`

export const title = `
<template>
  <Title
    tag="h2"
    :size="2"
    weight="thin"
    leading>
    این یک عنوان می‌باشد
  </Title>
</template>
`

export const subtitleProps = `
<script setup lang="ts">
export type SubtitleSize = 1 | 2 | 3 | 4 | 5 | 6
export type SubtitleWeight = 'thin' | 'stressed' | 'semi' | 'bold'
export type SubtitleTag = 'h3' | 'h4' | 'p'

export interface SubtitleProps {
  size?: SubtitleSize
  weight?: SubtitleWeight
  tag: SubtitleTag
  inverted?: boolean
  narrow?: boolean
  leading?: boolean
  uppercase?: boolean
}
</script>
`

export const subtitle = `
<template>
  <Subtitle
    tag="h3"
    :size="3"
    weight="thin"
    leading>
    این یک زیرعنوان می‌باشد
  </Subtitle>
</template>
`

export const pageTitleProps = `
<script setup lang="ts">
export interface PageTitleProps {
  title: string
  subtitle: string
  text?: string
  inverted?: boolean
  aligned?: boolean
  leading?: boolean
}
</script>
`

export const pageTitle = `
<template>
  <PageTitle
    title="دوباره حساب کن"
    subtitle="شروع کنید"
    text="لورم ایپسوم دولور سیت آمِت، کونسِکتِتُر آدیپیسینگ الیت. کوی ایتا اففکتوس، بیاتوم ا پروبابیس"
  >
    <template #content>
      <Buttons alignment="centered" class="mt-4">
        <Button color="primary" :long="3" bold raised>
          شروع کنید
        </Button>
        <Button :long="3" bold>بیشتد بدانید</Button>
      </Buttons>
    </template>
  </PageTitle>
</template>
`

export const sectionTitleProps = `
<script setup lang="ts">
export interface SectionTitleProps {
  title: string
  subtitle: string
  inverted?: boolean
  spaced?: boolean
}
</script>
`

export const sectionTitle = `
<template>
  <SectionTitle title="دوباره حساب کن" subtitle="شروع کنید" />
</template>
`

export const collectionTitleProps = `
<script setup lang="ts">
export interface CollectionTitleProps {
  title: string
  subtitle: string
  inverted?: boolean
  spaced?: boolean
}
</script>
`

export const collectionTitle = `
<template>
  <CollectionTitle
    title="ترند شده 🔥"
    subtitle="نگاهی داشته باشید به آیتم‌های ترند شده"
  >
    <template #toolbar>
      <Button :long="2">مشاهده همه</Button>
    </template>
  </CollectionTitle>
</template>
`

export const paragraphProps = `
<script setup lang="ts">
//No props needed, not a vue component
</script>
`

export const paragraph = `
<template>
  <!--Paragraph size-->
  <p class="paragraph rem-125">این یک پاراگراف است در اندازه‌ی 1.25rem</p>

  <!--Paragraph color-->
  <p class="paragraph text-primary">این یک پاراگراف است (primary)</p>
</template>
`

export const linkProps = `
<script setup lang="ts">
export type ActionLinkSize = 'tiny' | 'small'

export interface ActionLinkProps {
  link: RouteLocationRaw
  label?: string
  size?: ActionLinkSize
  narrow?: boolean
  heavy?: boolean
}
</script>
`

export const link = `
<template>
  <!--Normal link-->
  <a href="https://eltheme.ir" class="link">من یک پیوند نرمال هستم</a>

  <!--RouterLink-->
  <RouterLink :to="{ name: 'index' }" class="link">من یک RouterLink هستم</RouterLink>

  <!--ActionLink-->
  <ActionLink label="پیوند اقدامی" link="index" />

  <!--Animated-->
  <a href="https://eltheme.ir" class="link has-underline">پیوند انیمیشن‌دار</a>
</template>
`
