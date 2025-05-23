<script setup lang="ts">
import type { Directive } from 'vue'
import VueScrollTo from 'vue-scrollto'

import { useNinjaWindowScroll } from '/@src/composables/window-scroll'

export interface DemoLink {
  label: string
  target: string
}

export interface DemoLinksProps {
  links: DemoLink[]
  width?: string
}

const props = withDefaults(defineProps<DemoLinksProps>(), {
  links: undefined,
  width: undefined,
})

const { y } = useNinjaWindowScroll()
const isScrolled = computed(() => {
  return y.value > 440
})

const vActiveOnVisible: Directive = {
  mounted: (el: HTMLElement, binding: any) => {
    const target = ref(document.getElementById(binding.value))
    const targetIsVisible = useElementVisibility(target)

    watch(
      targetIsVisible,
      () => {
        if (targetIsVisible.value) {
          el.classList.add('is-active')
        } else {
          el.classList.remove('is-active')
        }
      },
      { immediate: true },
    )
  },
}

const scrollTo = VueScrollTo.scrollTo
</script>

<template>
  <div
    class="demo-links"
    :class="[isScrolled && 'is-scrolled']"
  >
    <div class="demo-links-inner">
      <RouterLink
        v-for="(link, index) in props.links"
        :key="index"
        v-active-on-visible="link.target"
        class="demo-link"
        :to="`#${link.target}`"
        @click.prevent="scrollTo(`#${link.target}`, 800, { offset: -100 })"
        @keydown.space.prevent="
          () => scrollTo(`#${link.target}`, 800, { offset: -100 })
        "
      >
        <span>
          <slot>{{ link.label }}</slot>
        </span>
      </RouterLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.demo-links {
  display: flex;
  justify-content: center;
  margin: -33px auto 0;

  .demo-links-inner {
    display: inline-flex;
    justify-content: center;
    background: var(--demo-links-bg-color);
    border: 1px solid var(--demo-links-border-color);
    border-radius: 1.25rem;
    box-shadow: var(--light-box-shadow);
    padding: 0.75rem 1.5rem;

    .demo-link {
      font-family: var(--font);
      padding: 0.5rem 1rem;
      border-radius: 0.75rem;
      color: var(--demo-links-color);
      text-wrap: nowrap;
      transition:
        background-color 0.3s,
        box-shadow 0.3s;

      &:hover {
        background: var(--demo-links-hover-bg);
        color: var(--demo-links-hover-color);
      }

      &.is-active {
        color: var(--demo-links-active-color);
      }
    }
  }

  &.is-scrolled {
    position: sticky;
    top: 69px;
    max-width: 100%;
    z-index: 31;
    background: var(--demo-links-bg-color);
    border-bottom: 1px solid var(--demo-links-border-color);

    .demo-links-inner {
      border-radius: 0;
      border: none;
      box-shadow: none;
    }
  }
}

@media only screen and (width <= 767px) {
  .demo-links {
    .demo-links-inner {
      max-width: 100%;
      overflow-x: auto;
      justify-content: flex-start;

      .demo-link {
        min-width: 95px;
      }
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .demo-links {
    max-width: 720px;

    .demo-links-inner {
      max-width: 100%;
      overflow-x: auto;
      justify-content: flex-start;

      .demo-link {
        min-width: 95px;
      }
    }

    &.is-scrolled {
      max-width: 100% !important;
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: landscape) {
  .demo-links {
    max-width: 880px;
    width: auto;

    .demo-links-inner {
      max-width: 100%;
      overflow-x: auto;
      justify-content: flex-start;

      .demo-link {
        min-width: 90px;
      }
    }

    &.is-scrolled {
      max-width: 100% !important;
    }
  }
}
</style>
