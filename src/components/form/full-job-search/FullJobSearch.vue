<script setup lang="ts">
import { ref } from 'vue'

export interface FullJobSearchProps {
  compact?: boolean
}

const props = withDefaults(defineProps<FullJobSearchProps>(), {
  compact: false,
})

const options = [
  {
    value: 'All',
    label: 'همه',
  },
  {
    value: 'Hamburger',
    label: 'همبرگر',
  },
  {
    value: 'Cheeseburger',
    label: 'چیزبرگر',
  },
  {
    value: 'Burito',
    label: 'بوریتو',
  },
]

const salarySelect = ref('All')
const locationSelect = ref('All')
const jobSelect = ref('All')

const formClasses = computed(() => [props.compact && 'is-compact'])
</script>

<template>
  <form class="pb-6">
    <div
      class="flex-form is-relative z-1"
      :class="formClasses"
    >
      <Field grouped>
        <Control
          icon="feather:search"
          expanded
        >
          <VInput placeholder="بدنبال چه می‌گردید؟" />
        </Control>
        <Control>
          <VSelect
            v-model="salarySelect"
            :options="options"
            placeholder="موقعیت"
          />
        </Control>
        <Control v-if="!props.compact">
          <VSelect
            v-model="locationSelect"
            :options="options"
            placeholder="حقوق"
          />
        </Control>
        <Control>
          <VSelect
            v-model="jobSelect"
            :options="options"
            placeholder="همه"
          />
        </Control>
        <Control>
          <Button
            color="primary"
            :long="2"
            bold
            raised
          >
            جستجو
          </Button>
        </Control>
      </Field>
    </div>
  </form>
</template>

<style scoped lang="scss">
.flex-form {
  max-width: 1040px;
  margin: 0 auto;
  padding: 1rem;
  background: var(--wrap-muted-color);
  border-radius: 1rem;
  transition: box-shadow 0.3s;

  :deep(.control) {
    .form-icon {
      height: 48px;
      width: 48px;

      .iconify {
        font-size: 1.25rem;
      }
    }
  }

  :deep(.input) {
    height: 48px;
    padding-inline-start: 48px;
  }

  :deep(.select) {
    height: 48px;

    select {
      height: 48px;
    }

    &::after {
      top: 58%;
    }
  }

  &.is-compact {
    background: none;
    box-shadow: none;
  }
}

@media only screen and (width <= 767px) {
  .flex-form {
    :deep(.control) {
      margin-inline-end: 0 !important;
      margin-bottom: 0.75rem !important;
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .flex-form {
    :deep(.field) {
      flex-wrap: wrap;
    }

    :deep(.control) {
      //margin-inline-end: 0 !important;
      margin-bottom: 0.75rem !important;

      &:first-child {
        min-width: 100%;
      }

      &:not(:first-child) {
        flex: 1 1 0;
      }
    }

    :deep(.button) {
      width: 100% !important;
      min-width: 100% !important;
    }
  }
}
</style>
