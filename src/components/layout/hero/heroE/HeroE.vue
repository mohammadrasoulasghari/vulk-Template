<script setup lang="ts">
import { viaPlaceholderErrorHandler } from '/@src/utils/viaPlaceholderErrorHandler'
import { customerLogos } from '/@src/data/pages/logos'
</script>

<template>
  <Hero
    color="grey"
    class="product-hero"
    orientation="right"
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
            رابط برنامه نویسی کاربردی REST پلتفرم بانکی مدولار برای پروژه های
            شما.
          </Title>
          <Subtitle
            tag="p"
            :size="5"
            classes="b-centered-tablet-p text-medium"
          >
            پیشنهادها را به صورت الگوریتمی بهینه کنید، کمپین بسازید، و گردش کار
            کلمات کلیدی خود را خودکار کنید.
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
              دمو
            </Button>
          </div>
        </div>
        <div class="column is-7 is-offset-1">
          <div class="hero-image-container">
            <DarkImage
              class="mx-auto max-w-5"
              src="/assets/illustrations/features/banking-cards-hero.png"
              src-dark="/assets/illustrations/features/banking-cards-hero-dark.png"
              alt=""
              width="500"
              height="500"
              @error.once="
                (event) => viaPlaceholderErrorHandler(event, `500x500`)
              "
            />
            <div class="hero-bg-circle" />
          </div>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="mx-auto max-w-8">
        <div class="tabs is-centered pb-4">
          <HeroClients :logos="customerLogos" />
        </div>
      </div>
    </template>
  </Hero>
</template>

<style lang="scss" scoped>
.hero-image-container {
  position: relative;

  :deep(img) {
    position: relative;
    z-index: 1;
  }

  .hero-bg-circle {
    position: absolute;
    top: 10%;
    inset-inline-end: -20%;
    height: 550px;
    width: 550px;
    border-radius: 50%;
    background: rgb(var(--primary-rgb));
    background: linear-gradient(
      98deg,
      rgb(var(--primary-rgb) / 100%) 0%,
      rgb(var(--primary-rgb) / 28.9%) 35%,
      rgb(var(--primary-rgb) / 0%) 100%
    );
    z-index: 0;

    [dir='rtl'] & {
      background: linear-gradient(
        98deg,
        rgb(var(--primary-rgb) / 0%) 0%,
        rgb(var(--primary-rgb) / 28.9%) 35%,
        rgb(var(--primary-rgb) / 100%) 100%
      );
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

    .hero-image-container {
      .hero-bg-circle {
        top: 3%;
      }
    }
  }
}
</style>
