<script setup lang="ts">
const activeTab = ref('tab1')
</script>

<template>
  <div class="py-6">
    <div class="centered-tabbed-section">
      <div class="section-tabs">
        <a
          class="tab-item"
          :class="activeTab === 'tab1' && 'is-active'"
          href="#"
          @click.prevent="activeTab = 'tab1'"
          @keydown.space.prevent="() => (activeTab = `tab1`)"
        >
          گفتگوهای سازنده
        </a>
        <a
          class="tab-item"
          :class="activeTab === 'tab2' && 'is-active'"
          href="#"
          @click.prevent="activeTab = 'tab2'"
          @keydown.space.prevent="() => (activeTab = `tab2`)"
        >
          فضای خصوصی
        </a>
        <a
          class="tab-item"
          :class="activeTab === 'tab3' && 'is-active'"
          href="#"
          @click.prevent="activeTab = 'tab3'"
          @keydown.space.prevent="() => (activeTab = `tab3`)"
        >
          رشد و توسعه شخصی
        </a>
      </div>

      <div class="tab-outer">
        <transition
          name="fade-slow"
          mode="out-in"
        >
          <div
            v-if="activeTab === 'tab1'"
            class="tab-inner"
          >
            <p class="paragraph mb-4">
              لورم ایپسوم دولور سیت امت، کانسکتتور آدیپیسینگ الیت. این جمله از
              زنون، فیلسوف رواقی است. آن فرد گفت: هیچ‌کدام از این‌ها. بلکه به
              نوعی دیگر؛ برای من کافی است، اما برای خودشان کافی نیست. سپس پیسو
              به من گفت: پس چه؟ چرا؟
            </p>
            <DarkImage
              src="/assets/illustrations/features/creator-highlight-1.png"
              src-dark="/assets/illustrations/features/creator-highlight-1-dark.png"
              width="1000"
              height="711"
              alt=""
            />
          </div>
        </transition>

        <transition
          name="fade-slow"
          mode="out-in"
        >
          <div
            v-if="activeTab === 'tab2'"
            class="tab-inner"
          >
            <p class="paragraph mb-4">
              لورم ایپسوم دولور سیت امت، کانسکتتور آدیپیسینگ الیت. این جمله از
              زنون، فیلسوف رواقی است. آن فرد گفت: هیچ‌کدام از این‌ها. بلکه به
              نوعی دیگر؛ برای من کافی است، اما برای خودشان کافی نیست. سپس پیسو
              به من گفت: پس چه؟ چرا؟
            </p>
            <DarkImage
              src="/assets/illustrations/features/creator-highlight-2.png"
              src-dark="/assets/illustrations/features/creator-highlight-2-dark.png"
              width="1000"
              height="711"
              alt=""
            />
          </div>
        </transition>

        <transition
          name="fade-slow"
          mode="out-in"
        >
          <div
            v-if="activeTab === 'tab3'"
            class="tab-inner"
          >
            <p class="paragraph mb-4">
              لورم ایپسوم دولور سیت امت، کانسکتتور آدیپیسینگ الیت. این جمله از
              زنون، فیلسوف رواقی است. آن فرد گفت: هیچ‌کدام از این‌ها. بلکه به
              نوعی دیگر؛ برای من کافی است، اما برای خودشان کافی نیست. سپس پیسو
              به من گفت: پس چه؟ چرا؟
            </p>
            <DarkImage
              src="/assets/illustrations/features/creator-highlight-3.png"
              src-dark="/assets/illustrations/features/creator-highlight-3-dark.png"
              width="1000"
              height="711"
              alt=""
            />
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.centered-tabbed-section {
  position: relative;
  max-width: 780px;
  margin: 0 auto;

  .section-tabs {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 580px;
    margin: 0 auto 2rem;

    .tab-item {
      font-family: var(--font);
      border: 2px solid var(--button-base-border-color);
      background: var(--button-base-bg-color);
      color: var(--button-base-color);
      border-radius: 0.5rem;
      height: 54px;
      min-width: 210px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 1rem;
      width: calc(33.3% - 2rem);

      &.is-active {
        border-color: var(--primary);
        color: var(--primary);
      }
    }
  }

  .tab-outer {
    .tab-inner {
      img {
        display: block;
        width: 100%;
      }
    }
  }
}

@media only screen and (width <= 767px) {
  .centered-tabbed-section {
    .section-tabs {
      flex-direction: column;

      .tab-item:not(:last-child) {
        margin-bottom: 0.75rem;
      }
    }
  }
}
</style>
