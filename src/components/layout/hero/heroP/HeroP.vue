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
      <div class="columns is-vcentered faces-side-wrapper">
        <div class="column is-5">
          <Title
            tag="h1"
            :size="2"
            weight="bold"
          >
            پلتفرمی مدرن برای جامعه
            <span class="text-primary">خالقان محتوا</span>
          </Title>
          <Subtitle
            tag="p"
            :size="5"
            classes="b-centered-tablet-p text-medium"
          >
            بحث‌ها، عضوگیری و تولید محتوای خود را در یک جا متمرکز کنید. یک
            کامیونیتی پویا ایجاد کنید و همه چیز را زیر برند خودتان مدیریت کنید.
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
        <div class="column is-8">
          <div class="hero-faces is-side">
            <div class="face-column is-2x">
              <div
                v-background="{
                  src: '/assets/demo/img/tiles/1.jpg',
                  placeholder: 'https://dummyimage.com/600x800',
                }"
                class="face-element is-size-md"
              />
            </div>
            <div class="face-column is-2x">
              <div
                v-background="{
                  src: '/assets/demo/img/tiles/10.jpg',
                  placeholder: 'https://dummyimage.com/600x800',
                }"
                class="face-element"
              />
              <div class="hero-faces">
                <div class="face-column is-4x">
                  <div
                    v-background="{
                      src: '/assets/demo/img/tiles/9.jpg',
                      placeholder: 'https://dummyimage.com/600x800',
                    }"
                    class="face-element is-size-sm"
                  />
                </div>
                <div class="face-column is-2x">
                  <div
                    v-background="{
                      src: '/assets/demo/img/tiles/5.png',
                      placeholder: 'https://dummyimage.com/600x800',
                    }"
                    class="face-element is-size-xs"
                  />
                </div>
              </div>
            </div>
            <div class="face-column is-2x">
              <div
                v-background="{
                  src: '/assets/demo/img/tiles/11.jpg',
                  placeholder: 'https://dummyimage.com/600x800',
                }"
                class="face-element is-size-sm"
              />
              <div
                v-background="{
                  src: '/assets/demo/img/tiles/3.png',
                  placeholder: 'https://dummyimage.com/600x800',
                }"
                class="face-element"
              />
            </div>
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
.hero-faces {
  display: flex;
  align-items: center;

  .face-column {
    width: 16.6%;
    padding: 0 0.75rem;

    &.is-2x {
      width: 33.2%;
    }

    &.is-4x {
      width: 66.4%;
    }

    .face-element {
      position: relative;
      min-height: 280px;
      width: 100%;
      border-radius: 1.5rem;
      box-shadow: var(--light-box-shadow);
      background-size: cover;
      background-repeat: no-repeat;

      &:not(:last-child) {
        margin-bottom: 1.5rem;
      }

      &.is-size-xs {
        min-height: 100px;
      }

      &.is-size-sm {
        min-height: 180px;
      }

      &.is-size-md {
        min-height: 340px;
      }
    }
  }
}

.product-hero {
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
}

@media only screen and (width <= 767px) {
  .faces-side-wrapper {
    padding-top: 4rem;

    .hero-text {
      text-align: center;
    }
  }

  .hero-faces {
    .face-column {
      &:first-child,
      &:nth-child(2),
      &:nth-child(4) {
        display: none;
      }

      &:nth-child(3),
      &:nth-child(5) {
        min-width: 50% !important;
      }

      .hero-faces {
        .face-column {
          &:nth-child(2) {
            display: block;
            min-width: 100% !important;

            .face-element {
              border-radius: 1rem;
            }
          }
        }
      }
    }

    &.is-side {
      .face-column {
        &:first-child {
          display: block;
          min-width: 50% !important;
        }
      }
    }
  }

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
  .faces-side-wrapper {
    .hero-text {
      text-align: center;
    }
  }

  .hero-faces {
    .face-column {
      &:nth-child(2) {
        display: none;
      }

      &:nth-child(4) {
        min-width: 33.3% !important;
      }

      .hero-faces {
        .face-column {
          &:nth-child(2) {
            display: block;

            .face-element {
              border-radius: 1rem;
            }
          }
        }
      }
    }

    &.is-side {
      padding-top: 2rem;

      .face-column {
        &:nth-child(2) {
          min-width: 33.3% !important;
          display: block;
        }
      }
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: landscape) {
  .faces-side-wrapper {
    .hero-text {
      .button {
        min-width: 120px !important;
      }
    }
  }
}
</style>
