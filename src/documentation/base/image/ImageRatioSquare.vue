<script setup lang="ts">
import { imageRatioProps, imageRatioSquare } from '/@src/data/docs/base/images'
</script>

<template>
  <Section
    id="image-square-demo"
    bordered-bottom
  >
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="تصویر مربع"
            subtitle="ویژگی تصویر مربع با نسبت یک به یک"
          />
          <div class="is-flex pt-4">
            <div class="px-1">
              <ImageRatio
                ratio="1by1"
                :square-dimensions="48"
              >
                <img
                  src="https://dummyimage.com/250x250/ededed/000000"
                  alt="ratio image"
                  width="250"
                  height="250"
                >
              </ImageRatio>
            </div>
            <div class="px-1">
              <ImageRatio
                ratio="1by1"
                :square-dimensions="48"
              >
                <img
                  src="https://dummyimage.com/250x250/ededed/000000"
                  alt="ratio image"
                  width="250"
                  height="250"
                >
              </ImageRatio>
            </div>
            <div class="px-1">
              <ImageRatio
                ratio="1by1"
                :square-dimensions="48"
              >
                <img
                  src="https://dummyimage.com/250x250/ededed/000000"
                  alt="ratio image"
                  width="250"
                  height="250"
                >
              </ImageRatio>
            </div>
            <div class="px-1">
              <ImageRatio
                ratio="1by1"
                :square-dimensions="48"
              >
                <img
                  src="https://dummyimage.com/250x250/ededed/000000"
                  alt="ratio image"
                  width="250"
                  height="250"
                >
              </ImageRatio>
            </div>
          </div>

          <div class="is-flex pt-4">
            <div class="px-1">
              <ImageRatio
                ratio="1by1"
                :square-dimensions="64"
                rounded
              >
                <img
                  src="https://dummyimage.com/250x250/ededed/000000"
                  alt="ratio image"
                  width="250"
                  height="250"
                >
              </ImageRatio>
            </div>
            <div class="px-1">
              <ImageRatio
                ratio="1by1"
                :square-dimensions="64"
                rounded
              >
                <img
                  src="https://dummyimage.com/250x250/ededed/000000"
                  alt="ratio image"
                  width="250"
                  height="250"
                >
              </ImageRatio>
            </div>
            <div class="px-1">
              <ImageRatio
                ratio="1by1"
                :square-dimensions="64"
                rounded
              >
                <img
                  src="https://dummyimage.com/250x250/ededed/000000"
                  alt="ratio image"
                  width="250"
                  height="250"
                >
              </ImageRatio>
            </div>
            <div class="px-1">
              <ImageRatio
                ratio="1by1"
                :square-dimensions="64"
                rounded
              >
                <img
                  src="https://dummyimage.com/250x250/ededed/000000"
                  alt="ratio image"
                  width="250"
                  height="250"
                >
              </ImageRatio>
            </div>
          </div>

          <div class="is-flex pt-4">
            <div class="px-1">
              <ImageRatio
                ratio="1by1"
                :square-dimensions="96"
                rounded
              >
                <img
                  src="https://dummyimage.com/250x250/ededed/000000"
                  alt="ratio image"
                  width="250"
                  height="250"
                >
              </ImageRatio>
            </div>
            <div class="px-1">
              <ImageRatio
                ratio="1by1"
                :square-dimensions="96"
                rounded
              >
                <img
                  src="https://dummyimage.com/250x250/ededed/000000"
                  alt="ratio image"
                  width="250"
                  height="250"
                >
              </ImageRatio>
            </div>
            <div class="px-1">
              <ImageRatio
                ratio="1by1"
                :square-dimensions="96"
                rounded
              >
                <img
                  src="https://dummyimage.com/250x250/ededed/000000"
                  alt="ratio image"
                  width="250"
                  height="250"
                >
              </ImageRatio>
            </div>
            <div class="px-1">
              <ImageRatio
                ratio="1by1"
                :square-dimensions="96"
                rounded
              >
                <img
                  src="https://dummyimage.com/250x250/ededed/000000"
                  alt="ratio image"
                  width="250"
                  height="250"
                >
              </ImageRatio>
            </div>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode
              language="html"
              :code="imageRatioSquare"
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
              بیندازید تا تمام نسبت‌های موجود را مشاهده کنید. هنگام استفاده از
              نسبت
              <code>1by1</code>
              ، به یک پروپ اضافی به نام
              <code>square-dimensions</code>
              دسترسی خواهید داشت که به شما کنترل بیشتری بر ابعاد تصاویر می‌دهد.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
