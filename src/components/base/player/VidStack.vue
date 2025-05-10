<script lang="ts" setup>
// Import styles.
import 'vidstack/player/styles/default/theme.css'
import 'vidstack/player/styles/default/layouts/audio.css'
import 'vidstack/player/styles/default/layouts/video.css'
// Register elements.
import 'vidstack/player'
import 'vidstack/player/layouts'
import 'vidstack/player/ui'

import { type DefaultLayoutTranslations } from 'vidstack'

import {
  isHLSProvider,
  /* type MediaCanPlayEvent, */ type MediaProviderChangeEvent,
} from 'vidstack'
import type { MediaPlayerElement } from 'vidstack/elements'

// import { textTracks } from './tracks';

export type VidCaptions = {
  src: string
  srclang: string
  default?: boolean
}
export type VidFormat = '4by3' | '16by9' | 'square'
export interface VidProps {
  source: string
  title: string
  poster?: string
  captions?: VidCaptions[]
  reversed?: boolean
  embed?: boolean
  ratio?: VidFormat
  options?: Plyr.Options
}

const props = withDefaults(defineProps<VidProps>(), {
  ratio: '16by9',
  poster: undefined,
  options: () => ({}),
  captions: () => [],
})

const $player = ref<MediaPlayerElement>(),
  $src = ref('')

// Initialize src.
changeSource('video')

onMounted(() => {
  /**
   * You can add these tracks using HTML as well.
   *
   * @example
   * ```html
   * <media-provider>
   *   <track label="..." src="..." kind="..." srclang="..." default />
   *   <track label="..." src="..." kind="..." srclang="..." />
   * </media-provider>
   * ```
   */
  // for (const track of textTracks) $player.value!.textTracks.add(track);
  // Subscribe to state updates - you can connect them to Vue refs if needed.
  // return $player.value!.subscribe(({ paused, viewType }) => {
  //   // console.log('is paused?', '->', paused);
  //   // console.log('is audio view?', '->', viewType === 'audio');
  // });
})

function onProviderChange(event: MediaProviderChangeEvent) {
  const provider = event.detail
  // We can configure provider's here.
  if (isHLSProvider(provider)) {
    provider.config = {}
  }
}

// We can listen for the `can-play` event to be notified when the player is ready.
function onCanPlay(/* event: MediaCanPlayEvent */) {
  // ...
}

function changeSource(type: string) {
  switch (type) {
    case 'audio':
      $src.value = props.source
      break
    case 'video':
      $src.value = props.source
      break
    case 'hls':
      $src.value = props.source
      break
    case 'youtube':
      $src.value = props.source
      break
    case 'vimeo':
      $src.value = props.source
      break
  }
}

const PERSIAN: DefaultLayoutTranslations = {
  'Caption Styles': 'سبک‌های زیرنویس',
  'Captions look like this': 'زیرنویس‌ها به این شکل هستند',
  'Closed-Captions Off': 'زیرنویس بسته خاموش',
  'Closed-Captions On': 'زیرنویس بسته روشن',
  'Display Background': 'نمایش پس‌زمینه',
  'Enter Fullscreen': 'ورود به حالت تمام صفحه',
  'Enter PiP': 'ورود به حالت PiP',
  'Exit Fullscreen': 'خروج از حالت تمام صفحه',
  'Exit PiP': 'خروج از حالت PiP',
  'Google Cast': 'پخش از طریق Google Cast',
  'Keyboard Animations': 'انیمیشن‌های صفحه کلید',
  'Seek Backward': 'بازگشت به عقب',
  'Seek Forward': 'پیشروی به جلو',
  'Skip To Live': 'رفتن به پخش زنده',
  'Text Background': 'پس‌زمینه متن',
  Accessibility: 'دسترس‌پذیری',
  AirPlay: 'پخش از طریق AirPlay',
  Announcements: 'اعلان‌ها',
  Audio: 'صوت',
  Auto: 'خودکار',
  Boost: 'افزایش',
  Captions: 'زیرنویس‌ها',
  Chapters: 'فصل‌ها',
  Color: 'رنگ',
  Connected: 'متصل',
  Connecting: 'در حال اتصال',
  Continue: 'ادامه',
  Default: 'پیش‌فرض',
  Disabled: 'غیرفعال',
  Disconnected: 'قطع شده',
  Download: 'دانلود',
  Family: 'خانواده',
  Font: 'فونت',
  Fullscreen: 'تمام صفحه',
  LIVE: 'زنده',
  Loop: 'تکرار',
  Mute: 'بی‌صدا',
  Normal: 'عادی',
  Off: 'خاموش',
  Opacity: 'شفافیت',
  Pause: 'توقف',
  PiP: 'تصویر در تصویر (PiP)',
  Play: 'پخش',
  Playback: 'پخش',
  Quality: 'کیفیت',
  Replay: 'پخش مجدد',
  Reset: 'بازنشانی',
  Seek: 'جستجو',
  Settings: 'تنظیمات',
  Shadow: 'سایه',
  Size: 'اندازه',
  Speed: 'سرعت',
  Text: 'متن',
  Track: 'ردیابی',
  Unmute: 'لغو بی‌صدا',
  Volume: 'صدا',
}
</script>

<template>
  <media-player
    ref="$player"
    class="player"
    :title="props.title"
    :src="$src"
    cross-origin
    plays-inline
    dir="ltr"
    @provider-change="onProviderChange"
    @can-play="onCanPlay"
  >
    <media-provider>
      <media-poster
        class="vds-poster"
        :src="`${props.poster}`"
        :alt="props.title"
      />
      <track
        v-for="(caption, key) in props.captions"
        :key="key"
        :default="caption.default"
        kind="captions"
        :srclang="caption.srclang"
        :src="caption.src"
      >
    </media-provider>
    <!-- Layouts -->
    <media-audio-layout />
    <media-video-layout
      thumbnails=""
      :translations="PERSIAN"
    />
  </media-player>
</template>

<style scoped>
.player {
  --brand-color: #f5f5f5;
  --focus-color: #4e9cf6;

  --audio-brand: var(--brand-color);
  --audio-focus-ring-color: var(--focus-color);
  --audio-border-radius: 2px;

  --video-brand: var(--brand-color);
  --video-focus-ring-color: var(--focus-color);
  --video-border-radius: 2px;

  /* 👉 https://vidstack.io/docs/player/components/layouts/default#css-variables for more. */
}

.player[data-view-type='audio'] media-poster {
  display: none;
}

.player[data-view-type='video'] {
  aspect-ratio: 16 /9;
}

.src-buttons {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 40px;
  margin-inline: auto;
  max-width: 300px;
}
</style>
