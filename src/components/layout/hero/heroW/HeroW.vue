<script setup lang="ts">
import { viaPlaceholderErrorHandler } from '/@src/utils/viaPlaceholderErrorHandler'
import { inject } from 'vue'

const rtl: boolean | undefined = inject('rtl')
</script>

<template>
  <Hero
    color="grey"
    class="product-hero"
    size="fullheight"
    shape="/assets/shapes/hero-shape.svg"
    shape-orientation="right"
  >
    <template #body>
      <div class="hero-inner">
        <div class="columns is-vcentered">
          <div class="column is-7">
            <div class="hero-caption">
              <Title
                tag="h1"
                :size="2"
                weight="bold"
              >
                بیمه‌های مختلف را از چندین ارائه‌دهنده در یک مکان مقایسه کنید.
              </Title>
              <Subtitle
                tag="p"
                :size="5"
                classes="b-centered-tablet-p text-medium"
              >
                به‌طور الگوریتمی پیشنهادات را بهینه‌سازی کنید، کمپین‌ها را
                بسازید و جریان‌های کاری کلیدواژه‌های خود را خودکار کنید.
              </Subtitle>
            </div>
            <div class="hero-box-grid">
              <!--Grid item-->
              <div class="hero-box-item">
                <div class="box-inner">
                  <IconBox
                    color="primary"
                    size="medium"
                    rounded
                  >
                    <i-ion-medkit-outline />
                  </IconBox>
                  <Title
                    tag="h3"
                    :size="7"
                    weight="semi"
                    leading
                  >
                    سلامت
                  </Title>
                  <div class="go-icon">
                    <i-ion-arrow-forward-outline v-if="!rtl" />
                    <i-ion-arrow-back-outline v-else />
                  </div>
                </div>
              </div>
              <!--Grid item-->
              <div class="hero-box-item">
                <div class="box-inner">
                  <IconBox
                    color="success"
                    size="medium"
                    rounded
                  >
                    <i-ion-leaf-outline />
                  </IconBox>
                  <Title
                    tag="h3"
                    :size="7"
                    weight="semi"
                    leading
                  >
                    کیفیت زندگی
                  </Title>
                  <div class="go-icon">
                    <i-ion-arrow-forward-outline v-if="!rtl" />
                    <i-ion-arrow-back-outline v-else />
                  </div>
                </div>
              </div>
              <!--Grid item-->
              <div class="hero-box-item">
                <div class="box-inner">
                  <IconBox
                    color="yellow"
                    size="medium"
                    rounded
                  >
                    <i-ion-briefcase-outline />
                  </IconBox>
                  <Title
                    tag="h3"
                    :size="7"
                    weight="semi"
                    leading
                  >
                    کسب و کار
                  </Title>
                  <div class="go-icon">
                    <i-ion-arrow-forward-outline v-if="!rtl" />
                    <i-ion-arrow-back-outline v-else />
                  </div>
                </div>
              </div>
              <!--Grid item-->
              <div class="hero-box-item">
                <div class="box-inner">
                  <IconBox
                    color="info"
                    size="medium"
                    rounded
                  >
                    <i-ion-diamond-outline />
                  </IconBox>
                  <Title
                    tag="h3"
                    :size="7"
                    weight="semi"
                    leading
                  >
                    سرمایه‌گذاری
                  </Title>
                  <div class="go-icon">
                    <i-ion-arrow-forward-outline v-if="!rtl" />
                    <i-ion-arrow-back-outline v-else />
                  </div>
                </div>
              </div>
              <!--Grid item-->
              <div class="hero-box-item">
                <div class="box-inner">
                  <IconBox
                    color="warning"
                    size="medium"
                    rounded
                  >
                    <i-ion-car-sport-outline />
                  </IconBox>
                  <Title
                    tag="h3"
                    :size="7"
                    weight="semi"
                    leading
                  >
                    حمل و نقل
                  </Title>
                  <div class="go-icon">
                    <i-ion-arrow-forward-outline v-if="!rtl" />
                    <i-ion-arrow-back-outline v-else />
                  </div>
                </div>
              </div>
              <!--Grid item-->
              <div class="hero-box-item">
                <div class="box-inner">
                  <IconBox
                    color="danger"
                    size="medium"
                    rounded
                  >
                    <i-ion-thunderstorm-outline />
                  </IconBox>
                  <Title
                    tag="h3"
                    :size="7"
                    weight="semi"
                    leading
                  >
                    بلایا
                  </Title>
                  <div class="go-icon">
                    <i-ion-arrow-forward-outline v-if="!rtl" />
                    <i-ion-arrow-back-outline v-else />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-5">
            <div class="hero-image-container">
              <img
                src="/assets/demo/img/hero/smiling-girl.jpg"
                alt="Hero image"
                width="640"
                height="960"
                @error.once="
                  (event) => viaPlaceholderErrorHandler(event, `640x960`)
                "
              >
              <!--Card-->
              <div class="stat-card stat-card-1">
                <div class="data text-primary">
                  <i-ion-calendar-outline />
                  <span class="metric">۴۳ هزار</span>
                  <span class="legend">در ماه</span>
                </div>
                <div class="graph text-primary">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 281.3 123.7"
                    style="enable-background: new 0 0 281.3 123.7"
                    xml:space="preserve"
                  >
                    <path
                      d="M6.8,27c38-31.6,57.9-26.4,69.2-14c20.9,22.9,16.4,74.9,35.4,85.2c18.6,10.1,30-35.8,55.6-30.9
	c22.7,4.3,26.4,42.8,49.6,51.5c11.9,4.5,30.5,1.7,57.8-36.5"
                    />
                  </svg>
                </div>
              </div>
              <!--Card-->
              <div class="stat-card stat-card-2">
                <div class="data text-success">
                  <i-ion-business-outline />
                  <span class="metric">۲۱ هزار</span>
                  <span class="legend">در ماه</span>
                </div>
                <div class="graph text-success">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 281.3 123.7"
                    style="enable-background: new 0 0 281.3 123.7"
                    xml:space="preserve"
                  >
                    <path
                      d="M6.8,96.7c38,31.6,57.9,26.4,69.2,14c20.9-22.9,16.4-74.9,35.4-85.2c18.6-10.1,30,35.8,55.6,30.9
	c22.7-4.3,26.4-42.8,49.6-51.5c11.9-4.5,30.5-1.7,57.8,36.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Hero>
