export const galleryBlockBProps = {
  props: [
    {
      name: 'items',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['برای مشاهده ساختار داده نمونه، به زبانه نمونه مراجعه کنید'],
    },
    {
      name: 'squared',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
  ],
  slots: [],
}

export const galleryBlockB = `
<script setup lang="ts">
import { advancedGallery } from '/@src/data/blocks/gallery'
</script>

<template>
  <GalleryBlockB :items="advancedGallery" squared />
</template>
`

export const galleryBlockBSample = `
import type { GalleryBlockBRow } from '/@src/components/blocks/gallery-blocks/GalleryBlockB.vue'

export const advancedGallery: GalleryBlockBRow[] = [
  {
    items: [
      {
        image: '/assets/demo/img/gallery/15.jpg',
        size: 1,
        date: '11 شهریور 1403',
        liked: false,
        owner: {
          avatar: '/assets/demo/img/avatars/11.jpg',
          name: 'جین میچلز',
        },
      },
      {
        image: '/assets/demo/img/gallery/16.jpg',
        size: 1,
        date: '11 شهریور 1403',
        liked: true,
        owner: {
          avatar: '/assets/demo/img/avatars/32.jpg',
          name: 'کیارا سیمونی',
        },
      },
      {
        image: '/assets/demo/img/gallery/17.jpg',
        size: 2,
        date: '13 شهریور 1403',
        liked: true,
        owner: {
          avatar: '/assets/demo/img/avatars/51.jpg',
          name: 'بن ویلسون',
        },
      },
    ],
  },
  {
    items: [
      {
        image: '/assets/demo/img/gallery/18.jpg',
        size: 1,
        date: '14 شهریور 1403',
        liked: false,
        owner: {
          avatar: '/assets/demo/img/avatars/25.jpg',
          name: 'تری اسپیتز',
        },
      },
      {
        image: '/assets/demo/img/gallery/19.jpg',
        size: 2,
        date: '14 شهریور 1403',
        liked: false,
        owner: {
          avatar: '/assets/demo/img/avatars/17.jpg',
          name: 'آنیا سیکورسکی',
        },
      },
      {
        image: '/assets/demo/img/gallery/20.jpg',
        size: 2,
        date: '15 شهریور 1403',
        liked: true,
        owner: {
          avatar: '/assets/demo/img/avatars/57.jpg',
          name: 'یونی فولر',
        },
      },
    ],
  },
  {
    items: [
      {
        image: '/assets/demo/img/gallery/21.jpg',
        size: 2,
        date: '17 شهریور 1403',
        liked: false,
        owner: {
          avatar: '/assets/demo/img/avatars/43.jpg',
          name: 'جیمی اسکودورو',
        },
      },
      {
        image: '/assets/demo/img/gallery/22.jpg',
        size: 3,
        date: '18 شهریور 1403',
        liked: true,
        owner: {
          avatar: '/assets/demo/img/avatars/58.jpg',
          name: 'لاکیشا جکسون',
        },
      },
      {
        image: '/assets/demo/img/gallery/23.jpg',
        size: 2,
        date: '18 شهریور 1403',
        liked: true,
        owner: {
          avatar: '/assets/demo/img/avatars/41.jpg',
          name: 'ویشو پراساد',
        },
      },
    ],
  },
  {
    items: [
      {
        image: '/assets/demo/img/gallery/24.jpg',
        size: 1,
        date: '18 شهریور 1403',
        liked: false,
        owner: {
          avatar: '/assets/demo/img/avatars/19.jpg',
          name: 'اریک اسمیث',
        },
      },
      {
        image: '/assets/demo/img/gallery/25.jpg',
        size: 1,
        date: '20 شهریور 1403',
        liked: true,
        owner: {
          avatar: '/assets/demo/img/avatars/7.jpg',
          name: 'دانیال والدار',
        },
      },
      {
        image: '/assets/demo/img/gallery/26.jpg',
        size: 1,
        date: '21 شهریور 1403',
        liked: false,
        owner: {
          avatar: '/assets/demo/img/avatars/21.jpg',
          name: 'تریشا هیز',
        },
      },
    ],
  },
  {
    items: [
      {
        image: '/assets/demo/img/gallery/30.jpg',
        size: 2,
        date: '23 شهریور 1403',
        liked: false,
        owner: {
          avatar: '/assets/demo/img/avatars/22.jpg',
          name: 'روبرت کرادین',
        },
      },
      {
        image: '/assets/demo/img/gallery/28.jpg',
        size: 1,
        date: '24 شهریور 1403',
        liked: true,
        owner: {
          avatar: '/assets/demo/img/avatars/18.jpg',
          name: 'مالک شهید',
        },
      },
    ],
  },
  {
    items: [
      {
        image: '/assets/demo/img/gallery/29.jpg',
        size: 2,
        date: '26 شهریور 1403',
        liked: false,
        owner: {
          avatar: '/assets/demo/img/avatars/30.jpg',
          name: 'یاسمین گونی',
        },
      },
      {
        image: '/assets/demo/img/gallery/27.jpg',
        size: 3,
        date: '30 شهریور 1403',
        liked: false,
        owner: {
          avatar: '/assets/demo/img/avatars/55.jpg',
          name: 'آنتونی تتر',
        },
      },
      {
        image: '/assets/demo/img/gallery/31.jpg',
        size: 2,
        date: '2 مهر 1403',
        liked: true,
        owner: {
          avatar: '/assets/demo/img/avatars/42.jpg',
          name: 'میا شولتز',
        },
      },
    ],
  },
  {
    items: [
      {
        image: '/assets/demo/img/gallery/32.jpg',
        size: 2,
        date: '2 مهر 1403',
        liked: true,
        owner: {
          avatar: '/assets/demo/img/avatars/28.jpg',
          name: 'کاتارینا کولوسکایا',
        },
      },
      {
        image: '/assets/demo/img/gallery/33.jpg',
        size: 1,
        date: '5 مهر 1403',
        liked: true,
        owner: {
          avatar: '/assets/demo/img/avatars/35.jpg',
          name: 'روبرت پلنت',
        },
      },
      {
        image: '/assets/demo/img/gallery/34.jpg',
        size: 1,
        date: '6 مهر 1403',
        liked: false,
        owner: {
          avatar: '/assets/demo/img/avatars/29.jpg',
          name: 'کریستینا یانگ',
        },
      },
    ],
  },
]
`
