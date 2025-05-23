<script setup lang="ts">
import config from '/@src/app.config'
import { useNinjaWindowScroll } from '/@src/composables/window-scroll'

export interface NavbarProps {
  inverted?: boolean
  solid?: boolean
  items: (
    | {
        label: string
        to: string
        target?: string
      }
    | {
        label: string
        megamenu: any
      }
  )[]
  cta?: {
    label: string
    to: string
    target?: string
  }
}

const props = withDefaults(defineProps<NavbarProps>(), {
  inverted: false,
  solid: false,
  logo: undefined,
  cta: undefined,
})

const isNavbarOpen = ref(false)
const isMegamenuOpen = ref(false)
const activeDropdown = ref('')

const route = useRoute()
const navbar = ref(null)

const { y } = useNinjaWindowScroll()
const isScrolled = computed(() => {
  return y.value > 60
})

const selectMobileMenu = (menuId = '') => {
  isMegamenuOpen.value = !!menuId
  activeDropdown.value = menuId
}
// onClickOutside(navbar, () => selectMobileMenu())
watch(
  () => route.fullPath,
  () => {
    isNavbarOpen.value = false
    selectMobileMenu()
  },
)
</script>

<template>
  <nav
    ref="navbar"
    tabindex="0"
    class="navbar is-transparent is-fixed-top is-fade"
    role="menuitem"
    aria-label="main navigation"
    :class="[
      isScrolled && 'is-scrolled',
      isNavbarOpen && 'is-solid',
      isMegamenuOpen && 'is-solid',
      props.inverted && 'is-inverted',
      props.solid && 'is-solid',
    ]"
    @mouseleave="() => selectMobileMenu()"
    @focusout="() => true"
  >
    <div class="container">
      <div class="navbar-brand">
        <RouterLink
          v-preload-link
          class="navbar-item"
          to="/"
        >
          <DarkImage
            v-if="config.logo?.src"
            class="navbar-logo"
            :src="config.logo?.src"
            :src-dark="config.logo?.srcDark"
            alt=""
            :width="config.logo?.width"
            :height="config.logo?.height"
          />
        </RouterLink>
        <div
          class="navbar-burger"
          role="button"
          tabindex="0"
          @click.prevent="isNavbarOpen = !isNavbarOpen"
          @keydown.space.prevent="() => (isNavbarOpen = !isNavbarOpen)"
        >
          <Hamburger :open="isNavbarOpen" />
        </div>
      </div>
      <div
        class="navbar-menu b-centered-mobile b-centered-tablet-p"
        :class="[isNavbarOpen && 'is-active']"
      >
        <div class="navbar-start">
          <template
            v-for="item in props.items"
            :key="item.label"
          >
            <template v-if="'megamenu' in item && item.megamenu">
              <a
                role="button"
                class="navbar-item"
                :class="[activeDropdown === item.label && 'is-selected']"
                tabindex="0"
                @mouseover="() => selectMobileMenu(item.label)"
                @focusin="() => selectMobileMenu(item.label)"
              >
                <span class="has-naver me-1">
                  {{ item.label }}
                </span>
                <i
                  class="iconify"
                  data-icon="feather:chevron-down"
                />
              </a>
              <div class="megamenu is-active">
                <component
                  :is="item.megamenu"
                  v-show="activeDropdown === item.label"
                  @close="() => selectMobileMenu()"
                />
              </div>
            </template>
            <template v-else-if="'to' in item">
              <RouterLink
                v-preload-link
                :to="item.to"
                class="navbar-item"
                tabindex="0"
                @mouseover="() => selectMobileMenu()"
                @focusin="() => selectMobileMenu()"
              >
                <span class="has-naver me-1">
                  {{ item.label }}
                </span>
              </RouterLink>
            </template>
          </template>
        </div>
        <div class="navbar-end">
          <div
            class="navbar-item is-flex is-align-items-center is-justify-content-center"
          >
            <ThemeToggle
              @mouseover="() => selectMobileMenu()"
              @focusin="() => selectMobileMenu()"
            />
          </div>
          <div
            v-if="props.cta"
            class="navbar-item"
          >
            <Button
              :to="props.cta.to"
              :target="props.cta?.target"
              color="primary"
              raised
              bold
            >
              {{ props.cta.label }}
            </Button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  height: 70px;
  transition: all 0.3s;

  .navbar-brand {
    height: 70px;

    .navbar-logo:deep(img) {
      width: 100%;
      max-width: 110px;
      max-height: 38px;
    }

    .navbar-logo-text {
      font-family: var(--font-alt);
      font-weight: 300;
      font-size: 1.1rem;
      text-transform: uppercase;
      margin-inline-start: 0.75rem;
      margin-inline-end: 1rem;
      color: var(--dark-text);
    }

    .navbar-burger {
      display: none;
      align-items: center;
      justify-content: center;
      height: 70px;
      width: 70px;
      background: none;
    }
  }

  .navbar-menu {
    box-shadow: none;

    &.is-active {
      background: var(--navbar-bg-color-solid);
    }
  }

  .navbar-item {
    font-family: var(--font-alt);
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--navbar-link-color);
    transition: color 0.3s;
    background: none;
    border: none;

    &.router-link-exact-active {
      color: var(--primary);

      &.has-naver {
        &::before {
          background: var(--primary);
        }
      }
    }

    &.is-selected {
      > .iconify {
        transform: rotate(180deg) !important;
      }
    }

    &:hover {
      color: var(--primary);

      .has-naver {
        color: var(--primary);

        &::before {
          transform-origin: left center;

          [dir='rtl'] & {
            transform-origin: right center;
          }

          transform: scale(1, 1);
        }
      }
    }

    &.has-dropdown {
      .navbar-link {
        color: var(--medium-text);

        &:hover {
          color: var(--primary);
        }
      }

      .navbar-dropdown {
        width: 240px;
      }
    }

    .has-naver {
      position: relative;

      &::before {
        content: '';
        position: absolute;
        top: -4px;
        inset-inline-start: 2px;
        width: 50%;
        transform-origin: right center;

        [dir='rtl'] & {
          transform-origin: left center;
        }

        height: 3px;
        border-radius: 50px;
        background: var(--primary);
        transform: scale(0, 1);
        transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      }
    }

    > .social-item {
      color: var(--medium-text);
      transition: color 0.3s;

      &:hover {
        color: var(--primary);
      }
    }

    > .button {
      min-height: 48px;
      min-width: 110px;
    }

    > .iconify {
      transition: transform 0.3s;
      vertical-align: middle;
      font-size: 1.1rem;
    }
  }

  &.is-fade {
    background: transparent;

    &.is-scrolled {
      background: var(--navbar-bg-color-solid);
      box-shadow: rgb(0 0 0 / 8%) 0 1px 12px;
    }
  }

  &.is-solid {
    background: var(--navbar-bg-color-solid);
    box-shadow: none;

    .navbar-menu {
      border-bottom: 1px solid var(--navbar-border-color);
    }
  }

  &.is-inverted:not(.is-solid):not(.is-scrolled) {
    .navbar-brand {
      .navbar-logo {
        filter: brightness(0) invert(1);
      }
    }

    .navbar-item {
      color: rgb(255 255 255 / 90%);
    }
  }

  &.is-fixed-top {
    z-index: 32;
  }
}

