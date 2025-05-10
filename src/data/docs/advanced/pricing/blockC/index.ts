export const pricingBlockCProps = {
  props: [
    {
      name: 'title',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'subtitle',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'plans',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['برای مشاهده ساختار داده نمونه، به زبانه نمونه مراجعه کنید'],
    },
    {
      name: 'pulled',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
    {
      name: 'rounded',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
    {
      name: 'polkaDots',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
  ],
  slots: [],
}

export const pricingBlockC = `
<script setup lang="ts">
import { workoutPricingPlans } from '/@src/data/pages/workout'
</script>

<template>
  <PricingDuo
    title="پلن‌های ما"
    subtitle="Duplexque isdem diebus acciderat malum, quod et Theophilum insontem
        atrox interceperat casus."
    :plans="workoutPricingPlans"
    rounded
    polka-dots
  />
</template>
`

export const pricingBlockCSample = `
export const workoutPricingPlans = [
  {
    name: 'استاندارد',
    icon: 'ph:parachute-duotone',
    price: {
      monthly: 19,
      yearly: 6500000,
    },
    features: [
      'برنامه‌های ویژه',
      'ادغام در اجتماع',
      'شبکه‌های اجتماعی',
      'هر ماه ۲ ساعت مربیگری',
      'رویدادهای لایو',
    ],
    featured: false,
  },
  {
    name: 'پرمیوم',
    icon: 'ph:rocket-duotone',
    price: {
      monthly: 39,
      yearly: 12000000,
    },
    features: [
      'برنامه‌های شخصی',
      'استریم لایو',
      'صفحه شخصی',
      '۱۰ ساعت مربیگری در ماه',
      'دعوت‌های VIP',
    ],
    featured: false,
  },
]
`
