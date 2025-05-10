export const ctaBlockBProps = {
  props: [
    {
      name: 'titlePrimary',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'contentPrimary',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'titleSecondary',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'contentSecondary',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'ctaPrimary',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'ctaSecondary',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'ctaPrimaryLink',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'ctaSecondaryLink',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'boxed',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
    {
      name: 'color',
      type: 'string',
      required: 'false',
      default: 'false',
      values: ['Works only when the boxed prop is true .'],
    },
    {
      name: 'shapes',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['Works only when the boxed prop is true .'],
    },
    {
      name: 'animated',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['Works only when the boxed prop is true .'],
    },
  ],
  slots: [],
}

export const ctaBlockB = `
<template>
  <CtaBlockB
    title-primary="شروع به ساختن کنید"
    content-primary="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
    cta-primary="دسترسی آزمایشی"
    cta-primary-link="index"
    title-secondary="درخواست دمو"
    content-secondary="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
    cta-secondary="تماس با تیم"
    cta-secondary-link="index"
    boxed
    shapes
    animated
    color="darker"
  />
</template>
`
