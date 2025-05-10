<script setup lang="ts">
import {
  placeholderProps,
  placeholderBase,
} from '/@src/data/docs/base/placeholder'
</script>

<template>
  <Section
    id="placeholder-component-demo"
    bordered-bottom
  >
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="مکان نگه‌دار"
            subtitle="طرح‌بندی مکان نگه‌دار محتوا"
          />
          <div class="is-flex is-align-items-flex-end pt-4">
            <Placeholder
              title="پروژه   پیدا نشد"
              subtitle="سلام، به نظر می‌رسد که به حالت خالی رسیده‌اید. مطمئن شوید که قبل از اختصاص وظایف، یک پروژه ایجاد کنید."
            >
              <template #image>
                <DarkImage
                  src="/assets/illustrations/hero/working-laptop.svg"
                  src-dark="/assets/illustrations/hero/working-laptop-dark.svg"
                  alt=""
                />
              </template>
              <template #action>
                <Buttons alignment="centered">
                  <Button
                    color="primary"
                    :long="2"
                    raised
                  >
                    پروژه‌ها
                  </Button>
                  <Button :long="2">
                    داشبورد
                  </Button>
                </Buttons>
              </template>
            </Placeholder>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode
              language="html"
              :code="placeholderBase"
            />
          </template>
          <template #props>
            <PrismCode
              language="javascript"
              :code="placeholderProps"
            />
          </template>
          <template #sample>
            <div class="empty-text">
              <p class="paragraph rem-95">
                نمونه داده‌ای برای این مؤلفه موجود نیست
              </p>
            </div>
          </template>
          <template #usage>
            <p class="paragraph rem-95">
              کامپوننت Placeholder در Vulk بسیار انعطاف‌پذیر است و می‌تواند در
              مجموعه‌های مختلفی استفاده شود. هسته این کامپوننت، ویژگی‌های متن
              Placeholder است. دو اسلات اضافی (
              <code>#image</code>
              و
              <code>#action</code>
              ) به شما این امکان را می‌دهند که تصاویر و دکمه‌ها/لینک‌های اکشن را
              وارد کنید.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
