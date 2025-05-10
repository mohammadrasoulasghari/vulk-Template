<script setup lang="ts">
import { subtitleProps, subtitle } from '/@src/data/docs/base/typography'
</script>

<template>
  <Section
    id="subtitle-base-demo"
    bordered-bottom
  >
    <Container>
      <div class="mx-auto max-w-8">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="زیرعنوان"
            subtitle="سبک‌های مختلف کامپوننت زیرعنوان"
          />
          <div class="columns pt-4">
            <div class="column is-6">
              <Subtitle
                tag="h3"
                :size="1"
                leading
              >
                این یک زیرعنوان می‌باشد
              </Subtitle>
              <Subtitle
                tag="h3"
                :size="2"
                leading
              >
                این یک زیرعنوان می‌باشد
              </Subtitle>
              <Subtitle
                tag="h3"
                :size="3"
                leading
              >
                این یک زیرعنوان می‌باشد
              </Subtitle>
              <Subtitle
                tag="h4"
                :size="4"
                leading
              >
                این یک زیرعنوان می‌باشد
              </Subtitle>
              <Subtitle
                tag="h4"
                :size="5"
                leading
              >
                این یک زیرعنوان می‌باشد
              </Subtitle>
              <Subtitle
                tag="h4"
                :size="6"
                leading
              >
                این یک زیرعنوان می‌باشد
              </Subtitle>
            </div>
            <div class="column is-6">
              <Subtitle
                tag="h3"
                :size="1"
                weight="thin"
                leading
              >
                این یک زیرعنوان می‌باشد
              </Subtitle>
              <Subtitle
                tag="h3"
                :size="2"
                weight="thin"
                leading
              >
                این یک زیرعنوان می‌باشد
              </Subtitle>
              <Subtitle
                tag="h3"
                :size="3"
                weight="thin"
                leading
              >
                این یک زیرعنوان می‌باشد
              </Subtitle>
              <Subtitle
                tag="p"
                :size="4"
                weight="thin"
                leading
              >
                این یک زیرعنوان می‌باشد
              </Subtitle>
              <Subtitle
                tag="p"
                :size="5"
                weight="thin"
                leading
              >
                این یک زیرعنوان می‌باشد
              </Subtitle>
              <Subtitle
                tag="p"
                :size="6"
                weight="thin"
                leading
              >
                این یک زیرعنوان می‌باشد
              </Subtitle>
            </div>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode
              language="html"
              :code="subtitle"
            />
          </template>
          <template #props>
            <PrismCode
              language="javascript"
              :code="subtitleProps"
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
              ولک یک کامپوننت زیرعنوان ارائه می‌دهد که می‌توانید با اطمینان در
              تمام بخش‌های برنامه خود از آن استفاده کنید. این کامپوننت بسیاری از
              props را ارائه می‌دهد تا بتوانید هر جنبه‌ای از آن را کنترل کنید،
              مانند
              <code>size</code>
              ،
              <code>weight</code>
              ، فاصله‌ها و حتی
              <code>tag</code>
              مربوط به HTML. به طور پیش‌فرض، زیرعنوان‌ها دارای فاصله پایین
              <code>1.5rem</code>
              هستند. برای تغییر این رفتار از props
              <code>narrow</code>
              و
              <code>leading</code>
              استفاده کنید.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
