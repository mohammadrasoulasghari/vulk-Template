<script setup lang="ts">
import VueScrollTo from 'vue-scrollto'
import { heroScreenshots } from '/@src/data/demo'
// @ts-ignore
import { version } from '/@/package.json'

const scrollTo = VueScrollTo.scrollTo
</script>

<template>
  <div class="product-screenshots">
    <!--Flying particles-->
    <div class="flying-particles">
      <div
        v-for="index in 25"
        :key="index"
        class="dot-wrapper"
        :class="`dot-wrapper-${index + 1}`"
      >
        <div
          class="dot"
          :class="`dot-${index + 1}`"
        />
      </div>
    </div>
    <!--Hero Content-->
    <div class="container">
      <div class="columns is-vcentered">
        <div class="column is-5">
          <div class="py-6">
            <div class="hero-text">
              <Title
                tag="h1"
                :size="1"
                weight="bold"
                leading
              >
                <span class="text-gradient">سلام، من وولک هستم.</span>
              </Title>
              <h4 class="midtitle">
                رابط کاربری حرفه‌ای لندینگ برای ویو ۳ - v{{ version }}
                <Tag
                  color="danger"
                  label="با خروجی SSG و SSR"
                  outlined
                  class="ms-2"
                />
              </h4>
              <p class="subtitle is-left">
                وولک یک جعبه ابزار قدرتمند است که به شما امکان می‌دهد وب‌سایت
                های به یاد ماندنی قدرتمند و SSR آماده بسازید.
              </p>
              <Buttons>
                <Button
                  color="primary"
                  :long="2"
                  raised
                  bold
                  @click.prevent="
                    scrollTo(`#template-demos`, 800, { offset: -100 })
                  "
                  @keydown.space.prevent="
                    () => scrollTo(`#template-demos`, 800, { offset: -100 })
                  "
                >
                  دموها
                </Button>
                <Button
                  elevated
                  bold
                  :long="2"
                  @click.prevent="
                    scrollTo(`#template-components`, 800, { offset: -100 })
                  "
                  @keydown.space.prevent="
                    () =>
                      scrollTo(`#template-components`, 800, { offset: -100 })
                  "
                >
                  اجزاء
                </Button>
              </Buttons>

              <div class="stack-icons">
                <div class="stack-icon px-4">
                  <i
                    class="iconify"
                    data-icon="logos:vue"
                  />
                </div>
                <div class="stack-icon px-4">
                  <i
                    class="iconify"
                    data-icon="logos:vitejs"
                  />
                </div>
                <div class="stack-icon px-4">
                  <i
                    class="iconify"
                    data-icon="logos:sass"
                  />
                </div>
                <div class="stack-icon px-4">
                  <i
                    class="iconify"
                    data-icon="logos:docker-icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-6 is-offset-1">
          <div class="screenshots-wrap">
            <div class="bg-circle" />
            <div class="screenshots-group">
              <DarkImage
                v-for="(screenshot, index) in heroScreenshots.slice(0, 11)"
                :key="index"
                :src="screenshot.image"
                :src-dark="screenshot.darkImage"
                class="screenshot"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use 'sass:math';

