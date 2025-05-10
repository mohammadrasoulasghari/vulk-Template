<script setup lang="ts">
import { Carousel, Slide, Navigation } from 'vue3-carousel'

export interface BoxCarouselSlide {
  icon: string
  title: string
  link: string
}

export interface BoxCarouselProps {
  slides: BoxCarouselSlide[]
}

const props = withDefaults(defineProps<BoxCarouselProps>(), {
  slides: () => [],
})

const breakpoints = {
  // 500px and up
  500: {
    itemsToShow: 4,
    snapAlign: 'center',
  },
  768: {
    itemsToShow: 5,
    snapAlign: 'center',
  },
  800: {
    itemsToShow: 6,
    snapAlign: 'center',
  },
  // 1024 and up
  1100: {
    itemsToShow: 9,
    snapAlign: 'start',
  },
}

const rtl: boolean | undefined = inject('rtl')
</script>

<template>
  <div class="py-6">
    <div class="box-carousel">
      <div class="box-carousel-title max-w-7 mb-6">
        <Subtitle
          tag="h3"
          :size="6"
          weight="bold"
          class="pb-2"
        >
          <span class="text-gradient">ما آن را آسان می کنیم</span>
        </Subtitle>
        <Title
          tag="h2"
          :size="3"
          weight="bold"
        >
          <span>
            دیگر لازم نیست هر تصمیمی را که باید بگیرید دوبار حدس بزنید
          </span>
        </Title>
        <p class="paragraph rem-115">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می‌باشد.
        </p>
      </div>
      <carousel
        :items-to-show="3"
        :breakpoints="breakpoints"
        :class="rtl && 'rtl'"
      >
        <slide
          v-for="(slide, index) in props.slides"
          :key="index"
        >
          <RouterLink
            :to="slide.link"
            class="box-carousel-box"
          >
            <div class="box-inner">
              <i
                class="iconify"
                :data-icon="slide.icon"
              />
            </div>
            <div class="title-inner">
              <span>{{ slide.title }}</span>
            </div>
          </RouterLink>
        </slide>

        <template #addons>
          <navigation />
        </template>
      </carousel>

      <div class="carousel-action mt-6">
        <Button
          color="primary"
          raised
        >
          برای شروع کلیک کنید
        </Button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.box-carousel {
  position: relative;

  .carousel {
    direction: ltr;
  }

  .box-carousel-box {
    width: calc(100% - 1rem);
    margin: 0 0.5rem;

    [dir='rtl'] & {
      direction: rtl;
    }

    .box-inner {
      background: var(--card-bg-color);
      border: 1px solid var(--card-border-color);
      border-radius: 0.85rem;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100px;
      max-width: 100px;
      margin: 0 auto;
      padding: 1.75rem;
      transition: box-shadow 0.3s;

      .iconify {
        font-size: 2rem;
        color: var(--primary);
      }
    }

    .title-inner {
      text-align: start;
      max-width: 100px;
      margin: 0.75rem auto 0;
      line-height: 1.2;
      font-family: var(--font-main);
      font-weight: 600;
      color: var(--title-color);
      user-select: none;
    }

    &:hover {
      .box-inner {
        box-shadow: var(--light-box-shadow-md);
      }
    }
  }

  .carousel-action {
    :deep(.button) {
      min-width: 180px;
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

:deep(.carousel__prev) {
  inset-inline-end: 40px;

  svg {
    inset-inline-start: -1px;
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

:deep(.rtl .carousel__next) {
  inset-inline-start: 40px;
  inset-inline-end: unset;

  svg {
    inset-inline-start: -1px;
    inset-inline-end: unset;
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

:deep(.rtl .carousel__next),
:deep(.rtl .carousel__prev) {
  inset-inline-end: initial;
}
</style>
