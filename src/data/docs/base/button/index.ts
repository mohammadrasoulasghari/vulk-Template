export const buttonProps = `
<script setup lang="ts">
export type ButtonSize = 'medium' | 'large' | 'form'
export type ButtonColor =
  | 'primary'
  | 'secondary'
  | 'default'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark'

export interface ButtonProps {
  color?: ButtonColor
  size?: ButtonSize
  long?: 1 | 2 | 3
  rounded?: boolean
  outlined?: boolean
  raised?: boolean
  elevated?: boolean
  bold?: boolean
  fullwidth?: boolean
  to?: RouteLocationRaw
  loading?: boolean
  disabled?: boolean
  iconLeft?: string
  iconRight?: string
}
</script>
`

export const buttonSizes = `
<template>
  <Button>نرمال</Button>
  <Button size="medium">متوسط</Button>
  <Button size="large">بزرگ</Button>
</template>
`

export const buttonShapes = `
<template>
  <Button rounded>نرمال</Button>
  <Button size="medium" rounded>متوسط</Button>
  <Button size="large" rounded>بزرگ</Button>
</template>
`

export const buttonTypes = `
<template>
  <Button>Iam a Button</Button>
  <Button href="https://google.com">Iam a Link</Button>
  <Button to="index">من یک RouterLink هستم</Button>
</template>
`

export const buttonColor = `
<template>
  <Button color="primary" :long="1">اولیه</Button>
  <Button color="success" :long="1">گام‌های موفقیت</Button>
</template>
`

export const buttonOutlined = `
<template>
  <Button color="primary" :long="1" outlined>اولیه</Button>
  <Button color="success" :long="1" outlined>گام‌های موفقیت</Button>
  <Button color="info" :long="1" outlined>اینفو</Button>
</template>
`

export const buttonIcons = `
<template>
  <Button icon-left="feather:github">گیت هاب</Button>
  <Button icon-right="feather:arrow-right">حرکت به راست</Button>
</template>
`

export const buttonElevation = `
<template>
  <Button color="primary" elevated>اولیه</Button>
  <Button color="success" raised>گام‌های موفقیت</Button>
  <Button color="info" elevated>اینفو</Button>
</template>
`

export const buttonLoading = `
<template>
  <Button loading>پیشفرض</Button>
  <Button color="primary" loading>اولیه</Button>
  <Button color="success"loading>گام‌های موفقیت</Button>
</template>
`

export const buttonDisabled = `
<template>
  <Button disabled>پیشفرض</Button>
  <Button color="primary" disabled>اولیه</Button>
  <Button color="success"disabled>گام‌های موفقیت</Button>
</template>
`
