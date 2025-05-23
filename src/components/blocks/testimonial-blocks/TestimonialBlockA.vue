<script setup lang="ts">
export type TestimonialBlockAColumn = 3 | 4

export interface TestimonialBlockAItem {
  content: string
  avatar: string
  name: string
  position: string
}

export interface TestimonialBlockAProps {
  testimonials: TestimonialBlockAItem[]
  boxed?: boolean
  squared?: boolean
  limit?: number
  columns?: TestimonialBlockAColumn
}

const props = withDefaults(defineProps<TestimonialBlockAProps>(), {
  boxed: false,
  squared: false,
  limit: 3,
  columns: 4,
})

const blockClasses = computed(() => [props.boxed && `is-boxed`])

const columnClasses = computed(() => [props.columns && `is-${props.columns}`])

const contentClasses = computed(() => [props.columns === 4 ? '' : 'rem-85'])
</script>

<template>
  <div class="py-6">
    <div class="testimonial-block columns b-columns-half-tablet-p is-multiline">
      <div
        v-for="(testimonial, index) in props.testimonials.slice(0, props.limit)"
        :key="index"
        class="column"
        :class="columnClasses"
      >
        <div
          class="testimonial-block-item"
          :class="blockClasses"
        >
          <i
            class="iconify text-light mb-4"
            data-icon="fa:quote-left"
          />
          <p
            class="paragraph mx-auto max-w-4"
            :class="contentClasses"
          >
            {{ testimonial.content }}
          </p>
          <div class="level mt-4 mb-4">
            <div class="level-item">
              <AvatarSimple
                size="large"
                :picture="testimonial.avatar"
                :squared="props.squared"
              />
            </div>
          </div>
          <Title
            tag="h3"
            :size="7"
            weight="semi"
            narrow
          >
            <span>{{ testimonial.name }}</span>
          </Title>
          <p class="paragraph rem-85 text-light">
            {{ testimonial.position }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.testimonial-block {
  text-align: center;

  .testimonial-block-item {
    position: relative;
    padding: 1.5rem;

    &.is-boxed {
      background: var(--card-bg-color);
      border: 1px solid var(--card-border-color);
      box-shadow: var(--light-box-shadow);
      border-radius: 1.25rem;
      padding: 2.5rem 2.5rem 3rem;
      margin-bottom: 1.5rem;

      :deep(.avatar) {
        position: absolute;
        bottom: -31px;
        inset-inline-start: 0;
        inset-inline-end: 0;
        margin: 0 auto;
        max-width: 62px;
      }

      :deep(.title) {
        margin-top: -0.75rem;
      }
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: landscape) {
  .testimonial-block {
    .column {
      &.is-3 {
        .testimonial-block-item {
          padding-inline-start: 1.25rem !important;
          padding-inline-end: 1.25rem !important;
        }
      }
    }
  }
}
</style>
