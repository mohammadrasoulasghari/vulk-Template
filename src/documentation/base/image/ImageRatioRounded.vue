<script setup lang="ts">
import { imageRatioProps, imageRatioRounded } from '/@src/data/docs/base/images'
</script>

<template>
  <Section
    id="image-rounded-demo"
    bordered-bottom
  >
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="گرد"
            subtitle="ویژگی گوشه گرد برای تصویر"
          />
          <div class="is-flex pt-4">
            <div class="w-full max-w-1/4 px-1">
              <p class="paragraph rem-90">
                نسبت 4 در 3
              </p>
              <ImageRatio
                ratio="4by3"
                rounded
              >
                <img
                  src="https://dummyimage.com/640x480/ededed/000000"
                  alt="ratio image"
                  width="640"
                  height="480"
                >
              </ImageRatio>
            </div>
            <div class="w-full max-w-1/4 px-1">
              <p class="paragraph rem-90">
                نسبت 3 در 4
              </p>
              <ImageRatio
                ratio="3by4"
                rounded
              >
                <img
                  src="https://dummyimage.com/480x640/ededed/000000"
                  alt="ratio image"
                  width="480"
                  height="640"
                >
              </ImageRatio>
            </div>
            <div class="w-full max-w-1/4 px-1">
              <p class="paragraph rem-90">
                نسبت 5 در 4
              </p>
              <ImageRatio
                ratio="5by4"
                rounded
              >
                <img
                  src="https://dummyimage.com/600X480/ededed/000000"
                  alt="ratio image"
                  width="640"
                  height="480"
                >
              </ImageRatio>
            </div>
            <div class="w-full max-w-1/4 px-1">
              <p class="paragraph rem-90">
                نسبت 16 در 9
              </p>
              <ImageRatio
                ratio="16by9"
                rounded
              >
                <img
                  src="https://dummyimage.com/640x360/ededed/000000"
                  alt="ratio image"
                  width="640"
                  height="360"
                >
              </ImageRatio>
            </div>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode
              language="html"
              :code="imageRatioRounded"
            />
          </template>
          <template #props>
            <PrismCode
              language="javascript"
              :code="imageRatioProps"
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
              تصاویر نقش مرکزی در هر برنامه وب و موبایل دارند. کامپوننت نسبت
              تصویر تاریک ولک به شما این امکان را می‌دهد که تصاویری با نسبت
              مناسب فقط با استفاده از پروپ
              <code>ratio</code>
              ایجاد کنید. نگاهی به
              <a
                href="https://bulma.io/documentation/elements/image/"
                class="link"
              >
                مستندات Bulma
              </a>
              بیندازید تا تمام نسبت‌های موجود را مشاهده کنید. همچنین می‌توانید
              تصاویر را با استفاده از پروپ
              <code>rounded</code>
              گرد کنید.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
