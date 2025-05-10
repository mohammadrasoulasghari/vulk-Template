export const testimonialsBlockDProps = {
  props: [
    {
      name: 'image',
      type: 'string',
      required: 'true',
      default: 'false',
      values: ['string'],
    },
    {
      name: 'title',
      type: 'string',
      required: 'true',
      default: 'false',
      values: ['string'],
    },
    {
      name: 'content',
      type: 'string',
      required: 'true',
      default: 'false',
      values: ['string'],
    },
    {
      name: 'link',
      type: 'string',
      required: 'false',
      default: 'false',
      values: ['string'],
    },
    {
      name: 'linkLabel',
      type: 'string',
      required: 'true',
      default: 'false',
      values: ['string'],
    },
  ],
  slots: [],
}

export const testimonialsBlockD = `
<template>
  <TestimonialBlock
    image="/assets/demo/img/content/500x500/1.jpg"
    title="پیدا کردن یه سرویس با قیمت مناسب کار سختی بود تا اینکه با وولک آشنا شدم هم امکانات مناسب هم قیمت مناسب!"
    content="معاملات بیمه ایزابلا که در پلتفرم ما یافت شد، زندگی او را کاملاً تغییر داد و تمام زحمات را برطرف کرد."
    link-label="داستان ایزابل را بخوانید"
    link="/about"
  />
</template>
`
