<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
import { getCategory } from '/@src/utils/api/category'
import { helpCenterTopics } from '/@src/data/pages/help'
import { socialLinks } from '/@src/data/blocks/advanced/social'
import { type HelpCenterCategory } from '/@src/types'

const route = useRoute()
const router = useRouter()
const slug = route.params.slug as string

// get category data
const category = ref<HelpCenterCategory>()
async function fetchCategory() {
  try {
    category.value = await getCategory(slug)
  } catch {
    router.replace({
      name: 'all',
      params: { all: `not-found-${route.params.slug}` },
    })
  }
}

onMounted(fetchCategory)
onServerPrefetch(fetchCategory)
watch(() => route.fullPath, fetchCategory)
</script>

<template>
  <div>
    <Section
      color="grey"
      overflown
    >
      <Container v-if="category">
        <HelpCenterHeader
          :title="category.name"
          subtitle="دسته‌بندی"
          :topics="helpCenterTopics"
          compact
        />

        <HelpCenterCategoryBlock :category="category" />
      </Container>
    </Section>

    <FooterD
      text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
      color="light"
      :social-links="socialLinks"
    />
  </div>
</template>
