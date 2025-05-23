export const placeholderProps = `
<script setup lang="ts">
export interface PlaceholderProps {
  title: string
  subtitle?: string
  larger?: boolean
}
</script>
`

export const placeholderBase = `
<template>
  <Placeholder
    title="پروژه   پیدا نشد"
    subtitle="some nice subtitle text."
  >
    <template #image>
      <DarkImage
        src="https://dummyimage.com/800x600"
        src-dark="https://dummyimage.com/800c600"
        alt=""
      />
    </template>
    <template #action>
      <Buttons alignment="centered">
        <Button color="primary" :long="2" raised>پروژه‌ها</Button>
        <Button :long="2">داشبورد</Button>
      </Buttons>
    </template>
  </Placeholder>
</template>
`