:deep(.megamenu) {
  position: fixed;
  top: 69px;
  inset-inline-start: 0;
  width: 100%;
  background: var(--navbar-bg-color-solid);
  border-top: 1px solid var(--navbar-border-color);
  box-shadow: 0 15px 15px 0 rgb(0 0 0 / 7%);
  opacity: 0;
  pointer-events: none;
  transform: translateY(10px);
  transition:
    opacity 0.3s,
    transform 0.3s;

  &.is-active {
    opacity: 1;
    pointer-events: all;
    transform: translateY(0);
    z-index: 50;
  }

  .megamenu-inner {
    position: relative;
    padding: 60px 0 80px;

    .close-button {
      position: absolute;
      top: 10px;
      inset-inline-end: 10px;
      display: none;
      align-items: center;
      justify-content: center;
      height: 38px;
      width: 38px;
      padding: 0;
      border: none;
      background: none;
      outline: none;
      font-size: 1.75rem;
      color: var(--megamenu-close-color);
    }

    .megamenu-block {
      &.is-start-bordered {
        padding-inline-start: 2rem;
        border-inline-start: 1px solid var(--navbar-border-color);
      }

      &.is-end-bordered {
        padding-inline-end: 2rem;
        border-inline-end: 1px solid var(--navbar-border-color);
      }

      .media {
        .media-left {
          &.is-bolt {
            color: #ffb921;
          }

          &.is-company {
            color: var(--success);
          }

          &.is-resources {
            color: #f16036;
          }

          .iconify {
            font-size: 2.25rem;
          }
        }

        .media-content {
          .tag {
            margin-bottom: 0.5rem;
          }

          h3 {
            font-family: var(--font-alt);
            font-size: 1.25rem;
            font-weight: 600;
            color: var(--megamenu-heading-color);
            margin-bottom: 1.25rem;
          }

          p {
            font-family: var(--font);
            color: var(--medium-text);
            margin-bottom: 1rem;
          }

          a {
            font-family: var(--font);
            font-weight: 500;
            transition: color 0.3s;

            .iconify {
              vertical-align: middle;
              transition: transform 0.3s;
            }

            &:hover {
              color: var(--primary-light-16);

              .iconify {
                transform: translateX(0.25rem);
              }
            }
          }
        }
      }

      h4 {
        font-family: var(--font-alt);
        font-size: 0.8rem;
        font-weight: 600;
        text-transform: uppercase;
        color: var(--megamenu-heading-color);
        margin-bottom: 0.75rem;
      }

      li {
        position: relative;
        margin-bottom: 0.25rem;

        &::before {
          content: '';
          position: absolute;
          top: 15%;
          inset-inline-start: 0;
          width: 3px;
          height: 0;
          background: var(--primary);
          border-radius: 20rem;
          transition:
            height 0.3s,
            transform 0.3s;
        }

        &:hover {
          .list-link {
            color: var(--primary);
            transform: translateX(0.5rem);
          }

          &::before {
            height: 70%;
          }
        }
      }

      .list-link {
        display: block;
        position: relative;
        font-family: var(--font);
        font-size: 0.9rem;
        color: var(--medium-text);
        margin-bottom: 0.5rem;
        transition:
          color 0.3s,
          transform 0.3s;
      }

      a {
        .iconify {
          vertical-align: middle;
          margin-inline-start: 0.5rem;
        }
      }

      .image-block {
        position: relative;

        img {
          position: relative;
          display: block;
          border-radius: 0.95rem;
          object-fit: cover;
        }

        .inner-block {
          position: absolute;
          bottom: -1rem;
          inset-inline-start: 0;
          inset-inline-end: 0;
          width: 90%;
          margin: 0 auto;
          padding: 0.75rem 1.25rem;
          border-radius: 0.75rem;
          background: var(--card-bg-color);
          border: 1px solid var(--card-border-color);
          box-shadow: var(--light-box-shadow);
          z-index: 1;
        }
      }
    }
  }
}

