<script setup lang="ts">
const rtl: boolean | undefined = inject('rtl')
</script>

<template>
  <Hero
    class="illustration-hero has-top-bg is-right"
    alignment="center"
    size="fullheight"
    color="grey"
  >
    <template #body>
      <div class="columns is-vcentered mt-12">
        <!--Hero Content-->
        <div class="column is-relative">
          <div class="mx-auto max-w-6 mb-4">
            <Title
              tag="h1"
              :size="1"
              weight="bold"
            >
              <span>
                پلتفرم پشتیبانی مشتری در
                <span class="text-primary">استروئیدها</span>
              </span>
            </Title>
            <Subtitle
              tag="p"
              :size="5"
              weight="thin"
              class="mx-auto max-w-6 b-centered-tablet-p pt-2"
            >
              وولک یک برنامه چند پلتفرمی است که به شما کمک می‌کند درخواست‌های
              پشتیبانی را در تیم ایجاد، سازماندهی، پیگیری و به اشتراک بگذارید.
            </Subtitle>
            <!--Buttons-->
            <div class="buttons is-relative z-1">
              <Button
                color="primary"
                :long="2"
                raised
                bold
              >
                دسترسی آزمایشی
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

          <div class="hero-image-composition mt-6">
            <div class="image-wrap">
              <DarkImage
                class="inner-image"
                src="/assets/illustrations/hero/support-hero.svg"
                alt=""
              />
            </div>
            <div class="polka-dots polka-dots-1">
              <PolkaDots />
            </div>
            <div class="element-container element-1">
              <div class="call-container">
                <img
                  :class="{ mirror: rtl }"
                  src="/assets/illustrations/hero/support-hero-call-1.svg"
                  alt="hero image"
                >
              </div>
            </div>
            <div class="polka-dots polka-dots-2">
              <PolkaDots />
            </div>
            <div class="element-container element-2">
              <div class="call-container">
                <img
                  :class="{ mirror: rtl }"
                  src="/assets/illustrations/hero/support-hero-call-2.svg"
                  alt="hero image"
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Hero>
</template>

<style lang="scss" scoped>
:deep(.hero) {
  overflow: hidden !important;
}

:deep(.hero-body) {
  padding-bottom: 0 !important;
}

.illustration-hero {
  .hero-image-composition {
    min-height: 580px;

    .image-wrap {
      position: absolute;
      bottom: 0;
      inset-inline-start: 0;
      inset-inline-end: 0;
      min-height: 580px;
      margin: 0 auto;
      width: 100%;

      .inner-image:deep(img) {
        position: relative;
        display: block;
        margin: 0 auto;
        height: 100%;
        max-height: 580px;
        width: auto;
        z-index: 2;
      }
    }

    .polka-dots {
      position: absolute;
      z-index: 0;

      img {
        display: block;
        width: 140px;
      }

      &.polka-dots-1 {
        bottom: 41%;
        inset-inline-end: 15%;
      }

      &.polka-dots-2 {
        bottom: 63%;
        inset-inline-start: 2%;
      }
    }

    .element-container {
      position: absolute;
      z-index: 1;

      &.element-1 {
        bottom: 35%;
        inset-inline-end: 10%;
        background: var(--card-bg-color);
        padding: 0.85rem;
        height: 230px;
        max-width: 300px;
        border: 1px solid var(--card-border-color);
        border-radius: 1.75rem;
        box-shadow: var(--light-box-shadow);

        .call-container {
          position: relative;
          height: 100%;
          width: 100%;

          img {
            display: block;
            object-fit: cover;
            height: 100%;
            border-radius: 1.25rem;
          }
        }
      }

      &.element-2 {
        bottom: 35%;
        inset-inline-start: 10%;
        background: var(--card-bg-color);
        padding: 0.85rem;
        height: 300px;
        max-width: 260px;
        border: 1px solid var(--card-border-color);
        border-radius: 1.75rem;
        box-shadow: var(--light-box-shadow);

        .call-container {
          position: relative;
          height: 100%;
          width: 100%;

          img {
            display: block;
            object-fit: cover;
            height: 100%;
            border-radius: 1.25rem;
          }
        }
      }
    }
  }
}

@media only screen and (width <= 767px) {
  .illustration-hero {
    .hero-image-composition {
      margin-top: -4rem !important;

      .image-wrap {
        min-height: initial;
      }

      .element-container {
        display: none;
      }

      .polka-dots {
        &.polka-dots-1 {
          display: none;
        }
      }
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .illustration-hero {
    .hero-image-composition {
      .image-wrap {
        bottom: -1rem;
      }

      .element-container {
        &.element-1 {
          inset-inline-end: -18%;
        }

        &.element-2 {
          bottom: 24%;
          inset-inline-start: -17%;
        }
      }
    }
  }
}

/* stylelint-disable */
//IPad Air
@media only screen and (min-device-width: 820px) and (max-device-height: 1180px) and (-webkit-min-device-pixel-ratio: 1.5) and (orientation: portrait) {
  .hero {
    &.is-fullheight {
      max-height: 1024px !important;
      min-height: 1024px !important;
    }
  }
}

//IPad pro
@media only screen and (min-device-width: 1024px) and (max-device-height: 1366px) and (-webkit-min-device-pixel-ratio: 1.5) and (orientation: portrait) {
  .hero {
    &.is-fullheight {
      max-height: 1024px !important;
      min-height: 1024px !important;
    }
  }
}

@media only screen and (min-device-width: 1024px) and (max-device-height: 1366px) and (-webkit-min-device-pixel-ratio: 1.5) and (orientation: landscape) {
  .illustration-hero {
    .hero-image-composition {
      .image-wrap {
        bottom: -1rem;
      }
    }
  }
}
/* stylelint-enable */
</style>
