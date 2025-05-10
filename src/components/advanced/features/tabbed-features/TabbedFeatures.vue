<script setup lang="ts">
import { viaPlaceholderErrorHandler } from '/@src/utils/viaPlaceholderErrorHandler'

const benefits = [
  'تجربه‌ی کاربری مشتریان خود را بهبود ببخشید',
  'رضایت بیشتری از مشتریان خود دریافت کنید',
  'ابتدا حساب کاربری مشتری را بهبود دهید',
  'نتایج را بصورت آنی و زمان واقعی دریافت و بررسی کنید',
]
</script>

<template>
  <div class="mx-auto max-w-9">
    <Tabs
      alignment="centered"
      selected="javascript"
      :tabs="[
        { label: 'جاوااسکریپت', value: 'javascript' },
        { label: 'توسعه نرم‌افزار', value: 'development' },
        { label: 'طرح‌ریزی رابط و تجربه کاربری', value: 'design' },
      ]"
    >
      <template #tab="{ activeValue }">
        <div v-if="activeValue === 'javascript'">
          <div class="columns is-vcentered b-columns-half-tablet-p">
            <div class="column is-6">
              <div class="image-block">
                <img
                  class="main-image"
                  src="/assets/demo/img/content/400x400/1.jpg"
                  alt="featured image"
                  width="400"
                  height="400"
                  @error.once="
                    (event) => viaPlaceholderErrorHandler(event, `400x400`)
                  "
                >
                <div class="small-image-holder">
                  <img
                    src="/assets/demo/img/content/400x400/2.jpg"
                    alt="featured image"
                    width="400"
                    height="400"
                    @error.once="
                      (event) => viaPlaceholderErrorHandler(event, `400x400`)
                    "
                  >
                </div>
                <div class="tiny-image-holder">
                  <img
                    src="/assets/demo/img/content/400x400/3.jpg"
                    alt="featured image"
                    width="400"
                    height="400"
                    @error.once="
                      (event) => viaPlaceholderErrorHandler(event, `400x400`)
                    "
                  >
                </div>
              </div>
            </div>
            <div class="column is-5 is-offset-1">
              <Title
                tag="h2"
                :size="4"
                weight="bold"
              >
                اکوسیستمی غنی
              </Title>
              <p class="paragraph rem-100 mb-4">
                برای رشد کسب‌وکارتان در بازارهای پویای امروزی، نیاز به یک مزیت
                دارید. با هوش مصنوعی ما که به طور مداوم در پس‌زمینه فعال است،
                می‌توانید فرصت‌های رشد را شناسایی کرده و در بالاترین سطح به طور
                ۲۴ ساعته و ۷ روز هفته در رقابت برای کسب عنوان «بهترین» بمانید.
              </p>
              <hr>
              <div
                v-for="(benefit, index) in benefits"
                :key="index"
                class="benefit mb-2"
              >
                <i
                  class="iconify"
                  data-icon="feather:check"
                />
                <span class="is-weight-500 ps-2 pe-4">
                  {{ benefit }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div v-else-if="activeValue === 'development'">
          <div class="columns is-vcentered b-columns-half-tablet-p">
            <div class="column is-6">
              <div class="image-block">
                <img
                  class="main-image"
                  src="/assets/demo/img/content/400x400/4.jpg"
                  alt="featured image"
                  width="400"
                  height="400"
                  @error.once="
                    (event) => viaPlaceholderErrorHandler(event, `400x400`)
                  "
                >
                <div class="small-image-holder">
                  <img
                    src="/assets/demo/img/content/400x400/5.jpg"
                    alt="featured image"
                    width="400"
                    height="400"
                    @error.once="
                      (event) => viaPlaceholderErrorHandler(event, `400x400`)
                    "
                  >
                </div>
                <div class="tiny-image-holder">
                  <img
                    src="/assets/demo/img/content/400x400/6.jpg"
                    alt="featured image"
                    width="400"
                    height="400"
                    @error.once="
                      (event) => viaPlaceholderErrorHandler(event, `400x400`)
                    "
                  >
                </div>
              </div>
            </div>
            <div class="column is-5 is-offset-1">
              <Title
                tag="h2"
                :size="4"
                weight="bold"
              >
                توسعه‌نرم‌افزار در چشم‌انداز آینده
              </Title>
              <p class="paragraph rem-100 mb-4">
                برای رشد کسب‌وکارتان در بازارهای پویای امروزی، نیاز به یک مزیت
                دارید. با هوش مصنوعی ما که به طور مداوم در پس‌زمینه فعال است،
                می‌توانید فرصت‌های رشد را شناسایی کرده و در بالاترین سطح به طور
                ۲۴ ساعته و ۷ روز هفته در رقابت برای کسب عنوان «بهترین» بمانید.
              </p>
              <hr>
              <div
                v-for="(benefit, index) in benefits"
                :key="index"
                class="benefit mb-2"
              >
                <i
                  class="iconify"
                  data-icon="feather:check"
                />
                <span class="is-weight-500 ps-2 pe-4">
                  {{ benefit }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div v-else-if="activeValue === 'design'">
          <div class="columns is-vcentered b-columns-half-tablet-p">
            <div class="column is-6">
              <div class="image-block">
                <img
                  class="main-image"
                  src="/assets/demo/img/content/400x400/8.jpg"
                  alt="featured image"
                  width="400"
                  height="400"
                  @error.once="
                    (event) => viaPlaceholderErrorHandler(event, `400x400`)
                  "
                >
                <div class="small-image-holder">
                  <img
                    src="/assets/demo/img/content/400x400/3.jpg"
                    alt="featured image"
                    width="400"
                    height="400"
                    @error.once="
                      (event) => viaPlaceholderErrorHandler(event, `400x400`)
                    "
                  >
                </div>
                <div class="tiny-image-holder">
                  <img
                    src="/assets/demo/img/content/400x400/5.jpg"
                    alt="featured image"
                    width="400"
                    height="400"
                    @error.once="
                      (event) => viaPlaceholderErrorHandler(event, `400x400`)
                    "
                  >
                </div>
              </div>
            </div>
            <div class="column is-5 is-offset-1">
              <Title
                tag="h2"
                :size="4"
                weight="bold"
              >
                زبان طراحی نوین
              </Title>
              <p class="paragraph rem-100 mb-4">
                برای رشد کسب‌وکارتان در بازارهای پویای امروزی، نیاز به یک مزیت
                دارید. با هوش مصنوعی ما که به طور مداوم در پس‌زمینه فعال است،
                می‌توانید فرصت‌های رشد را شناسایی کرده و در بالاترین سطح به طور
                ۲۴ ساعته و ۷ روز هفته در رقابت برای کسب عنوان «بهترین» بمانید.
              </p>
              <hr>
              <div
                v-for="(benefit, index) in benefits"
                :key="index"
                class="benefit mb-2"
              >
                <i
                  class="iconify"
                  data-icon="feather:check"
                />
                <span class="is-weight-500 ps-2 pe-4">
                  {{ benefit }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </template>
    </Tabs>
  </div>
</template>

<style scoped lang="scss">
:deep(.tabs) {
  margin-bottom: 2rem;
}

.benefit {
  font-family: var(--font);
  color: var(--medium-text);
}

.image-block {
  position: relative;

  .main-image {
    display: block;
    width: 400px;
    height: 400px;
    object-fit: cover;
  }

  .small-image-holder {
    position: absolute;
    bottom: -40px;
    inset-inline-end: -15px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 200px;
    background: var(--section-bg-color);

    img {
      display: block;
      width: 180px;
      height: 180px;
      object-fit: cover;
    }
  }

  .tiny-image-holder {
    position: absolute;
    top: 25px;
    inset-inline-start: -50px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 120px;
    background: var(--section-bg-color);

    img {
      display: block;
      width: 105px;
      height: 105px;
      object-fit: cover;
    }
  }
}

@media only screen and (width <= 767px) {
  .image-block {
    .main-image {
      max-width: 100%;
    }

    .small-image-holder {
      bottom: -20px;
      inset-inline-end: -50px;
      width: 140px;
      height: 140px;

      img {
        width: 120px;
        height: 120px;
      }
    }

    .tiny-image-holder {
      width: 100px;
      height: 100px;

      img {
        width: 85px;
        height: 85px;
      }
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .image-block {
    .main-image {
      max-width: 100%;
      height: 350px;
    }

    .small-image-holder {
      bottom: -70px;
      inset-inline-end: 40px;
      width: 140px;
      height: 140px;

      img {
        width: 120px;
        height: 120px;
      }
    }

    .tiny-image-holder {
      width: 100px;
      height: 100px;

      img {
        width: 85px;
        height: 85px;
      }
    }
  }
}
</style>
