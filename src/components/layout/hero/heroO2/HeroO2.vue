<script setup lang="ts"></script>

<template>
  <Hero
    class="mobile-hero"
    alignment="center"
    size="fullheight"
    mask="wave"
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
                پلتفرم اپلیکیشن موبایل برای
                <span class="text-primary">دوندگان</span>
              </span>
            </Title>
            <Subtitle
              tag="p"
              :size="5"
              weight="thin"
              class="mx-auto max-w-6 b-centered-tablet-p pt-2"
            >
              کار سخت کن. بحث‌ها، عضویت‌ها و محتوايت را کنار هم بياور. يک جامعه
              پر رونق را تحت انگیزه خودت ادغام کن.
            </Subtitle>
            <!--Buttons-->
            <div class="buttons is-relative z-1">
              <Button
                color="primary"
                :long="2"
                raised
                bold
              >
                دانلود
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

          <!--Hero App-->
          <div class="centered-app-wrapper mx-auto max-w-8 mt-6">
            <DarkImage
              src="/assets/illustrations/apps/mobile-app-group.png"
              src-dark="/assets/illustrations/apps/mobile-app-group-dark.png"
              alt=""
              width="1200"
              height="814"
            />
          </div>
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
  padding-bottom: 0 !important;
}

:deep(.title) {
  &.is-1 {
    font-size: 2.5rem;
  }
}

@media only screen and (width <= 767px) {
  .mobile-hero {
    &.is-fullheight {
      min-height: auto !important;
      height: auto;
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .mobile-hero {
    &.is-fullheight {
      min-height: auto !important;
      height: auto;
    }
  }
}
</style>
