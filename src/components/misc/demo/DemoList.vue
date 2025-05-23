<script setup lang="ts">
import type { Ref, ComputedRef } from 'vue'

import landing from '/@src/data/screenshots/landing.json'
import about from '/@src/data/screenshots/about.json'
import pricing from '/@src/data/screenshots/pricing.json'
import blog from '/@src/data/screenshots/blog.json'
import sub from '/@src/data/screenshots/sub.json'
import auth from '/@src/data/screenshots/auth.json'
import layouts from '/@src/data/screenshots/layouts.json'

export interface DemoItem {
  name: string
  category: string
  keywords: string
  displayOrder: number
  new: boolean
  route: {
    name: string
    path: string
  }
  screenshot: {
    light: string
    dark: string
  }
}

const props = withDefaults(
  defineProps<{
    categories?: string[]
  }>(),
  {
    categories: undefined,
  },
)

// This is a helper function that generate a computed items filtered with the input
function useFilter(
  items: DemoItem[],
  filter: Ref<string>,
  category: string,
): ComputedRef<DemoItem[]> {
  return computed(() => {
    if (
      props.categories !== undefined &&
      !props.categories.includes(category)
    ) {
      return []
    }

    if (!filter.value) {
      return items
    }

    if (filter.value === 'new') {
      return items.filter((demo) => demo.new)
    }

    const searchValue = filter.value.replace(/[^A-Za-z0-9]/g, '')
    const filterRe = new RegExp(searchValue, 'i')

    return items.filter((demo) => {
      return (
        demo.name.match(filterRe) ||
        demo.category.match(filterRe) ||
        demo.keywords?.match(filterRe) ||
        demo.route.name.replace(/-/g, ' ').match(filterRe)
      )
    })
  })
}

function generateFeatureRequestLink(name: string) {
  return `https://github.com/cssninjaStudio/vulk-public/issues/new?assignees=&labels=feature-request%2Ctriage&template=feature_request.yml&title=%5BFeature%5D%3A+%20${name}`
}

function displayOrder(
  a: { displayOrder: number },
  b: { displayOrder: number },
) {
  if (a.displayOrder < b.displayOrder) {
    return -1
  }
  if (a.displayOrder > b.displayOrder) {
    return 1
  }
  return 0
}

const landingDemos = landing.sort(displayOrder) as DemoItem[]
const aboutDemos = about.sort(displayOrder) as DemoItem[]
const pricingDemos = pricing.sort(displayOrder) as DemoItem[]
const blogDemos = blog.sort(displayOrder) as DemoItem[]
const subDemos = sub.sort(displayOrder) as DemoItem[]
const authDemos = auth.sort(displayOrder) as DemoItem[]
const layoutsDemos = layouts.sort(displayOrder) as DemoItem[]

const totalDemos =
  landingDemos.length +
  aboutDemos.length +
  pricingDemos.length +
  blogDemos.length +
  subDemos.length +
  authDemos.length +
  layoutsDemos.length

const filterInput = ref('')
const landingDemosFiltered = useFilter(landingDemos, filterInput, 'landing')
const aboutDemosFiltered = useFilter(aboutDemos, filterInput, 'about')
const pricingDemosFiltered = useFilter(pricingDemos, filterInput, 'pricing')
const blogDemosFiltered = useFilter(blogDemos, filterInput, 'blog')
const subDemosFiltered = useFilter(subDemos, filterInput, 'subpages')
const authDemosFiltered = useFilter(authDemos, filterInput, 'auth')
const layoutsDemosFiltered = useFilter(layoutsDemos, filterInput, 'layouts')

const totalResults = computed(() => {
  return (
    landingDemosFiltered.value.length +
    aboutDemosFiltered.value.length +
    pricingDemosFiltered.value.length +
    blogDemosFiltered.value.length +
    subDemosFiltered.value.length +
    authDemosFiltered.value.length +
    layoutsDemosFiltered.value.length
  )
})

const searchLabel = computed(() => {
  if (!filterInput.value) {
    return `جستجو در بین ${totalDemos} دمو`
  }

  if (!totalResults.value) {
    return `هنوز دمویی برای "${filterInput.value}" تدارک دیده نشده است.`
  }

  return `${totalResults.value} دمو از ${totalDemos} برای جستجوی شما پیدا شد `
})

