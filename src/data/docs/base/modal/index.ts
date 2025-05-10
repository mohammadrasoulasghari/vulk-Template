export const modalProps = `
<script setup lang="ts">
export type ModalSize = 'small' | 'medium' | 'large' | 'big'
export type ModalAction = 'center' | 'right'

export interface ModalEmits {
  (e: 'close'): void
}

export interface ModalProps {
  title: string
  size?: ModalSize
  actions?: ModalAction
  open?: boolean
  rounded?: boolean
  noscroll?: boolean
  noclose?: boolean
  tabs?: boolean
  cancelLabel?: string
}
</script>
`

export const modalBase = `
<script setup lang="ts">
const modalBaseOpen = ref(false)
</script>

<template>
  <!--Modal trigger-->
  <Button bold @click="modalBaseOpen = true">باز کردن مودال</Button>

  <!--Modal-->
  <Modal
    title="ویژگی‌های پرمیوم"
    :open="modalBaseOpen"
    actions="center"
    noscroll
    @close="modalBaseOpen = false"
  >
    <template #content>
      <PlaceholderSection
        title="دریافت بسته پرمیوم"
        subtitle="با ارتقاء به نسخه پرمیوم، ویژگی‌ها و ابزارهای کسب‌وکار بیشتری را باز کنید."
      >
        <template #image>
          <DarkImage
            src="/@src/assets/illustrations/features/vr.svg"
            src-dark="/@src/assets/illustrations/features/vr-dark.svg"
            alt=""
          />
        </template>
      </PlaceholderSection>
    </template>
    <template #action>
      <Button color="primary" :long="2" raised>تأیید</Button>
    </template>
  </Modal>
</template>
`

export const modalSmall = `
<script setup lang="ts">
const modalSmallOpen = ref(false)
</script>

<template>
  <!--Modal trigger-->
  <Button bold @click="modalSmallOpen = true">باز کردن مودال</Button>

  <!--Modal-->
  <Modal
    title="مودال کوچک"
    :open="modalSmallOpen"
    size="small"
    actions="center"
    noscroll
    @close="modalSmallOpen = false"
  >
    <template #content>
      <PlaceholderSection
        title="دریافت بسته پرمیوم"
        subtitle="با ارتقاء به نسخه پرمیوم، ویژگی‌ها و ابزارهای کسب‌وکار بیشتری را باز کنید."
      >
        <template #image>
          <DarkImage
            src="/@src/assets/illustrations/features/vr.svg"
            src-dark="/@src/assets/illustrations/features/vr-dark.svg"
            alt=""
          />
        </template>
      </PlaceholderSection>
    </template>
    <template #action>
      <Button color="primary" :long="2" raised>تأیید</Button>
    </template>
  </Modal>
</template>
`

export const modalMedium = `
<script setup lang="ts">
const modalMediumOpen = ref(false)
</script>

<template>
  <!--Modal trigger-->
  <Button bold @click="modalMediumOpen = true">باز کردن مودال</Button>

  <!--Modal-->
  <Modal
    title="مودال متوسط"
    :open="modalMediumOpen"
    size="medium"
    actions="center"
    noscroll
    @close="modalMediumOpen = false"
  >
    <template #content>
      <PlaceholderSection
        title="دریافت بسته پرمیوم"
        subtitle="با ارتقاء به نسخه پرمیوم، ویژگی‌ها و ابزارهای کسب‌وکار بیشتری را باز کنید."
      >
        <template #image>
          <DarkImage
            src="/@src/assets/illustrations/features/vr.svg"
            src-dark="/@src/assets/illustrations/features/vr-dark.svg"
            alt=""
          />
        </template>
      </PlaceholderSection>
    </template>
    <template #action>
      <Button color="primary" :long="2" raised>تأیید</Button>
    </template>
  </Modal>
</template>
`

export const modalLarge = `
<script setup lang="ts">
const modalLargeOpen = ref(false)
</script>

<template>
  <!--Modal trigger-->
  <Button bold @click="modalLargeOpen = true">باز کردن مودال بزرگ</Button>

  <!--Modal-->
  <Modal
    title="مودال بزرگ"
    :open="modalLargeOpen"
    size="large"
    actions="center"
    noscroll
    @close="modalLargeOpen = false"
  >
    <template #content>
      <PlaceholderSection
        title="دریافت بسته پرمیوم"
        subtitle="با ارتقاء به نسخه پرمیوم، ویژگی‌ها و ابزارهای کسب‌وکار بیشتری را باز کنید."
      >
        <template #image>
          <DarkImage
            src="/@src/assets/illustrations/features/vr.svg"
            src-dark="/@src/assets/illustrations/features/vr-dark.svg"
            alt=""
          />
        </template>
      </PlaceholderSection>
    </template>
    <template #action>
      <Button color="primary" :long="2" raised>تأیید</Button>
    </template>
  </Modal>
</template>
`

export const modalBig = `
<script setup lang="ts">
const modalBigOpen = ref(false)
</script>

<template>
  <!--Modal trigger-->
  <Button bold @click="modalBigOpen = true">باز کردن مودال بزرگ</Button>

  <!--Modal-->
  <Modal
    title="مودال بزرگ"
    :open="modalBigOpen"
    size="big"
    actions="center"
    noscroll
    @close="modalBigOpen = false"
  >
    <template #content>
      <PlaceholderSection
        title="دریافت بسته پرمیوم"
        subtitle="با ارتقاء به نسخه پرمیوم، ویژگی‌ها و ابزارهای کسب‌وکار بیشتری را باز کنید."
      >
        <template #image>
          <DarkImage
            src="/@src/assets/illustrations/features/vr.svg"
            src-dark="/@src/assets/illustrations/features/vr-dark.svg"
            alt=""
          />
        </template>
      </PlaceholderSection>
    </template>
    <template #action>
      <Button color="primary" :long="2" raised>تأیید</Button>
    </template>
  </Modal>
</template>
`
