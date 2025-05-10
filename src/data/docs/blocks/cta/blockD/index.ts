export const ctaBlockDProps = {
  props: [
    {
      name: 'title',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'subtitle',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'inverted',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['Works only when the boxed prop is true .'],
    },
  ],
  slots: [],
}

export const ctaBlockD = `
<template>
  <CtaBlockD
    title="آماده‌ی رفتن هستید؟"
    subtitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
    inverted
  >
    <Buttons>
      <Button color="primary" :long="2" bold raised>شروع کنید</Button>
      <Button :long="2" bold raised>بیشتد بدانید</Button>
    </Buttons>
  </CtaBlockD>
</template>
`
