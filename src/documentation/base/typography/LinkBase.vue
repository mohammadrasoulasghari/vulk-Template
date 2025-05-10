<script setup lang="ts">
import { linkProps, link } from '/@src/data/docs/base/typography'
</script>

<template>
  <Section
    id="link-base-demo"
    bordered-bottom
  >
    <Container>
      <div class="mx-auto max-w-8">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="پیوند"
            subtitle="سبک‌های مختلف المان پیوند"
          />
          <div class="columns pt-4">
            <div class="column is-6">
              <div class="mb-4">
                <a
                  href="https://eltheme.ir"
                  class="link"
                >
                  من یک پیوند نرمال هستم
                </a>
              </div>
              <div class="mb-4">
                <RouterLink
                  :to="{ name: 'index' }"
                  class="link"
                >
                  من یک RouterLink هستم
                </RouterLink>
              </div>
              <div class="mb-4">
                <RouterLink
                  :to="{ name: 'index' }"
                  class="link is-disabled"
                >
                  روتر لینک غیرفعال
                </RouterLink>
              </div>
            </div>
            <div class="column is-6">
              <div class="mb-4">
                <ActionLink
                  label="پیوند اقدامی"
                  link="index"
                />
              </div>
              <div class="mb-4">
                <a
                  href="https://eltheme.ir"
                  class="link has-underline"
                >
                  پیوند انیمیشن‌دار
                </a>
              </div>
              <div class="mb-4">
                <RouterLink
                  :to="{ name: 'index' }"
                  class="link has-underline is-reversed"
                >
                  روترلینک انیمیشن‌دار
                </RouterLink>
              </div>
            </div>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode
              language="html"
              :code="link"
            />
          </template>
          <template #props>
            <PrismCode
              language="javascript"
              :code="linkProps"
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
              Links بخشی مهم از هر سیستم تایپوگرافی هستند. شما می‌توانید از
              لینک‌های معمولی مانند
              <code>&#x3C;a&#x3E;&#x3C;/a&#x3E;</code>
              یا
              <code>&#x3C;RouterLink&#x3E;&#x3C;/RouterLink&#x3E;</code>
              استفاده کنید. برای ایجاد لینک با خط زیرین کشویی، از کلاس
              <code>has-underline</code>
              استفاده کنید. به طور جایگزین، می‌توانید از کامپوننت ویژه‌ای به نام
              <code>&#x3C;ActionLink&#x3E;&#x3C;/ActionLink&#x3E;</code>
              استفاده کنید تا لینکی با یک فلش کشویی در حالت هاور نمایش دهید.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
