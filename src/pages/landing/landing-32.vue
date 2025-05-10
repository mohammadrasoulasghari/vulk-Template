<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
import { customerLogos } from '/@src/data/pages/logos'
import { trendingNfts } from '/@src/data/pages/nft/trending'
import { newNfts } from '/@src/data/pages/nft/new'
import { popularNfts } from '/@src/data/pages/nft/popular'
import { nftSellers } from '/@src/data/pages/nft/sellers'
import { nftCollections } from '/@src/data/pages/nft/collections'
import { faq, boxedPosts } from '/@src/data/pages/nft'
import { nftMarquee } from '/@src/data/pages/nft/marquee'
import { socialLinks } from '/@src/data/blocks/advanced/social'
</script>

<template>
  <div>
    <HeroY1 />

    <Section>
      <Container>
        <SideBenefits
          subtitle="کیفیت محور"
          title="کل کسب و کار شما، چه فروش و چه خرید"
          content="برای رشد کسب و کار خود در بازارهای پویا امروزی، به یک مزیت نیاز دارید. با هوش مصنوعی ما که به طور مداوم در پشت صحنه کار می‌کند، می‌توانید فرصت‌های رشد را باز کنید و در بالاترین سطح ۷/۲۴ رقابت کنید."
          image="/assets/illustrations/nft/main-features.png"
          dark-image="/assets/illustrations/nft/main-features-dark.png"
          image-width="1000"
          image-height="1000"
          :benefits="[
            'تجربه مشتری خود را فورا ارتقا دهید',
            'حفظ مشتریان بیشتر و راضی تر',
            'شروع با تنظیم حساب انجام شده برای شم',
            'پیگیری نتایج در زمان واقعی',
          ]"
          reverse
        />
      </Container>
    </Section>

    <LogoMarquee
      :logos="customerLogos"
      compact
    />

    <Section>
      <Container>
        <NftCarousel :slides="trendingNfts">
          <template #title>
            <CollectionTitle
              title="ترند شده 🔥"
              subtitle="نگاهی داشته باشید به آیتم‌های ترند شده"
            />
          </template>
        </NftCarousel>

        <NftSellerGrid :items="nftSellers">
          <template #title>
            <CollectionTitle
              title="فروشندگان برتر"
              subtitle="نگاهی داشته باشیم به برترین هنرمندان"
            >
              <template #toolbar>
                <ActionLink
                  label="مشاهده همه"
                  link="index"
                />
              </template>
            </CollectionTitle>
          </template>
        </NftSellerGrid>

        <NftCarousel :slides="newNfts">
          <template #title>
            <CollectionTitle
              title="تازه‌ها"
              subtitle="نگاهی داشته باشید بر جدیدترین آیتم‌ها"
            />
          </template>
        </NftCarousel>

        <NftCollectionGrid :items="nftCollections">
          <template #title>
            <CollectionTitle
              title="کالکشن‌های برتر"
              subtitle="برترین کالکشن‌های موجود را بببینید"
            >
              <template #toolbar>
                <ActionLink
                  label="مشاهده همه"
                  link="index"
                />
              </template>
            </CollectionTitle>
          </template>
        </NftCollectionGrid>

        <NftCardGrid :items="popularNfts">
          <template #title>
            <CollectionTitle
              title="محبوب‌ها"
              subtitle="آیتم‌های محبوب را ببینید"
            >
              <template #toolbar>
                <ActionLink
                  label="مشاهده همه"
                  link="index"
                />
              </template>
            </CollectionTitle>
          </template>
        </NftCardGrid>
      </Container>
    </Section>

    <Section>
      <Container>
        <BlogBoxedGrid
          punchline="راحت عین هلو 👌"
          title="منابع لازم برای شروع"
          subtitle="برای خواندن اخبار و نکات و تریک‌ها روزانه حتما مشترک رسانه ما شوید"
          :posts="boxedPosts"
        />

        <DoubleFaqCollapse
          :left="faq.left"
          :right="faq.right"
          chevrons
        />
      </Container>
    </Section>

    <NftMarquee :items="nftMarquee" />

    <Section
      wave="wave-2"
      shape-color="footer-dark"
    >
      <Container>
        <CtaBlockH
          small-text="شروع کنید"
          title="شروع کنید به فروش"
          subtitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
          image="/assets/nft/cta-bg.png"
          dark-image="/assets/nft/cta-bg-dark.png"
        >
          <Buttons>
            <Button
              to="/"
              color="primary"
              :long="2"
              bold
              raised
            >
              شروع کنید
            </Button>
            <Button
              to="/"
              :long="2"
              bold
              raised
            >
              اطلاعات بیشتر
            </Button>
          </Buttons>
        </CtaBlockH>
      </Container>
    </Section>

    <FooterD
      text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
      color="dark"
      :social-links="socialLinks"
    />
  </div>
</template>
