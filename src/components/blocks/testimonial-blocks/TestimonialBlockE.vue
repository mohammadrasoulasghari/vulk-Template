<script setup lang="ts">
import { computed, inject } from 'vue'
import { viaPlaceholderErrorHandler } from '/@src/utils/viaPlaceholderErrorHandler'

export interface TestimonialBlockEProps {
  content: string
  image: string
  name: string
  position: string
  logo?: string
  curved?: boolean
  reversed?: boolean
}

const props = withDefaults(defineProps<TestimonialBlockEProps>(), {
  logo: undefined,
  curved: false,
  reversed: false,
})

const boxClasses = computed(() => [
  props.curved && 'is-curved',
  props.reversed && 'is-reversed',
])

const rtl: boolean | undefined = inject('rtl')
</script>

<template>
  <div class="py-6">
    <div
      class="testimonials-box mx-auto max-w-9"
      :class="boxClasses"
    >
      <div class="testimonials-logo-section">
        <img
          :src="props.image"
          alt="testimonial image"
          @error.once="(event) => viaPlaceholderErrorHandler(event, '500x333')"
        >
      </div>
      <div class="testimonials-story">
        <div class="testimonials-content">
          <div class="star-ratings">
            <i
              class="iconify text-yellow me-1"
              data-icon="uiw:star-on"
            />
            <i
              class="iconify text-yellow me-1"
              data-icon="uiw:star-on"
            />
            <i
              class="iconify text-yellow me-1"
              data-icon="uiw:star-on"
            />
            <i
              class="iconify text-yellow me-1"
              data-icon="uiw:star-on"
            />
            <i
              class="iconify text-yellow me-1"
              data-icon="uiw:star-on"
            />
          </div>
          <p class="paragraph rem-90 mb-5">
            <i
              class="iconify text-light me-2"
              :data-icon="{ 'fa:quote-left': !rtl, 'fa:quote-right': rtl }"
            />
            {{ props.content }}
          </p>
          <div class="is-relative is-flex is-align-items-center">
            <div class="ms-2">
              <Title
                tag="h3"
                :size="6"
                weight="semi"
                narrow
              >
                <span>{{ props.name }}</span>
              </Title>
              <p class="paragraph rem-85 text-light">
                {{ props.position }}
              </p>
            </div>
          </div>
          <img
            v-if="props.logo"
            class="testimonial-logo"
            :src="props.logo"
            alt="company logo"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.testimonials-box {
  display: flex;
  align-items: stretch;
  position: relative;
  width: 100%;
  min-height: 380px;
  border-radius: 4px;
  background-color: var(--card-bg-color);
  box-shadow: var(--light-box-shadow-lg);
  overflow: hidden;

  .testimonials-logo-section {
    position: absolute;
    top: 0;
    inset-inline-start: -10%;
    width: 50%;
    height: 100%;
    transform: skewX(-10deg);
    overflow: hidden;

    [dir='rtl'] & {
      transform: skewX(10deg);
    }

    img {
      position: absolute;
      top: 0;
      inset-inline-start: 50px;
      transform: skewX(10deg);
      height: 100%;
      width: 100%;
      object-fit: cover;

      [dir='rtl'] & {
        transform: skewX(-10deg);
      }
    }
  }

  .testimonials-story {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 55%;
    min-height: 100%;
    margin-inline-start: 45%;
    padding: 2.5rem;

    .testimonials-content {
      position: relative;

      .testimonial-logo {
        display: block;
        position: absolute;
        bottom: 0.25rem;
        inset-inline-end: 0;
        max-width: 75px;
      }
    }

    .star-ratings {
      font-size: 1.15rem;
      margin-bottom: 0.75rem;
    }
  }

  &.is-reversed {
    flex-direction: row-reverse;

    .testimonials-logo-section {
      inset-inline-start: initial;
      inset-inline-end: -10%;
      transform: skewX(10deg);

      [dir='rtl'] & {
        transform: skewX(-10deg);
      }

      img {
        inset-inline-start: initial;
        inset-inline-end: 50px;
        transform: skewX(-10deg);

        [dir='rtl'] & {
          transform: skewX(10deg);
        }
      }
    }

    .testimonials-story {
      margin-inline-start: 0;
      margin-inline-end: 45%;
    }
  }

  &.is-curved {
    border-radius: 1.5rem;
  }
}

.is-dark {
  .testimonials-box {
    .testimonials-story {
      .testimonials-content {
        .testimonial-logo {
          filter: invert(1);
        }
      }
    }
  }
}

@media only screen and (width <= 767px) {
  .testimonials-box {
    flex-direction: column;

    .testimonials-logo-section {
      inset-inline-start: -30%;
      width: 125%;
    }

    .testimonials-story {
      width: calc(100% - 2rem);
      margin: 1rem;
      padding: 1.5rem;
      background: var(--card-bg-color);
      opacity: 0.9;
    }

    &.is-curved {
      .testimonials-story {
        border-radius: 1rem;
      }
    }

    &.is-reversed {
      .testimonials-logo-section {
        inset-inline-start: initial;
        inset-inline-end: -30%;
      }

      .testimonials-story {
        margin: 1rem;
      }
    }
  }
}
</style>
