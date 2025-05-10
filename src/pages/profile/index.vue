<route lang="yaml">
meta:
  transition: no-transition
  footer:
    enabled: false
</route>

<script setup lang="ts">
import {
  profileProjects,
  profileSkills,
  profileEducation,
  profileExperiences,
} from '/@src/data/blocks/advanced/profile'
</script>

<template>
  <div>
    <Section color="grey">
      <Container>
        <ProfileWrapper>
          <ProfileBio
            bio="لورم ایپسوم دولور سیت امت، کانسکتتور آدیپیسینگ الیت. این جمله از زنون، فیلسوف رواقی است. آن فرد گفت: هیچ‌کدام از این‌ها. بلکه به نوعی دیگر؛ برای من کافی است، اما برای خودشان کافی نیست. سپس پیسو به من گفت: پس چه؟ چرا؟"
          />

          <ProfileProjects :projects="profileProjects" />

          <ProfileSkills :skills="profileSkills" />

          <ProfileExperience :experiences="profileExperiences" />

          <ProfileEducation :education="profileEducation" />
        </ProfileWrapper>
      </Container>
    </Section>
  </div>
</template>
