<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
import { getNft } from '/@src/utils/api/nft'
import { socialLinks } from '/@src/data/blocks/advanced/social'
import { type Nft } from '/@src/types'

const route = useRoute()
const router = useRouter()
const slug = route.params.slug as string

// get nft data
const nft = ref<Nft>()
async function fetchNft() {
  try {
    nft.value = await getNft(slug)
  } catch {
    router.replace({
      name: 'all',
      params: { all: `not-found-${route.params.slug}` },
    })
  }
}

onMounted(fetchNft)
onServerPrefetch(fetchNft)
watch(() => route.fullPath, fetchNft)
</script>

<template>
  <div>
    <Section
      color="grey"
      overflown
    >
      <Container v-if="nft">
        <NftDetails :nft="nft" />
      </Container>
    </Section>

    <FooterD
      text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
      color="light"
      :social-links="socialLinks"
    />
  </div>
</template>
