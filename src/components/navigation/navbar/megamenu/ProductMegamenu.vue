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
              <div class="media-left is-bolt">
                <span
                  class="iconify"
                  data-icon="heroicons-solid:lightning-bolt"
                  data-inline="false"
                />
              </div>
              <div class="media-content">
                <h3>ویژگی های عالی</h3>
                <p>
                  وولک یک کیت UI ویو ۳ است که ساختن رابط های زیبا را آسان می
                  کند.
                </p>
                <RouterLink
                  v-preload-link
                  to="/blocks/colors/"
                >
                  <span>نمای کلی رنگ قالب</span>
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
            <h4>دموها</h4>
            <ul>
              <li>
                <RouterLink
                  v-preload-link
                  to="/landing/"
                  class="list-link"
                >
                  صفحات ورود
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  v-preload-link
                  to="/about/"
                  class="list-link"
                >
                  صفحات درباره ما
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  v-preload-link
                  to="/pricing/"
                  class="list-link"
                >
                  صفحات قیمت گذاری
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  v-preload-link
                  to="/subpages/"
                  class="list-link"
                >
                  صفحات فرعی
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="column is-2">
          <div class="megamenu-block ms-6">
            <h4 class="is-vhidden">
              دموها
            </h4>
            <ul>
              <li>
                <RouterLink
                  v-preload-link
                  to="/blog/"
                  class="list-link"
                >
                  صفحات وبلاگ
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  v-preload-link
                  to="/auth/"
                  class="list-link"
                >
                  صفحات احراز هویت
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  v-preload-link
                  to="/master/"
                  class="list-link"
                >
                  چیدمان ها
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  v-preload-link
                  to="/blocks/"
                  class="list-link"
                >
                  اجزاء
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="column is-4">
          <div class="megamenu-block is-start-bordered">
            <div class="media">
              <div class="media-content">
                <h3>مستندات وولک</h3>
                <p>
                  درباره اینکه چگونه می‌توانید از کتابخانه مؤلفه وولک بیشترین
                  بهره را ببرید بیشتر بیاموزید.
                </p>
                <a href="https://docs.eltheme.ir/vulk">
                  <span>مستندات را بخوانید</span>
                  <i
                    class="iconify"
                    data-icon="feather:arrow-right"
                    data-inline="false"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>
