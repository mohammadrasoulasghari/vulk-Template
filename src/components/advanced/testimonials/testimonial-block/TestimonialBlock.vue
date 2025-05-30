<script setup lang="ts">
import { viaPlaceholderErrorHandler } from '/@src/utils/viaPlaceholderErrorHandler'
import { inject } from 'vue'

export interface TestimonialBlockProps {
  image: string
  title: string
  content: string
  linkLabel?: string
  link?: string
  reverse?: boolean
}

const props = withDefaults(defineProps<TestimonialBlockProps>(), {
  linkLabel: undefined,
  link: undefined,
  reverse: false,
})

const columnsClasses = computed(() => [props.reverse && 'is-reverse'])

const columnMediaClasses = computed(() => [props.reverse && 'is-offset-1'])

const columnTextClasses = computed(() => [!props.reverse && 'is-offset-1'])

const rtl: boolean | undefined = inject('rtl')
</script>

<template>
  <div class="py-6">
    <div
      class="columns is-vcentered b-columns-half-tablet-p"
      :class="columnsClasses"
    >
      <div
        class="column is-6"
        :class="columnMediaClasses"
      >
        <img
          class="testimonial-image"
          :src="props.image"
          alt="testifier image"
          @error.once="(event) => viaPlaceholderErrorHandler(event, '600x600')"
        >
      </div>
      <div
        class="column is-5"
        :class="columnTextClasses"
      >
        <i-fa-quote-right
          v-if="rtl"
          class="rem-125 mb-4 text-success"
        />
        <i-fa-quote-left
          v-else
          class="rem-125 mb-4 text-success"
        />
        <Title
          tag="h3"
          :size="2"
          weight="thin"
          leading
        >
          {{ props.title }}
        </Title>
        <p class="paragraph">
          {{ props.content }}
        </p>
        <div
          v-if="props.link"
          class="py-4"
        >
          <Button
            :to="props.link"
            color="primary"
            outlined
            raised
          >
            <span>{{ props.linkLabel }}</span>
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.testimonial-image {
  object-fit: cover;
}

.columns {
  &.is-reverse {
    flex-direction: row-reverse;
  }
}

@media only screen and (width <= 767px) {
  :deep(.title) {
    font-size: 1.75rem;
  }

  :deep(.button) {
    width: 100%;
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  :deep(.title) {
    font-size: 2rem;
  }
}
</style>
