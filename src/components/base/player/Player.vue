<script lang="ts">
import 'plyr/dist/plyr.css'
</script>

<script setup lang="ts">
import Plyr from 'plyr'

export type VPlyrCaptions = {
  src: string
  srclang: string
  default?: boolean
}
export type VPlyrFormat = '4by3' | '16by9' | 'square'
export interface VPlyrProps {
  source: string
  title: string
  poster?: string
  captions?: VPlyrCaptions[]
  reversed?: boolean
  embed?: boolean
  ratio?: VPlyrFormat
  options?: Plyr.Options
}

const props = withDefaults(defineProps<VPlyrProps>(), {
  ratio: '16by9',
  poster: undefined,
  options: () => ({}),
  captions: () => [],
})

const player = ref<Plyr>()
const videoElement = ref<HTMLElement>()

onMounted(() => {
  if (videoElement.value) {
    player.value = new Plyr(videoElement.value, props.options)
  }
})

onBeforeUnmount(() => {
  if (player.value) {
    player.value.destroy()
    player.value = undefined
  }
})

const posterResolution = ref('')
if (props.ratio === '16by9') {
  posterResolution.value = '1200x675'
} else if (props.ratio === '4by3') {
  posterResolution.value = '960x720'
} else if (props.ratio === 'square') {
  posterResolution.value = '860x788'
}
</script>

<template>
  <div
    class="video-player-container"
    :class="[ratio && 'is-' + ratio, reversed && 'reversed-play']"
  >
    <!-- video element -->
    <iframe
      v-if="embed"
      :src="`${props.source}`"
      :title="props.title"
      allowfullscreen
      allowtransparency
      allow="autoplay"
    />

    <video
      v-else
      ref="videoElement"
      controls
      crossorigin="anonymous"
      playsinline
      :data-poster="props.poster"
    >
      <source
        :src="source"
        type="video/mp4"
      >
      <track
        v-for="(caption, key) in props.captions"
        :key="key"
        :default="caption.default"
        kind="captions"
        :srclang="caption.srclang"
        :src="caption.src"
      >
    </video>
  </div>
</template>

<style lang="scss">
.video-player-container-wrapper {
  max-width: 840px;
  margin: 0 auto;
}

.video-player-container {
  margin: 0 auto;
  overflow: hidden;

  iframe {
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
  }

  &.is-square {
    position: relative;
    height: 440px;
    width: 480px;

    .plyr {
      position: absolute;
      top: 0;
      inset-inline-start: 0;
      height: 100%;
      width: 100%;
      display: block;
    }
  }

  &.is-4by3 {
    position: relative;
    padding-top: 75%;
    width: 100%;

    .plyr {
      position: absolute;
      top: 0;
      inset-inline-start: 0;
      height: 100%;
      width: 100%;
      display: block;
    }
  }

  &.is-16by9 {
    position: relative;
    padding-top: 56.25%;
    width: 100%;

    .plyr {
      position: absolute;
      top: 0;
      inset-inline-start: 0;
      height: 100%;
      width: 100%;
      display: block;
    }
  }

  &.reversed-play {
    .plyr--full-ui.plyr--video .plyr__control--overlaid {
      background: var(--white) !important;
      border: 1px solid var(--primary);
      color: var(--primary) !important;

      &:hover {
        background: var(--primary) !important;
        border-color: var(--primary) !important;
        color: var(--white) !important;

        svg {
          fill: var(--white) !important;
          stroke: var(--white) !important;
        }
      }

      svg {
        fill: none;
        stroke: var(--primary);
        stroke-width: 1.6px;
      }
    }
  }

  video {
    background-color: transparent !important;
  }
}

.plyr__video-wrapper {
  height: 100%;
}

.plyr__poster {
  background-size: cover;
}

.plyr--full-ui.plyr--video .plyr__control--overlaid {
  background: var(--primary) !important;
  box-shadow: var(--primary-box-shadow);
}

.plyr--video .plyr__control.plyr__tab-focus,
.plyr--video .plyr__control:hover,
.plyr--video .plyr__control[aria-expanded='true'],
.plyr__menu__container
  .plyr__control[role='menuitemradio'][aria-checked='true']::before {
  background: var(--primary);
}

.plyr--full-ui input[type='range'] {
  color: var(--primary);
}

.plyr__controls {
  transition: all 0.3s;
}

.plyr--paused,
.plyr--stopped {
  .plyr__controls {
    opacity: 0;
    pointer-events: none;
  }
}

@media only screen and (width <= 767px) {
  .video-player-container {
    &.is-square {
      height: 303px;
      width: 330px;
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: landscape) {
  .video-player-container {
    &.is-square {
      height: 380px;
      width: 415px;
    }
  }
}
</style>
