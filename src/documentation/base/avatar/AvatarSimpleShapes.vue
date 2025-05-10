<script setup lang="ts">
import {
  avatarSimpleProps,
  avatarSimpleShapes,
  avatarSimpleSample,
} from '/@src/data/docs/base/avatar'
</script>

<template>
  <Section
    id="avatar-square-demo"
    bordered-bottom
  >
    <Container>
      <div class="mx-auto max-w-7">
        <div class="py-6">
          <DemoTitle
            title="شکل مربعی"
            subtitle="نوع مربعی آواتارها"
          />
          <div
            class="is-flex is-align-items-flex-end is-justify-content-center"
          >
            <div class="px-2">
              <AvatarSimple
                picture="/assets/demo/img/avatars/14.jpg"
                size="small"
                squared
              />
            </div>
            <div class="px-2">
              <AvatarSimple
                picture="/assets/demo/img/avatars/41.jpg"
                squared
              />
            </div>
            <div class="px-2">
              <AvatarSimple
                picture="/assets/demo/img/avatars/30.jpg"
                size="medium"
                squared
              />
            </div>
            <div class="px-2">
              <AvatarSimple
                picture="/assets/demo/img/avatars/42.jpg"
                size="large"
                squared
              />
            </div>
            <div class="px-2">
              <AvatarSimple
                picture="/assets/demo/img/avatars/39.jpg"
                size="big"
                squared
              />
            </div>
            <div class="px-2">
              <AvatarSimple
                picture="/assets/demo/img/avatars/25.jpg"
                size="xl"
                squared
              />
            </div>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode
              language="html"
              :code="avatarSimpleShapes"
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
              می‌توانید شکل آواتار را کنترل کرده و با استفاده از ویژگی
              <code>squared</code>
              آن را به شکل مربع درآورید. این ویژگی
              <code>boolean</code>
              است و نیازی به هیچ مقداری ندارد.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
