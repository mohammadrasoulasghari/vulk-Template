<script setup lang="ts">
import { inject } from 'vue'

export interface DemoLayoutProps {
  inverted?: boolean
}

const props = withDefaults(defineProps<DemoLayoutProps>(), {
  inverted: false,
})

const rtl: boolean | undefined = inject('rtl')
</script>

<template>
  <div :class="props.inverted && 'is-dark'">
    <Section
      class="demo-section"
      color="grey"
    >
      <Container>
        <div class="demo-page-component">
          <div class="columns is-multiline b-columns-third-tablet-p">
            <div class="arrow-block">
              <p class="paragraph rem-90">
                این یک متن جایگزین برای کامپوننت در حالت دمو می‌باشد. متن خود را
                می‌توانید جایگزین این متن نمائید.
              </p>
              <i-ph-arrow-bend-down-right-thin v-if="!rtl" />
              <i-ph-arrow-bend-down-left-thin v-else />
            </div>
            <div class="column is-4">
              <div class="demo-block is-media">
                <PlaceloadText
                  width="100%"
                  height="220px"
                />
                <DarkImage
                  class="demo-char demo-char-1"
                  src="/assets/illustrations/demo/demo-char-1.svg"
                  alt=""
                  width="368"
                  height="240"
                />
              </div>
            </div>
            <div class="column is-4">
              <div class="demo-block is-media">
                <PlaceloadText
                  width="100%"
                  height="220px"
                />
                <DarkImage
                  class="demo-char demo-char-2"
                  src="/assets/illustrations/demo/demo-char-2.svg"
                  alt="Demo character"
                  width="368"
                  height="240"
                />
              </div>
            </div>
            <div class="column is-4">
              <div class="demo-block is-media">
                <PlaceloadText
                  width="100%"
                  height="220px"
                />
                <DarkImage
                  class="demo-char demo-char-3"
                  src="/assets/illustrations/demo/demo-char-3.svg"
                  alt="Demo character"
                  width="368"
                  height="240"
                />
              </div>
            </div>
            <div class="column is-4">
              <div class="demo-block mt-6">
                <PlaceloadParagraph
                  last-line-width="60%"
                  :lines="10"
                />
              </div>
            </div>
            <div class="column is-4">
              <div class="demo-block mt-6">
                <PlaceloadParagraph
                  last-line-width="80%"
                  :lines="6"
                />
              </div>
            </div>
            <div class="column is-4">
              <div class="demo-block mt-6">
                <PlaceloadParagraph
                  last-line-width="70%"
                  :lines="8"
                />
              </div>
            </div>
          </div>
          <div class="columns is-multiline b-columns-half-tablet-p">
            <div class="column is-5">
              <div class="columns is-multiline b-columns-half-tablet-p mt-5">
                <div class="column is-6">
                  <div class="demo-block is-media">
                    <PlaceloadText
                      width="100%"
                      height="200px"
                    />
                    <DarkImage
                      class="demo-char demo-char-4"
                      src="/assets/illustrations/demo/demo-char-4.svg"
                      alt="Demo character"
                      width="368"
                      height="240"
                    />
                    <DarkImage
                      class="demo-char demo-char-4-bis"
                      src="/assets/illustrations/demo/demo-char-4-hands.svg"
                      alt="Demo character"
                      width="368"
                      height="240"
                    />
                  </div>
                </div>
                <div class="column is-6">
                  <div class="demo-block is-media">
                    <PlaceloadText
                      width="100%"
                      height="200px"
                    />
                    <DarkImage
                      class="demo-char demo-char-5"
                      src="/assets/illustrations/demo/demo-char-5.svg"
                      alt="Demo character"
                      width="368"
                      height="240"
                    />
                  </div>
                </div>
                <div class="column is-6">
                  <div class="demo-block is-media">
                    <PlaceloadText
                      width="100%"
                      height="200px"
                    />
                    <DarkImage
                      class="demo-char demo-char-6"
                      src="/assets/illustrations/demo/demo-char-6.svg"
                      alt="Demo character"
                      width="368"
                      height="240"
                    />
                    <DarkImage
                      class="demo-char demo-char-6-bis"
                      src="/assets/illustrations/demo/demo-char-6-hands.svg"
                      alt="Demo character"
                      width="368"
                      height="240"
                    />
                  </div>
                </div>
                <div class="column is-6">
                  <div class="demo-block is-media">
                    <PlaceloadText
                      width="100%"
                      height="200px"
                    />
                    <DarkImage
                      class="demo-char demo-char-7"
                      src="/assets/illustrations/demo/demo-char-7.svg"
                      alt="Demo character"
                      width="368"
                      height="240"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-6 is-offset-1">
              <div class="demo-block mt-6 mb-4">
                <PlaceloadParagraph
                  last-line-width="60%"
                  :lines="10"
                />
              </div>
              <div class="demo-block mt-6">
                <PlaceloadParagraph
                  last-line-width="40%"
                  :lines="6"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  </div>
