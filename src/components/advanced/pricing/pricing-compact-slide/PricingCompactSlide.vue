<script setup lang="ts">
export interface PricingPlanItem {
  name: string
  description: string
  monthlyPrice: number
  yearlyPrice: number
  actionLabel: string
  popular: boolean
}

export interface PricingCompactSlideProps {
  plans: PricingPlanItem[]
}

const props = defineProps<PricingCompactSlideProps>()

const billing = ref([])

watch(billing, (newVal, oldVal) => {
  console.log('TOGGLE', newVal, oldVal)
})

const activeBox = ref(0)
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
      <div
        v-for="(plan, index) in props.plans.slice(0, 4)"
        :key="index"
        role="button"
        tabindex="0"
        class="pricing-inner-box"
        :class="activeBox === index && 'is-active'"
        @mouseover="() => (activeBox = index)"
        @focusin="() => (activeBox = index)"
      >
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
        <p class="paragraph rem-80 mx-auto max-w-2">
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
      <div
        v-background="{
          src: '/assets/shapes/lowpoly-pattern.png',
          placeholder: 'https://dummyimage.com/1920x1080/ededed/000000',
        }"
        class="naver-box"
        :class="`naver-${activeBox}`"
      />
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
    display: flex;
    width: 100%;
    background: var(--card-bg-color);
    border: 1px solid var(--card-border-color);
    border-radius: 1.25rem;
    box-shadow: var(--spread-shadow);

    .naver-box {
      position: absolute;
      top: -1.25rem;
      inset-inline-start: 0;
      height: 100%;
      width: 22%;
      background: var(--dark-bg);
      border-radius: 0.85rem;
      background-size: cover;
      z-index: 1;
      transition:
        margin 0.3s,
        width 0.3s;

      &.naver-0 {
        margin-inline-start: 1%;
        width: 29%;
      }

      &.naver-1 {
        margin-inline-start: 31.5%;
      }

      &.naver-2 {
        margin-inline-start: 54.5%;
      }

      &.naver-3 {
        margin-inline-start: 77.5%;
      }
    }

    .pricing-inner-box {
      position: relative;
      padding: 2rem;
      text-align: center;
      width: 23%;
      z-index: 2;

      .popular-tag {
        position: absolute;
        top: -0.75rem;
        inset-inline-start: 0;
        inset-inline-end: 0;
        margin: 0 auto;
      }

      :deep(.title) {
        transition: color 0.3s;
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
          transition: color 0.3s;

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

      .action {
        margin-bottom: 2rem;
      }

      &:first-child {
        width: 31%;
      }

      &.is-active {
        :deep(.title) {
          color: var(--white-smoke);
        }

        .price {
          span {
            color: var(--white-smoke);
          }
        }
      }
    }
  }
}

@media only screen and (width <= 767px) {
  .pricing-compact {
    .pricing-compact-box {
      flex-direction: column;

      .naver-box {
        display: none;
      }

      .pricing-inner-box {
        width: 100% !important;

        &.is-active {
          :deep(.title) {
            color: var(--title-color);
          }

          .price {
            span {
              color: var(--title-color);
            }
          }
        }
      }
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .pricing-compact {
    .pricing-compact-box {
      flex-wrap: wrap;

      .naver-box {
        display: none;
      }

      .pricing-inner-box {
        width: 50% !important;

        &.is-active {
          :deep(.title) {
            color: var(--title-color);
          }

          .price {
            span {
              color: var(--title-color);
            }
          }
        }
      }
    }
  }
}
</style>
