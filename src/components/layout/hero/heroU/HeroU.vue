<script setup lang="ts"></script>

<template>
  <Hero
    v-background="{
      src: '/assets/demo/img/bg/4.jpeg',
      placeholder: 'https://dummyimage.com/1920x1080/ededed/000000',
    }"
    overlay
    class="product-hero"
    size="fullheight"
    mask="circle"
  >
    <template #body>
      <div class="columns is-vcentered">
        <div class="column is-5">
          <Title
            tag="h1"
            :size="2"
            weight="bold"
            inverted
          >
            راه‌حل‌های مدیریتی کسب‌وکار برای استارتاپ شما.
          </Title>
          <Subtitle
            tag="p"
            :size="5"
            classes="b-centered-tablet-p text-medium"
            inverted
          >
            دیگر نیازی به دغدغه و نگرانی در جستجوی آژانس برای ساخت وب‌سایت یا
            پروژه وب‌اپلیکیشن خود نخواهید داشت.
          </Subtitle>
          <!--Buttons-->
          <div class="buttons is-relative z-1">
            <Button
              color="primary"
              :long="2"
              raised
              bold
            >
              ثبت نام
            </Button>
            <Button
              elevated
              bold
              :long="2"
            >
              اطلاعات بیشتر
            </Button>
          </div>
        </div>
        <div class="column is-6 is-offset-1">
          <div class="hero-form-container">
            <div class="hero-form">
              <Title
                tag="h2"
                :size="4"
                weight="semi"
              >
                همین حالا ثبت نام کنید
              </Title>
              <form>
                <Field>
                  <FieldLabel label="نام کامل" />
                  <Control icon="feather:user">
                    <VInput placeholder="نام و نام خانوادگی" />
                  </Control>
                </Field>
                <Field>
                  <FieldLabel label="آدرس ایمیل" />
                  <Control icon="feather:mail">
                    <VInput placeholder="آدرس ایمیل شما" />
                  </Control>
                </Field>
                <Field>
                  <FieldLabel label="گذرواژه" />
                  <Control icon="feather:lock">
                    <VInput
                      type="password"
                      placeholder="گذرواژه قوی وارد کنید"
                    />
                  </Control>
                </Field>
                <Field>
                  <Control>
                    <div class="py-2">
                      <Checkbox
                        name="checkbox-1"
                        label="شرایط و ضوابط را می‌پذیرم"
                        color="default"
                      />
                    </div>
                  </Control>
                </Field>
                <Field>
                  <Control>
                    <div class="py-2">
                      <Button
                        color="primary"
                        fullwidth
                        bold
                        raised
                      >
                        <span>همین حالا ثبت نام کنید</span>
                      </Button>
                    </div>
                  </Control>
                </Field>
              </form>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Hero>
</template>

<style lang="scss" scoped>
.hero-form-container {
  position: relative;

  .hero-form {
    background: var(--card-bg-color);
    border: 1px solid var(--card-border-color);
    border-radius: 1rem;
    padding: 2.5rem;
    width: 100%;
    max-width: 420px;
    margin: 0 auto;
  }
}

@media only screen and (width <= 767px) {
  .product-hero {
    text-align: center;

    .field {
      text-align: start;
    }

    :deep(.title) {
      margin-top: 3rem;

      &.is-2 {
        font-size: 2rem;
      }
    }

    .buttons {
      justify-content: center;
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .product-hero {
    text-align: center;

    :deep(.title) {
      margin-top: 3rem;
      font-size: 2.25rem;
      margin-inline-start: auto;
      margin-inline-end: auto;
      max-width: 580px;
    }

    :deep(.subtitle) {
      margin-inline-start: auto;
      margin-inline-end: auto;
      max-width: 580px;
    }

    .buttons {
      justify-content: center;
    }
  }
}
</style>
