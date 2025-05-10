<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
import { founders, longTeam } from '/@src/data/blocks/advanced/team'
import { vegetalValues } from '/@src/data/blocks/advanced/values'
import { genericLargeGallery } from '/@src/data/blocks/gallery'
import { customerLogos } from '/@src/data/pages/logos'
import { socialLinks } from '/@src/data/blocks/advanced/social'
</script>

<template>
  <div>
    <Section color="grey">
      <Container>
        <PageTitle
          title="با بنیانگذاران ما آشنا شوید"
          subtitle="مغزهای پشت پرده"
        >
          <template #content>
            <p class="paragraph mx-auto max-w-6">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است.
            </p>
          </template>
        </PageTitle>

        <FoundersSection
          :founders="founders"
          :limit="3"
        />
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <div class="mb-6">
          <SectionTitle
            title="ارزش‌های ما"
            subtitle="فلسفه"
          />
        </div>

        <ValuesSection
          :values="vegetalValues"
          image-height="130px"
        />
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <SectionTitle
          title="با تیم آشنا شوید"
          subtitle="مستعد و شکوفا"
        />

        <TeamBlockC
          :items="longTeam"
          bubbles
          :limit="20"
        />

        <BoxedSection
          minititle="به دسترسی زودهنگام بپیوندید!"
          title="کل کسب و کار تجارت الکترونیک شما، متصل و با هوش مصنوعی"
          subtitle="معرفی وولک"
          content="اولین پلتفرم بهینه سازی بازار که برای بهینه سازی تجارت الکترونیک شما برای رشد هوشمند و استراتژیک طراحی شده است."
          image="/assets/illustrations/chart/circular-people-chart.png"
          dark-image="/assets/illustrations/chart/circular-people-chart-dark.png"
          image-width="800"
          image-height="625"
          cta="درباره محصول ما بیشتر بدانید"
          to="index"
          inverted
        />
      </Container>
    </Section>

    <GalleryBlockB
      :items="genericLargeGallery"
      :limit="2"
    />

    <Section
      color="grey"
      wave="wave-1"
      shape-color="white"
    >
      <Container>
        <CtaBlockA
          title="شروع کنید"
          subtitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
          cta-primary="شروع کنید"
          cta-primary-link="/"
          cta-secondary="بیشتر بدانید"
          cta-secondary-link="/"
          :logos="customerLogos"
          boxed
          shapes
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
