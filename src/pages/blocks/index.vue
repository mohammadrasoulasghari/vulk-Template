<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
import { ref, computed, inject } from 'vue'
import VueScrollTo from 'vue-scrollto'
import DocumentationFooter from '/@src/documentation/demo/DocumentationFooter.vue'
import { blocks, blockGroups } from '/@src/data/blocks'

useHead({
  title: 'کامپوننت‌ها',
})

const rtl: boolean | undefined = inject('rtl')

const scrollTo = VueScrollTo.scrollTo
const activeMenuItem = ref(0)

const filter = ref('')

const filteredData = computed(() => {
  if (filter.value === '') {
    return []
  } else {
    return blocks.filter((item) => {
      return (
        item.icon.match(new RegExp(filter.value, 'i')) ||
        item.name.match(new RegExp(filter.value, 'i')) ||
        item.type.match(new RegExp(filter.value, 'i'))
      )
    })
  }
})
</script>

<template>
  <div>
    <Section
      overflown
      class="z-3"
    >
      <Container>
        <!--Section Title-->
        <div class="is-relative pt-6">
          <div class="py-10">
            <div class="mx-auto max-w-9">
              <PageTitle
                title="کامپوننت‌های وولک را کاوش کنید"
                subtitle="کتابخانه مؤلفه"
              />
              <div class="library-search mx-auto max-w-4 pt-4">
                <Field>
                  <Control icon="feather:search">
                    <VInput
                      v-model="filter"
                      type="text"
                      placeholder="جستجوی کتابخانه..."
                    />
                    <button
                      v-if="filter.length > 0"
                      class="close-search"
                      @click="filter = ''"
                    >
                      <i-feather-x />
                    </button>
                  </Control>
                  <div
                    v-if="filter.length > 0"
                    class="filter-results"
                  >
                    <div class="filter-results-inner">
                      <ul v-if="filteredData.length">
                        <li
                          v-for="result in filteredData"
                          :key="result.name"
                        >
                          <RouterLink :to="result.link">
                            <div class="filter-result-item">
                              <div class="result-icon">
                                <i
                                  class="iconify"
                                  :data-icon="result.icon"
                                />
                              </div>
                              <div class="meta">
                                <h3>{{ result.name }}</h3>
                                <p class="paragraph rem-85">
                                  {{ result.type }}
                                </p>
                              </div>
                              <div class="go-icon">
                                <i-ph-arrow-circle-right-duotone />
                              </div>
                            </div>
                          </RouterLink>
                        </li>
                      </ul>
                      <div v-else-if="!filteredData.length">
                        <div class="search-placeholder">
                          <div>
                            <i-iconoir-google-docs />
                            <h3>چیزی پیدا نشد</h3>
                            <p class="paragraph rem-90">
                              ما نتوانستیم هیچ نتیجه منطبقی پیدا کنیم
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Field>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>

    <Section overflown>
      <Container>
        <div class="vulk-docs">
          <div class="left">
            <div class="left-menu">
              <ul>
                <li
                  v-for="(group, index) in blockGroups"
                  :key="index"
                  role="button"
                  tabindex="0"
                  @click="activeMenuItem = index"
                  @keydown.space.prevent="activeMenuItem = index"
                >
                  <a
                    :class="activeMenuItem === index ? 'is-active' : ''"
                    href="#"
                    @click.prevent="
                      scrollTo(`#components-group-${index}`, 800, {
                        offset: -100,
                      })
                    "
                    @keydown.space.prevent="
                      () =>
                        scrollTo(`#components-group-${index}`, 800, {
                          offset: -100,
                        })
                    "
                  >
                    {{ group.name }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="right">
            <div
              v-for="(group, index) in blockGroups"
              :id="`components-group-${index}`"
              :key="index"
              class="block-group"
            >
              <div class="block-group-header">
                <div class="group-icon">
                  <i
                    class="iconify"
                    :data-icon="group.icon"
                  />
                </div>
                <div class="meta">
                  <h3>{{ group.name }}</h3>
                  <p class="paragraph">
                    {{ group.description }}
                  </p>
                </div>
              </div>
              <div class="block-group-body">
                <div class="columns is-multiline b-columns-third-tablet-p pb-6">
                  <div
                    v-for="(block, i) in group.items"
                    :key="i"
                    class="column is-4"
                  >
                    <RouterLink
                      :to="{ name: block.link }"
                      class="block-link"
                    >
                      <Card padding="1rem">
                        <template #header>
                          <div class="block-head">
                            <DarkImage
                              :src="block.icon"
                              :src-dark="block.iconDark"
                              class="block-icon"
                              :class="{ mirror: rtl }"
                              alt=""
                            />
                          </div>
                        </template>
                        <div
                          :to="{ name: block.link }"
                          class="block-link"
                        >
                          <div>
                            <Title
                              tag="h3"
                              :size="7"
                              weight="semi"
                              narrow
                            >
                              <span>{{ block.name }}</span>
                            </Title>
                            <p class="paragraph rem-85">
                              {{ block.type }}
                            </p>
                          </div>
                          <div>
                            <i
                              class="iconify"
                              data-icon="feather:arrow-right"
                            />
                          </div>
                        </div>
                      </Card>
                    </RouterLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>

    <!--Docs footer-->
    <DocumentationFooter />
  </div>
</template>

<style lang="scss" scoped>
:deep(.page-title) {
  padding-top: 0;
  padding-bottom: 0;
}

.library-search {
  :deep(.input) {
    height: 52px;
    padding-inline-start: 52px;
    border-radius: 0.85rem;
    border-color: var(--input-base-border-color-hover);
  }

  :deep(.field) {
    position: relative;
  }

  :deep(.control) {
    .form-icon {
      height: 52px;
      width: 52px;

      .iconify {
        font-size: 1.5rem;
      }
    }

    .close-search {
      position: absolute;
      top: 0;
      inset-inline-end: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 52px;
      width: 52px;
      font-size: 1rem;
      background: none;
      border: none;
      padding: none;
      color: var(--light-text);
      cursor: pointer;
      transition: color 0.3s;

      &:hover {
        color: var(--primary);
      }
    }
  }
}

.filter-results {
  position: absolute;
  top: 42px;
  inset-inline-start: 0;
  width: 100%;
  background: var(--input-base-bg-color);
  border: 1px solid var(--input-base-border-color-hover);
  border-end-start-radius: 0.85rem;
  border-end-end-radius: 0.85rem;
  border-top: none;

  .filter-results-inner {
    position: relative;
    width: 100%;
    height: 100%;
    padding-top: 0.75rem;

    ul {
      max-height: 290px;
      overflow-y: auto;

      &::-webkit-scrollbar {
        width: 5px !important;
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 10px !important;
        background: rgb(0 0 0 / 20%) !important;
      }
    }

    .filter-result-item {
      padding: 0.75rem 1rem;
      display: flex;
      align-items: center;
      margin: 0 0.5rem;
      width: calc(100% - 1rem);
      border-radius: 0.75rem;
      margin-bottom: 0.5rem;
      transition: background-color 0.3s;

      .result-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        width: 40px;
        min-width: 40px;
        border-radius: 50%;
        background: var(--wrap-muted-color);
        font-size: 1.25rem;
        color: var(--primary);
      }

      .meta {
        margin-inline-start: 0.75rem;
        line-height: 1.2;

        h3 {
          font-family: var(--font-alt);
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--title-color);
        }
      }

      .go-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 36px;
        width: 36px;
        min-width: 36px;
        border-radius: 50%;
        margin-inline-start: auto;
        background: var(--wrap-bg-color);
        box-shadow: var(--spread-shadow);
        font-size: 1.15rem;
        color: var(--primary);
        transform: rotate(235deg) scale(0);
        transition: transform 0.3s;
      }

      &:hover {
        background: var(--wrap-muted-color);

        .go-icon {
          transform: rotate(0) scale(1);
        }
      }
    }

    .search-placeholder {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 200px;
      text-align: center;

      > div {
        position: relative;
        top: -1rem;
      }

      h3 {
        font-family: var(--font-alt);
        font-weight: 600;
        font-size: 0.9rem;
        color: var(--title-color);
      }

      svg {
        font-size: 1.75rem;
        color: var(--primary);
      }
    }
  }
}

