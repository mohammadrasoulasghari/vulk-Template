export const ctaBlockIProps = {
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
  ],
  slots: [],
}

export const ctaBlockI = `
<template>
  <CtaBlockI
    title="شروع کنید"
    subtitle="فرم زیر را پر کنید تا شروع به کار با برنامه ما کنید."
  >
    <template #content>
      <p class="paragraph rem-125 max-w-5 b-centered-tablet-p">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
      </p>
    </template>
    <template #form>
      <form class="py-4">
        <div class="columns is-multiline">
          <div class="column is-6">
            <Field>
              <FieldLabel label="نام">نام</FieldLabel>
              <Control icon="feather:user">
                <VInput />
              </Control>
            </Field>
          </div>
          <div class="column is-6">
            <Field>
              <FieldLabel label="نام خانوادگی">نام خانوادگی</FieldLabel>
              <Control icon="feather:user">
                <VInput />
              </Control>
            </Field>
          </div>
          <div class="column is-12">
            <Field>
              <FieldLabel label="آدرس ایمیل">آدرس ایمیل</FieldLabel>
              <Control icon="feather:mail">
                <VInput />
              </Control>
            </Field>
          </div>
          <div class="column is-6">
            <Field>
              <FieldLabel label="گذرواژه">گذرواژه</FieldLabel>
              <Control icon="feather:lock">
                <VInput type="password" />
              </Control>
            </Field>
          </div>
          <div class="column is-6">
            <Field>
              <FieldLabel label="گذرواژه">تکرار گذرواژه</FieldLabel>
              <Control icon="feather:lock">
                <VInput type="password" />
              </Control>
            </Field>
          </div>
          <div class="column is-12">
            <Field class="pt-4">
              <Control>
                <Buttons alignment="centered">
                  <Button :to="'index'" color="primary" fullwidth bold raised>شروع کنید</Button>
                </Buttons>
              </Control>
            </Field>
          </div>
        </div>
      </form>
    </template>
  </CtaBlockI>
</template>
`
