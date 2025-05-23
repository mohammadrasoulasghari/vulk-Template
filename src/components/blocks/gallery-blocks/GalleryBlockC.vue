<script setup lang="ts">
import Lightbox from 'vue-my-photos'

export type GalleryBlockCSize = 1 | 2 | 3

export interface GalleryBlockCItem {
  image: string
  size: GalleryBlockCSize
}

export interface GalleryBlockCProps {
  items: GalleryBlockCItem[]
  squared?: boolean
}

const props = withDefaults(defineProps<GalleryBlockCProps>(), {
  squared: false,
})

const galleryFilter = ref('all')
const currentImageName = ref('')

const images =
  props.items?.map((image) => ({
    name: image.image,
  })) ?? []

const showLightbox = (url: string) => {
  currentImageName.value = url
}

const onLightboxClose = () => {
  currentImageName.value = ''
}
</script>

<template>
  <div class="py-6">
    <div class="image-grid-wrap">
      <div class="image-grid">
        <div class="image-row">
          <div
            v-for="(item, i) in props.items.slice(0, 6)"
            :key="i"
            v-background="{
              src: item.image,
              placeholder: 'https://dummyimage.com/800x600/ededed/000000',
            }"
            tabindex="0"
            role="button"
            class="has-background-image"
            :class="`f-${item.size}`"
            @click.prevent="showLightbox(item.image)"
            @keydown.space.prevent="() => showLightbox(item.image)"
          />
        </div>
      </div>
    </div>
    <teleport to="body">
      <lightbox
        :images="images"
        :current-image-name="currentImageName"
        :filter="galleryFilter"
        :timeout-duration="5000"
        :close-on-backdrop-click="true"
        @on-lightbox-close="onLightboxClose"
      />
    </teleport>
  </div>
</template>

<style scoped lang="scss">
.image-grid-wrap {
  .f-1 {
    width: calc(40% - 8px);
  }

  .f-2 {
    width: calc(20% - 8px);
  }

  .f-3 {
    width: calc(33.33% - 8px);
  }

  .image-row {
    display: flex;
    flex-wrap: wrap;
  }

  .image-row > div {
    position: relative;
    margin: 4px;
    height: 280px;
    border-radius: 2px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    cursor: pointer;

    &:first-child {
      border-start-start-radius: 1.5rem;
    }

    &:nth-child(3) {
      border-start-end-radius: 1.5rem;
    }

    &:nth-child(4) {
      border-end-start-radius: 1.5rem;
    }

    &:last-child {
      border-end-end-radius: 1.5rem;
    }
  }
}

@media (width <= 767px) {
  .image-grid-wrap {
    .f-1,
    .f-2,
    .f-3 {
      width: calc(100% - 8px);
    }
  }

  .image-row > div {
    position: relative;
    margin: 4px;
    height: 280px;
    border-radius: 2px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    cursor: pointer;

    &:first-child {
      border-start-start-radius: 1.5rem;
      border-start-end-radius: 1.5rem;
    }

    &:nth-child(3) {
      border-start-end-radius: 0 !important;
    }

    &:nth-child(4) {
      border-end-start-radius: 0 !important;
    }

    &:last-child {
      border-end-start-radius: 1.5rem;
      border-end-end-radius: 1.5rem;
    }
  }
}
</style>
