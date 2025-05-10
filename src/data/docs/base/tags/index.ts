export const tagProps = `
<script setup lang="ts">
export type TagColor =
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'orange'
  | 'blue'
  | 'green'
  | 'purple'
  | 'solid'

export type TagShape = 'squared' | 'curved' | 'rounded'

export interface TagProps {
  label: string | number
  color?: TagColor
  shape?: TagShape
  outlined?: boolean
  elevated?: boolean
  remove?: boolean
}

</script>
`

export const tagColors = `
<template>
  <Tag label="پیشفرض"></Tag>
  <Tag color="primary" label="اولیه"></Tag>
  <Tag color="success" label="گام‌های موفقیت"></Tag>
</template>
`

export const tagRounded = `
<template>
  <Tag label="پیشفرض" shape="rounded"></Tag>
  <Tag color="solid" label="سالید" shape="rounded"></Tag>
  <Tag color="primary" label="اولیه" shape="rounded"></Tag>
</template>
`

export const tagSquare = `
<template>
  <Tag label="پیشفرض" shape="squared"></Tag>
  <Tag color="solid" label="سالید" shape="squared"></Tag>
  <Tag color="primary" label="اولیه" shape="squared"></Tag>
</template>
`

export const tagOutlined = `
<template>
  <Tag label="پیشفرض" outlined></Tag>
  <Tag color="primary" label="اولیه" outlined></Tag>
  <Tag color="success" label="گام‌های موفقیت" outlined></Tag>
</template>
`

export const tagElevated = `
<template>
  <Tag label="پیشفرض" shape="rounded" elevated></Tag>
  <Tag color="solid" label="سالید" shape="rounded" elevated></Tag>
  <Tag color="primary" label="اولیه" shape="rounded" elevated></Tag>
</template>
`
