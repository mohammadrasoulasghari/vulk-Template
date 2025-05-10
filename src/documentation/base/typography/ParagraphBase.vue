<script setup lang="ts">
import { paragraph } from '/@src/data/docs/base/typography'
</script>

<template>
  <Section
    id="paragraph-base-demo"
    bordered-bottom
  >
    <Container>
      <div class="mx-auto max-w-8">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="پاراگراف"
            subtitle="سبک‌های مختلف متن پاراگراف"
          />
          <div class="columns pt-4">
            <div class="column is-6">
              <p class="paragraph rem-125">
                این یک پاراگراف است در اندازه‌ی 1.25rem
              </p>
              <p class="paragraph">
                این یک پاراگراف است در اندازه‌ی 1rem
              </p>
              <p class="paragraph rem-90">
                این یک پاراگراف است در اندازه‌ی .9rem
              </p>
              <p class="paragraph rem-80">
                این یک پاراگراف است در اندازه‌ی .8rem
              </p>
            </div>
            <div class="column is-6">
              <p class="paragraph">
                این یک پاراگراف است (پیشفرض)
              </p>
              <p class="paragraph text-primary">
                این یک پاراگراف است (اولیه)
              </p>
              <p class="paragraph text-success">
                این یک پاراگراف است (موفقیت)
              </p>
              <p class="paragraph text-info">
                این یک پاراگراف است (اینفو)
              </p>
              <p class="paragraph text-warning">
                این یک پاراگراف است (هشدار)
              </p>
              <p class="paragraph text-danger">
                این یک پاراگراف است (خطر)
              </p>
            </div>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode
              language="html"
              :code="paragraph"
            />
          </template>
          <template #props>
            <div class="empty-text">
              <p class="paragraph rem-95">
                هیچ پارپی ندارد، کامپوننت ویو نیست
              </p>
            </div>
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
              Vulk با استایل‌های پایه برای متن‌های پاراگراف عرضه می‌شود. ما
              تصمیم گرفتیم که آن را به عنوان یک کامپوننت ارائه ندهیم تا امکان
              انعطاف‌پذیری و سفارشی‌سازی بیشتری فراهم شود. برای ایجاد یک
              پاراگراف، به سادگی کلاس
              <code>paragraph</code>
              را به یک عنصر
              <code>p</code>
              HTML اضافه کنید. سپس می‌توانید با استفاده از کمک‌های Vulk مانند
              <code>rem-*</code>
              اندازه فونت را کنترل کنید. همچنین می‌توانید رنگ متن را با استفاده
              از کمک‌های رنگی Vulk مانند
              <code>text-*</code>
              کنترل کنید.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