:deep(.megamenu.rtl) {
  .megamenu-inner {
    .close-button {
      inset-inline-end: unset;
      inset-inline-start: 10px;
    }

    .megamenu-block {
      .media {
        .media-content {
          a:hover {
            .iconify {
              transform: translateX(-0.25rem);
            }
          }
        }
      }

      li {
        &::before {
          inset-inline-end: 0;
          inset-inline-start: unset;
        }

        &:hover {
          .list-link {
            transform: translateX(-0.5rem);
          }
        }
      }

      a {
        .iconify {
          margin-inline-end: 0.5rem;
          margin-inline-start: unset;
        }
      }
    }
  }
}

@media only screen and (width <= 1024px) {
  .navbar {
    &.is-centered {
      &:not(.no-nav) {
        .navbar-brand {
          display: flex;
        }

        .navbar-menu {
          .navbar-center {
            display: none !important;
          }
        }
      }

      &.no-nav {
        .navbar-menu {
          display: flex !important;
          padding: 0 !important;
          box-shadow: none !important;
          background: transparent !important;
        }
      }
    }
  }
}

@media only screen and (width <= 980px) {
  .navbar {
    .navbar-brand {
      .navbar-burger {
        display: flex !important;
      }
    }
  }
}

@media only screen and (width <= 767px) {
  .navbar {
    .navbar-brand {
      .navbar-burger {
        display: flex;
      }
    }

    .navbar-menu {
      .navbar-item {
        margin: 0 auto;

        &.has-dropdown {
          .navbar-dropdown {
            width: 100%;
          }
        }

        :deep(.custom-toggle) {
          max-width: 44px;
          margin: 0 auto;
          padding: 1rem 0;
        }

        .button {
          min-height: 46px;
          width: 100%;
        }
      }
    }

    :deep(.megamenu) {
      top: 0;

      .megamenu-inner {
        .close-button {
          display: flex;
        }

        .megamenu-block {
          margin-inline-start: 0 !important;

          &.is-start-bordered {
            padding-inline-start: 0;
            border-inline-start: none;
          }

          &.is-end-bordered {
            padding-inline-end: 0;
            border-inline-end: none;
          }

          .media {
            flex-direction: column;
            margin-inline-start: 0;

            .media-left {
              margin-inline-start: auto;
              margin-inline-end: auto;
            }

            .media-content {
              margin-inline-start: auto;
              margin-inline-end: auto;

              p {
                max-width: 480px;
                margin-inline-start: auto;
                margin-inline-end: auto;
                padding-inline-start: 0.75rem;
                padding-inline-end: 0.75rem;
              }
            }
          }
        }
      }
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .navbar {
    .navbar-brand {
      .navbar-burger {
        display: flex;
      }
    }

    .navbar-menu {
      max-width: 100%;

      .navbar-item {
        margin: 0 auto;

        &.has-dropdown {
          .navbar-dropdown {
            width: 100%;
          }
        }

        :deep(.custom-toggle) {
          max-width: 44px;
          margin: 0 auto;
          padding: 1rem 0;
        }

        .button {
          min-height: 46px;
          width: 100%;
        }
      }
    }

    :deep(.megamenu) {
      top: 0;

      .megamenu-inner {
        .close-button {
          display: flex;
          top: 30px;
          inset-inline-end: 30px;
        }

        .megamenu-block {
          margin-inline-start: 0 !important;

          &.is-start-bordered {
            padding-inline-start: 0;
            border-inline-start: none;
          }

          &.is-end-bordered {
            padding-inline-end: 0;
            border-inline-end: none;
          }

          .media {
            flex-direction: column;
            margin-inline-start: 0;

            .media-left {
              margin-inline-start: auto;
              margin-inline-end: auto;
            }

            .media-content {
              margin-inline-start: auto;
              margin-inline-end: auto;

              p {
                max-width: 480px;
                margin-inline-start: auto;
                margin-inline-end: auto;
              }
            }
          }
        }
      }
    }
  }
}

/* stylelint-disable */
@media only screen and (min-device-width: 1024px) and (max-device-height: 1366px) and (-webkit-min-device-pixel-ratio: 1.5) and (orientation: portrait) {
  .navbar {
    .navbar-brand {
      .navbar-burger {
        display: none !important;
      }
    }
  }
}
/* stylelint-enable */
</style>
