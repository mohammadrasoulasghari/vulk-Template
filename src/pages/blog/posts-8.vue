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
    <Section
      color="grey"
      overflown
    >
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

        <div class="columns">
          <div class="column is-8">
            <BlogList
              :posts="posts"
              single-list
              side-list
            />

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
          </div>

          <div class="column is-4">
            <BlogStickySide>
              <BlogSearch />

              <BlogRecentPosts :posts="posts" />

              <BlogCategories
                :categories="[
                  {
                    name: 'کسب و کار',
                    slug: 'business',
                    postCount: 12,
                  },
                  {
                    name: 'تکنولوژی',
                    slug: 'technology',
                    postCount: 23,
                  },
                  {
                    name: 'استارتاپی',
                    slug: 'startups',
                    postCount: 16,
                  },
                  {
                    name: 'توسعه نرم‌افزار',
                    slug: 'development',
                    postCount: 31,
                  },
                  {
                    name: 'طراحی',
                    slug: 'desgin',
                    postCount: 9,
                  },
                  {
                    name: 'پایه‌ریزی مفهوم',
                    slug: 'conception',
                    postCount: 11,
                  },
                ]"
              />

              <BlogTags
                :tags="[
                  {
                    name: 'طراحی',
                    slug: 'design',
                  },
                  {
                    name: 'UI/UX',
                    slug: 'ui-ux',
                  },
                  {
                    name: 'توسعه نرم‌افزار',
                    slug: 'development',
                  },
                  {
                    name: 'اپ',
                    slug: 'apps',
                  },
                  {
                    name: 'مشارکت در توسعه',
                    slug: 'collaboration',
                  },
                  {
                    name: 'مدیریت',
                    slug: 'management',
                  },
                ]"
              />
            </BlogStickySide>
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
