export const ctaBlockHProps = {
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
      name: 'background',
      type: 'string',
      required: 'false',
      default: 'undefined',
      values: ['string'],
    },
  ],
  slots: [],
}

export const ctaBlockH = `
<template>
  <!--image variation-->
  <CtaBlockH
    small-text="فریم‌ورک رابط کاربری"
    title="شروع به ساختن کنید"
    subtitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
    image="/@src/assets/illustrations/apps/apps-slant.png"
    dark-image="/@src/assets/illustrations/apps/apps-slant.png"
  >
    <Buttons>
      <Button :to="'index'" color="primary" :long="2" bold raised>شروع کنید</Button>
      <Button :to="'index'" :long="2" bold raised>بیشتد بدانید</Button>
    </Buttons>
  </CtaBlockH>

  <!--background variation-->
  <CtaBlockH
    small-text="فریم‌ورک رابط کاربری"
    title="شروع به ساختن کنید"
    subtitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
    background="https://dummyimage.com/940x650.jpg"
  >
    <Buttons>
      <Button :to="'index'" color="primary" :long="2" bold raised>شروع کنید</Button>
      <Button :to="'index'" :long="2" bold raised>بیشتد بدانید</Button>
    </Buttons>
  </CtaBlockH>
</template>
`
