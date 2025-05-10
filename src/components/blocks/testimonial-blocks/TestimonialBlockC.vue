<script setup lang="ts">
import { inject } from 'vue'

export interface TestimonialBlockCItem {
  content: string
  avatar: string
  name: string
  position: string
  logo: string
}

export interface TestimonialBlockCProps {
  testimonials: TestimonialBlockCItem[]
  squared?: boolean
  limit?: number
}

const props = withDefaults(defineProps<TestimonialBlockCProps>(), {
  squared: false,
  limit: 4,
})

const rtl: boolean | undefined = inject('rtl')
</script>

<template>
  <div class="py-6">
    <div class="mx-auto max-w-9">
      <div class="columns is-multiline b-columns-half-tablet-p">
        <div
          v-for="(testimonial, index) in props.testimonials.slice(
            0,
            props.limit,
          )"
          :key="index"
          class="column is-6"
        >
          <div class="testimonial-box max-w-7 mx-auto">
            <div class="max-w-5 small:mx-auto ms-auto">
              <p class="paragraph rem-90 mb-5">
                <i
                  class="iconify text-light me-2"
                  :data-icon="{ 'fa:quote-left': !rtl, 'fa:quote-right': rtl }"
                />
                {{ testimonial.content }}
              </p>
              <div class="is-relative is-flex is-align-items-center">
                <AvatarSimple
                  :picture="testimonial.avatar"
                  :squared="props.squared"
                />
                <div class="ms-2">
                  <Title
                    tag="h3"
                    :size="7"
                    weight="semi"
                    narrow
                  >
                    <span>{{ testimonial.name }}</span>
                  </Title>
                  <p class="paragraph rem-80 text-light">
                    {{ testimonial.position }}
                  </p>
                </div>
                <img
                  class="testimonial-logo"
                  :src="testimonial.logo"
                  alt="company logo"
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.testimonial-box {
  display: flex;
  background: var(--card-bg-color);
  border: 1px solid var(--card-border-color);
  box-shadow: var(--light-box-shadow);
  padding: 2.5rem;
  border-radius: 1.25rem;

  .testimonial-avatar {
    border-radius: 50%;
    width: 100px;
    min-width: 100px;
    height: 100px;
    object-fit: cover;
  }

  .testimonial-logo {
    display: block;
    position: absolute;
    bottom: 0;
    inset-inline-end: 0;
    max-width: 60px;
  }

  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  &.is-squared {
    .testimonial-avatar {
      border-radius: 1.25rem;
    }
  }
}

.is-dark {
  .testimonial-box {
    .testimonial-logo {
      filter: invert(1);
    }
  }
}
</style>
