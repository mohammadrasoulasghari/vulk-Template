export const ctaBlockJProps = {
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
      name: 'smallText',
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

export const ctaBlockJ = `
<template>
  <CtaBlockJ
    small-text="آزمایشی ۱۴ روزه"
    title="شروع به ساختن کنید"
    subtitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
  >
    <Buttons alignment="centered">
      <Button :to="'index'" color="primary" :long="2" bold raised>شروع کنید</Button>
      <Button :to="'index'" :long="2" bold raised>بیشتد بدانید</Button>
    </Buttons>
  </CtaBlockJ>
</template>
`
