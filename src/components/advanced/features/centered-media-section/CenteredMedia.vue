<script setup lang="ts">
import { viaPlaceholderErrorHandler } from '/@src/utils/viaPlaceholderErrorHandler'

export interface CenteredMediaProps {
  title: string
  ctaText: string
  ctaLink: string
}

const props = defineProps<CenteredMediaProps>()
</script>

<template>
  <div class="py-6">
    <div class="centered-media-section">
      <div class="text-section max-w-4 mx-auto">
        <Title
          tag="h2"
          :size="3"
          weight="bold"
        >
          <span>{{ props.title }}</span>
        </Title>
        <slot />

        <div class="mt-4">
          <Button
            :to="props.ctaLink"
            color="primary"
            bold
            fullwidth
            raised
          >
            {{ props.ctaText }}
          </Button>
        </div>
      </div>
      <!--Section faces-->
      <div class="section-face face-1 left">
        <img
          src="/assets/demo/img/tiles/4.jpeg"
          alt="Person image"
          width="300"
          height="400"
          @error.once="(event) => viaPlaceholderErrorHandler(event, '300x400')"
        >
      </div>
      <div class="section-face face-2 left">
        <img
          src="/assets/demo/img/tiles/1.jpg"
          alt="Person image"
          width="300"
          height="400"
          @error.once="(event) => viaPlaceholderErrorHandler(event, '300x400')"
        >
      </div>
      <div class="section-face face-3 left">
        <img
          src="/assets/demo/img/tiles/7.jpg"
          alt="Person image"
          width="300"
          height="400"
          @error.once="(event) => viaPlaceholderErrorHandler(event, '300x450')"
        >
      </div>
      <div class="section-face face-4 left">
        <img
          src="/assets/demo/img/tiles/9.jpg"
          alt="Person image"
          width="300"
          height="400"
          @error.once="(event) => viaPlaceholderErrorHandler(event, '200x200')"
        >
      </div>
      <div class="section-face face-5 left">
        <img
          src="/assets/demo/img/tiles/6.jpg"
          alt="Person image"
          width="300"
          height="400"
          @error.once="(event) => viaPlaceholderErrorHandler(event, '200x200')"
        >
      </div>
      <div class="section-face face-1 right">
        <img
          src="/assets/demo/img/tiles/2.jpg"
          alt="Person image"
          width="300"
          height="400"
          @error.once="(event) => viaPlaceholderErrorHandler(event, '300x400')"
        >
      </div>
      <div class="section-face face-2 right">
        <img
          src="/assets/demo/img/tiles/3.png"
          alt="Person image"
          width="300"
          height="400"
          @error.once="(event) => viaPlaceholderErrorHandler(event, '300x400')"
        >
      </div>
      <div class="section-face face-3 right">
        <img
          src="/assets/demo/img/tiles/8.jpg"
          alt="Person image"
          width="300"
          height="400"
          @error.once="(event) => viaPlaceholderErrorHandler(event, '300x450')"
        >
      </div>
      <div class="section-face face-4 right">
        <img
          src="/assets/demo/img/tiles/5.png"
          alt="Person image"
          width="300"
          height="400"
          @error.once="(event) => viaPlaceholderErrorHandler(event, '200x200')"
        >
      </div>
      <div class="section-face face-5 right">
        <img
          src="/assets/demo/img/tiles/10.jpg"
          alt="Person image"
          width="300"
          height="400"
          @error.once="(event) => viaPlaceholderErrorHandler(event, '200x200')"
        >
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.centered-media-section {
  position: relative;

  .text-section {
    text-align: center;
    padding: 0 1rem;

    p + p {
      margin-top: 1rem;
    }

    :deep(.button) {
      max-width: 340px;
      margin: 1.5rem auto 0;
      min-height: 54px;
    }
  }

  .section-face {
    position: absolute;
    z-index: 0;

    img {
      display: block;
      max-width: 100%;
      border-radius: 1.25rem;
      object-fit: cover;
    }

    &.face-1 {
      top: -80px;
      width: 160px;

      &.left {
        inset-inline-start: -120px;
      }

      &.right {
        inset-inline-end: -120px;
      }
    }

    &.face-2 {
      inset-inline-end: 100px;
      top: 20px;
      width: 140px;

      &.left {
        inset-inline-start: 100px;
      }

      &.right {
        inset-inline-end: 100px;
      }
    }

    &.face-3 {
      top: 180px;
      width: 140px;

      &.left {
        inset-inline-start: -80px;
      }

      &.right {
        inset-inline-end: -80px;
      }
    }

    &.face-4 {
      top: 260px;
      width: 140px;

      &.left {
        inset-inline-start: 140px;
      }

      &.right {
        inset-inline-end: 140px;
      }
    }

    &.face-5 {
      top: 450px;
      width: 130px;

      &.left {
        inset-inline-start: 20px;
      }

      &.right {
        inset-inline-end: 20px;
      }
    }
  }
}

@media only screen and (width <= 767px) {
  .centered-media-section {
    .section-face {
      transform: scale(0.6);

      &.face-1 {
        &.right {
          inset-inline-end: -170px;
        }

        &.left {
          inset-inline-start: -170px;
        }
      }

      &.face-2 {
        &.right {
          inset-inline-end: -110px;
        }

        &.left {
          inset-inline-start: -110px;
        }
      }

      &.face-3 {
        display: none;
      }

      &.face-4 {
        top: 210px;
        max-width: 100px;

        &.right {
          inset-inline-end: -75px;
        }

        &.left {
          inset-inline-start: -75px;
        }
      }

      &.face-5 {
        top: 330px;
        max-width: 100px;

        &.right {
          inset-inline-end: -85px;
        }

        &.left {
          inset-inline-start: -85px;
        }
      }
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .centered-media-section {
    .section-face {
      transform: scale(0.8);

      &.face-1 {
        &.right {
          inset-inline-end: -170px;
        }

        &.left {
          inset-inline-start: -170px;
        }
      }

      &.face-2 {
        &.right {
          inset-inline-end: -12px;
        }

        &.left {
          inset-inline-start: -12px;
        }
      }

      &.face-3 {
        &.right {
          inset-inline-end: -130px;
        }

        &.left {
          inset-inline-start: -130px;
        }
      }

      &.face-4 {
        top: 210px;
        max-width: 100px;

        &.right {
          inset-inline-end: 18px;
        }

        &.left {
          inset-inline-start: 18px;
        }
      }

      &.face-5 {
        top: 330px;
        max-width: 100px;

        &.right {
          inset-inline-end: 8px;
        }

        &.left {
          inset-inline-start: 8px;
        }
      }
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: landscape) {
  .centered-media-section {
    .section-face {
      transform: scale(0.9);

      &.face-1 {
        &.right {
          inset-inline-end: -170px;
        }

        &.left {
          inset-inline-start: -170px;
        }
      }

      &.face-2 {
        &.right {
          inset-inline-end: 50px;
        }

        &.left {
          inset-inline-start: 50px;
        }
      }

      &.face-3 {
        &.right {
          inset-inline-end: -130px;
        }

        &.left {
          inset-inline-start: -130px;
        }
      }

      &.face-4 {
        &.right {
          inset-inline-end: 90px;
        }

        &.left {
          inset-inline-start: 90px;
        }
      }

      &.face-5 {
        &.right {
          inset-inline-end: -30px;
        }

        &.left {
          inset-inline-start: -30px;
        }
      }
    }
  }
}
</style>
