export const popoverProps = `
<script setup lang="ts">
export type PopoverPlacement = 'top' | 'bottom' | 'right' | 'left'
export type PopoverColor =
  | 'default'
  | 'inverted'
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'purple'

export type PopoverSpacing = 'small' | 'medium' | 'large'

export interface PopoverProps {
  content?: string
  placement?: PopoverPlacement
  spacing?: PopoverSpacing
  arrow?: boolean
  hover?: boolean
  custom?: boolean
  color?: PopoverColor
  offsetDistance?: number
  openDelay?: number
  closeDelay?: number
}
</script>
`

export const popoverBase = `
<template>
  <Popover
    content="این یک پاپ آور در بالا می‌باشد"
    placement="top"
    arrow
    hover
  >
    <p class="paragraph cursor-pointer">موس رو بیار اینجا</p>
  </Popover>
</template>
`

export const popoverTrigger = `
<template>
  <Popover
    content="این پاپ آور با موس راه‌اندازی می‌شود"
    placement="top"
    arrow
    hover
  >
    <Button>موس رو بیار اینجا</Button>
  </Popover>
</template>
`

export const popoverColors = `
<template>
  <Popover
    content="This is a primary popover"
    placement="top"
    hover
    arrow
    color="primary"
  >
    <p class="paragraph cursor-pointer">اولیه</p>
  </Popover>

  <Popover
    content="This is a success popover"
    placement="top"
    hover
    arrow
    color="success"
  >
    <p class="paragraph cursor-pointer">گام‌های موفقیت</p>
  </Popover>
</template>
`

export const popoverCustomIcons = `
<template>
  <Popover custom spacing="medium" arrow hover>
    <template #popover>
      <IconPopover
        icon="ion:skull-outline"
        color="danger"
        heading="Danger ahead"
        content="لورم ایپسوم دلار سیت آمیت، کنسکتاتور آدیپیسینگ الیت. ایام استابیلم اپللاس."
      />
    </template>
    <p class="paragraph cursor-pointer">موس رو بیار اینجا</p>
  </Popover>

  <Popover custom spacing="medium" arrow hover>
    <template #popover>
      <IconPopover
        icon="ion:rocket-outline"
        color="info"
        heading="Startup nation"
        content="لورم ایپسوم دلار سیت آمیت، کنسکتاتور آدیپیسینگ الیت. ایام استابیلم اپللاس."
        rounded
      />
    </template>
    <p class="paragraph cursor-pointer">موس رو بیار اینجا</p>
  </Popover>
</template>
`

export const popoverCustomAvatars = `
<template>
  <Popover custom spacing="large" arrow hover>
    <template #popover>
      <AvatarPopover
        avatar="/assets/demo/img/avatars/42.jpg"
        heading="هلن میلر"
        subheading="مهندس نرم‌افزار"
        content="لورم ایپسوم دلار سیت آمیت، کنسکتاتور آدیپیسینگ الیت. ایام استابیلم اپللاس. کنفرم تکم، کوام کوئیکوئه ورسو رم سوبیسیاس."
      />
    </template>
    <p class="paragraph cursor-pointer">موس رو بیار اینجا</p>
  </Popover>

  <Popover custom spacing="large" arrow hover>
    <template #popover>
      <AvatarPopover
        avatar="/assets/demo/img/avatars/25.jpg"
        heading="کریس ویات"
        subheading="توسعه‌دهنده فرانت"
        content="لورم ایپسوم دلار سیت آمیت، کنسکتاتور آدیپیسینگ الیت. ایام استابیلم اپللاس. کنفرم تکم، کوام کوئیکوئه ورسو رم سوبیسیاس."
        squared
      />
    </template>
    <p class="paragraph cursor-pointer">موس رو بیار اینجا</p>
  </Popover>
</template>
`
