<script setup lang="ts">
import type { IconFeature } from '/@src/types'

export interface FeatureBlockGProps {
  features: IconFeature[]
  image: string
  darkImage: string
  links?: boolean
  inverted?: boolean
}

const props = withDefaults(defineProps<FeatureBlockGProps>(), {
  links: false,
  inverted: false,
})

const textClasses = computed(() => [props.inverted && `text-light`])
</script>

<template>
  <div class="py-6">
    <div class="columns is-multiline">
      <div class="column is-12">
        <div class="block mb-4 has-text-centered mx-auto max-w-8">
          <slot name="image">
            <DarkImage
              :src="props.image"
              :src-dark="props.darkImage"
              alt=""
            />
          </slot>

          <div class="columns b-columns-third-tablet-p mt-4 has-text-start">
            <slot name="features">
              <div
                v-for="(feature, index) in props.features.slice(0, 3)"
                :key="index"
                class="column is-4"
              >
                <div class="media">
                  <div class="media-left">
                    <IconBox
                      :color="feature.color"
                      size="small"
                      :inverted="props.inverted"
                    >
                      <i
                        class="iconify"
                        :data-icon="feature.icon"
                      />
                    </IconBox>
                  </div>
                  <div class="media-content">
                    <Title
                      tag="h3"
                      :size="6"
                      weight="semi"
                      leading
                      :inverted="props.inverted"
                    >
                      <span>{{ feature.title }}</span>
                    </Title>
                    <p
                      class="paragraph rem-90"
                      :class="textClasses"
                    >
                      {{ feature.text }}
                    </p>
                    <ActionLink
                      v-if="props.links"
                      :link="feature.link"
                      size="small"
                    >
                      اطلاعات بیشتر
                    </ActionLink>
                  </div>
                </div>
              </div>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
