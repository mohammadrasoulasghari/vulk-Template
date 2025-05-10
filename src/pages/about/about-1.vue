<script setup lang="ts">
import { viaPlaceholderErrorHandler } from '/@src/utils/viaPlaceholderErrorHandler'

import { customerLogos } from '/@src/data/pages/logos'
import { stats } from '/@src/data/blocks/advanced/stats'
import { values } from '/@src/data/blocks/advanced/values'
import { team } from '/@src/data/blocks/advanced/team'
import { boxedGallery } from '/@src/data/blocks/gallery'
import { press } from '/@src/data/blocks/advanced/press'
</script>

<template>
  <div>
    <Section>
      <Container>
        <div class="py-4">
          <div class="-mt-6">
            <PageTitle
              title="ما کاری می‌کنیم که کار برای همه، در هر جا و هر زمان، معنا پیدا کند."
              subtitle="بیشتر درباره ما"
              aligned
            >
              <template #content>
                <TextSection
                  first-paragraph="لورم ایپسوم دولور سیت امت، کانسکتتور آدیپیسینگ الیت. اما او احساس لذت را تحریک می‌کند. این موضوع در عمل ما قرار ندارد. آیا نخستین چیزی که در اختیار ماست، چیزی است که به یاد می‌آوریم؟ دو پادشاه: ساختار اینترنتی. پاسخ‌ها از آخر به ابتدا، و از وسط به هر دو سمت، همه‌چیز برای همه. آیا باید با خنده به‌جای سخنرانی، از بین برد؟"
                  second-paragraph="لورم ایپسوم دولور سیت امت، کانسکتتور آدیپیسینگ الیت. اما او احساس لذت را تحریک می‌کند. این موضوع در عمل ما قرار ندارد. آیا نخستین چیزی که در اختیار ماست، چیزی است که به یاد می‌آوریم؟ دو پادشاه: ساختار اینترنتی. پاسخ‌ها از آخر به ابتدا، و از وسط به هر دو سمت، همه‌چیز برای همه. آیا باید با خنده به‌جای سخنرانی، از بین برد؟"
                  support-paragraph="راهنماهای ما را بررسی کنید یا با یکی از نمایندگان پشتیبانی مشتریان ما از طریق ایمیل در هر روز کاری (۸ صبح تا ۲ بامداد CET) تماس بگیرید. تیم پشتیبانی ما همچنین از طریق تلفن در ساعات کاری در دسترس است (+1 844-785-456)."
                  contact-address="contact@vulk.com"
                  support-address="support@vulk.com"
                />
              </template>
            </PageTitle>
          </div>

          <img
            src="/assets/demo/img/bg/about-team-2.jpg"
            alt="About image"
            width="1152"
            height="547"
            @error.once="
              (event) => viaPlaceholderErrorHandler(event, '1152x547')
            "
          >

          <LogoMarquee
            :logos="customerLogos"
            compact
          />
        </div>
      </Container>
    </Section>

    <Section
      wave="wave-1"
      shape-color="grey"
    >
      <Container>
        <SectionTitle
          title="با تیم رهبری ما آشنا شوید"
          subtitle="تیمی با استعداد"
        />

        <div class="mt-6">
          <TeamSection :members="team" />
        </div>
      </Container>
    </Section>

    <Section
      color="grey"
      wave="wave-1"
      shape-color="white"
    >
      <Container>
        <div class="pb-6">
          <SideSectionVideo
            subtitle="شرکت ما"
            title="شرکتی پویا با افرادی با استعداد"
            content="چه به دنبال افزایش دامنه دسترسی باشید، چه رشد سودهای اضافی، یا بهینه‌سازی بر اساس معیارهای سفارشی، تیم متخصصان ما اینجا است تا اطمینان حاصل کند که موفقیت بر اساس KPIs شما هدف‌گذاری شده است."
            source="/assets/video/meeting.mp4"
            poster="/assets/demo/img/posters/poster-1c.jpg"
            to="/"
            blob
          />
        </div>

        <NumbersSection
          subtitle="چرا وولک را انتخاب کنیم"
          title="مقیاس داده‌های ما موفقیت شما را پشتیبانی می‌کند"
          content="مقیاس عظیم داده‌های ما به یادگیری ماشین و الگوریتم‌های ما انرژی می‌دهد، بنابراین می‌توانید مطمئن باشید که هر تصمیمی که هوش مصنوعی ما می‌گیرد، تصمیمی هوشمندانه است."
          :numbers="stats"
          animated
        />
      </Container>
    </Section>

    <Section>
      <Container>
        <div class="mb-6">
          <SectionTitle
            title="آنچه ما را تعریف می‌کند"
            subtitle="ارزش‌هایی که ما را به آنچه هستیم تبدیل می‌کند"
          />
        </div>

        <ValuesSection
          :values="values"
          image-height="130px"
        />
      </Container>
    </Section>

    <Section grey>
      <Container>
        <div class="mb-6">
          <SectionTitle
            title="ما در رسانه‌ها هستیم"
            subtitle="آن‌ها درباره ما صحبت می‌کنند"
          />
        </div>

        <PressSection :releases="press" />
      </Container>
    </Section>

    <Section>
      <Container>
        <LogoSection
          title="کارآفرینان و شرکت‌ها را تا دستیابی به نتایج مطلوب همراهی می‌کنیم و تنها نمی‌گذاریم"
          :logos="customerLogos"
        />
        <GalleryBlockC :items="boxedGallery" />
        <div class="mb-12" />
      </Container>
    </Section>
  </div>
</template>
