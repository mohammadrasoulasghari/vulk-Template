<script setup lang="ts">
import { customerLogos } from '/@src/data/pages/logos'
</script>

<template>
  <Hero
    color="grey"
    class="product-hero"
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
        <div class="column is-6 is-offset-1">
          <div class="hero-image-container">
            <DarkImage
              class="mx-auto max-w-4"
              src="/assets/demo/img/hero/hr-hero.png"
              alt=""
              height="800"
              width="800"
            />
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
