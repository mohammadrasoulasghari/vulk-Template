<script setup lang="ts"></script>

<template>
  <div class="pt-6">
    <div class="timeline">
      <!--Timeline item-->
      <div class="timeline-item">
        <div class="item-left">
          <TimelineCodeWindow />
        </div>
        <div class="item-dot" />
        <div class="item-right">
          <div class="max-w-4">
            <Title
              tag="h2"
              :size="4"
              weight="bold"
              leading
            >
              <span>پوش کنید تا کد مستقر شود</span>
            </Title>
            <p class="paragraph">
              لورم ایپسوم دولور سیت امت، کانسکتتور آدیپیسینگ الیت. هرچند که من
              می‌بینم تو به‌ندرت دلسرد شده‌ای.
            </p>
          </div>
        </div>
      </div>
      <!--Timeline item-->
      <div class="timeline-item">
        <div class="item-left">
          <TimelinePreviewWindow />
        </div>
        <div class="item-dot" />
        <div class="item-right">
          <div class="max-w-4">
            <Title
              tag="h2"
              :size="4"
              weight="bold"
              leading
            >
              <span>آدرس اپ استقرار یافته را دریافت کنید</span>
            </Title>
            <p class="paragraph">
              لورم ایپسوم دولور سیت امت، کانسکتتور آدیپیسینگ الیت. هرچند که من
              می‌بینم تو به‌ندرت دلسرد شده‌ای.
            </p>
          </div>
        </div>
      </div>
      <!--Timeline item-->
      <div class="timeline-item">
        <div class="item-left">
          <TimelineConversation />
        </div>
        <div class="item-dot" />
        <div class="item-right">
          <div class="max-w-4">
            <Title
              tag="h2"
              :size="4"
              weight="bold"
              leading
            >
              <span>با بقیه به اشتراک بگذارید و همکاری کنید</span>
            </Title>
            <p class="paragraph">
              لورم ایپسوم دولور سیت امت، کانسکتتور آدیپیسینگ الیت. هرچند که من
              می‌بینم تو به‌ندرت دلسرد شده‌ای.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.timeline {
  .timeline-item {
    position: relative;
    display: flex;
    align-items: center;

    .item-left {
      position: relative;
      flex-grow: 2;
      padding: 0 3rem;
      width: calc(50% - 1px);
      z-index: 1;
    }

    .item-dot {
      position: relative;
      height: 10px;
      width: 10px;
      min-width: 10px;
      max-width: 10px;
      border-radius: 50%;
      border: 2px solid var(--wrap-border-color);
      background: var(--section-bg-color);
      z-index: 1;
    }

    .item-right {
      position: relative;
      flex-grow: 2;
      padding: 0 3rem;
      width: calc(50% - 1px);
      z-index: 1;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      inset-inline-start: 0;
      inset-inline-end: 0;
      height: 100%;
      width: 1px;
      margin: 0 auto;
      border-inline-end: 1px solid var(--wrap-border-color);
      z-index: 0;
    }

    &:not(:last-child) {
      padding-bottom: 10rem;
    }

    &:last-child {
      padding-bottom: 5rem;
    }
  }
}

@media only screen and (width <= 767px) {
  .timeline {
    .timeline-item {
      flex-direction: column;

      .item-left,
      .item-right,
      .item-dot {
        width: 100%;
      }

      .item-left {
        padding: 1rem 0;
        background: var(--section-bg-color);
      }

      .item-right {
        padding: 1rem 0;
        background: var(--section-bg-color);
        text-align: center;
      }

      .item-dot {
        margin: 5rem 0;
      }
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .timeline {
    .timeline-item {
      .item-left {
        padding-inline-start: 0;
      }

      .item-right {
        padding-inline-end: 0;
      }
    }
  }
}
</style>