// We use debouncedWatch to debounce the filter input
debouncedWatch(
  filterInput,
  () => {
    if (filterInput.value.length < 3) {
      return
    }

    // dataLayer and is injected via vite-plugin-radar
    if (window) {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
        event: 'search',
        search_term: filterInput.value,
      })
    }
  },
  { debounce: 300 },
)
</script>

<template>
  <div class="vulk-demos">
    <div class="demo-search-section">
      <div class="search-field-wrapper mx-auto max-w-3">
        <Field :label="searchLabel">
          <Control icon="feather:search">
            <input
              v-model="filterInput"
              type="search"
              class="input is-rounded"
              placeholder="فایننس، استارتاپ، فریلنسر ..."
            >
          </Control>
        </Field>
      </div>
    </div>
    <div v-if="totalResults === 0">
      <Placeholder
        title="ما نتوانستیم هیچ نتیجه منطبقی پیدا کنیم."
        subtitle="خیلی بد. به نظر می‌رسد ما نتوانستیم هیچ نتیجه منطبقی برای عبارت‌های جستجویی که وارد کرده‌اید پیدا کنیم. لطفاً عبارات یا معیارهای جستجوی مختلف را امتحان کنید."
        بزرگتر
      >
        <template #image>
          <DarkImage
            src="/assets/illustrations/placeholder/not-found.svg"
            src-dark="/assets/illustrations/placeholder/not-found-dark.svg"
            alt=""
          />
        </template>

        <template #action>
          <Button
            :href="generateFeatureRequestLink(filterInput)"
            target="_blank"
            icon-left="feather:github"
          >
            درخواست یک ویژگی
          </Button>
        </template>
      </Placeholder>
    </div>

    <!--Landing pages-->
    <div
      v-if="
        (props.categories === undefined ||
          props.categories.includes('landing')) &&
          landingDemosFiltered.length > 0
      "
      class="demo-section"
    >
      <div class="demo-section-title">
        <DarkImage
          src="/assets/icons/layouts/layout-1.svg"
          src-dark="/assets/icons/layouts/layout-1-dark.svg"
          alt=""
        />
        <div class="title-meta">
          <h3>صفحات اصلی</h3>
          <p>پیش‌نمایش صفحات از پیش ساخته شده</p>
        </div>
      </div>

      <div class="columns is-multiline">
        <!-- Demo item -->
        <div
          v-for="(item, index) in landingDemosFiltered"
          :key="index"
          class="column is-4 has-text-centered"
        >
          <RouterLink
            :to="item.route"
            class="vulk-demo-wrapper loaded is-block"
          >
            <span
              v-if="item.new"
              class="new-tag"
            >جدید</span>
            <img
              class="is-image is-image-light"
              :src="item.screenshot.light"
              alt="Demo screenshot"
              loading="lazy"
            >
            <img
              class="is-image is-image-dark"
              :src="item.screenshot.dark"
              alt="Demo screenshot"
              loading="lazy"
            >
            <div class="circle-overlay" />
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>{{ item.category }}</span>
                  <span>{{ item.name }}</span>
                </div>
                <div class="demo-link">
                  <span class="go-to-demo">
                    مشاهده‌ی دمو
                    <i
                      aria-hidden="true"
                      class="iconify"
                      data-icon="feather:arrow-right"
                    />
                  </span>
                </div>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>

    <!--About pages-->
    <div
      v-if="
        (props.categories === undefined ||
          props.categories.includes('about')) &&
          aboutDemosFiltered.length > 0
      "
      class="demo-section"
    >
      <div class="demo-section-title">
        <DarkImage
          src="/assets/icons/layouts/layout-1.svg"
          src-dark="/assets/icons/layouts/layout-1-dark.svg"
          alt=""
        />
        <div class="title-meta">
          <h3>صفحات درباره ما</h3>
          <p>پیش‌نمایش صفحات از پیش ساخته شده</p>
        </div>
      </div>

      <div class="columns is-multiline">
        <!-- Demo item -->
        <div
          v-for="(item, index) in aboutDemosFiltered"
          :key="index"
          class="column is-4 has-text-centered"
        >
          <RouterLink
            :to="item.route"
            class="vulk-demo-wrapper loaded is-block"
          >
            <span
              v-if="item.new"
              class="new-tag"
            >جدید</span>
            <img
              class="is-image is-image-light"
              :src="item.screenshot.light"
              alt="Demo screenshot"
              loading="lazy"
            >
            <img
              class="is-image is-image-dark"
              :src="item.screenshot.dark"
              alt="Demo screenshot"
              loading="lazy"
            >
            <div class="circle-overlay" />
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>{{ item.category }}</span>
                  <span>{{ item.name }}</span>
                </div>
                <div class="demo-link">
                  <span class="go-to-demo">
                    مشاهده‌ی دمو
                    <i
                      aria-hidden="true"
                      class="iconify"
                      data-icon="feather:arrow-right"
                    />
                  </span>
                </div>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>

    <!--Pricing pages-->
    <div
      v-if="
        (props.categories === undefined ||
          props.categories.includes('pricing')) &&
          pricingDemosFiltered.length > 0
      "
      class="demo-section"
    >
      <div class="demo-section-title">
        <DarkImage
          src="/assets/icons/layouts/layout-1.svg"
          src-dark="/assets/icons/layouts/layout-1-dark.svg"
          alt=""
        />
        <div class="title-meta">
          <h3>صفحات قیمت‌گذاری و جداول قیمت</h3>
          <p>پیش‌نمایش صفحات از پیش ساخته شده</p>
        </div>
      </div>

      <div class="columns is-multiline">
        <!-- Demo item -->
        <div
          v-for="(item, index) in pricingDemosFiltered"
          :key="index"
          class="column is-4 has-text-centered"
        >
          <RouterLink
            :to="item.route"
            class="vulk-demo-wrapper loaded is-block"
          >
            <span
              v-if="item.new"
              class="new-tag"
            >جدید</span>
            <img
              class="is-image is-image-light"
              :src="item.screenshot.light"
              alt="Demo screenshot"
              loading="lazy"
            >
            <img
              class="is-image is-image-dark"
              :src="item.screenshot.dark"
              alt="Demo screenshot"
              loading="lazy"
            >
            <div class="circle-overlay" />
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>{{ item.category }}</span>
                  <span>{{ item.name }}</span>
                </div>
                <div class="demo-link">
                  <span class="go-to-demo">
                    مشاهده‌ی دمو
                    <i
                      aria-hidden="true"
                      class="iconify"
                      data-icon="feather:arrow-right"
                    />
                  </span>
                </div>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>

    <!--Blog pages-->
    <div
      v-if="
        (props.categories === undefined || props.categories.includes('blog')) &&
          blogDemosFiltered.length > 0
      "
      class="demo-section"
    >
      <div class="demo-section-title">
        <DarkImage
          src="/assets/icons/layouts/layout-1.svg"
          src-dark="/assets/icons/layouts/layout-1-dark.svg"
          alt=""
        />
        <div class="title-meta">
          <h3>صفحات وبلاگ</h3>
          <p>پیش‌نمایش صفحات از پیش ساخته شده</p>
        </div>
      </div>

      <div class="columns is-multiline">
        <!-- Demo item -->
        <div
          v-for="(item, index) in blogDemosFiltered"
          :key="index"
          class="column is-4 has-text-centered"
        >
          <RouterLink
            :to="item.route"
            class="vulk-demo-wrapper loaded is-block"
          >
            <span
              v-if="item.new"
              class="new-tag"
            >جدید</span>
            <img
              class="is-image is-image-light"
              :src="item.screenshot.light"
              alt="Demo screenshot"
              loading="lazy"
            >
            <img
              class="is-image is-image-dark"
              :src="item.screenshot.dark"
              alt="Demo screenshot"
              loading="lazy"
            >
            <div class="circle-overlay" />
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>{{ item.category }}</span>
                  <span>{{ item.name }}</span>
                </div>
                <div class="demo-link">
                  <span class="go-to-demo">
                    مشاهده‌ی دمو
                    <i
                      aria-hidden="true"
                      class="iconify"
                      data-icon="feather:arrow-right"
                    />
                  </span>
                </div>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>

    <!--Sub pages-->
    <div
      v-if="
        (props.categories === undefined ||
          props.categories.includes('subpages')) &&
          subDemosFiltered.length > 0
      "
      class="demo-section"
    >
      <div class="demo-section-title">
        <DarkImage
          src="/assets/icons/layouts/layout-1.svg"
          src-dark="/assets/icons/layouts/layout-1-dark.svg"
          alt=""
        />
        <div class="title-meta">
          <h3>دیگر صفحات</h3>
          <p>پیش‌نمایش صفحات از پیش ساخته شده</p>
        </div>
      </div>

      <div class="columns is-multiline">
        <!-- Demo item -->
        <div
          v-for="(item, index) in subDemosFiltered"
          :key="index"
          class="column is-4 has-text-centered"
        >
          <RouterLink
            :to="item.route"
            class="vulk-demo-wrapper loaded is-block"
          >
            <span
              v-if="item.new"
              class="new-tag"
            >جدید</span>
            <img
              class="is-image is-image-light"
              :src="item.screenshot.light"
              alt="Demo screenshot"
              loading="lazy"
            >
            <img
              class="is-image is-image-dark"
              :src="item.screenshot.dark"
              alt="Demo screenshot"
              loading="lazy"
            >
            <div class="circle-overlay" />
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>{{ item.category }}</span>
                  <span>{{ item.name }}</span>
                </div>
                <div class="demo-link">
                  <span class="go-to-demo">
                    مشاهده‌ی دمو
                    <i
                      aria-hidden="true"
                      class="iconify"
                      data-icon="feather:arrow-right"
                    />
                  </span>
                </div>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>

    <!--Auth pages-->
    <div
      v-if="
        (props.categories === undefined || props.categories.includes('auth')) &&
          authDemosFiltered.length > 0
      "
      class="demo-section"
    >
      <div class="demo-section-title">
        <DarkImage
          src="/assets/icons/layouts/layout-1.svg"
          src-dark="/assets/icons/layouts/layout-1-dark.svg"
          alt=""
        />
        <div class="title-meta">
          <h3>صفحات ورود و ثبت نام</h3>
          <p>پیش‌نمایش صفحات از پیش ساخته شده</p>
        </div>
      </div>

      <div class="columns is-multiline">
        <!-- Demo item -->
        <div
          v-for="(item, index) in authDemosFiltered"
          :key="index"
          class="column is-4 has-text-centered"
        >
          <RouterLink
            :to="item.route"
            class="vulk-demo-wrapper loaded is-block"
          >
            <span
              v-if="item.new"
              class="new-tag"
            >جدید</span>
            <img
              class="is-image is-image-light"
              :src="item.screenshot.light"
              alt="Demo screenshot"
              loading="lazy"
            >
            <img
              class="is-image is-image-dark"
              :src="item.screenshot.dark"
              alt="Demo screenshot"
              loading="lazy"
            >
            <div class="circle-overlay" />
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>{{ item.category }}</span>
                  <span>{{ item.name }}</span>
                </div>
                <div class="demo-link">
                  <span class="go-to-demo">
                    مشاهده‌ی دمو
                    <i
                      aria-hidden="true"
                      class="iconify"
                      data-icon="feather:arrow-right"
                    />
                  </span>
                </div>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>

    <!--Layouts pages-->
    <div
      v-if="
        (props.categories === undefined ||
          props.categories.includes('layouts')) &&
          layoutsDemosFiltered.length > 0
      "
      class="demo-section"
    >
      <div class="demo-section-title">
        <DarkImage
          src="/assets/icons/layouts/layout-1.svg"
          src-dark="/assets/icons/layouts/layout-1-dark.svg"
          alt=""
        />
        <div class="title-meta">
          <h3>طرح‌های فهرست اصلی</h3>
          <p>پیش‌نمایش فهرست‌های از پیش ساخته شده</p>
        </div>
      </div>

      <div class="columns is-multiline">
        <!-- Demo item -->
        <div
          v-for="(item, index) in layoutsDemosFiltered"
          :key="index"
          class="column is-4 has-text-centered"
        >
          <RouterLink
            :to="item.route"
            class="vulk-demo-wrapper loaded is-block"
          >
            <span
              v-if="item.new"
              class="new-tag"
            >جدید</span>
            <img
              class="is-image is-image-light"
              :src="item.screenshot.light"
              alt="Demo screenshot"
              loading="lazy"
            >
            <img
              class="is-image is-image-dark"
              :src="item.screenshot.dark"
              alt="Demo screenshot"
              loading="lazy"
            >
            <div class="circle-overlay" />
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>{{ item.category }}</span>
                  <span>{{ item.name }}</span>
                </div>
                <div class="demo-link">
                  <span class="go-to-demo">
                    مشاهده‌ی دمو
                    <i
                      aria-hidden="true"
                      class="iconify"
                      data-icon="feather:arrow-right"
                    />
                  </span>
                </div>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.demo-search-section {
  margin: 2rem 0;

  &:deep(.label) {
    text-align: center !important;
  }

  :deep(.input) {
    width: 100%;
    height: 44px;
    padding-inline-start: 44px;

    box-shadow: none;
    font-family: var(--font);
    background: var(--input-base-bg-color);
    border-color: var(--input-base-border-color);
    color: var(--input-base-color);
    transition:
      border 0.3s,
      box-shadow 0.3s;

    &::placeholder {
      color: var(--input-placeholder-color);
    }

    &:focus {
      box-shadow: var(--light-box-shadow);
    }
  }

  :deep(.form-icon) {
    height: 44px !important;
    width: 44px !important;
  }
}

