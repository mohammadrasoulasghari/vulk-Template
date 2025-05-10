<script setup lang="ts">
import {
  collectionTitleProps,
  collectionTitle,
} from '/@src/data/docs/base/typography'
</script>

<template>
  <Section
    id="collection-title-base-demo"
    bordered-bottom
  >
    <Container>
      <div class="mx-auto max-w-8">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="عنوان کلکسیونی"
            subtitle="سبک‌های مختلف عنوان کلکسیونی"
          />
          <div class="pt-4">
            <CollectionTitle
              title="ترند شده 🔥"
              subtitle="نگاهی داشته باشید به آیتم‌های ترند شده"
            >
              <template #toolbar>
                <Button :long="2">
                  مشاهده همه
                </Button>
              </template>
            </CollectionTitle>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode
              language="html"
              :code="collectionTitle"
            />
          </template>
          <template #props>
            <PrismCode
              language="javascript"
              :code="collectionTitleProps"
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
              Vulk یک کامپوننت عنوان مجموعه ارائه می‌دهد که می‌توانید به طور
              ایمن در صفحات مبتنی بر مجموعه‌های برنامه‌تان از آن استفاده کنید.
              این کامپوننت چندین پراپ را فراهم می‌کند تا بتوانید محتوا را کنترل
              کنید، با استفاده از پراپ‌های
              <code>title</code>
              و
              <code>subtitle</code>
              . همچنین یک اسلات
              <code>#toolbar</code>
              فراهم می‌کند که می‌توانید برای وارد کردن عناصر اضافی در سمت راست
              از آن استفاده کنید.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
