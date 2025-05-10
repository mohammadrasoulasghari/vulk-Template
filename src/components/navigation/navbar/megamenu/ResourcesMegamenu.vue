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
              <div class="media-left is-resources">
                <span
                  class="iconify"
                  data-icon="heroicons-solid:briefcase"
                  data-inline="false"
                />
              </div>
              <div class="media-content">
                <h3>منابع</h3>
                <p>
                  آخرین اخبار کسب و کار، تجارت الکترونیک و روندهای داده ما را
                  بخوانید. منابع مشتری ما را کاوش کنید.
                </p>
                <RouterLink
                  v-preload-link
                  to="/blocks/"
                >
                  <span>باز کردن کتابخانه مولفه</span>
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
            <h4>فرا گرفتن</h4>
            <ul>
              <li>
                <RouterLink
                  v-preload-link
                  to="/blocks/"
                  class="list-link"
                >
                  اجزاء
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  v-preload-link
                  to="/blocks/colors/"
                  class="list-link"
                >
                  رنگ ها
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  v-preload-link
                  to="/blocks/utilities/"
                  class="list-link"
                >
                  دیگر امکانات
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  v-preload-link
                  to="/blocks/plugins/"
                  class="list-link"
                >
                  پلاگین ها
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="column is-2">
          <div class="megamenu-block ms-6">
            <h4>بلاک ها</h4>
            <ul>
              <li>
                <RouterLink
                  v-preload-link
                  to="/blocks/features/"
                  class="list-link"
                >
                  امکانات
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  v-preload-link
                  to="/blocks/content/"
                  class="list-link"
                >
                  محتوا
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  v-preload-link
                  to="/blocks/team/"
                  class="list-link"
                >
                  تیم
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  v-preload-link
                  to="/blocks/testimonials/"
                  class="list-link"
                >
                  گواهینامه‌ها
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
