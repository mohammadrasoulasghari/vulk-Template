<script setup lang="ts">
import config from '/@src/app.config'
export type FooterColors = 'light' | 'dark'

export interface FooterBProps {
  color?: FooterColors
  bubbles?: boolean
}

const props = withDefaults(defineProps<FooterBProps>(), {
  color: undefined,
  bubbles: false,
})

const footerClasses = computed(() => [
  props.color && `footer-${props.color}`,
  props.bubbles && 'footer-overflow',
])
</script>

<template>
  <footer
    class="footer footer-left"
    :class="footerClasses"
  >
    <FooterBubbles v-if="props.bubbles" />
    <div class="container">
      <div class="columns is-vcentered">
        <div class="column is-8">
          <div
            class="is-flex d-column-mobile d-column-tablet-p is-align-items-center"
          >
            <RouterLink
              :to="{ name: 'index' }"
              class="footer-logo-left css-ninja mobile:mb-4"
            >
              <DarkImage
                class="small:mx-auto large:mx-0 size-44x44 mx-auto"
                :src="config.logo.src"
                :src-dark="config.logo.srcDark"
                alt=""
                :width="config.logo.width"
                :height="config.logo.height"
              />
            </RouterLink>
            <ul class="link-list p-2">
              <slot name="links">
                <li class="inline-block px-2">
                  <RouterLink
                    :to="{ name: 'index' }"
                    class="footer-link"
                  >
                    امکانات
                  </RouterLink>
                </li>
                <li class="inline-block px-2">
                  <RouterLink
                    :to="{ name: 'index' }"
                    class="footer-link"
                  >
                    در مورد
                  </RouterLink>
                </li>
                <li class="inline-block px-2">
                  <RouterLink
                    :to="{ name: 'index' }"
                    class="footer-link"
                  >
                    پشتیبانی
                  </RouterLink>
                </li>
                <li class="inline-block px-2">
                  <RouterLink
                    :to="{ name: 'index' }"
                    class="footer-link"
                  >
                    مخاطب
                  </RouterLink>
                </li>
              </slot>
            </ul>
          </div>
        </div>
        <div class="column is-4 has-text-centered">
          <p
            class="paragraph rem-90 footer-text medium:text-right is-6"
            data-config-id="copyright"
          >
            <span
              role="img"
              aria-label="copyright"
            >©</span>
            1403-1404 وولک. تمامی حقوق محفوظ است.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  position: relative;
  padding-top: 6rem;
  padding-bottom: 3rem;
  background: var(--footer-default-bg-color);

  &.footer-overflow {
    :global(body) {
      //overflow-x: hidden;
    }
  }

  &.footer-light {
    background: var(--footer-light-bg-color);
  }

  &.footer-dark {
    background: var(--footer-dark-bg-color);

    .title {
      color: var(--white-smoke);
      opacity: 0.6;
    }

    .footer-link,
    :deep(.footer-link) {
      color: var(--white-smoke);
      opacity: 0.8;

      &:hover {
        color: var(--primary-light-10) !important;
        opacity: 1;
      }
    }

    .footer-text {
      color: var(--white-smoke);
    }
  }

  &.footer-left {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  .footer-link,
  :deep(.footer-link) {
    position: relative;
    font-family: var(--font);
    color: var(--medium-text);
    transition: color 0.3s;

    &::before {
      content: '';
      position: absolute;
      bottom: -0.5rem;
      inset-inline-start: 0;
      inset-inline-end: 0;
      margin: 0 auto;
      width: 35%;
      transform-origin: right center;
      height: 3px;
      border-radius: 50px;
      background: var(--primary);
      transform: scale(0, 1);
      transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }

    &:hover {
      color: var(--primary-light-5);
      opacity: 1;

      &::before {
        transform-origin: left center;
        transform: scale(1, 1);
      }
    }
  }

  .footer-text {
    font-family: var(--font);
    color: var(--medium-text);
  }

  .footer-logo-centered {
    display: block;
    width: 100%;
    //max-width: 150px;

    img {
      margin: 0 auto;
    }
  }

  .footer-logo-left {
    :deep(img) {
      display: block;
    }
  }

  .footer-img {
    margin: 20px auto 18px;
    height: 140px;
    width: 100%;
    max-width: 640px;

    img {
      display: block;
      max-width: 100%;
      margin: 0 auto;
    }
  }
}

@media only screen and (width <= 767px) {
  .footer {
    .link-list {
      display: flex;
      flex-wrap: wrap;

      :slotted(li) {
        display: block;
        width: 50%;
        min-width: 50%;
        text-align: center;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
      }
    }

    &.footer-curved {
      border-start-start-radius: 80% 20%;
      border-start-end-radius: 80% 20%;
    }
  }
}
</style>
