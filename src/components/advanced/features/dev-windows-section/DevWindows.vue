<script setup lang="ts">
import config from '/@src/app.config'
</script>

<template>
  <div class="py-6">
    <div class="dev-windows">
      <div class="columns">
        <div class="column is-6">
          <!--#region First browser window-->
          <div class="code-window">
            <div class="window-head">
              <div class="dots">
                <div class="dot bg-danger" />
                <div class="dot bg-yellow" />
                <div class="dot bg-success" />
              </div>
              <div class="tab">
                main.js
              </div>
            </div>
            <div class="window-body">
              <div class="code-lines">
                <div class="code-line">
                  1
                </div>
                <div class="code-line">
                  2
                </div>
                <div class="code-line">
                  3
                </div>
                <div class="code-line">
                  4
                </div>
                <div class="code-line">
                  5
                </div>
              </div>
              <div class="code-content">
                <div class="code-content-line">
                  <span class="bold">export default function</span>
                  ({ data }) {
                </div>
                <div class="code-content-line indented-1">
                  <span class="bold me-2">return</span>
                  &#x3C;
                  <span class="bold text-primary">Layout</span>
                  &#x3E;
                </div>
                <div class="code-content-line indented-2">
                  &#x3C;
                  <span class="bold text-primary me-2">Product</span>
                  details={
                  <span class="bold text-secondary">data</span>
                  } /&#x3E;
                </div>
                <div class="code-content-line indented-1">
                  &#x3C;/
                  <span class="bold text-primary">Layout</span>
                  &#x3E;
                </div>
                <div class="code-content-line">
                  }
                </div>
              </div>
            </div>
          </div>
          <!--#endregion -->

          <!--#region Second browser window-->
          <div class="code-window is-second">
            <div class="window-head">
              <div class="dots">
                <div class="dot bg-danger" />
                <div class="dot bg-yellow" />
                <div class="dot bg-success" />
              </div>
              <div class="address-bar">
                <span class="address">localhost:9000</span>
                <i
                  class="iconify"
                  data-icon="feather:rotate-ccw"
                />
              </div>
            </div>
            <div class="window-body">
              <div class="fake-nav">
                <div class="fake-logo-block">
                  <div class="fake-logo">
                    <DarkImage
                      :src="config.logo.src"
                      :src-dark="config.logo.srcDark"
                      alt=""
                      :width="config.logo.width"
                      :height="config.logo.height"
                    />
                  </div>
                  <div class="ms-2">
                    <PlaceloadText
                      width="50px"
                      height="8px"
                      class="mb-1"
                    />
                    <PlaceloadText
                      width="90px"
                      height="8px"
                    />
                  </div>
                </div>
                <div class="fake-links">
                  <PlaceloadText
                    width="35px"
                    height="8px"
                  />
                  <PlaceloadText
                    width="35px"
                    height="8px"
                  />
                  <PlaceloadText
                    width="35px"
                    height="8px"
                  />
                  <PlaceloadText
                    width="35px"
                    height="8px"
                  />
                </div>
              </div>
              <div class="fake-body">
                <div class="left">
                  <div class="fake-img">
                    <DarkImage
                      src="/assets/illustrations/products/vr.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div class="right">
                  <PlaceloadText
                    width="70%"
                    height="20px"
                    class="mb-4"
                  />
                  <PlaceloadText
                    width="100%"
                    height="140px"
                  />
                </div>
              </div>
            </div>
          </div>
          <!--#endregion -->
        </div>

        <!--#region Columns -->
        <div class="column is-5 is-offset-1">
          <div class="text-block max-w-4">
            <Title
              tag="h2"
              :size="4"
              weight="bold"
              leading
            >
              <span>بازسازی در لحظه (HMR)</span>
            </Title>
            <p class="paragraph">
              لورم ایپسوم دولور سیت امت، کانسکتتور آدیپیسینگ الیت. هرچند که من
              می‌بینم تو به‌ندرت دلسرد شده‌ای. لورم ایپسوم دولور سیت امت،
              کانسکتتور آدیپیسینگ الیت. هرچند که من می‌بینم تو به‌ندرت دلسرد
              شده‌ای.
            </p>
          </div>
          <div class="text-block max-w-4">
            <Title
              tag="h2"
              :size="4"
              weight="bold"
              leading
            >
              <span>مدل‌های پویا</span>
            </Title>
            <p class="paragraph">
              لورم ایپسوم دولور سیت امت، کانسکتتور آدیپیسینگ الیت. هرچند که من
              می‌بینم تو به‌ندرت دلسرد شده‌ای. لورم ایپسوم دولور سیت امت،
              کانسکتتور آدیپیسینگ الیت. هرچند که من می‌بینم تو به‌ندرت دلسرد
              شده‌ای.
            </p>
          </div>
          <div class="text-block max-w-4">
            <Title
              tag="h2"
              :size="4"
              weight="bold"
              leading
            >
              <span>پیکربندی محیط</span>
            </Title>
            <p class="paragraph">
              لورم ایپسوم دولور سیت امت، کانسکتتور آدیپیسینگ الیت. هرچند که من
              می‌بینم تو به‌ندرت دلسرد شده‌ای. لورم ایپسوم دولور سیت امت،
              کانسکتتور آدیپیسینگ الیت. هرچند که من می‌بینم تو به‌ندرت دلسرد
              شده‌ای.
            </p>
          </div>
        </div>
        <!--#endregion -->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dev-windows {
  .code-window {
    position: relative;
    width: 90%;
    height: 320px;
    background: var(--wrap-muted-color);
    border: 1px solid var(--card-border-color);
    border-radius: 0.5rem;
    box-shadow: var(--spread-shadow);
    overflow: hidden;

    .window-head {
      display: flex;
      align-items: center;
      height: 2.75rem;
      background: var(--card-bg-color);
      border-bottom: 1px solid var(--card-border-color);
      padding: 0 0.5rem;
      direction: ltr;

      .dots {
        .dot {
          border-radius: 50%;
          display: inline-block;
          width: 12px;
          height: 12px;
          margin-inline-start: 0.5rem;
        }
      }

      .tab {
        position: relative;
        bottom: -5px;
        height: 2.25rem;
        background: var(--wrap-muted-color);
        border: 1px solid var(--card-border-color);
        border-bottom: none;
        border-start-start-radius: 0.5rem;
        border-start-end-radius: 0.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 1.15rem;
        margin-inline-start: 1rem;
        font-family: var(--font);
        font-size: 0.9rem;
        color: var(--title-color);
      }

      .address-bar {
        display: flex;
        align-items: center;
        height: 1.85rem;
        padding: 0 1.25rem;
        background: var(--wrap-muted-color);
        border-radius: 0.25rem;
        margin-inline-start: auto;
        margin-inline-end: 35%;
        min-width: 170px;
        font-family: var(--font);
        font-size: 0.85rem;
        color: var(--title-color);

        .iconify {
          margin-inline-start: auto;
          font-size: 0.8rem;
        }
      }
    }

    .window-body {
      height: calc(320px - 2.75rem);
      display: flex;
      align-items: stretch;
      direction: ltr;

      .code-lines {
        height: 100%;
        width: 2.5rem;
        background: var(--wrap-bg-color-heavy);
        padding: 1rem 0;

        .code-line {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 1.75rem;
          font-size: 0.9rem;
          font-family: monospace;
          color: var(--title-color);
        }
      }

      .code-content {
        height: 100%;
        width: calc(100% - 2.5rem);
        padding: 1rem;

        .code-content-line {
          display: flex;
          align-items: center;
          height: 1.75rem;
          font-size: 0.9rem;
          font-family: monospace;
          color: var(--title-color);

          &.indented-1 {
            margin-inline-start: 1.5rem;
          }

          &.indented-2 {
            margin-inline-start: 3rem;
          }

          .bold {
            font-weight: 600;
          }
        }
      }
    }

    &.is-second {
      top: -110px;
      margin-inline-start: 10%;
      background: var(--card-bg-color);
      z-index: 1;

      .window-head {
        .dots {
          min-width: 80px;
        }
      }

      .window-body {
        display: block;
        background: var(--card-bg-color);
        padding: 0.75rem 1.25rem 1.25rem;

        .fake-nav {
          display: flex;
          align-items: center;
          height: 50px;
          width: 100%;
          margin-bottom: 1rem;

          .fake-logo-block {
            display: flex;
            align-items: center;
          }

          .fake-logo {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 42px;
            width: 42px;
            border-radius: 50%;
            background: var(--wrap-muted-color);

            :deep(img) {
              max-width: 22px;
            }
          }

          .fake-links {
            margin-inline-start: auto;
            display: flex;
            align-items: center;
            justify-content: flex-end;

            > div:not(:last-child) {
              margin-inline-end: 0.25rem;
            }
          }
        }

        .fake-body {
          display: flex;
          width: 100%;

          > div {
            width: 50%;

            &:first-child {
              padding-inline-end: 0.5rem;
            }

            &:nth-child(2) {
              padding-inline-start: 0.5rem;
            }
          }

          .fake-img {
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 0.25rem;
            height: 175px;
            width: 100%;
            background: var(--wrap-muted-color);

            :deep(img) {
              max-width: 110px;
            }
          }
        }
      }
    }
  }

  .text-block {
    &:not(:last-child) {
      margin-bottom: 3rem;
    }
  }
}

