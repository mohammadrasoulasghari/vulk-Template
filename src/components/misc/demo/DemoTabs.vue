<script setup lang="ts">
const activeTab = ref('code')
</script>

<template>
  <div class="demo-tabs">
    <div class="tabs is-boxed">
      <ul>
        <li :class="activeTab === 'code' ? 'is-active' : ''">
          <a
            href="#"
            @click.prevent="activeTab = 'code'"
            @keydown.space.prevent="() => (activeTab = 'code')"
          >
            <i
              class="iconify rem-90"
              data-icon="feather:code"
            />
            <span class="ms-1">کد</span>
          </a>
        </li>
        <li :class="activeTab === 'props' ? 'is-active' : ''">
          <a
            href="#"
            @click.prevent="activeTab = 'props'"
            @keydown.space.prevent="() => (activeTab = 'props')"
          >
            <span>پراپ ها</span>
          </a>
        </li>
        <li :class="activeTab === 'sample' ? 'is-active' : ''">
          <a
            href="#"
            @click.prevent="activeTab = 'sample'"
            @keydown.space.prevent="() => (activeTab = 'sample')"
          >
            <span>نمونه</span>
          </a>
        </li>
        <li :class="activeTab === 'usage' ? 'is-active' : ''">
          <a
            href="#"
            @click.prevent="activeTab = 'usage'"
            @keydown.space.prevent="() => (activeTab = 'usage')"
          >
            <span>اینفو</span>
          </a>
        </li>
      </ul>
    </div>
    <div
      v-if="activeTab === 'code'"
      class="tab-container"
    >
      <slot name="code" />
    </div>
    <div
      v-if="activeTab === 'props'"
      class="tab-container"
    >
      <slot name="props" />
    </div>
    <div
      v-if="activeTab === 'sample'"
      class="tab-container"
    >
      <slot name="sample" />
    </div>
    <div
      v-if="activeTab === 'usage'"
      class="tab-container"
    >
      <slot name="usage" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.demo-tabs {
  .tabs {
    ul {
      border-color: var(--demo-tab-border-color);
    }

    li {
      a {
        font-family: var(--font);
        border-start-start-radius: 0.65rem;
        border-start-end-radius: 0.65rem;
      }

      &.is-active {
        a {
          background-color: var(--demo-tab-bg-color);
          border-color: var(--demo-tab-border-color);
        }
      }

      &:not(.is-active) {
        a {
          color: var(--light-text);

          &:hover {
            background-color: var(--demo-tab-bg-hover-color);
            border-bottom-color: var(--demo-tab-border-color);
          }
        }
      }
    }
  }

  .tab-container {
    min-height: 220px;

    :deep(pre) {
      margin-top: -1.5rem !important;
    }
  }
}
</style>
