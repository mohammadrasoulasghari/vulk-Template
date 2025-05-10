<script setup lang="ts">
import { viaPlaceholderErrorHandler } from '/@src/utils/viaPlaceholderErrorHandler'
</script>

<template>
  <Hero
    color="grey"
    class="cards-hero"
    size="fullheight"
  >
    <template #body>
      <div class="columns is-vcentered">
        <div class="column is-5">
          <div class="hero-caption">
            <Title
              tag="h1"
              :size="2"
              weight="bold"
            >
              جلسات تیمی را امتحان کنید که قبلاً هرگز انجام نداده اید.
            </Title>
            <Subtitle
              tag="p"
              :size="5"
              classes="b-centered-tablet-p text-medium"
            >
              این مکانی است که تیم ها برای ایجاد برنامه های جلسات مشترک، ثبت
              تصمیمات و تکالیف کار جمع می‌شوند.
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
        </div>
        <div class="column is-6 is-offset-1">
          <div class="hero-composition">
            <div class="image-wrap">
              <img
                class="curly-image"
                src="/assets/demo/img/hero/1.jpg"
                alt="Hero image"
                @error.once="
                  (event) => viaPlaceholderErrorHandler(event, '800x1041')
                "
              >

              <!--Floating box-->
              <div class="floating-box floating-box-1">
                <div class="floating-box-content">
                  <div class="icon-header">
                    <div class="pastel-icon">
                      <IconBox color="success">
                        <i
                          class="iconify"
                          data-icon="uiw:safety"
                        />
                      </IconBox>
                    </div>
                    <span class="header-text">امنیت</span>
                    <div class="header-stat is-positive">
                      <span>+۱۲،۴٪</span>
                    </div>
                  </div>
                  <div class="inner-text-content">
                    <p>امنیت ارتباطات به طور قابل توجهی بهبود یافته است.</p>
                  </div>
                </div>
              </div>
              <!--Floating box-->
              <div class="floating-box floating-box-2">
                <div class="floating-box-content">
                  <div class="icon-block">
                    <div class="pastel-icon">
                      <IconBox
                        size="medium"
                        color="info"
                      >
                        <i
                          class="iconify"
                          data-icon="bi:cash-coin"
                        />
                      </IconBox>
                    </div>
                    <div class="block-text">
                      <span class="block-title">۱۳۶۰۰۰۰۰۰ تومان</span>
                      <span class="block-subtitle">
                        بیش از ۶ ماه ذخیره شده است
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <!--Floating avatar-->
              <div class="floating-avatar floating-avatar-1">
                <AvatarSimple
                  picture="/assets/demo/img/people/7a.jpg"
                  size="large"
                />
              </div>
              <div class="floating-avatar floating-avatar-2">
                <AvatarSimple
                  picture="/assets/demo/img/avatars/39.jpg"
                  size="medium"
                />
              </div>
              <div class="floating-avatar floating-avatar-3">
                <AvatarSimple
                  picture="/assets/demo/img/avatars/42.jpg"
                  size="small"
                />
              </div>
              <div class="floating-avatar floating-avatar-4">
                <AvatarSimple
                  picture="/assets/demo/img/avatars/25.jpg"
                  size="medium"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Hero>
</template>

<style lang="scss" scoped>
.cards-hero {
  .hero-composition {
    position: relative;

    .image-wrap {
      position: relative;
      margin: 0 auto;
      max-width: 420px;

      .curly-image {
        max-height: 540px;
        border-radius: 0 5rem;
      }
    }

    .floating-box {
      position: absolute;
      background: var(--card-bg-color);
      padding: 0.85rem;
      border: 1px solid var(--card-border-color);
      border-radius: 1rem;
      box-shadow: var(--light-box-shadow);
      transition:
        background-color 0.3s,
        border-color 0.3s;

      &.floating-box-1 {
        bottom: 4rem;
        inset-inline-end: -4rem;
        max-width: 240px;
        min-width: 240px;
      }

      &.floating-box-2 {
        top: 4rem;
        inset-inline-start: -6rem;
        max-width: 180px;
        min-width: 180px;
      }

      .floating-box-content {
        width: 100%;

        .pastel-icon {
          max-width: 50px;
        }

        .icon-block {
          .pastel-icon {
            margin: 1rem auto;
          }

          .block-text {
            text-align: center;

            .block-title {
              display: block;
              font-family: var(--font);
              font-weight: 700;
              font-size: 1.25rem;
              line-height: 1;
              color: var(--title-color);
            }

            .block-subtitle {
              display: block;
              font-family: var(--font);
              font-size: 0.85rem;
              color: var(--medium-text);
              margin-bottom: 0.75rem;
            }
          }
        }

        .icon-header {
          display: flex;
          align-items: center;
          margin-bottom: 0.5rem;
          width: 100%;

          .header-text {
            display: block;
            font-weight: 700;
            font-family: var(--font-main);
            color: var(--title-color);
            margin-inline-start: 0.75rem;
          }

          .header-stat {
            margin-inline-start: auto;
            margin-inline-end: 0.5rem;
            font-family: var(--font);
            font-weight: 600;
            font-size: 0.8rem;

            &.is-positive {
              color: var(--success);
            }

            &.is-negative {
              color: var(--danger);
            }
          }
        }

        .inner-text-content {
          font-family: var(--font);
          font-size: 0.85rem;
          color: var(--medium-text);
          text-align: start;
        }
      }
    }

    .floating-avatar {
      position: absolute;
      background: var(--card-bg-color);
      border: 1px solid var(--card-border-color);
      box-shadow: var(--light-box-shadow);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      transition:
        background-color 0.3s,
        border-color 0.3s;

      &.floating-avatar-1 {
        top: 0;
        inset-inline-end: -80px;
        height: 76px;
        width: 76px;
      }

      &.floating-avatar-2 {
        top: 140px;
        inset-inline-end: -140px;
        height: 60px;
        width: 60px;
      }

      &.floating-avatar-3 {
        top: 90px;
        inset-inline-end: -20px;
        height: 36px;
        width: 36px;
      }

      &.floating-avatar-4 {
        bottom: 140px;
        inset-inline-start: -30px;
        height: 60px;
        width: 60px;
      }
    }
  }
}

@media only screen and (width <= 767px) {
  .cards-hero {
    .hero-caption {
      padding-top: 3rem;
      text-align: center;
    }

    .buttons {
      justify-content: center;
    }

    :deep(.title) {
      &.is-2 {
        font-size: 2rem;
      }
    }

    .hero-composition {
      .floating-box {
        transform: scale(0.8);

        &.floating-box-2 {
          top: 2rem;
          inset-inline-start: -5rem;
        }
      }
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .cards-hero {
    .hero-caption {
      text-align: center;
      max-width: 560px;
      margin: 0 auto;
    }

    .buttons {
      justify-content: center;
    }
  }
}
</style>
