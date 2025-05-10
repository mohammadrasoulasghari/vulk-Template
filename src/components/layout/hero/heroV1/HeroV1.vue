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
            در یک شرکت کلاس جهانی شغل پیدا کنید
          </Title>
          <Subtitle
            tag="p"
            :size="5"
            classes="b-centered-tablet-p text-medium"
          >
            بیش از ۷,۸۹۷ شغل آی تی لیست شده‌اند
          </Subtitle>
          <!--Search-->
          <QuickJobSearch />
        </div>
        <div class="column is-7">
          <div class="hero-image-composition">
            <div class="image-wrap">
              <img
                class="inner-image"
                :class="[rtl && 'mirror']"
                src="/assets/demo/img/hero/smart-guy.png"
                alt="Hero image"
                width="800"
                height="1200"
                @error.once="
                  (event) => viaPlaceholderErrorHandler(event, `800x1200`)
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

              <div class="job-bubble job-bubble-1">
                <AvatarSimple
                  picture="/assets/apps/gitlab-light.svg"
                  size="medium"
                />
                <div class="bubble-content">
                  <span />
                  <span />
                </div>
              </div>

              <div class="job-bubble job-bubble-2">
                <AvatarSimple
                  picture="/assets/apps/airbnb-light.svg"
                  size="medium"
                />
                <div class="bubble-content">
                  <span />
                  <span />
                </div>
              </div>

              <div class="job-bubble job-bubble-3">
                <AvatarSimple
                  picture="/assets/apps/atlassian-light.svg"
                  size="medium"
                />
                <div class="bubble-content">
                  <span />
                  <span />
                </div>
              </div>

              <div class="job-bubble job-bubble-4">
                <AvatarSimple
                  picture="/assets/apps/google-light.svg"
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
      top: 20%;
      inset-inline-end: 10%;
      width: 100%;
      max-width: 510px;
      min-height: 510px;
      border-radius: 50%;
      box-shadow: var(--primary-box-shadow);
      transform-origin: center center;
      z-index: 1;
    }

    .job-bubble {
      position: absolute;
      background: var(--card-bg-color);
      padding: 0.5rem 0 0.5rem;
      padding-inline-end: 1rem;
      padding-inline-start: 0.5rem;
      border: 1px solid var(--card-border-color);
      border-radius: 1rem;
      box-shadow: var(--spread-shadow);
      display: flex;
      align-items: center;
      min-width: 210px;
      z-index: 4;

      &.job-bubble-1 {
        bottom: 30%;
        inset-inline-end: 5%;
      }

      &.job-bubble-2 {
        top: 44%;
        inset-inline-end: 35%;
      }

      &.job-bubble-3 {
        bottom: 19%;
        inset-inline-end: 2%;
      }

      &.job-bubble-4 {
        top: 55%;
        inset-inline-end: 32%;
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
        transform: rotate(-15deg) scale(0.8);

        [dir='rtl'] & {
          transform: rotate(15deg) scale(0.8);
        }
      }

      &.half-circle-2 {
        top: 52%;
        inset-inline-end: 3%;
        transform: rotate(65deg) scale(0.8);

        [dir='rtl'] & {
          transform: rotate(-65deg) scale(0.8);
        }
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
        min-height: 250px;
        max-width: 250px;
        top: initial;
        inset-inline-end: 17%;
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

      .job-bubble {
        transform: scale(0.6);

        &.job-bubble-1 {
          bottom: 17%;
          inset-inline-end: -18%;
        }

        &.job-bubble-2 {
          top: initial;
          bottom: 5%;
          inset-inline-end: 50%;
        }

        &.job-bubble-3 {
          bottom: 11%;
          inset-inline-end: -23%;
        }

        &.job-bubble-4 {
          top: 81%;
          inset-inline-end: 54%;
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

        .half-circle {
          z-index: 0;

          &.half-circle-1 {
            top: 55%;
            inset-inline-start: 10%;
            inset-inline-end: initial;
          }
        }

        .job-bubble {
          &.job-bubble-2 {
            top: 75%;
            inset-inline-start: 2%;
            inset-inline-end: initial;
          }

          &.job-bubble-3 {
            bottom: 22%;
            inset-inline-end: 1%;
          }

          &.job-bubble-4 {
            top: 67%;
            inset-inline-end: 64%;
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
        max-width: 500px;
        min-height: 500px;
      }

      .job-bubble {
        transform: scale(0.8);

        &.job-bubble-1 {
          inset-inline-end: -5%;
        }

        &.job-bubble-2 {
          top: 50%;
          inset-inline-end: 34%;
        }

        &.job-bubble-3 {
          bottom: 22%;
          inset-inline-end: -1%;
        }

        &.job-bubble-4 {
          top: 58%;
        }
      }
    }
  }
}

/* stylelint-disable */
@media only screen and (min-device-width: 1024px) and (max-device-height: 1366px) and (-webkit-min-device-pixel-ratio: 1.5) and (orientation: portrait) {
  .hero-image-composition {
    .image-wrap {
      .perspective {
        margin: 0 auto !important;
        inset-inline-start: 0 !important;
        inset-inline-end: 0 !important;
      }

      .job-bubble {
        &.job-bubble-1 {
          inset-inline-end: 15% !important;
        }

        &.job-bubble-2 {
          inset-inline-start: 12% !important;
        }

        &.job-bubble-3 {
          inset-inline-end: 11% !important;
        }
      }
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
