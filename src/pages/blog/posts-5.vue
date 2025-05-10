<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
import { posts } from '/@src/data/pages/blog'
import { socialLinks } from '/@src/data/blocks/advanced/social'
</script>

<template>
  <div>
    <Section color="grey">
      <Container>
        <div class="mx-auto max-w-9">
          <PageTitle
            title="خبرهای منتشر شده اخیر"
            subtitle="وبلاگ شرکت"
          >
            <template #content>
              <div class="mx-auto max-w-6 mt-2">
                <p class="paragraph rem-115">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است.
                </p>
              </div>

              <div class="mx-auto max-w-4 mt-4">
                <SubscriptionCompact
                  label="اشتراک"
                  placeholder="ایمیل خود را وارد کنید"
                />
              </div>
            </template>
          </PageTitle>
        </div>

        <BlogList :posts="posts" />

        <div class="load-more py-6">
          <div class="buttons is-centered">
            <Button
              color="primary"
              :long="3"
              raised
              bold
            >
              بارگذاری بیشتر
            </Button>
          </div>
        </div>
      </Container>
    </Section>

    <FooterD
      text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
      color="light"
      :social-links="socialLinks"
    />
  </div>
</template>