@media only screen and (width <= 767px) {
  .dev-windows {
    margin-top: -3rem;

    .code-window {
      width: 100%;

      .window-body {
        .code-lines {
          display: none;
        }

        .code-content {
          margin: 0;
          width: 100%;
        }
      }

      &.is-second {
        margin: 0 0 1rem;
        top: 1rem;

        .window-head {
          .address-bar {
            margin-inline-start: auto;
            margin-inline-end: 0;
          }
        }

        .window-body {
          .fake-nav {
            .fake-links {
              .content-shape:nth-child(3),
              .content-shape:nth-child(4) {
                display: none !important;
              }
            }
          }

          .fake-body {
            .fake-img {
              img {
                max-width: 70px;
              }
            }
          }
        }
      }
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .dev-windows {
    .columns {
      > .column.is-5 {
        display: flex;

        .text-block {
          padding: 0 0.5rem;
          text-align: center;

          :deep(.title) {
            font-size: 1.25rem;
          }

          .paragraph {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
}

/* stylelint-disable */
@media only screen and (min-device-width: 1024px) and (max-device-height: 1366px) and (-webkit-min-device-pixel-ratio: 1.5) and (orientation: portrait) {
  .dev-windows {
    .columns {
      > .column.is-5 {
        display: block;
        text-align: start !important;
      }
    }
  }
}
/* stylelint-enable */
</style>
