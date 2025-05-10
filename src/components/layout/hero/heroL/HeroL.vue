<script setup lang="ts">
import { customerLogos } from '/@src/data/pages/logos'
</script>

<template>
  <Hero
    class="product-hero"
    alignment="left"
    size="fullheight"
    shape="/assets/shapes/hero-shape.svg"
    shape-orientation="right"
    footer
  >
    <template #body>
      <div class="columns is-vcentered">
        <div class="column is-5">
          <Title
            tag="h1"
            :size="2"
            weight="bold"
          >
            فناوری تبلیغاتی مبتنی بر هوش مصنوعی برای رشد کسب و کار شما
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
          <div class="video-player-container-wrapper">
            <VidStack
              ratio="square"
              source="/assets/video/meeting.mp4"
              poster="/assets/demo/img/posters/poster-1b.jpg"
              title="عنوان ویدیو"
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
.app-mockup:deep(img) {
  display: block;
  border-radius: 1.25rem;
  border: 1px solid var(--border);
  box-shadow: var(--light-box-shadow);
}

.is-dark {
  .app-mockup:deep(img) {
    border: none;
  }
}

@media only screen and (width <= 767px) {
  .product-hero {
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
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .product-hero {
    text-align: center;

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
