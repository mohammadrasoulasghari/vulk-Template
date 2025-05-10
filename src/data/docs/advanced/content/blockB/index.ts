export const contentBlockBProps = {
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
      name: 'content',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'image',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'darkImage',
      type: 'string',
      required: 'false',
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
      name: 'to',
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
      values: ['boolean'],
    },
  ],
  slots: [],
}

export const contentBlockB = `
<template>
  <BoxedSection
    minititle="به دسترسی زودهنگام بپیوندید!"
    title="کل کسب و کار تجارت الکترونیک شما، متصل و با هوش مصنوعی"
    subtitle="معرفی وولک"
    content="اولین پلتفرم بهینه سازی بازار که برای بهینه سازی تجارت الکترونیک شما برای رشد هوشمند و استراتژیک طراحی شده است."
    image="/@src/assets/illustrations/chart/circular-people-chart.png"
    dark-image="/@src/assets/illustrations/chart/circular-people-chart-dark.png"
    cta="درباره محصول ما بیشتر بدانید"
    to="index"
  />
</template>
`