</template>

<style scoped lang="scss">
.demo-section {
  min-height: 100vh;
}

.demo-page-component {
  position: relative;
  padding-top: 12rem;
  padding-bottom: 4rem;

  .arrow-block {
    position: absolute;
    top: -8rem;
    inset-inline-start: 3rem;
    max-width: 200px;
    font-style: italic;

    p {
      transform: rotate(-5deg);
      margin-bottom: 0.5rem;
      color: var(--primary);

      [dir='rtl'] & {
        transform: rotate(5deg);
      }
    }

    svg {
      transform: rotate(30deg);
      font-size: 2.5rem;
      margin-inline-start: 3rem;
      color: var(--primary);

      [dir='rtl'] & {
        transform: rotate(-30deg);
      }
    }
  }

  .columns {
    position: relative;
  }

  .demo-block {
    position: relative;

    :deep(.demo-char) {
      img {
        position: absolute;
        z-index: 2;
      }

      &.demo-char-1 img {
        bottom: -1rem;
        inset-inline-start: -1rem;
        max-width: 180px;

        [dir='rtl'] & {
          transform: scaleX(-1);
        }
      }

      &.demo-char-2 img {
        top: -8.825rem;
        inset-inline-end: 1rem;
        max-height: 220px;
        width: auto;

        [dir='rtl'] & {
          transform: scaleX(-1);
        }
      }

      &.demo-char-3 img {
        bottom: -1rem;
        inset-inline-end: -1rem;
        max-width: 200px;

        [dir='rtl'] & {
          transform: scaleX(-1);
        }
      }

      &.demo-char-4 img {
        top: 2.5rem;
        inset-inline-start: 0;
        max-width: 90px;

        [dir='rtl'] & {
          transform: scaleX(-1);
        }
      }

      &.demo-char-4-bis img {
        top: 2.5rem;
        inset-inline-start: -0.5rem;
        max-width: 90px;
        z-index: 3;

        [dir='rtl'] & {
          transform: scaleX(-1);
        }
      }

      &.demo-char-5 img {
        bottom: 0;
        inset-inline-end: 3rem;
        max-width: 100px;
      }

      &.demo-char-6 img {
        top: 0;
        inset-inline-start: 0;
        inset-inline-end: 0;
        margin: 0 auto;
        max-width: 120px;
      }

      &.demo-char-6-bis img {
        top: -0.5rem;
        inset-inline-start: 0;
        inset-inline-end: 0;
        margin: 0 auto;
        max-width: 120px;
        z-index: 3;
      }

      &.demo-char-7 img {
        bottom: 0;
        inset-inline-end: 1rem;
        max-width: 140px;
      }
    }

    &.is-media {
      :deep(.content-shape) {
        border-radius: 1rem;
      }
    }
  }
}

@media only screen and (width <= 767px) {
  .demo-page-component {
    .demo-block {
      :deep(.demo-char) {
        &.demo-char-2 img {
          top: initial;
          bottom: -4.825rem;
        }
      }
    }
  }
}
</style>
