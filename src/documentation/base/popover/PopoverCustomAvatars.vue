<script setup lang="ts">
import {
  popoverCustomAvatars,
  popoverProps,
} from '/@src/data/docs/base/popover'
</script>

<template>
  <Section
    id="custom-avatars-demo"
    bordered-bottom
  >
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="آواتارهای دلخواه"
            subtitle="طرحبندی با آواتارهای دلخواه"
          />
          <div class="columns pt-4">
            <div class="column is-3 has-text-centered">
              <Popover
                custom
                spacing="large"
                arrow
                hover
              >
                <template #popover>
                  <AvatarPopover
                    avatar="/assets/demo/img/avatars/42.jpg"
                    heading="هلن میلر"
                    subheading="مهندس نرم‌افزار"
                    content="لورم ایپسوم دلار سیت آمیت، کنسکتاتور آدیپیسینگ الیت. ایام استابیلم اپللاس. کنفرم تکم، کوام کوئیکوئه ورسو رم سوبیسیاس."
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
                spacing="large"
                arrow
                hover
              >
                <template #popover>
                  <AvatarPopover
                    avatar="/assets/demo/img/avatars/45.jpg"
                    heading="دایرون ویلیامز"
                    subheading="طراح UX"
                    content="لورم ایپسوم دلار سیت آمیت، کنسکتاتور آدیپیسینگ الیت. ایام استابیلم اپللاس. کنفرم تکم، کوام کوئیکوئه ورسو رم سوبیسیاس."
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
                spacing="large"
                arrow
                hover
              >
                <template #popover>
                  <AvatarPopover
                    avatar="/assets/demo/img/avatars/25.jpg"
                    heading="کریس ویات"
                    subheading="توسعه‌دهنده فرانت"
                    content="لورم ایپسوم دلار سیت آمیت، کنسکتاتور آدیپیسینگ الیت. ایام استابیلم اپللاس. کنفرم تکم، کوام کوئیکوئه ورسو رم سوبیسیاس."
                    squared
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
                spacing="large"
                arrow
                hover
              >
                <template #popover>
                  <AvatarPopover
                    avatar="/assets/demo/img/avatars/29.jpg"
                    heading="کریستینا چو"
                    subheading="مدیر تولید"
                    content="لورم ایپسوم دلار سیت آمیت، کنسکتاتور آدیپیسینگ الیت. ایام استابیلم اپللاس. کنفرم تکم، کوام کوئیکوئه ورسو رم سوبیسیاس."
                    squared
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
              :code="popoverCustomAvatars"
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