.vulk-docs {
  display: flex;

  .left {
    width: calc(300px - 2rem);
    margin-inline-end: 2rem;
    border-inline-end: 1px solid var(--wrap-border-color);

    .left-menu {
      position: sticky;
      top: 110px;

      ul {
        li {
          a {
            position: relative;
            inset-inline-start: 2px;
            display: flex;
            font-family: var(--font);
            margin-bottom: 1rem;
            color: var(--medium-text);
            border-inline-end: 3px solid transparent;

            &.is-active {
              color: var(--primary);
              border-color: var(--primary);
            }
          }
        }
      }
    }
  }

  .right {
    width: calc(100% - 300px);

    .block-group {
      margin-bottom: 3rem;

      .block-group-header {
        display: flex;
        align-items: center;
        margin-bottom: 2rem;

        .group-icon {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 55px;
          width: 55px;
          min-width: 55px;
          border-radius: 50%;
          background: var(--wrap-muted-color);
          font-size: 1.5rem;
          color: var(--primary);
        }

        .meta {
          margin-inline-start: 0.75rem;

          h3 {
            font-size: 1.25rem;
            font-family: var(--font-alt);
            font-weight: 500;
            color: var(--primary);
          }

          .paragraph {
            font-size: 0.95rem;
          }
        }
      }
    }
  }
}

:deep(.card) {
  .block-head {
    background: var(--component-card-bg-color);
    transition: 600ms ease;

    .block-icon img {
      max-width: 100%;
      transform: scale(0.8);
      transition: transform 0.3s;
    }
  }

  &:hover {
    .block-head {
      img {
        transform: scale(0.9);
      }
    }
  }
}

.block-link {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .card {
    width: 100%;
  }

  .iconify {
    font-size: 1.25rem;
    transform: translateX(-5px);

    [dir='rtl'] & {
      transform: translateX(5px) rotate(180deg);
    }

    color: var(--placeholder);
    transition:
      opacity 0.3s,
      transform 0.3s;
  }

  &:hover,
  &:focus {
    outline: none;

    .iconify {
      color: var(--primary);
      transform: translateX(0);

      [dir='rtl'] & {
        transform: translateX(0) rotate(180deg);
      }
    }

    :deep(.title) {
      span {
        color: var(--primary) !important;
      }
    }
  }
}

@media only screen and (width <= 1023px) {
  .vulk-docs {
    .left {
      display: none;
    }

    .right {
      width: 100%;
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: landscape) {
  .vulk-docs {
    .left {
      width: calc(240px - 2rem);
    }

    .right {
      width: calc(100% - 240px);
    }
  }
}
</style>
