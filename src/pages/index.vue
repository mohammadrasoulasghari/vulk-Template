<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
import {
  productStacks,
  vulkFeatures,
  vulkExperience,
  vulkBenefits,
  componentFeatures,
} from '/@src/data/demo'
</script>

<template>
  <div>
    <HeroF />

    <Section wave="wave-1">
      <Container>
        <ContentBlockB
          :title="productStacks.title"
          :subtitle="productStacks.subtitle"
          :text="productStacks.text"
          :images="productStacks.images"
        />
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <SectionTitle
          title="تمام ابزارهای لازم برای ساخت و توسعه‌ی پروژه‌های وب"
          subtitle="ویژگی های شگفت انگیز"
        />

        <BoxedFeatures :features="vulkFeatures" />

        <ButtonsCta
          title="دریافت وولک"
          subtitle="قابل دریافت از مارکت راست‌چین"
        >
          <Button
            color="primary"
            href="https://themeforest.net/user/cssninjastudio/portfolio"
            :long="2"
            raised
          >
            <span>همین حالا خرید کنید</span>
          </Button>
          <a
            href="https://support.eltheme.ir"
            class="button second-button"
          >
            با ما چت کنید
          </a>
        </ButtonsCta>
      </Container>
    </Section>

    <Section>
      <Container>
        <SectionTitle
          title="یک وب‌سایت حرفه ای بسازید"
          subtitle="تجربه توسعه دهنده"
        />

        <FeatureBlockB
          size="small"
          :features="vulkExperience"
          :columns="3"
          :limit="8"
        />
      </Container>
    </Section>

    <Section wave="wave-1">
      <Container>
        <SectionTitle
          title="با وولک شروع کنید"
          subtitle="آموزش شروع سریع"
        />
        <Buttons
          alignment="centered"
          class="py-5"
        >
          <Button
            href="https://go.eltheme.ir/discord"
            color="primary"
            :long="2"
            icon-left="fa-brands:discord"
            raised
          >
            <span>دسترسی به دیسکورد</span>
          </Button>
          <Popover
            custom
            spacing="medium"
            arrow
            hover
          >
            <template #popover>
              <IconPopover
                icon="codicon:github-alt"
                color="purple"
                heading="دسترسی به گیت هاب"
                content="نام کاربری خود در گیتهاب را برای ما بفرستید"
              />
            </template>
            <Button
              :long="2"
              icon-left="fa-brands:github"
              raised
            >
              <span>دسترسی به گیت هاب</span>
            </Button>
          </Popover>
        </Buttons>
        <div class="video-player-container-wrapper pb-6">
          <!--Player
            ratio="16by9"
            source="https://www.youtube.com/embed/obX0KgqZnYs?modestbranding=1&rel=0&showinfo=0"
            title="وولک | نمای کلی و شروع سریع"
            embed
          /-->
          <VidStack
            ratio="16by9"
            source="/assets/video/meeting.mp4"
            poster="/assets/screenshots/vulk-yt-cover.png"
            title="عنوان ویدیو"
          />
        </div>
      </Container>
    </Section>

    <Section
      id="template-demos"
      color="grey"
    >
      <Container>
        <SectionTitle
          title="پیش‌نمایش‌های چشم نواز"
          subtitle="طراحی پرمیوم"
        />

        <DemoList />
      </Container>
    </Section>

    <Section wave="wave-1">
      <Container>
        <SectionTitle
          title="وولک یک محصول درجه یک است"
          subtitle="ظرافت در طراحی و کدنویسی"
        />

        <DemoFeatures :features="vulkBenefits" />
      </Container>
    </Section>

    <Section
      id="template-components"
      color="grey"
    >
      <Container>
        <SectionTitle
          title="همه‌ی کامپوننت‌های موجود را مشاهده و بررسی نمائید"
          subtitle="کامپوننت‌های مستقل و قابل استفاده مجدد"
        />

        <FeatureBlockH
          :features="componentFeatures"
          :limit="3"
        />

        <Buttons alignment="centered">
          <Button
            color="primary"
            to="blocks"
            :long="3"
            raised
          >
            <span>تمامی کامپوننت‌ها</span>
          </Button>
        </Buttons>

        <DemoComponents />
      </Container>
    </Section>

    <Section>
      <Container>
        <SectionTitle
          title="سه دلیلی که وولک را انتخاب اول شما می‌کند"
          subtitle="شما این محصول را دوست خواهید داشت"
        />

        <DemoChoice />
      </Container>
    </Section>

    <DemoFooter />
  </div>
</template>
