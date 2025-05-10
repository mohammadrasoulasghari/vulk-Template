<script setup lang="ts">
import { viaPlaceholderErrorHandler } from '/@src/utils/viaPlaceholderErrorHandler'
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
            <Title
              tag="h1"
              :size="1"
              weight="bold"
            >
              <span>
                پلتفرمی مدرن برای جامعه
                <span class="text-primary">خالقان محتوا</span>
              </span>
            </Title>
            <Subtitle
              tag="p"
              :size="5"
              weight="thin"
              class="mx-auto max-w-6 b-centered-tablet-p pt-2"
            >
              بحث‌ها، عضوگیری و تولید محتوای خود را در یک جا متمرکز کنید. یک
              کامیونیتی پویا ایجاد کنید و همه چیز را زیر برند خودتان مدیریت
              کنید.
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

          <!--Hero App Mockup-->
          <div class="centered-app-wrapper mx-auto max-w-8 mt-6">
            <DarkImage
              class="centered-app is-relative mx-auto max-w-8"
              src="/assets/illustrations/apps/creator-app.png"
              src-dark="/assets/illustrations/apps/creator-app-dark.png"
              width="1200"
              height="724"
              alt=""
            />
            <div class="centered-app-overlay" />
            <button class="centered-app-button">
              <i
                class="iconify"
                data-icon="feather:play"
              />
            </button>
            <!--Centered app faces-->
            <div class="centered-app-face face-1">
              <img
                src="/assets/demo/img/tiles/1.jpg"
                alt="Person image"
                width="300"
                height="400"
                @error.once="
                  (event) => viaPlaceholderErrorHandler(event, '300x400')
                "
              >
            </div>
            <div class="centered-app-face face-2">
              <img
                src="/assets/demo/img/tiles/2.jpg"
                alt="Person image"
                width="300"
                height="400"
                @error.once="
                  (event) => viaPlaceholderErrorHandler(event, '300x400')
                "
              >
            </div>
            <div class="centered-app-face face-3">
              <img
                src="/assets/demo/img/tiles/3.png"
                alt="Person image"
                width="300"
                height="400"
                @error.once="
                  (event) => viaPlaceholderErrorHandler(event, '300x400')
                "
              >
            </div>
            <div class="centered-app-face face-4">
              <img
                src="/assets/demo/img/tiles/4.jpeg"
                alt="Person image"
                width="300"
                height="400"
                @error.once="
                  (event) => viaPlaceholderErrorHandler(event, '300x400')
                "
              >
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

.centered-app-wrapper {
  position: relative;

  .centered-app:deep(img) {
    position: relative;
    display: block;
    border-radius: 1rem;
    border: 1px solid var(--border);
    box-shadow: var(--light-box-shadow);
    z-index: 1;
  }

  .centered-app-overlay {
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    background: var(--card-bg-color);
    opacity: 0;
    transition: opacity 0.3s;
    z-index: 2;
  }

  .centered-app-button {
    position: absolute;
    top: 50%;
    inset-inline-start: 50%;
    transform: translate(-50%, -50%) scale(0.85);

    [dir='rtl'] & {
      transform: translate(50%, -50%) scale(0.85);
    }

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.35rem;
    width: 58px;
    height: 58px;
    border-radius: 50%;
    z-index: 3;
    cursor: pointer;
    border: none;
    background: var(--primary);
    box-shadow: var(--primary-box-shadow);
    transition: transform 0.3s;

    .iconify {
      position: relative;
      inset-inline-end: -0.15rem;
      vertical-align: middle;
      color: var(--white);

      [dir='rtl'] & {
        transform: rotate(180deg);
      }

      :deep(path) {
        fill: var(--white);
      }
    }
  }

  .centered-app-face {
    position: absolute;
    z-index: 0;

    img {
      display: block;
      max-width: 100%;
      border-radius: 1.25rem;
      object-fit: cover;
    }

    &.face-1 {
      inset-inline-end: -240px;
      top: -80px;
      width: 180px;
    }

    &.face-2 {
      inset-inline-start: -100px;
      top: -120px;
      width: 140px;
    }

    &.face-3 {
      inset-inline-end: -140px;
      bottom: 120px;
      width: 100px;
    }

    &.face-4 {
      inset-inline-start: -180px;
      bottom: 40px;
      width: 120px;
    }
  }

  &:hover {
    .centered-app-overlay {
      opacity: 0.7;
    }

    .centered-app-button {
      transform: translate(-50%, -50%) scale(1);

      [dir='rtl'] & {
        transform: translate(50%, -50%) scale(1);
      }
    }
  }
}

.is-dark {
  .centered-app-wrapper {
    .centered-app:deep(img) {
      border: none;
    }
  }
}

@media only screen and (width <= 767px) {
  .centered-app-wrapper {
    .centered-app:deep(img) {
      border-radius: 0.75rem;
    }

    .centered-app-face {
      &.face-1 {
        inset-inline-end: -58px;
        top: 130px;
        width: 85px;
      }

      &.face-2 {
        inset-inline-start: -55px;
        top: -45px;
        width: 80px;
      }

      &.face-3,
      &.face-4,
      &.face-5 {
        display: none;
      }
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .centered-app-wrapper {
    .centered-app-face {
      &.face-1 {
        inset-inline-end: -8px;
        top: 325px;
        z-index: 3;
        width: 118px;
      }

      &.face-2 {
        inset-inline-start: -40px;
        top: -100px;
        width: 118px;
      }
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: landscape) {
  .centered-app-wrapper {
    .centered-app-face {
      &.face-1 {
        inset-inline-end: -60px;
        top: 90px;
        width: 118px;
      }

      &.face-2 {
        inset-inline-start: -80px;
        top: -100px;
        width: 118px;
      }

      &.face-3 {
        bottom: 40px;
      }

      &.face-4 {
        inset-inline-start: -75px;
        width: 100px;
      }
    }
  }
}
</style>
