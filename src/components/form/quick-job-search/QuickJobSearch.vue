<script setup lang="ts">
import { ref } from 'vue'

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

const jobSelect = ref('All')
</script>

<template>
  <form>
    <div class="flex-form is-relative z-1">
      <Field grouped>
        <Control
          icon="feather:search"
          expanded
        >
          <VInput placeholder="بدنبال چه می‌گردید؟" />
        </Control>
        <Control>
          <VSelect
            v-model="jobSelect"
            :options="options"
            placeholder="همه"
          />
        </Control>
      </Field>
      <div>
        <Button
          color="primary"
          bold
          raised
          fullwidth
        >
          جستجوی سریع
        </Button>
      </div>
    </div>
  </form>
</template>

<style scoped lang="scss">
.flex-form {
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
    select {
      height: 48px;
    }

    &::after {
      top: 58%;
    }
  }
}

@media only screen and (width <= 767px) {
  .flex-form {
    margin-bottom: 2rem;

    :deep(.control) {
      margin-inline-end: 0 !important;
      margin-bottom: 0.75rem !important;
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .flex-form {
    max-width: 580px;
    margin-inline-start: auto;
    margin-inline-end: auto;
  }
}
</style>
