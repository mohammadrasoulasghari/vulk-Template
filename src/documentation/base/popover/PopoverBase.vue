<script setup lang="ts">
import { popoverBase, popoverProps } from '/@src/data/docs/base/popover'
</script>

<template>
  <Section
    id="popover-placement-demo"
    bordered-bottom
  >
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="جایگیری پاپ آور"
            subtitle="موقعیت‌های ممکن برای انتخاب"
          />
          <div class="columns pt-4">
            <div class="column is-3 has-text-centered">
              <Popover
                content="این یک پاپ آور در بالا می‌باشد"
                placement="top"
                arrow
                hover
              >
                <p class="paragraph cursor-pointer">
                  موس رو بیار اینجا
                </p>
              </Popover>
            </div>
            <div class="column is-3 has-text-centered">
              <Popover
                content="این یک پاپ آور در پایین می‌باشد"
                placement="bottom"
                hover
                arrow
              >
                <p class="paragraph cursor-pointer">
                  موس رو بیار اینجا
                </p>
              </Popover>
            </div>
            <div class="column is-3 has-text-centered">
              <Popover
                content="این یک پاپ آور در چپ می‌باشد"
                placement="left"
                hover
                arrow
              >
                <p class="paragraph cursor-pointer">
                  موس رو بیار اینجا
                </p>
              </Popover>
            </div>
            <div class="column is-3 has-text-centered">
              <Popover
                content="این یک پاپ آور در راست می‌باشد"
                placement="right"
                spacing="medium"
                hover
                arrow
              >
                <p class="paragraph cursor-pointer">
                  موس رو بیار اینجا
                </p>
              </Popover>
            </div>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode
              language="html"
              :code="popoverBase"
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
