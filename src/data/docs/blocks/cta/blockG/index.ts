export const ctaBlockGProps = {
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
      name: 'inverted',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['Works only when the boxed prop is true .'],
    },
  ],
  slots: [],
}

export const ctaBlockG = `
<template>
  <CtaBlockG
    title="شروع به ساختن کنید"
    subtitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
    image="https://dummyimage.com/800x600.jpg"
    dark-image="https://dummyimage.com/800x600.jpg"
    inverted
  >
    <Field grouped>
      <Control expanded icon="feather:mail">
        <VInput placeholder="آدرس ایمیل" inverted />
      </Control>
      <Control>
        <Button size="form" color="primary" :long="2" bold raised>ثبت نام</Button>
      </Control>
    </Field>
  </CtaBlockG>
</template>
`
