<script setup lang="ts">
import { customerLogos } from '/@src/data/pages/logos'
</script>

<template>
  <Hero
    alignment="center"
    size="fullheight"
    color="grey"
  >
    <template #body>
      <div class="columns is-vcentered mt-12">
        <!--Hero Content-->
        <div class="column is-relative">
          <div class="mx-auto max-w-6 mb-4">
            <p
              class="paragraph is-uppercase rem-100 weight-6 text-primary mb-2"
            >
              بگردید دنبال کلکسیون‌ها
            </p>
            <Title
              tag="h1"
              :size="1"
              weight="bold"
            >
              <span>
                کالکشن‌های
                <span class="text-primary">NFT</span>
                را پیدا کنید و مدیریت کنید.
              </span>
            </Title>
            <Subtitle
              tag="p"
              :size="5"
              weight="thin"
              class="mx-auto max-w-6 b-centered-tablet-p pt-2"
            >
              با آسان‌ترین و امن‌ترین پلتفرم برای جمع‌آوری، خرید و فروش NFT و
              هنر دیجیتال در سطح حرفه‌ای شروع کنید.
            </Subtitle>
            <!--Buttons-->
            <div class="buttons is-relative z-1">
              <Button
                color="primary"
                :long="2"
                raised
                bold
              >
                بگردید
              </Button>
              <Button
                elevated
                bold
                :long="2"
                icon-left="teenyicons:wallet-alt-outline"
              >
                کانکت شوید
              </Button>
            </div>
          </div>

          <!--Hero Faces-->
          <div class="hero-faces mt-4">
            <div class="face-column">
              <div class="face-wrap">
                <div
                  v-background="{
                    src: '/assets/demo/img/nft/dog-6-thin.png',
                    placeholder: 'https://dummyimage.com/1024x682',
                  }"
                  class="face-element"
                />
              </div>
            </div>
            <div class="face-column">
              <div class="face-wrap">
                <div
                  v-background="{
                    src: '/assets/demo/img/nft/mummy-6-thin.png',
                    placeholder: 'https://dummyimage.com/1024x682',
                  }"
                  class="face-element"
                />
              </div>
              <div class="face-wrap">
                <div
                  v-background="{
                    src: '/assets/demo/img/nft/monkey-2-thin.png',
                    placeholder: 'https://dummyimage.com/1024x682',
                  }"
                  class="face-element is-size-md"
                />
              </div>
            </div>
            <div class="face-column is-2x">
              <div class="face-wrap">
                <div
                  v-background="{
                    src: '/assets/demo/img/nft/eagle-5.png',
                    placeholder: 'https://dummyimage.com/1024x682',
                  }"
                  class="face-element"
                />
              </div>
              <div class="hero-faces">
                <div class="face-column is-4x">
                  <div class="face-wrap">
                    <div
                      v-background="{
                        src: '/assets/demo/img/nft/pepe-3.png',
                        placeholder: 'https://dummyimage.com/1024x682',
                      }"
                      class="face-element is-size-sm"
                    />
                  </div>
                </div>
                <div class="face-column is-2x">
                  <div class="face-wrap">
                    <div
                      v-background="{
                        src: '/assets/demo/img/nft/kitten-2.png',
                        placeholder: 'https://dummyimage.com/1024x682',
                      }"
                      class="face-element is-size-xs"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="face-column">
              <div class="face-wrap">
                <div
                  v-background="{
                    src: '/assets/demo/img/nft/dog-8-thin.png',
                    placeholder: 'https://dummyimage.com/1024x682',
                  }"
                  class="face-element is-size-md"
                />
              </div>
              <div class="face-wrap">
                <div
                  v-background="{
                    src: '/assets/demo/img/nft/neko-1-thin.png',
                    placeholder: 'https://dummyimage.com/1024x682',
                  }"
                  class="face-element"
                />
              </div>
            </div>
            <div class="face-column">
              <div class="face-wrap">
                <div
                  v-background="{
                    src: '/assets/demo/img/nft/monkey-6.png',
                    placeholder: 'https://dummyimage.com/1024x682',
                  }"
                  class="face-element is-size-sm"
                />
              </div>
              <div class="face-wrap">
                <div
                  v-background="{
                    src: '/assets/demo/img/nft/pepe-6-thin.png',
                    placeholder: 'https://dummyimage.com/1024x682',
                  }"
                  class="face-element"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="mx-auto max-w-8">
        <p class="paragraph rem-100 text-light has-text-centered">
          همیاری خالقان محتوا در شرکت‌های زیر برای رشد و تسریع کارشان
        </p>
        <div class="tabs is-centered pb-6">
          <HeroClients :logos="customerLogos" />
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
  padding-bottom: 2rem !important;
}

:deep(.title) {
  &.is-1 {
    font-size: 2.5rem;
  }
}

.hero-faces {
  display: flex;
  align-items: center;

  .face-column {
    width: 16.6%;
    padding: 0 0.35rem;

    &.is-2x {
      width: 33.2%;
    }

    &.is-4x {
      width: 66.4%;
    }

    .face-wrap {
      padding: 0.5rem;
      background: var(--card-bg-color);
      border: 1px solid var(--card-border-color);
      box-shadow: var(--spread-shadow);
      border-radius: 1.75rem;

      &:not(:last-child) {
        margin-bottom: 1.5rem;
      }
    }

    .face-element {
      position: relative;
      min-height: 280px;
      width: 100%;
      border-radius: 1.5rem;
      box-shadow: var(--light-box-shadow);
      background-size: cover;
      background-repeat: no-repeat;
      overflow: hidden;

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

@media only screen and (width <= 767px) {
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
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
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
</style>
