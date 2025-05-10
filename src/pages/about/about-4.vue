<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
import { customerLogos } from '/@src/data/pages/logos'
import { iconValues } from '/@src/data/blocks/advanced/values'
import { gridTeam } from '/@src/data/blocks/team'
import { founders } from '/@src/data/blocks/advanced/team'
import { plantValues } from '/@src/data/blocks/advanced/values'
import { socialLinks } from '/@src/data/blocks/advanced/social'
</script>

<template>
  <div>
    <Section color="grey">
      <Container>
        <CompanyStory
          main-title="داستان ما"
          secondary-title="ماموریت ما"
          main-text="کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می‌طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد در این صورت می‌توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
          secondary-text="کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می‌طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد در این صورت می‌توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
          :images="{
            imageOne: '/assets/demo/img/content/375x562/5.jpg',
            imageTwo: '/assets/demo/img/content/400x400/11.jpg',
            imageThree: '/assets/demo/img/content/375x562/6.jpg',
            imageFour: '/assets/demo/img/content/375x562/7.jpg',
            imageFive: '/assets/demo/img/content/400x400/12.jpg',
            imageSix: '/assets/demo/img/content/375x562/8.jpg',
          }"
          reverse
        />
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <SectionTitle
          title="ارزش‌های شرکت ما"
          subtitle="تیم متعهد"
        />

        <ValuesIconSection
          :values="iconValues"
          polka-dots
        />

        <LogoMarquee
          :logos="customerLogos"
          compact
        />
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <SectionTitle
          title="درباره بنیان‌گذاران"
          subtitle="مردان بزرگ"
        />

        <FoundersSection
          :founders="founders"
          :limit="3"
        />
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <SectionTitle
          title="با تیم آشنا شوید"
          subtitle="و دیگر همکاران"
        />

        <TeamBlockE
          :items="gridTeam"
          :limit="12"
          shapes
        />
      </Container>
    </Section>

    <Section
      color="grey"
      wave="wave-1"
      shape-color="white"
    >
      <Container>
        <ValuesSection
          :values="plantValues"
          image-height="130px"
        />

        <CtaBlockB
          title-primary="الان شروع کنید!"
          content-primary="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
          cta-primary="دسترسی آزمایشی"
          cta-primary-link="/"
          title-secondary="اطلاعات بیشتر"
          content-secondary="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
          cta-secondary="تماس با ما"
          cta-secondary-link="/"
          boxed
          shapes
          animated
        />
      </Container>
    </Section>

    <FooterD
      text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
      color="light"
      :social-links="socialLinks"
    />
  </div>
</template>
