<script setup lang="ts">
import { Carousel, Slide, Navigation } from 'vue3-carousel'

export interface Testifier {
  picture: string
  name: string
  role: string
}

export interface TestimonialsCarouselSlide {
  icon: string
  text: string
  testifier: Testifier
}

export interface TestimonialsCarouselProps {
  slides: TestimonialsCarouselSlide[]
  inverted?: boolean
}

const props = withDefaults(defineProps<TestimonialsCarouselProps>(), {
  slides: () => [],
  inverted: false,
})

const breakpoints = {
  // 700px and up
  700: {
    itemsToShow: 1,
    snapAlign: 'center',
  },
  768: {
    itemsToShow: 2,
    snapAlign: 'center',
  },
  800: {
    itemsToShow: 3,
    snapAlign: 'center',
  },
  // 1024 and up
  1100: {
    itemsToShow: 4,
    snapAlign: 'start',
  },
}

const rtl: boolean | undefined = inject('rtl')
</script>

<template>
  <div class="py-6">
    <div class="testimonials-carousel">
      <div class="testimonials-carousel-title max-w-7 mb-6">
        <Subtitle
          tag="h3"
          :size="6"
          weight="bold"
          class="pb-2"
          :inverted="props.inverted"
        >
          <span :class="!props.inverted && 'text-gradient'">
            خانه‌ای برای کسب و کار شما
          </span>
        </Subtitle>
        <Title
          tag="h2"
          :size="3"
          weight="bold"
          :inverted="props.inverted"
        >
          <span>به جمع سایر خالقان بپیوندید</span>
        </Title>
        <p
          class="paragraph rem-115"
          :class="props.inverted && 'is-inverted-light'"
        >
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می‌باشد.
        </p>
      </div>
      <carousel
        :items-to-show="1"
        :autoplay="3000"
        :breakpoints="breakpoints"
        :class="rtl && 'rtl'"
      >
        <slide
          v-for="(slide, index) in props.slides"
          :key="index"
        >
          <div class="testimonials-carousel-card">
            <div class="card-inner">
              <i
                class="iconify mb-5"
                :data-icon="slide.icon"
              />
              <p class="paragraph rem-90 mb-5">
                "{{ slide.text }}"
              </p>
              <div class="testimonial-author">
                <AvatarSimple :picture="slide.testifier.picture" />
                <div class="meta">
                  <Title
                    tag="h3"
                    :size="7"
                    weight="semi"
                    narrow
                  >
                    {{ slide.testifier.name }}
                  </Title>
                  <p class="paragraph rem-85">
                    {{ slide.testifier.role }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </slide>

        <template #addons>
          <navigation />
        </template>
      </carousel>
    </div>
  </div>
</template>

<style scoped lang="scss">
.testimonials-carousel {
  position: relative;

  .carousel {
    direction: ltr;
  }

  .testimonials-carousel-card {
    //width: calc(100% - 1rem);
    height: 100%;
    //margin: 0 0.5rem;
    padding: 0 0.5rem;
    text-align: start;

    [dir='rtl'] & {
      direction: rtl;
    }

    .card-inner {
      display: flex;
      flex-direction: column;
      height: 100%;
      background: var(--card-bg-color);
      border: 1px solid var(--card-border-color);
      border-radius: 0.85rem;
      padding: 1.75rem;
      transition: box-shadow 0.3s;

      .iconify {
        font-size: 2rem;
        color: var(--primary);
      }

      .testimonial-author {
        display: flex;
        align-items: center;
        margin-top: auto;

        .meta {
          margin-inline-start: 0.5rem;
        }
      }
    }

    &:hover {
      .card-inner {
        box-shadow: var(--light-box-shadow-md);
      }
    }
  }
}

:deep(.carousel__next--in-active),
:deep(.carousel__prev--in-active) {
  opacity: 0.7;
}

:deep(.carousel__next) {
  inset-inline-end: 5px;

  svg {
    inset-inline-end: -1px;
  }
}

:deep(.rtl .carousel__next) {
  inset-inline-start: 40px;
  inset-inline-end: unset;

  svg {
    inset-inline-start: -1px;
    inset-inline-end: unset;
  }
}

:deep(.carousel__prev) {
  inset-inline-end: 40px;

  svg {
    inset-inline-start: -1px;
  }
}

:deep(.rtl .carousel__prev) {
  inset-inline-start: 5px;
  inset-inline-end: unset;

  svg {
    inset-inline-start: -1px;
    inset-inline-end: unset;
  }
}

:deep(.carousel__next),
:deep(.carousel__prev) {
  position: absolute;
  top: -35px;
  inset-inline-start: initial;
  background: var(--card-bg-color);
  border: 1px solid var(--card-border-color);
  color: var(--light-text);
  box-shadow: var(--light-box-shadow);
  transition:
    border-color 0.3s,
    color 0.3s;

  svg {
    position: relative;
    width: 1em;
  }

  &:hover {
    border-color: var(--primary);
    color: var(--primary);
  }
}

:deep(.rtl .carousel__next),
:deep(.rtl .carousel__prev) {
  inset-inline-end: initial;
}
</style>
