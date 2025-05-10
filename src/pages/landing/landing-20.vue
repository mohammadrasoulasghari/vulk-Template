<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
import { starterTemplates } from '/@src/data/pages/development'
import { techLogos, customerLogos } from '/@src/data/pages/logos'
import { socialLinks } from '/@src/data/blocks/advanced/social'
</script>

<template>
  <div>
    <HeroT1 />

    <Section>
      <Container>
        <TimelineTitle
          title="با تهیه پیش‌نویس شروع می‌کنیم"
          subtitle="پیش‌نویس"
          minititle="با روش‌های ما آشنا شوید"
          color="secondary"
          :step="1"
        >
          <template #content>
            <div class="py-6 mx-auto max-w-9">
              <div class="columns b-columns-half-tablet-p">
                <div class="column is-6">
                  <p class="paragraph">
                    لورم ایپسوم دولور سیت امت، کانسکتتور آدیپیسینگ الیت. نامی
                    حسادت‌آمیز است، بدنام و مشکوک. دوستی به دلیل سودجویی جستجو
                    شده است. او گفت: «من درباره نام کار نمی‌کنم.» دو پادشاه:
                    ساختار اینترنتی. آیا فکر می‌کنی که مردم باید به شیوه‌ای
                    متفاوت از فیلسوفان صحبت کنند؟
                  </p>
                </div>
                <div class="column is-6">
                  <p class="paragraph">
                    لورم ایپسوم دولور سیت امت، کانسکتتور آدیپیسینگ الیت. نامی
                    حسادت‌آمیز است، بدنام و مشکوک. دوستی به دلیل سودجویی جستجو
                    شده است. او گفت: «من درباره نام کار نمی‌کنم.» دو پادشاه:
                    ساختار اینترنتی. آیا فکر می‌کنی که مردم باید به شیوه‌ای
                    متفاوت از فیلسوفان صحبت کنند؟
                  </p>
                </div>
              </div>
            </div>
          </template>
        </TimelineTitle>

        <DevWindows />

        <TimelineTitle
          title="ایجاد اپلیکیشن شما"
          subtitle="ساخت و توسعه"
          minititle="سازگاری با اکثر فریم‌ورک‌ها"
          color="primary"
          :step="2"
        >
          <template #subheading>
            <div class="is-flex is-justify-content-center py-4">
              <AvatarGroup
                :avatars="techLogos"
                :limit="5"
                boxed
              />
            </div>
          </template>
          <template #content>
            <div class="py-6 mx-auto max-w-9">
              <div class="columns b-columns-half-tablet-p">
                <div class="column is-6">
                  <p class="paragraph">
                    لورم ایپسوم دولور سیت امت، کانسکتتور آدیپیسینگ الیت. نامی
                    حسادت‌آمیز است، بدنام و مشکوک. دوستی به دلیل سودجویی جستجو
                    شده است. او گفت: «من درباره نام کار نمی‌کنم.» دو پادشاه:
                    ساختار اینترنتی. آیا فکر می‌کنی که مردم باید به شیوه‌ای
                    متفاوت از فیلسوفان صحبت کنند؟
                  </p>
                </div>
                <div class="column is-6">
                  <p class="paragraph">
                    لورم ایپسوم دولور سیت امت، کانسکتتور آدیپیسینگ الیت. نامی
                    حسادت‌آمیز است، بدنام و مشکوک. دوستی به دلیل سودجویی جستجو
                    شده است. او گفت: «من درباره نام کار نمی‌کنم.» دو پادشاه:
                    ساختار اینترنتی. آیا فکر می‌کنی که مردم باید به شیوه‌ای
                    متفاوت از فیلسوفان صحبت کنند؟
                  </p>
                </div>
              </div>
            </div>
          </template>
        </TimelineTitle>

        <Timeline />

        <TimelineTitle
          title="نمایش پرقدرت خود را شروع کنید"
          subtitle="اکنون نوبت شماست"
          color="accent"
          :step="3"
        >
          <template #content>
            <div class="py-6 mx-auto max-w-9">
              <div class="columns b-columns-half-tablet-p">
                <div class="column is-6">
                  <p class="paragraph">
                    لورم ایپسوم دولور سیت امت، کانسکتتور آدیپیسینگ الیت. نامی
                    حسادت‌آمیز است، بدنام و مشکوک. دوستی به دلیل سودجویی جستجو
                    شده است. او گفت: «من درباره نام کار نمی‌کنم.» دو پادشاه:
                    ساختار اینترنتی. آیا فکر می‌کنی که مردم باید به شیوه‌ای
                    متفاوت از فیلسوفان صحبت کنند؟
                  </p>
                </div>
                <div class="column is-6">
                  <p class="paragraph">
                    لورم ایپسوم دولور سیت امت، کانسکتتور آدیپیسینگ الیت. نامی
                    حسادت‌آمیز است، بدنام و مشکوک. دوستی به دلیل سودجویی جستجو
                    شده است. او گفت: «من درباره نام کار نمی‌کنم.» دو پادشاه:
                    ساختار اینترنتی. آیا فکر می‌کنی که مردم باید به شیوه‌ای
                    متفاوت از فیلسوفان صحبت کنند؟
                  </p>
                </div>
              </div>
            </div>
          </template>
        </TimelineTitle>

        <GlobeStats />

        <TimelineTitle
          title="با روش‌های ما آشنا شوید"
          subtitle="مرور کنید"
          minititle="سفر خود را شروع کنید"
          color="primary"
          :step="4"
        >
          <template #content>
            <div class="py-6 mx-auto max-w-9">
              <div class="columns b-columns-half-tablet-p">
                <div class="column is-6">
                  <p class="paragraph">
                    لورم ایپسوم دولور سیت امت، کانسکتتور آدیپیسینگ الیت. نامی
                    حسادت‌آمیز است، بدنام و مشکوک. دوستی به دلیل سودجویی جستجو
                    شده است. او گفت: «من درباره نام کار نمی‌کنم.» دو پادشاه:
                    ساختار اینترنتی. آیا فکر می‌کنی که مردم باید به شیوه‌ای
                    متفاوت از فیلسوفان صحبت کنند؟
                  </p>
                </div>
                <div class="column is-6">
                  <p class="paragraph">
                    لورم ایپسوم دولور سیت امت، کانسکتتور آدیپیسینگ الیت. نامی
                    حسادت‌آمیز است، بدنام و مشکوک. دوستی به دلیل سودجویی جستجو
                    شده است. او گفت: «من درباره نام کار نمی‌کنم.» دو پادشاه:
                    ساختار اینترنتی. آیا فکر می‌کنی که مردم باید به شیوه‌ای
                    متفاوت از فیلسوفان صحبت کنند؟
                  </p>
                </div>
              </div>
            </div>
          </template>
        </TimelineTitle>

        <DualBoxes :templates="starterTemplates" />
      </Container>
    </Section>

    <Section>
      <template #background>
        <SectionMap light />
      </template>
      <Container>
        <CompanyGrid
          title="ما به کسب و کارهای زیر یاری رساندیم تا کسب و کار خود را سرعت دهند"
          :logos="customerLogos"
          :limit="20"
        />
      </Container>
    </Section>

    <FooterD
      text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
      color="default"
      :social-links="socialLinks"
    />
  </div>
</template>
