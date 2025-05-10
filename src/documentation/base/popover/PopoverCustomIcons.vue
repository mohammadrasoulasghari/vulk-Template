<script setup lang="ts">
import { popoverCustomIcons, popoverProps } from '/@src/data/docs/base/popover'
import IconPopover from '/@src/components/base/popover/modules/IconPopover.vue'
</script>

<template>
  <Section
    id="custom-icons-demo"
    bordered-bottom
  >
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="آیکون‌های دلخواه"
            subtitle="طرحبندی با آیکون‌های دلخواه"
          />
          <div class="columns pt-4">
            <div class="column is-3 has-text-centered">
              <Popover
                custom
                spacing="medium"
                arrow
                hover
              >
                <template #popover>
                  <IconPopover
                    icon="ion:skull-outline"
                    color="danger"
                    heading="سر خطرناک"
                    content="لورم ایپسوم دلار سیت آمیت، کنسکتاتور آدیپیسینگ الیت. ایام استابیلم اپللاس."
                  />
                </template>
                <p class="paragraph cursor-pointer">
                  موس رو بیار اینجا
                </p>
              </Popover>
            </div>
            <div class="column is-3 has-text-centered">
              <Popover
                custom
                spacing="medium"
                arrow
                hover
              >
                <template #popover>
                  <IconPopover
                    icon="ion:leaf-outline"
                    color="success"
                    heading="محیط زیست"
                    content="لورم ایپسوم دلار سیت آمیت، کنسکتاتور آدیپیسینگ الیت. ایام استابیلم اپللاس."
                  />
                </template>
                <p class="paragraph cursor-pointer">
                  موس رو بیار اینجا
                </p>
              </Popover>
            </div>
            <div class="column is-3 has-text-centered">
              <Popover
                custom
                spacing="medium"
                arrow
                hover
              >
                <template #popover>
                  <IconPopover
                    icon="ion:pizza-outline"
                    color="orange"
                    heading="تیکه‌های پیتزا"
                    content="لورم ایپسوم دلار سیت آمیت، کنسکتاتور آدیپیسینگ الیت. ایام استابیلم اپللاس."
                    rounded
                  />
                </template>
                <p class="paragraph cursor-pointer">
                  موس رو بیار اینجا
                </p>
              </Popover>
            </div>
            <div class="column is-3 has-text-centered">
              <Popover
                custom
                spacing="medium"
                arrow
                hover
              >
                <template #popover>
                  <IconPopover
                    icon="ion:rocket-outline"
                    color="info"
                    heading="ملل استارتاپی"
                    content="لورم ایپسوم دلار سیت آمیت، کنسکتاتور آدیپیسینگ الیت. ایام استابیلم اپللاس."
                    rounded
                  />
                </template>
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
              :code="popoverCustomIcons"
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
