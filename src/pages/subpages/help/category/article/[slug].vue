<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
import { getArticle } from '/@src/utils/api/article'
import { socialLinks } from '/@src/data/blocks/advanced/social'
import { type HelpCenterArticle } from '/@src/types'

const route = useRoute()
const router = useRouter()
const slug = route.params.slug as string

// get article data
const article = ref<HelpCenterArticle>()
async function fetchArticle() {
  try {
    article.value = await getArticle(slug)
  } catch {
    router.replace({
      name: 'all',
      params: { all: `not-found-${route.params.slug}` },
    })
  }
}

onMounted(fetchArticle)
onServerPrefetch(fetchArticle)
watch(() => route.fullPath, fetchArticle)
</script>

<template>
  <div>
    <Section
      color="grey"
      overflown
    >
      <Container v-if="article">
        <HelpCenterHeader
          :title="article.title"
          subtitle="مقاله"
          compact
        />

        <HelpCenterArticleBlock :article="article" />
      </Container>
    </Section>

    <FooterD
      text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
      color="light"
      :social-links="socialLinks"
    />
  </div>
</template>
