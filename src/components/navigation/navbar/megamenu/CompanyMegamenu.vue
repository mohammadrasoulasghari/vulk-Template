<script setup lang="ts">
const emit = defineEmits(['close'])
</script>

<template>
  <div class="megamenu-inner">
    <button
      class="close-button"
      @click="emit('close')"
    >
      <i
        class="iconify"
        data-icon="feather:arrow-left"
      />
    </button>
    <Container>
      <div class="columns">
        <div class="column is-4">
          <div class="megamenu-block">
            <div class="media">
              <div class="media-left is-company">
                <span
                  class="iconify"
                  data-icon="heroicons-solid:office-building"
                  data-inline="false"
                />
              </div>
              <div class="media-content">
                <h3>ما آینده را می‌سازیم</h3>
                <p>
                  ما در حال به حداکثر رساندن پتانسیل فروشندگان و صاحبان برند از
                  طریق قدرت داده، هوش مصنوعی و تخصص بازار هستیم.
                </p>
                <RouterLink to="/about/">
                  <span>اطلاعات بیشتر درباره ما</span>
                  <i
                    class="iconify"
                    data-icon="feather:arrow-right"
                    data-inline="false"
                  />
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-2">
          <div class="megamenu-block ms-6">
            <h4>ما چه کسی هستیم</h4>
            <ul>
              <li>
                <RouterLink
                  v-preload-link
                  to="/about/about-5/"
                  class="list-link"
                >
                  گروه را ملاقات کنید
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  v-preload-link
                  to="/about/about-6/"
                  class="list-link"
                >
                  با ما همکاری کنید
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  v-preload-link
                  to="/about/about-4/"
                  class="list-link"
                >
                  ارزش های ما
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  v-preload-link
                  to="/about/about-6/"
                  class="list-link"
                >
                  ما را استخدام کنید
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="column is-2">
          <div class="megamenu-block ms-6">
            <h4>به ما برسید</h4>
            <ul>
              <li>
                <RouterLink
                  v-preload-link
                  to="/subpages/contact/"
                  class="list-link"
                >
                  مخاطب
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  v-preload-link
                  to="/subpages/help/"
                  class="list-link"
                >
                  مرکز راهنمایی
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  v-preload-link
                  to="/subpages/help/"
                  class="list-link"
                >
                  پشتیبانی
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  v-preload-link
                  to="/subpages/terms/"
                  class="list-link"
                >
                  مقررات
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="column is-4 b-hidden-mobile b-hidden-tablet-p">
          <div class="megamenu-block is-start-bordered">
            <div class="image-block">
              <DarkImage
                src="/assets/demo/img/tiles/nav-tile.jpeg"
                alt=""
                width="500"
                height="309"
              />
              <div class="inner-block">
                <p class="paragraph rem-85">
                  شروع کنید و نکاتی را برای رشد کسب و کار و افزایش درآمد خود کشف
                  کنید.
                </p>
                <ActionLink
                  label="گواهینامه‌ها"
                  link="/blog"
                  size="small"
                  narrow
                  heavy
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>
