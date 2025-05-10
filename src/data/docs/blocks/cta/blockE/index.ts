export const ctaBlockEProps = {
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
      name: 'text',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'cta',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'ctaLink',
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

export const ctaBlockE = `
<template>
  <CtaBlockE
    title="آماده شروع هستید؟"
    subtitle="لورم ایپسوم دولور سیت آمت، کونستکتور آدیسپیسینگ الیت. کیست
          است تام دیسیمیل هومینی کوئه کوم دیکسیت."
    text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
    cta="شروع کنید"
    cta-link="index"
    inverted
  />
</template>
`
