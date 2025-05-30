<script setup lang="ts">
import { viaPlaceholderErrorHandler } from '/@src/utils/viaPlaceholderErrorHandler'

const rtl: boolean | undefined = inject('rtl')
</script>

<template>
  <Hero
    color="grey"
    class="product-hero"
    shape="/assets/shapes/hero-shape.svg"
    shape-orientation="right"
    size="fullheight"
  >
    <template #body>
      <div class="columns is-vcentered">
        <div class="column is-5">
          <Title
            tag="h1"
            :size="2"
            weight="bold"
          >
            راه‌حل‌های مدیریتی کسب‌وکار برای استارتاپ شما.
          </Title>
          <Subtitle
            tag="p"
            :size="5"
            classes="b-centered-tablet-p text-medium"
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
        <div class="column is-7">
          <div class="hero-image-composition">
            <div class="image-wrap">
              <img
                class="inner-image"
                :class="[rtl && 'mirror']"
                src="/assets/demo/img/hero/girl-guy-hero.png"
                alt="Hero image"
                width="687"
                height="960"
                @error.once="
                  (event) => viaPlaceholderErrorHandler(event, `687x960`)
                "
              >
              <!--Floating disks-->
              <div class="perspective bg-gradient-primary" />
              <div class="half-circle half-circle-1 text-success">
                <HalfCircle />
              </div>
              <div class="half-circle half-circle-2 text-secondary">
                <HalfCircle />
              </div>

              <div class="person-bubble person-bubble-1">
                <AvatarSimple
                  picture="/assets/demo/img/avatars/25.jpg"
                  size="medium"
                />
                <div class="bubble-content">
                  <span />
                  <span />
                </div>
              </div>

              <div class="person-bubble person-bubble-2">
                <AvatarSimple
                  picture="/assets/demo/img/avatars/19.jpg"
                  size="medium"
                />
                <div class="bubble-content">
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Hero>
</template>

<style lang="scss" scoped>
:deep(.container) {
  position: static;
}

:deep(.hero-body) {
  padding-bottom: 0 !important;
}

.hero-image-composition {
  .image-wrap {
    min-height: 580px;
    margin: 0 auto;
    width: 100%;

    .inner-image {
      position: absolute;
      bottom: 0;
      inset-inline-end: 10%;
      display: block;
      margin: 0 auto;
      width: 100%;
      max-width: 480px;
      z-index: 2;
    }

    .perspective {
      position: absolute;
      top: 25%;
      inset-inline-end: 7.5%;
      width: 100%;
      max-width: 620px;
      min-height: 410px;
      //background: var(--primary);
      border-radius: 2rem;
      box-shadow: var(--primary-box-shadow);
      transform-origin: center center;
      transform: perspective(600px) rotatey(-18deg);
      z-index: 1;

      [dir='rtl'] & {
        transform: perspective(600px) rotatey(18deg);
      }
    }

    .person-bubble {
      position: absolute;
      background: var(--card-bg-color);
      padding: 0.75rem 0 0.75rem;
      padding-inline-end: 1.25rem;
      padding-inline-start: 0.75rem;
      border: 1px solid var(--card-border-color);
      border-radius: 50rem;
      box-shadow: var(--light-box-shadow);
      display: flex;
      align-items: center;
      min-width: 230px;
      z-index: 4;

      &.person-bubble-1 {
        bottom: 30%;
        inset-inline-end: 2%;
      }

      &.person-bubble-2 {
        top: 44%;
        inset-inline-end: 38%;
      }

      img {
        height: 40px;
        width: 40px;
        min-width: 40px;
        border-radius: 50%;
      }

      .bubble-content {
        flex-grow: 2;
        margin-inline-start: 0.75rem;

        span {
          display: block;
          border-radius: 5rem;
          height: 0.75rem;
          background: var(--wrap-muted-color);

          &:first-child {
            margin-bottom: 0.25rem;
            max-width: 80%;
          }

          &:nth-child(2) {
            max-width: 50%;
          }
        }
      }
    }

    .half-circle {
      position: absolute;
      z-index: 3;

      &.half-circle-1 {
        top: 32%;
        inset-inline-end: 49%;
        transform: rotate(20deg) scale(0.8);
      }

      &.half-circle-2 {
        top: 52%;
        inset-inline-end: 3%;
        transform: rotate(65deg) scale(0.8);
      }
    }
  }
}

@media only screen and (width <= 767px) {
  .product-hero {
    text-align: center;

    :deep(.title) {
      margin-top: 3rem;

      &.is-2 {
        font-size: 2rem;
      }
    }

    .buttons {
      justify-content: center;
    }

    .hero-body {
      .column {
        &:first-child {
          position: relative;
          z-index: 3;
          margin-bottom: 4rem;
        }
      }
    }
  }

  .hero-image-composition {
    .image-wrap {
      min-height: 280px;

      .inner-image {
        inset-inline-end: 0;
        inset-inline-start: 0;
        max-width: 250px;
      }

      .perspective {
        min-height: 225px;
        top: initial;
        inset-inline-end: 5%;
        bottom: 5%;
      }

      .half-circle {
        z-index: 0;

        &.half-circle-1 {
          top: 27%;
          inset-inline-start: -15%;
          inset-inline-end: initial;
        }

        &.half-circle-2 {
          top: 12%;
          inset-inline-end: 5%;
        }
      }

      .person-bubble {
        transform: scale(0.6);

        &.person-bubble-1 {
          bottom: 17%;
          inset-inline-end: -25%;
        }

        &.person-bubble-2 {
          top: initial;
          bottom: 5%;
          inset-inline-end: 50%;
        }
      }
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

    .hero-image-composition {
      .image-wrap {
        .inner-image {
          inset-inline-end: 0;
          inset-inline-start: 0;
          max-width: 450px;
        }

        .perspective {
          top: 50%;
          inset-inline-end: 17.5%;
        }

        .person-bubble {
          &.person-bubble-2 {
            top: 75%;
            inset-inline-start: 2%;
            inset-inline-end: initial;
          }
        }
      }
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: landscape) {
  .hero-image-composition {
    .image-wrap {
      .inner-image {
        max-width: 440px;
        inset-inline-end: 4%;
      }

      .perspective {
        top: 30%;
        inset-inline-end: 4%;
        max-width: 520px;
        min-height: 360px;
      }

      .person-bubble {
        transform: scale(0.8);

        &.person-bubble-1 {
          inset-inline-end: -5%;
        }

        &.person-bubble-2 {
          top: 50%;
          inset-inline-end: 34%;
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
  .hero {
    &.is-fullheight {
      max-height: 840px !important;
      min-height: 840px !important;
    }
  }
}
/* stylelint-enable */
</style>
