<script setup lang="ts">
import { popoverTrigger, popoverProps } from '/@src/data/docs/base/popover'
</script>

<template>
  <Section
    id="popover-trigger-demo"
    bordered-bottom
  >
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="راه‌انداز پاپ آور"
            subtitle="راه‌انداز‌های موجود"
          />
          <div class="columns pt-4">
            <div class="column is-3 has-text-centered">
              <Popover
                content="این پاپ آور با موس راه‌اندازی می‌شود"
                placement="top"
                arrow
                hover
              >
                <Button>موس رو بیار اینجا</Button>
              </Popover>
            </div>
            <div class="column is-3 has-text-centered">
              <Popover
                content="این پاپ آور با کلیک راه‌اندازی می‌شود"
                placement="top"
                arrow
              >
                <Button>کلیک کن</Button>
              </Popover>
            </div>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode
              language="html"
              :code="popoverTrigger"
            />
          </template>
          <template #props>
            <PrismCode
              language="javascript"
              :code="popoverProps"
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
              دکمه‌ها بخش اصلی در تمام برنامه‌های وب و موبایل هستند. دکمه‌های
              Vulk در طعم‌های مختلف موجودند. شما می‌توانید اندازه آواتار را با
              استفاده از خاصیت
              <code>size</code>
              کنترل کنید. مقادیر پذیرفته شده شامل
              <code>medium</code>
              و
              <code>large</code>
              است. همچنین می‌توانید با اضافه کردن خاصیت
              <code>bold</code>
              متن دکمه را برجسته‌تر کنید یا با استفاده از خاصیت
              <code>long</code>
              دکمه را عریض‌تر کنید.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