</template>

<style lang="scss" scoped>
.hero-inner {
  padding-top: 2.5rem;

  .hero-caption {
    max-width: 480px;
  }
}

.hero-box-grid {
  display: flex;
  flex-wrap: wrap;
  margin: -0.5rem;
  padding-top: 1.5rem;
  max-width: 580px;

  .hero-box-item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(33.3% - 1rem);
    text-align: center;
    margin: 0.5rem;
    padding: 1.5rem 1rem;
    background: var(--card-bg-color);
    border: 1px solid var(--card-border-color);
    border-radius: 0.85rem;
    box-shadow: var(--spread-shadow);
    cursor: pointer;

    :deep(.icon-box) {
      margin: 0 auto 0.5rem;
    }

    .go-icon {
      font-size: 0.9rem;
      color: var(--primary);
    }
  }
}

.hero-image-container {
  position: relative;

  img {
    position: relative;
    display: block;
    max-width: 400px;
    margin-inline-start: auto;
    z-index: 1;
  }

  .stat-card {
    position: absolute;
    display: flex;
    align-items: center;
    padding: 1rem;
    background: var(--card-bg-color);
    border: 1px solid var(--card-border-color);
    border-radius: 0.9rem;
    box-shadow: var(--spread-shadow);
    z-index: 2;

    .data {
      span {
        font-family: var(--font);
        display: block;

        &.metric {
          font-weight: 600;
          color: var(--title-color);
        }

        &.legend {
          color: var(--light-text);
          font-size: 0.7rem;
        }
      }
    }

    .graph {
      svg {
        width: 100%;
        max-width: 100px;
        stroke-dasharray: 406;
        stroke-dashoffset: 406;
        animation: dash 1s linear forwards;

        path {
          fill: none;
        }

        stroke: currentcolor;
        stroke-width: 5px;
      }
    }

    &.stat-card-1 {
      bottom: 50px;
      inset-inline-start: 0;
    }

    &.stat-card-2 {
      top: 50px;
      inset-inline-end: -80px;
    }
  }
}

@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}

@media only screen and (width <= 767px) {
  .product-hero {
    text-align: center;
  }

  .hero-inner {
    .hero-caption {
      :deep(.title) {
        margin-top: 3rem;

        &.is-2 {
          font-size: 2rem;
        }
      }
    }
  }

  .hero-image-container {
    img {
      max-width: 100%;
    }

    .stat-card {
      &.stat-card-1 {
        inset-inline-start: -35px;
      }
    }
  }

  .hero-box-grid {
    max-width: 100%;

    .hero-box-item {
      width: calc(50% - 1rem);
      padding: 1rem;
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .product-hero {
    text-align: center;

    .buttons {
      justify-content: center;
    }

    .hero-image-container {
      img {
        margin: 0 auto;
      }

      .stat-card {
        &.stat-card-1 {
          inset-inline-start: 50px;
        }

        &.stat-card-2 {
          inset-inline-end: 50px;
        }
      }
    }
  }

  .hero-inner {
    .hero-caption {
      margin: 0 auto;

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
  }

  .hero-box-grid {
    margin-inline-start: auto;
    margin-inline-end: auto;
  }
}
</style>
