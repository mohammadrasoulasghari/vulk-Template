<script setup lang="ts">
export interface PricingPlanItem {
  name: string
  description: string
  monthlyPrice: number
  yearlyPrice: number
  actionLabel: string
  popular: boolean
}

export interface PricingCompactProps {
  plans: PricingPlanItem[]
}

const props = defineProps<PricingCompactProps>()

const billing = ref([])

watch(billing, (newVal, oldVal) => {
  console.log('TOGGLE', newVal, oldVal)
})
</script>

<template>
  <div class="pricing-compact">
    <div class="billing-switcher-wrapper">
      <div
        class="by-month"
        :class="billing.length > 0 ? '' : 'is-active'"
      >
        ماهانه
      </div>
      <div class="billing-switcher">
        <NinjaToggle
          v-model="billing"
          name="pricing-toggle"
          flavor="switch"
          color="primary"
          value="سالانه"
        />
      </div>
      <div
        class="by-year"
        :class="billing.length > 0 ? 'is-active' : ''"
      >
        سالانه
      </div>

      <div class="discount">
        <img
          src="/assets/illustrations/text/save-10.svg"
          alt="Save 10%"
        >
      </div>
    </div>

    <div class="pricing-compact-box">
      <div class="columns is-gapless b-columns-half-tablet-p">
        <div
          v-for="(plan, index) in props.plans.slice(0, 4)"
          :key="index"
          class="column is-3"
        >
          <div class="pricing-inner-box">
            <div
              v-if="plan.popular"
              class="popular-tag"
            >
              <Tag
                color="secondary"
                label="محبوبترین"
                elevated
              />
            </div>
            <Title
              tag="h3"
              :size="5"
              weight="semi"
            >
              <span>{{ plan.name }}</span>
            </Title>
            <p class="paragraph rem-90">
              {{ plan.description }}
            </p>
            <div class="price">
              <span v-if="billing.length > 0">{{ plan.yearlyPrice }}</span>
              <span v-else>{{ plan.monthlyPrice }}</span>
            </div>
            <div class="billing">
              <p class="paragraph rem-80">
                به ازای کاربر هر
                <span v-if="billing.length > 0">سال</span>
                <span v-else>ماه</span>
              </p>
              <p class="paragraph rem-80">
                زمانی که پرداخت
                <span v-if="billing.length > 0">سالانه</span>
                <span v-else>ماهانه</span>
                باشد
              </p>
            </div>
            <div class="action">
              <Button
                color="primary"
                :outlined="!plan.popular"
                bold
                fullwidth
                raised
              >
                <span>{{ plan.actionLabel }}</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.pricing-compact {
  position: relative;
  margin-bottom: 3rem;

  .billing-switcher-wrapper {
    position: relative;
    max-width: 200px;
    margin: 0 auto 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: var(--font);
    z-index: 1;

    .by-month {
      padding-inline-end: 20px;
    }

    .by-year {
      padding-inline-start: 10px;
    }

    .by-month,
    .by-year {
      color: var(--medium-text);

      &.is-active {
        color: var(--primary);
      }
    }

    .discount {
      position: absolute;
      top: -60px;
      inset-inline-end: -100px;

      img {
        max-height: 70px;
        height: 70px;
      }
    }
  }

  .pricing-compact-box {
    position: relative;
    background: var(--card-bg-color);
    border: 1px solid var(--card-border-color);
    border-radius: 0.85rem;
    box-shadow: var(--spread-shadow);

    .column {
      &:not(:last-child) {
        border-inline-end: 1px solid var(--card-border-color);
      }
    }

    .pricing-inner-box {
      position: relative;
      padding: 2rem;
      text-align: center;

      .popular-tag {
        position: absolute;
        top: -0.75rem;
        inset-inline-start: 0;
        inset-inline-end: 0;
        margin: 0 auto;
      }

      .price {
        padding: 1rem 0 0.75rem;

        span {
          position: relative;
          inset-inline-start: -10px;
          font-family: var(--font);
          font-size: 3.25rem;
          font-weight: 600;
          color: var(--title-color);

          &::before {
            position: relative;
            top: -25px;
            content: '$';
            font-weight: 700;
            font-size: 1.25rem;
            margin-inline-end: 0;

            [dir='rtl'] & {
              content: '';
            }
          }

          &::after {
            [dir='rtl'] & {
              position: relative;
              top: -25px;
            }

            [lang='fa'] & {
              content: ' تومان';
              font-weight: 700;
              font-size: 1.25rem;
            }
          }
        }
      }

      .billing {
        margin-bottom: 1rem;
      }
    }
  }
}
</style>
