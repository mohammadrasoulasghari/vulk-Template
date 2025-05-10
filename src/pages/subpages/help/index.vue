<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
import { helpCenterTopics, helpCenterCategories } from '/@src/data/pages/help'
import { genericFaq } from '/@src/data/blocks/advanced/faq'
import { boxedPosts } from '/@src/data/pages/nft'
import { socialLinks } from '/@src/data/blocks/advanced/social'
</script>

<template>
  <div>
    <Section color="grey">
      <Container>
        <HelpCenterHeader
          title="مرکز راهنمایی"
          subtitle="منابع ما"
          text="ما منابع خوبی برای کمک به شما در راه‌اندازی پروژه و شروع سریع‌تر آن داریم."
          :topics="helpCenterTopics"
        />
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <SectionTitle
          title="دسته‌بندی‌های یاری رسانی"
          subtitle="نگاهی بیندازید"
        />

        <HelpCenterCategories :categories="helpCenterCategories" />
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <SectionTitle
          title="خواندن سوالات پرتکرار"
          subtitle="سوالی دارید؟"
        />

        <FaqListBoxed :items="genericFaq" />

        <BlogBoxedGrid
          punchline="راحت عین هلو 👌"
          title="منابع لازم برای شروع"
          subtitle="برای خواندن اخبار و نکات و تریک‌ها روزانه حتما مشترک رسانه ما شوید"
          :posts="boxedPosts"
          inverted
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
