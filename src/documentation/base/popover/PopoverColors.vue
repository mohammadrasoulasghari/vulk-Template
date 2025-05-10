<script setup lang="ts">
import { popoverColors, popoverProps } from '/@src/data/docs/base/popover'
</script>

<template>
  <Section
    id="popover-colors-demo"
    bordered-bottom
  >
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="رنگبندی پاپ آور"
            subtitle="رنگبندی‌های قابل انتخاب برای پاپ آورها"
          />
          <div class="columns is-multiline pt-4">
            <div class="column is-3 has-text-centered">
              <Popover
                content="این یک پاپ آور پیشفرض است"
                placement="top"
                arrow
                hover
              >
                <p class="paragraph cursor-pointer">
                  پیشفرض
                </p>
              </Popover>
            </div>
            <div class="column is-3 has-text-centered">
              <Popover
                content="این یک پاپ آور اولیه است"
                placement="top"
                hover
                arrow
                color="primary"
              >
                <p class="paragraph cursor-pointer">
                  اولیه
                </p>
              </Popover>
            </div>
            <div class="column is-3 has-text-centered">
              <Popover
                content="این یک پاپ آور وارونه است"
                placement="top"
                hover
                arrow
                color="inverted"
              >
                <p class="paragraph cursor-pointer">
                  وارونه
                </p>
              </Popover>
            </div>
            <div class="column is-3 has-text-centered">
              <Popover
                content="این یک پاپ آور اینفو است"
                placement="top"
                spacing="medium"
                hover
                arrow
                color="info"
              >
                <p class="paragraph cursor-pointer">
                  اینفو
                </p>
              </Popover>
            </div>
            <div class="column is-3 has-text-centered">
              <Popover
                content="این یک پاپ آور موفقیت است"
                placement="top"
                hover
                arrow
                color="success"
              >
                <p class="paragraph cursor-pointer">
                  گام‌های موفقیت
                </p>
              </Popover>
            </div>
            <div class="column is-3 has-text-centered">
              <Popover
                content="این یک پاپ آور هشدار است"
                placement="top"
                hover
                arrow
                color="warning"
              >
                <p class="paragraph cursor-pointer">
                  هشدار
                </p>
              </Popover>
            </div>
            <div class="column is-3 has-text-centered">
              <Popover
                content="این یک پاپ آور خطر است"
                placement="top"
                hover
                arrow
                color="danger"
              >
                <p class="paragraph cursor-pointer">
                  خطر
                </p>
              </Popover>
            </div>
            <div class="column is-3 has-text-centered">
              <Popover
                content="این یک پاپ آور بنفش است"
                placement="top"
                hover
                arrow
                color="purple"
              >
                <p class="paragraph cursor-pointer">
                  بنفش
                </p>
              </Popover>
            </div>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode
              language="html"
              :code="popoverColors"
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
