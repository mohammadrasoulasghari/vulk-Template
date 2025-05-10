export const contentBlockDProps = {
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
      name: 'benefits',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['array of strings'],
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

export const contentBlockD = `
<template>
  <SideBenefits
    subtitle="داده محور"
    title="کل کسب و کار شما، متصل و مجهز به هوش مصنوعی است"
    content="برای رشد کسب و کار خود در بازارهای پویا امروزی، به یک مزیت نیاز دارید. با هوش مصنوعی ما که به طور مداوم در پشت صحنه کار می‌کند، می‌توانید فرصت‌های رشد را باز کنید و در بالاترین سطح ۷/۲۴ رقابت کنید."
    image="/@src/assets/illustrations/features/banking-cards-feature.png"
    dark-image="/@src/assets/illustrations/features/banking-cards-feature-dark.png"
    :benefits="[
      'تجربه‌ی کاربری مشتریان خود را بهبود ببخشید',
      'رضایت بیشتری از مشتریان خود دریافت کنید',
      'ابتدا حساب کاربری مشتری را بهبود دهید',
      'نتایج را بصورت آنی و زمان واقعی دریافت و بررسی کنید',
    ]"
    reverse
  />
</template>
`
