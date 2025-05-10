<script setup lang="ts">
import { viaPlaceholderErrorHandler } from '/@src/utils/viaPlaceholderErrorHandler'
</script>

<template>
  <Hero
    color="grey"
    class="cylinders-hero"
    type="side"
    size="fullheight"
  >
    <template #body>
      <div class="columns is-vcentered">
        <div class="column is-5">
          <div class="hero-caption">
            <Title
              tag="h1"
              :size="2"
              weight="bold"
            >
              یک مربی برای افزایش رشد کسب و کار خود پیدا کنید.
            </Title>
            <Subtitle
              tag="p"
              :size="5"
              classes="b-centered-tablet-p text-medium"
            >
              گفتگوهای یک به یک در مورد رشد، بازاریابی و هر آنچه در این بین وجود
              دارد با ۳ درصد از مربیان راه اندازی و بازاریابی برتر جهان داشته
              باشید.
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
        </div>
        <div class="column is-6 is-offset-1">
          <!-- Hero composition -->
          <div class="hero-image-composition">
            <div class="polka-wrap polka-1">
              <PolkaDots />
            </div>
            <div class="image-wrap">
              <img
                class="thin-image-first"
                src="/assets/demo/img/hero/thin-hero-1.jpg"
                alt="hero cylinder"
                width="231"
                height="533"
                @error.once="
                  (event) => viaPlaceholderErrorHandler(event, `231x533`)
                "
              >
              <img
                class="thin-image-second"
                src="/assets/demo/img/hero/thin-hero-2.jpg"
                alt="hero cylinder"
                width="231"
                height="533"
                @error.once="
                  (event) => viaPlaceholderErrorHandler(event, `231x533`)
                "
              >
              <img
                class="thin-image-third"
                src="/assets/demo/img/hero/thin-hero-3.jpg"
                alt="hero cylinder"
                width="231"
                height="533"
                @error.once="
                  (event) => viaPlaceholderErrorHandler(event, `231x533`)
                "
              >
            </div>
            <div class="polka-wrap polka-2">
              <PolkaDots />
            </div>
          </div>
        </div>
      </div>
    </template>
  </Hero>
</template>

<style lang="scss" scoped>
.cylinders-hero {
  .hero-image-composition {
    position: relative;

    .polka-wrap {
      position: absolute;
      z-index: 3;

      &.polka-1 {
        top: 25px;
        inset-inline-start: -25px;
      }

      &.polka-2 {
        bottom: 25px;
        inset-inline-end: -25px;
      }
    }

    .image-wrap {
      position: relative;
      display: flex;
      align-items: center;
      z-index: 2;

      .thin-image-first,
      .thin-image-second,
      .thin-image-third {
        display: block;
        margin: 0 0.5rem;
        width: calc(33.3% - 1rem);
        border-radius: 50rem;
        object-fit: cover;
      }

      .thin-image-first,
      .thin-image-third {
        min-height: 420px;
      }

      .thin-image-second {
        min-height: 560px;
      }
    }
  }
}

@media only screen and (width <= 767px) {
  .cylinders-hero {
    .hero-caption {
      padding-top: 3rem;
      text-align: center;
    }

    .buttons {
      justify-content: center;
    }

    :deep(.title) {
      &.is-2 {
        font-size: 2rem;
      }
    }

    .hero-image-composition {
      .image-wrap {
        .thin-image-first,
        .thin-image-third {
          min-height: 360px;
        }

        .thin-image-second {
          min-height: 460px;
        }
      }
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .cylinders-hero {
    .hero-caption {
      text-align: center;
      max-width: 560px;
      margin: 0 auto;
    }

    .buttons {
      justify-content: center;
    }

    .hero-image-composition {
      .image-wrap {
        .thin-image-first,
        .thin-image-third {
          min-height: 360px;
          max-height: 440px;
        }
      }
    }
  }
}
</style>
