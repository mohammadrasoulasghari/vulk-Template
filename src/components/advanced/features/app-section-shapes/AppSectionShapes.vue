<script setup lang="ts">
import type { BaseFeature } from '/@src/types'

export interface AppSectionShapesProps {
  features: BaseFeature[]
  image: string
  darkImage: string
  imageWidth?: string
  imageHeight?: string
  inverted?: boolean
  blob?: boolean
}

const props = withDefaults(defineProps<AppSectionShapesProps>(), {
  imageWidth: '1200',
  imageHeight: '882',
  inverted: false,
  blob: false,
})
</script>

<template>
  <div class="app-section">
    <div class="shape-1" />
    <div class="shape-2" />
    <div class="columns is-multiline py-6">
      <div class="column is-12">
        <div class="is-relative block mb-4 has-text-centered mx-auto max-w-8">
          <div class="full-circle-1 text-success">
            <Circle />
          </div>
          <div class="full-circle-2 text-primary">
            <Circle />
          </div>
          <div class="full-circle-3 text-yellow">
            <Circle />
          </div>
          <div class="half-circle-1 text-info">
            <HalfCircle />
          </div>
          <div>
            <DarkImage
              :src="props.image"
              :src-dark="props.darkImage"
              class="is-16by9 is-relative z-1 has-light-shadow app-mockup"
              alt=""
              :width="props.imageWidth"
              :height="props.imageHeight"
            />
          </div>

          <div class="columns b-columns-third-tablet-p mt-4 has-text-start">
            <div
              v-for="(feature, index) in props.features.slice(0, 3)"
              :key="index"
              class="column is-4"
            >
              <div class="media">
                <div class="media-content">
                  <Title
                    tag="h3"
                    :size="5"
                    weight="semi"
                    :inverted="props.inverted"
                  >
                    <span>{{ feature.title }}</span>
                  </Title>
                  <p class="subtitle is-6 text-medium">
                    {{ feature.text }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.columns {
  position: relative;
  z-index: 2;

  .half-circle-1 {
    position: absolute;
    bottom: 45%;
    inset-inline-start: -25%;
    transform: scale(0.8);
  }

  .full-circle-1 {
    position: absolute;
    top: 30%;
    inset-inline-start: -2%;
    transform: scale(2);
    z-index: 3;
  }

  .full-circle-2 {
    position: absolute;
    top: 60%;
    inset-inline-end: -2%;
    transform: scale(2);
    z-index: 1;
  }

  .full-circle-3 {
    position: absolute;
    top: 50%;
    inset-inline-end: -15%;
    transform: scale(1.2);
    z-index: 1;
  }
}

.app-mockup:deep(img) {
  border-radius: 1.5rem;
  border: 1px solid var(--border);
  box-shadow: var(--light-box-shadow);
}

.app-section {
  position: relative;

  .shape-1 {
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    height: 450px;
    width: 450px;
    border-radius: 50%;
    background: var(--section-bg-color-grey);
    z-index: 0;
  }

  .shape-2 {
    position: absolute;
    bottom: 10%;
    inset-inline-end: 0;
    height: 450px;
    width: 450px;
    border-radius: 50%;
    background: var(--section-bg-color-grey);
    z-index: 0;
  }

  .media {
    .media-content {
      overflow: hidden;

      .subtitle {
        color: var(--medium-text);
      }
    }
  }
}

.is-dark {
  .app-mockup:deep(img) {
    border: none;
  }
}

@media only screen and (width <= 767px) {
  .app-section {
    .app-mockup:deep(img) {
      border-radius: 0.65rem;
    }

    .shape-1,
    .shape-2 {
      height: 150px;
      width: 150px;
    }

    .shape-1 {
      inset-inline-start: -80px;
    }

    .columns {
      .full-circle-1,
      .full-circle-2,
      .full-circle-3,
      .half-circle-1 {
        transform: scale(0.7);
      }

      .full-circle-1 {
        inset-inline-start: -7%;
      }
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .app-section {
    .shape-1,
    .shape-2 {
      height: 250px;
      width: 250px;
    }

    .shape-1 {
      inset-inline-start: -100px;
    }

    .shape-2 {
      inset-inline-end: -100px;
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: landscape) {
  .app-section {
    .shape-1,
    .shape-2 {
      height: 250px;
      width: 250px;
    }

    .shape-1 {
      inset-inline-start: -100px;
    }

    .shape-2 {
      inset-inline-end: -100px;
    }
  }
}
</style>
