<script setup lang="ts">
import {
  avatarSimpleProps,
  avatarSimpleSize,
  avatarSimpleSample,
} from '/@src/data/docs/base/avatar'
</script>

<template>
  <Section
    id="avatar-size-demo"
    bordered-bottom
  >
    <Container>
      <div class="mx-auto max-w-6">
        <div class="py-6">
          <DemoTitle
            title="اندازه‌های آواتار"
            subtitle="اندازه‌های موجود برای آواتارها"
          />
          <div
            class="is-flex is-align-items-flex-end is-justify-content-center"
          >
            <div class="px-2">
              <AvatarSimple
                picture="/assets/demo/img/avatars/14.jpg"
                size="small"
              />
            </div>
            <div class="px-2">
              <AvatarSimple picture="/assets/demo/img/avatars/41.jpg" />
            </div>
            <div class="px-2">
              <AvatarSimple
                picture="/assets/demo/img/avatars/30.jpg"
                size="medium"
              />
            </div>
            <div class="px-2">
              <AvatarSimple
                picture="/assets/demo/img/avatars/42.jpg"
                size="large"
              />
            </div>
            <div class="px-2">
              <AvatarSimple
                picture="/assets/demo/img/avatars/39.jpg"
                size="big"
              />
            </div>
            <div class="px-2">
              <AvatarSimple
                picture="/assets/demo/img/avatars/25.jpg"
                size="xl"
              />
            </div>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode
              language="html"
              :code="avatarSimpleSize"
            />
          </template>
          <template #props>
            <PrismCode
              language="javascript"
              :code="avatarSimpleProps"
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
              تبدیل شده‌اند. آواتارهای Vulk در طرح‌های مختلف ارائه می‌شوند. شما
              می‌توانید اندازه آواتار را با استفاده از ویژگی
              <code>size</code>
              کنترل کنید. مقادیر پذیرفته شده عبارتند از
              <code>small</code>
              ،
              <code>medium</code>
              ،
              <code>large</code>
              ،
              <code>big</code>
              ،
              <code>xl</code>
              .
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
