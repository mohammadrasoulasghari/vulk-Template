export const pricingBlockBProps = {
  props: [
    {
      name: 'plans',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['برای مشاهده ساختار داده نمونه، به زبانه نمونه مراجعه کنید'],
    },
    {
      name: 'columns',
      type: 'number',
      required: 'false',
      default: '3',
      values: ['2', '3', '4'],
    },
    {
      name: 'label',
      type: 'string',
      required: 'false',
      default: 'undefined',
      values: ['string'],
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

export const pricingBlockB = `
<script setup lang="ts">
import { eventPlans } from '/@src/data/pages/conference'
</script>

<template>
  <PricingCardsA
    :plans="eventPlans"
    :columns="3"
    label="خرید بلیط"
    rounded
    pulled
    polka-dots
  />
</template>
`

export const pricingBlockBSample = `
import type { PricingPlan } from '/@src/components/advanced/pricing/pricing-card/PricingCardsA.vue'

export const eventPlans: PricingPlan[] = [
  {
    name: 'خیلی زود',
    price: 199,
    comment: 'به ازای هر شرکت‌کننده',
    features: ['صبحانه', 'صرف ناهار', 'نوشیدنی‌های گرم و سرد'],
    featured: true,
  },
  {
    name: 'زود',
    price: 249,
    comment: 'به ازای هر شرکت‌کننده',
    features: ['صبحانه', 'صرف ناهار', 'نوشیدنی‌های گرم و سرد'],
    featured: false,
  },
  {
    name: 'سروقت',
    price: 299,
    comment: 'به ازای هر شرکت‌کننده',
    features: ['صبحانه', 'صرف ناهار', 'نوشیدنی‌های گرم و سرد'],
    featured: false,
  },
  {
    name: 'دیروقت',
    price: 349,
    comment: 'به ازای هر شرکت‌کننده',
    features: ['صبحانه', 'صرف ناهار', 'نوشیدنی‌های گرم و سرد'],
    featured: false,
  },
]
`
