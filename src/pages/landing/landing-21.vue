<route lang="yaml">
meta:
  navbar:
    props:
      inverted: true
  footer:
    enabled: false
</route>

<script setup lang="ts">
import {
  speakers,
  conferenceGallery,
  conferenceSchedule,
  eventPlans,
  eventPosts,
} from '/@src/data/pages/conference'
import { customerLogos } from '/@src/data/pages/logos'
import { socialLinks } from '/@src/data/blocks/advanced/social'
</script>

<template>
  <div>
    <HeroD1 />

    <HeaderCta />

    <Section>
      <Container>
        <TimelineTitle
          title="سخنرانان"
          subtitle="سخنرانی‌ها"
          minititle="مسیر خود را هموار سازید"
          color="primary"
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

        <TeamBlockC
          :items="speakers"
          squared
          :limit="8"
        />

        <TimelineTitle
          title="هایلایت‌های سخنرانی‌ها"
          subtitle="زمابندی‌ها"
          minititle="منتظر چه چیزهایی هستیم"
          color="primary"
          :step="2"
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

        <TabbedFeatures />
      </Container>
    </Section>

    <GalleryBlockB
      :items="conferenceGallery"
      :limit="2"
    />

    <Section>
      <Container>
        <TimelineTitle
          title="زمابندی‌ها"
          subtitle="زمابندی‌ها"
          minititle="بریم سر اصل موضوع"
          color="primary"
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

        <EventSchedule :schedule="conferenceSchedule" />
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <TimelineTitle
          title="بلیط حضور را تهیه نمائید"
          subtitle="تهیه بلیط"
          minititle="نحوه شرکت"
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

        <PricingCardsA
          :plans="eventPlans"
          :columns="3"
          label="خرید بلیط"
          rounded
          pulled
          polka-dots
        />
      </Container>
    </Section>

    <Section
      v-background="{
        src: '/assets/demo/img/gallery/53.jpg',
        placeholder: 'https://dummyimage.com/1920x1080/ededed/000000',
      }"
      overlay
    >
      <Container>
        <div class="py-6">
          <CtaBlockA
            title="از دست ندهید"
            subtitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
            cta-primary="شروع کنید"
            cta-primary-link="/about"
            cta-secondary="بیشتر بدانید"
            cta-secondary-link="/about"
            inverted
          />
        </div>
      </Container>
    </Section>

    <Section>
      <Container>
        <TimelineTitle
          title="آخرین خبرها"
          subtitle="اخبار"
          minititle="مطلع بمانید"
          color="primary"
          :step="5"
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

        <BlogGrid
          :posts="eventPosts"
          :limit="3"
          upside-down
        />
      </Container>
    </Section>

    <Section>
      <template #background>
        <SectionMap light />
      </template>
      <Container>
        <CompanyGrid
          title="قدردانی ویژه از اسپانسرهای ما"
          subtitle="همکاری با شرکت‌های موفق و آشنا"
          :logos="customerLogos"
          :limit="20"
        />
      </Container>
    </Section>

    <VenueSection
      weekdays="جمعه، شنبه و یکشنبه"
      time="۲۰، ۲۱ و ۲۲ شهریور؛ ۸ صبح تا ۷ عصر"
      place="پولمان پالاز هتل"
      address="تهران بزرگ راه آزادی پلاک ۹۹"
      background-image="/assets/demo/img/gallery/53.jpg"
      :lng="-118.18105703617726"
      :lat="33.768228572042894"
      :zoom="8"
    />

    <FooterD
      text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
      color="default"
      :social-links="socialLinks"
    />
  </div>
</template>
