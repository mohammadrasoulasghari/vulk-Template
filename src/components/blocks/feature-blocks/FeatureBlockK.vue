<script setup lang="ts">
import type { SimpleFeature } from '/@src/types'

export interface FeatureBlockKProps {
  title: string
  content: string
  features: SimpleFeature[]
  links?: boolean
  inverted?: boolean
}

const props = withDefaults(defineProps<FeatureBlockKProps>(), {
  links: false,
  inverted: false,
})

const textClasses = computed(() => [props.inverted && 'text-light'])
</script>

<template>
  <div class="py-6">
    <div class="columns is-multiline is-vcentered">
      <div class="column is-5">
        <slot name="content">
          <Title
            tag="h2"
            :size="2"
            weight="semi"
            leading
            :inverted="props.inverted"
          >
            <span>{{ props.title }}</span>
          </Title>
          <p
            class="paragraph max-w-tp-full medium:max-w-4 mb-4"
            :class="textClasses"
          >
            {{ props.content }}
          </p>
        </slot>
      </div>

      <div class="column is-6 is-offset-1">
        <div class="columns is-multiline b-columns-half-tablet-p">
          <div
            v-for="(feature, index) in props.features.slice(0, 4)"
            :key="index"
            class="column is-6"
          >
            <div class="py-2 medium:py-4">
              <Title
                tag="h3"
                :size="6"
                weight="semi"
                narrow
                :inverted="props.inverted"
              >
                <span>{{ feature.title }}</span>
              </Title>
              <p
                class="paragraph rem-95 pt-2 max-w-3"
                :class="textClasses"
              >
                {{ feature.text }}
              </p>
              <ActionLink
                v-if="props.links"
                :link="feature.link"
                label="بیشتر بخوانید"
                size="small"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
:deep(.action-link) {
  margin-top: 0.25rem;
}
</style>
