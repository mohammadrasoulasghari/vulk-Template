<script setup lang="ts">
import type { SimpleFeature } from '/@src/types'

export interface VideoBlockCProps {
  title: string
  features: SimpleFeature[]
  source: string
  poster: string
  links?: boolean
}

const props = withDefaults(defineProps<VideoBlockCProps>(), {
  links: false,
})
</script>

<template>
  <div class="py-6">
    <div class="columns is-vcentered">
      <div class="column is-6 is-relative is-centered-portrait">
        <div class="video-player-container-wrapper">
          <VidStack
            ratio="4by3"
            :source="props.source"
            :poster="props.poster"
            :title="props.title"
          />
        </div>
      </div>
      <div class="column is-5 is-offset-1">
        <Title
          tag="h2"
          :size="3"
          weight="bold"
        >
          <span>{{ props.title }}</span>
        </Title>

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
                leading
              >
                <span>{{ feature.title }}</span>
              </Title>
              <p class="paragraph max-w-3 rem-95">
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
      </div>
    </div>
  </div>
</template>
