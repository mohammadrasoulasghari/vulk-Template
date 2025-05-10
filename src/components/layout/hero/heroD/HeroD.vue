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
            <Title
              tag="h1"
              :size="1"
              weight="bold"
            >
              <span>
                پلتفرم پشتیبانی مشتری در
                <span class="text-primary">استروئیدها</span>
              </span>
            </Title>
            <Subtitle
              tag="p"
              :size="5"
              weight="thin"
              class="mx-auto max-w-6 b-centered-tablet-p pt-2"
            >
              وولک یک برنامه چند پلتفرمی است که به شما کمک می‌کند درخواست‌های
              پشتیبانی را در تیم ایجاد، سازماندهی، پیگیری و به اشتراک بگذارید.
            </Subtitle>
          </div>

          <!--Subscribe-->
          <div class="mx-auto max-w-4">
            <SubscriptionCompact
              label="رایگان شروع کنید"
              placeholder="ایمیل خود را وارد کنید"
            />
          </div>

          <!--Hero App Mockup-->
          <div class="centered-app-wrapper mx-auto max-w-8 mt-6">
            <DarkImage
              class="centered-app is-relative mx-auto max-w-8"
              src="/assets/illustrations/apps/hero-support-app.png"
              src-dark="/assets/illustrations/apps/hero-support-app-dark.png"
              width="630"
              height="399"
              alt=""
            />
            <div class="centered-app-overlay" />
            <button class="centered-app-button">
              <i
                class="iconify"
                data-icon="feather:play"
              />
            </button>
          </div>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="mx-auto max-w-8">
        <p class="paragraph rem-100 text-light has-text-centered">
          کمک به مردم برای کار سریعتر در
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

.centered-app-wrapper {
  position: relative;

  .centered-app:deep(img) {
    position: relative;
    border-radius: 2rem;
    border: 1px solid var(--border);
    box-shadow: var(--light-box-shadow);
    z-index: 1;
    width: 100%;
    margin: 0 auto;
  }

  .centered-app-overlay {
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    border-radius: 2rem;
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
  }
}
</style>