.vulk-demos {
  .demo-section {
    margin-bottom: 100px;

    .demo-section-title {
      display: flex;
      align-items: center;
      margin-bottom: 30px;

      img {
        display: block;
        width: 100%;
        max-width: 100px;
        margin-bottom: 0;

        [dir='rtl'] & {
          transform: scaleX(-1);
        }
      }

      .title-meta {
        margin-inline-start: 12px;
        line-height: 1.2;

        h3 {
          font-family: var(--font-alt);
          font-weight: 500;
          font-size: 1.3rem;
          color: var(--title-color);
        }

        p {
          font-family: var(--font);
          font-size: 0.95rem;
          color: var(--light-text);
        }
      }
    }
  }
}

.vulk-demo-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  border: 1px solid var(--fade-grey-dark-5);
  min-height: 205px;

  &:focus-visible {
    outline-offset: var(--accessibility-focus-outline-offset);
    outline-width: var(--accessibility-focus-outline-width);
    outline-color: var(--accessibility-focus-outline-color);
    //outline-style: var(--accessibility-focus-outline-style);
  }

  &:hover,
  &:focus {
    .circle-overlay {
      transform: scale(35);
    }

    .demo-title {
      opacity: 1;
      transform: translateY(0);
      transition-delay: 0 !important;
    }

    .demo-link {
      color: var(--white);
      opacity: 1;
      transform: translateY(0);
      transition-delay: 0 !important;

      .go-to-demo {
        .iconify {
          opacity: 1;
          transform: translateX(5px);

          [dir='rtl'] & {
            transform: translateX(-5px) rotate(180deg);
          }
        }
      }
    }
  }

  img {
    border-radius: 10px;
    max-width: 100%;
    width: 100%;
    border: 1px solid var(--card-border-color);
  }

  .new-tag {
    position: absolute;
    bottom: 10px;
    inset-inline-end: 10px;
    background: red;
    color: var(--white);
    font-family: var(--font);
    padding: 6px 16px;
    border-radius: 8px;
    text-transform: uppercase;
    font-size: 0.8rem;
    z-index: 3;
  }

  .circle-overlay {
    position: absolute;
    top: -60px;
    inset-inline-start: -60px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: var(--primary);
    transform: scale(1);
    transition: all 0.5s;
    z-index: 1;
  }

  .demo-info {
    position: absolute;
    margin: 0 auto;
    top: 26%;
    inset-inline-start: 0;
    inset-inline-end: 0;
    z-index: 2;
    color: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .demo-title {
    color: var(--white);
    font-family: var(--font);
    font-size: 1.5rem;
    font-weight: 600;
    opacity: 0;
    margin-bottom: 12px;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--primary-light-20);
    transform: translateY(20px);
    transition: all 0.3s;
    transition-delay: 0.1s;

    span {
      display: block;

      &:first-child {
        text-transform: uppercase;
        font-size: 0.75rem;
      }

      &:nth-child(2) {
        font-weight: 300;
      }
    }
  }

  .demo-link {
    opacity: 0;
    transform: translateY(20px);
    transition:
      transform 0.3s,
      opacity 0.3s,
      color 0.3s;
    transition-delay: 0.2s;

    .go-to-demo {
      font-family: var(--font);
      color: var(--white);
      font-size: 1rem;
      margin-inline-start: 8px;

      .iconify {
        position: relative;
        vertical-align: middle;
        opacity: 0;
        transform: translateX(0);
        transition: all 0.3s ease-out;

        [dir='rtl'] & {
          transform: translateX(0) rotate(180deg);
        }
      }
    }
  }
}

@media (width <= 767px) {
  .vulk-demo-wrapper {
    min-height: 184px;
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .vulk-demos {
    .demo-section {
      .columns {
        display: flex;

        .column.is-4 {
          min-width: 50% !important;
        }
      }
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: landscape) {
  .vulk-demo-wrapper {
    min-height: 174px;
  }
}
</style>
