<script setup lang="ts">
import {
  avatarGroupProps,
  avatarGroup,
  avatarSimpleSample,
} from '/@src/data/docs/base/avatar'

const avatars = [
  {
    picture: '/assets/demo/img/avatars/43.jpg',
  },
  {
    picture: '/assets/demo/img/avatars/42.jpg',
  },
  {
    picture: '/assets/demo/img/avatars/57.jpg',
  },
  {
    picture: '/assets/demo/img/avatars/19.jpg',
  },
  {
    picture: '/assets/demo/img/avatars/25.jpg',
  },
  {
    picture: '/assets/demo/img/avatars/39.jpg',
  },
  {
    picture: '/assets/demo/img/avatars/41.jpg',
  },
]
</script>

<template>
  <Section
    id="avatar-group-demo"
    bordered-bottom
  >
    <Container>
      <div class="mx-auto max-w-6">
        <div class="py-6">
          <DemoTitle
            title="گروه"
            subtitle="گروه‌های آواتار"
          />
          <div
            class="is-flex is-align-items-flex-end is-justify-content-center"
          >
            <AvatarGroup
              size="medium"
              :avatars="avatars"
              :limit="5"
              compact
              counter
            />
          </div>

          <div class="py-4" />

          <div
            class="is-flex is-align-items-flex-end is-justify-content-center"
          >
            <AvatarGroup
              size="small"
              :avatars="avatars"
              :limit="3"
            />
          </div>

          <div class="py-4" />

          <div
            class="is-flex is-align-items-flex-end is-justify-content-center pt-4"
          >
            <AvatarGroup
              :avatars="avatars"
              :limit="5"
              squared
              counter
              compact
            />
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode
              language="html"
              :code="avatarGroup"
            />
          </template>
          <template #props>
            <PrismCode
              language="javascript"
              :code="avatarGroupProps"
            />
          </template>
          <template #sample>
            <PrismCode
              language="javascript"
              :code="avatarSimpleSample"
            />
          </template>
          <template #usage>
            <p class="paragraph rem-95">
              آواتارها به یکی از اجزای اصلی تقریباً تمام برنامه‌های وب و موبایل
              تبدیل شده‌اند. آواتارهای Vulk در طعم‌های مختلف ارائه می‌شوند.
              آواتارها را می‌توان با استفاده از کامپوننت
              <code>&#x3C;AvatarGroup /&#x3E;</code>
              گروه‌بندی کرد. این کامپوننت منتظر یک
              <code>Array</code>
              از آواتارها است. شما همچنین می‌توانید اندازه، شکل، تعداد آواتارهای
              نمایش‌داده‌شده و اینکه آیا می‌خواهید شمارش‌گر برای آواتارهای
              باقی‌مانده و نمایش داده نشده داشته باشید را کنترل کنید.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
