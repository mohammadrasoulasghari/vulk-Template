<script setup lang="ts">
const active = ref('')
setTimeout(() => {
  active.value = 'is-active'
}, 750)
</script>

<template>
  <Hero
    class="car-hero"
    size="fullheight"
    mask="slant"
  >
    <template #body>
      <div class="columns is-vcentered">
        <div class="column is-5">
          <div class="hero-form-container">
            <div class="hero-form">
              <Title
                tag="h2"
                :size="4"
                weight="semi"
              >
                ماشین لازم دارید؟
              </Title>
              <form>
                <Field>
                  <FieldLabel label="نام کامل" />
                  <Control icon="ph:user-duotone">
                    <VInput placeholder="نام و نام خانوادگی" />
                  </Control>
                </Field>
                <Field>
                  <FieldLabel label="آدرس ایمیل" />
                  <Control icon="ph:envelope-duotone">
                    <VInput placeholder="آدرس ایمیل شما" />
                  </Control>
                </Field>
                <Field>
                  <FieldLabel label="مقصد" />
                  <Control icon="ph:map-pin-duotone">
                    <VInput placeholder="مقصد مورد نظر شما کجاست؟" />
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
                        <span>ماشین را پیدا کن</span>
                      </Button>
                    </div>
                  </Control>
                </Field>
              </form>
            </div>
          </div>
        </div>
        <div class="column is-7">
          <div class="car-hero-composition mt-6">
            <img
              class="main-image"
              src="/assets/illustrations/hero/car-hero-left.png"
              alt="Car hero image"
              width="1000"
              height="857"
            >
            <img
              class="left-image"
              :class="active"
              src="/assets/illustrations/hero/car-hero-left.png"
              alt="Car hero image"
              width="1000"
              height="857"
            >
            <img
              class="right-image"
              :class="active"
              src="/assets/illustrations/hero/car-hero-right.png"
              alt="Car hero image"
              width="1000"
              height="857"
            >
          </div>
        </div>
      </div>
    </template>
  </Hero>
</template>

<style lang="scss" scoped>
.car-hero-composition {
  position: relative;

  .main-image {
    opacity: 0;
    pointer-events: none;
  }

  .left-image,
  .right-image {
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    width: 100%;
  }

  .right-image {
    z-index: 0;

    &.is-active {
      transform: translate(-44px, -40px);
    }

    transition: all 0.55s ease-out;
  }

  .left-image {
    top: -4rem;
    z-index: 1;

    &.is-active {
      transform: translate(44px, 44px);
    }

    transition: all 0.55s ease-out;
  }
}

.hero-form-container {
  position: relative;

  .hero-form {
    background: var(--card-bg-color);
    border: 1px solid var(--card-border-color);
    box-shadow: var(--light-box-shadow);
    border-radius: 1rem;
    padding: 2.5rem;
    width: 100%;
    max-width: 420px;
    margin: 0 auto;
  }
}

@media only screen and (width <= 767px) {
  .car-hero {
    text-align: center;

    :deep(.title) {
      &.is-2 {
        font-size: 2rem;
      }
    }

    .buttons {
      justify-content: center;
    }
  }

  .hero-form-container {
    margin-top: 3rem;

    .field {
      text-align: start;
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .car-hero {
    text-align: center;

    :deep(.title) {
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

  .hero-form-container {
    margin-top: 3rem;
  }
}
</style>
