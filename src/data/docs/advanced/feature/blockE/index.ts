export const featureBlockEProps = {
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
      name: 'cta',
      type: 'string',
      required: 'false',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'to',
      type: 'string',
      required: 'false',
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
      name: 'layerBase',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'layerExtension',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'legend',
      type: 'string',
      required: 'false',
      default: 'undefined',
      values: ['string'],
    },

    {
      name: 'bordered',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
    {
      name: 'inverted',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
    {
      name: 'blob',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
    {
      name: 'reverse',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
  ],
  slots: [],
}

export const featureBlockE = `
<template>
  <SpinnerSection
    inverted
    subtitle="خدمات طراحی وب دلخواه"
    title="نتایج مبتنی بر مدیریت تبلیغات مقرون به صرفه"
    content="برای صرفه جویی در زمان، افزایش عملکرد و رسیدن به نقاط عطف خود در مسیر رشد خود، با کارشناسان تبلیغات ما شریک شوید."
    cta="درباره خدمات اختیاری ما بیاموزید"
    to="index"
    image="/assets/illustrations/chart/tech-chart.png"
    layer-base="/assets/illustrations/chart/tech-chart"
    layer-extension="svg"
  />
</template>
`
