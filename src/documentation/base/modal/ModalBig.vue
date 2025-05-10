<script setup lang="ts">
import { modalProps, modalBig } from '/@src/data/docs/base/modal'

const modalBigOpen = ref(false)
</script>

<template>
  <Section
    id="modal-big-demo"
    bordered-bottom
  >
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="مودال"
            subtitle="سبک‌های مختلف مودال خیلی بزرگ"
          />
          <div class="pt-4">
            <Button
              bold
              @click="modalBigOpen = true"
            >
              باز کردن مودال خیلی بزرگ
            </Button>

            <Modal
              title="مودال خیلی بزرگ"
              :open="modalBigOpen"
              size="big"
              actions="center"
              noscroll
              @close="modalBigOpen = false"
            >
              <template #content>
                <PlaceholderSection
                  title="دریافت بسته پرمیوم"
                  subtitle="با ارتقاء به نسخه پرمیوم، ویژگی‌ها و ابزارهای کسب‌وکار بیشتری را باز کنید."
                >
                  <template #image>
                    <DarkImage
                      src="/assets/illustrations/features/vr.svg"
                      src-dark="/assets/illustrations/features/vr-dark.svg"
                      alt=""
                    />
                  </template>
                </PlaceholderSection>
              </template>
              <template #action>
                <Button
                  color="primary"
                  :long="2"
                  raised
                >
                  تأیید
                </Button>
              </template>
            </Modal>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode
              language="html"
              :code="modalBig"
            />
          </template>
          <template #props>
            <PrismCode
              language="javascript"
              :code="modalProps"
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
              مدال‌ها بخش بسیار مهمی از برنامه‌های مدرن و پویا هستند. مدال‌های
              ولک با ویژگی‌هایی برای سفارشی‌سازی ارائه می‌شوند. همچنین آن‌ها
              اسلات‌هایی برای اقدام‌ها (#action، #cancel) و محتوا (#content)
              فراهم می‌کنند. شما می‌توانید با استفاده از ویژگی
              <code>actions</code>
              تنظیمات مربوط به موقعیت اقدام‌ها را سفارشی کنید. همچنین می‌توانید
              دکمه‌ها را با استفاده از ویژگی
              <code>rounded</code>
              گرد کنید. مدال همچنین می‌تواند با استفاده از ویژگی
              <code>noscroll</code>
              اسکرول صفحه را غیرفعال کند و با استفاده از ویژگی
              <code>noclose</code>
              بستن مدال با کلیک بر روی پس‌زمینه را غیر فعال کند.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
