<route lang="yaml">
meta:
  footer:
    enabled: false
</route>

<script setup lang="ts">
import { navbarProps, navbar } from '/@src/data/docs/blocks/navbar'
import DocumentationFooter from '/@src/documentation/demo/DocumentationFooter.vue'

const demoLinks = [
  {
    label: 'منو A',
    target: 'navbar-a-demo',
  },
  {
    label: 'منو B',
    target: 'navbar-b-demo',
  },
  {
    label: 'منو C',
    target: 'navbar-c-demo',
  },
  {
    label: 'منو D',
    target: 'navbar-d-demo',
  },
  {
    label: 'منو E',
    target: 'navbar-e-demo',
  },
  {
    label: 'منو F',
    target: 'navbar-f-demo',
  },
  {
    label: 'منو G',
    target: 'navbar-g-demo',
  },
  {
    label: 'منو H',
    target: 'navbar-h-demo',
  },
]
</script>

<template>
  <div>
    <HeroSub
      title="بلاک های نوار فهرست"
      subtitle="بیش از ۸ بلوک نوار جستجو قابل تنظیم منتظر شما هستند تا لایه‌ها، صفحات و محتواهای خود را بسازید."
    />
    <DemoLinks
      :links="demoLinks"
      width="660px"
    />

    <Section id="navbar-a-demo">
      <Container>
        <DemoTitle
          title="نوار فهرست طرح A"
          subtitle="نوع A سبک 1"
          link="navbar-props"
        />
      </Container>

      <div class="py-6">
        <NavbarA />
      </div>
    </Section>

    <Section color="darker">
      <Container>
        <DemoTitle
          title="نوار فهرست طرح A"
          subtitle="نوع A سبک 2"
          link="navbar-props"
          inverted
        />
      </Container>

      <div class="py-6">
        <NavbarA
          mode="inverted"
          dropdown-boxed
        />
      </div>
    </Section>

    <Section id="navbar-b-demo">
      <Container>
        <DemoTitle
          title="نوار فهرست طرح B"
          subtitle="نوار فهرست طرح B سبک 1"
          link="navbar-props"
        />
      </Container>

      <div class="py-6">
        <NavbarB />
      </div>
    </Section>

    <Section color="darker">
      <Container>
        <DemoTitle
          title="نوار فهرست طرح B"
          subtitle="نوع B سبک 2"
          link="navbar-props"
          inverted
        />
      </Container>

      <div class="py-6">
        <NavbarB
          mode="inverted"
          dropdown-boxed
        />
      </div>
    </Section>

    <Section id="navbar-c-demo">
      <Container>
        <DemoTitle
          title="نوار فهرست طرح C"
          subtitle="نوار فهرست طرح C سبک 1"
          link="navbar-props"
        />
      </Container>

      <div class="py-6">
        <NavbarC />
      </div>
    </Section>

    <Section color="darker">
      <Container>
        <DemoTitle
          title="نوار فهرست طرح C"
          subtitle="نوع C سبک 2"
          link="navbar-props"
          inverted
        />
      </Container>

      <div class="py-6">
        <NavbarC mode="inverted" />
      </div>
    </Section>

    <Section
      id="navbar-d-demo"
      color="grey"
    >
      <Container>
        <DemoTitle
          title="نوار فهرست طرح D"
          subtitle="نوار فهرست طرح D سبک 1"
          link="navbar-props"
        />
      </Container>

      <div class="py-6">
        <NavbarD dropdown-boxed />
      </div>
    </Section>

    <Section color="darker">
      <Container>
        <DemoTitle
          title="نوار فهرست طرح D"
          subtitle="نوع D سبک 2"
          link="navbar-props"
          inverted
        />
      </Container>

      <div class="py-6">
        <NavbarD
          mode="inverted"
          dropdown-boxed
        />
      </div>
    </Section>

    <Section id="navbar-e-demo">
      <Container>
        <DemoTitle
          title="نوار فهرست طرح E"
          subtitle="نوار فهرست طرح E سبک 1"
          link="navbar-props"
        />
      </Container>

      <div class="py-6">
        <NavbarE />
      </div>
    </Section>

    <Section color="darker">
      <Container>
        <DemoTitle
          title="نوار فهرست طرح E"
          subtitle="نوع E سبک 2"
          link="navbar-props"
          inverted
        />
      </Container>

      <div class="py-6">
        <NavbarE mode="inverted" />
      </div>
    </Section>

    <Section id="navbar-f-demo">
      <Container>
        <DemoTitle
          title="نوار فهرست طرح F"
          subtitle="نوار فهرست طرح F سبک 1"
          link="navbar-props"
        />
      </Container>

      <div class="py-6">
        <NavbarF />
      </div>
    </Section>

    <Section color="darker">
      <Container>
        <DemoTitle
          title="نوار فهرست طرح F"
          subtitle="نوع F سبک 2"
          link="navbar-props"
          inverted
        />
      </Container>

      <div class="py-6">
        <NavbarF mode="inverted" />
      </div>
    </Section>

    <Section id="navbar-g-demo">
      <Container>
        <DemoTitle
          title="نوار فهرست طرح G"
          subtitle="نوار فهرست طرح G سبک 1"
          link="navbar-props"
        />
      </Container>

      <div class="py-6">
        <NavbarG />
      </div>
    </Section>

    <Section color="darker">
      <Container>
        <DemoTitle
          title="نوار فهرست طرح G"
          subtitle="نوع G سبک 2"
          link="navbar-props"
          inverted
        />
      </Container>

      <div class="py-6">
        <NavbarG mode="inverted" />
      </div>
    </Section>

    <Section id="navbar-h-demo">
      <Container>
        <DemoTitle
          title="نوار فهرست طرح H"
          subtitle="نوار فهرست طرح H سبک 1"
          link="navbar-props"
        />
      </Container>

      <div class="py-6">
        <NavbarH />
      </div>
    </Section>

    <Section color="darker">
      <Container>
        <DemoTitle
          title="نوار فهرست طرح H"
          subtitle="نوع H سبک 2"
          link="navbar-props"
          inverted
        />
      </Container>

      <div class="py-6">
        <NavbarH mode="inverted" />
      </div>
    </Section>

    <Section
      id="navbar-props"
      color="grey"
    >
      <Container>
        <DemoTitle
          title="پراپ‌های نوار فهرست"
          subtitle="پراپ‌های موجود برای نوارد فهرست"
        />

        <DemoTabs>
          <template #code>
            <PrismCode
              language="html"
              :code="navbar"
            />
          </template>
          <template #props>
            <DemoProps :props="navbarProps.props" />
          </template>
          <template #sample>
            <div class="empty-text">
              <p class="paragraph rem-95">
                نمونه داده‌ای برای این مؤلفه موجود نیست
              </p>
            </div>
          </template>
          <template #usage>
            <p class="paragraph rem-95">
              نوار فهرست (Navbar) بلوک اصلی برای ساخت ناوبری در هر وب‌سایت است.
              نوار فهرست‌ها Vulk را می‌توان با استفاده از پراپ
              <code>mode</code>
              سفارشی‌سازی کرد. برخی پراپ‌های اضافی به شما اجازه می‌دهند موقعیت
              نوار فهرست را کنترل کنید.
            </p>
          </template>
        </DemoTabs>
      </Container>
    </Section>

    <!--Docs footer-->
    <DocumentationFooter />
  </div>
</template>

<style lang="scss" scoped>
//Used only for demo navbars, do not use in production
.section {
  overflow: visible;

  .py-6 :deep(.navbar) {
    border: 1px solid var(--navbar-border-color);
    box-shadow: var(--light-box-shadow);
  }

  &.is-darker {
    .py-6 :deep(.navbar) {
      border: none;
      box-shadow: none;
    }
  }
}
</style>
