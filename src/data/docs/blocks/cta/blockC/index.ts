export const ctaBlockCProps = {
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
      name: 'minimal',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
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

export const ctaBlockC = `
<template>
  <CtaBlockC
    title="آماده‌ی رفتن هستید؟"
    subtitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
    shapes
    animated
    inverted
  >
    <Buttons>
      <Button color="primary" :long="2" raised bold>اشتراک</Button>
      <Button :long="2" raised bold>بیشتد بدانید</Button>
    </Buttons>
  </CtaBlockC>
</template>
`