.product-screenshots {
  position: relative;
  overflow: hidden;
  background: var(--hero-grey-bg-color);

  .flying-particles {
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    inset-inline-end: 0;
    bottom: 0;
    z-index: 0;

    .dot-wrapper {
      position: absolute;

      @for $i from 1 through 75 {
        &-#{$i} {
          top: random(100) * 1%;
          inset-inline-start: random(100) * 1%;

          animation: flying
            (random(50) + 20) +
            s
            ease-in-out
            (math.div(random(100), -10)) +
            s
            infinite
            alternate;
        }
      }
    }

    .dot {
      width: 6px;
      height: 6px;
      background: var(--primary);
      border-radius: 50%;

      @for $i from 1 through 50 {
        &-#{$i} {
          transform-origin: (random(30) -15) + px (random(30) -15) + px;
          animation: rotating
            (random(20) + 10) +
            s
            ease-in-out
            (math.div(random(100), -10)) +
            s
            infinite;
        }
      }
    }
  }

  .container {
    position: relative;
    z-index: 1;
  }

  .midtitle {
    font-family: var(--font);
    font-weight: 500;
    font-size: 1rem;
    color: var(--light-text);
    text-transform: uppercase;
    padding: 0.25rem 0;
  }

  .subtitle {
    color: var(--medium-text);
  }

  .buttons {
    .button {
      height: 48px;
      min-width: 140px;
    }
  }

  .stack-icons {
    display: flex;

    .stack-icon {
      font-size: 1.75rem;
    }
  }
}

.screenshots-wrap {
  position: relative;
  min-height: 100vh;

  .bg-circle {
    position: absolute;
    top: 50%;
    inset-inline-end: -30%;
    height: 650px;
    width: 650px;
    transform: translateY(-45%);
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

.screenshots-group {
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  width: 1080px;
  transform: rotate(-45deg);
  z-index: 2;

  [dir='rtl'] & {
    transform: rotate(45deg);
  }

  .screenshot {
    position: relative;
    width: 340px;
    height: auto;
    margin: 0.5rem;
    object-fit: contain;
    border-radius: 0.65rem;
    overflow: hidden;
    transition:
      transform 0.3s,
      box-shadow 0.3s;

    &:first-child {
      visibility: hidden;
    }

    &:first-child,
    &:nth-child(4),
    &:nth-child(7),
    &:nth-child(10) {
      top: -3.5rem;
    }

    &:nth-child(2),
    &:nth-child(5),
    &:nth-child(8),
    &:nth-child(11) {
      top: 2rem;
    }

    &:hover {
      transform: translateY(-5px);
      box-shadow: var(--light-box-shadow);
    }
  }
}

@media only screen and (width <= 767px) {
  .product-screenshots {
    .columns {
      padding-top: 4rem;
      text-align: center;
    }

    .column {
      .py-6 {
        padding-inline-start: 1.5rem;
        padding-inline-end: 1.5rem;
        padding-bottom: 0 !important;
      }

      &:first-child {
        position: relative;
        z-index: 3;
        background-color: rgba(255 255 255 / 70%);
        transform: translateY(1rem);
      }

      &:last-child {
        opacity: 0.7;
      }

      .stack-icons {
        justify-content: center;
      }
    }

    .subtitle {
      max-width: 540px;
      margin-inline-start: auto;
      margin-inline-end: auto;
    }

    .buttons {
      justify-content: center;
    }
  }

  .screenshots-wrap {
    min-height: 90vh;

    .bg-circle {
      top: initial;
      bottom: -34%;
    }

    .screenshots-group {
      inset-inline-end: -100%;
      bottom: -50%;
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1023px) and (orientation: portrait) {
  .product-screenshots {
    .columns {
      padding-top: 4rem;
      text-align: center;
    }

    .subtitle {
      max-width: 540px;
      margin-inline-start: auto;
      margin-inline-end: auto;
    }

    .buttons {
      justify-content: center;
    }

    .stack-icons {
      justify-content: center;
    }
  }

  .screenshots-wrap {
    min-height: 75vh;

    .bg-circle {
      top: initial;
      height: 750px;
      width: 750px;
      bottom: -50%;
      inset-inline-end: -7% !important;
    }

    .screenshots-group {
      bottom: -30%;
    }

    .columns {
      display: flex;

      .py-6 {
        padding-inline-start: 2.5rem;
      }
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: landscape) {
  .product-screenshots {
    .bg-circle {
      inset-inline-end: -53% !important;
    }
  }
}

@media only screen and (width <= 1300px) {
  .product-screenshots {
    .bg-circle {
      inset-inline-end: -35%;
    }
  }
}
</style>
