<script setup lang="ts"></script>

<template>
  <div class="customers-choice py-6">
    <!-- Feature -->
    <div class="columns is-vcentered side-feature b-columns-half-tablet-p">
      <div class="column is-5 is-offset-1 has-text-centered">
        <img
          src="/assets/illustrations/demo/demo-1.svg"
          alt="Benefit image"
        >
      </div>
      <div class="column is-5">
        <Title
          tag="h2"
          :size="4"
          weight="bold"
          leading
        >
          <span>تمرکز بر UI و CSS</span>
        </Title>
        <p class="paragraph is-centered-tablet-portrait">
          وولک قالبی است که برای استفاده آسان و راحت طراحی شده است و بر سرعت
          توسعه تاکید دارد. در داخل این قالب، تعداد زیادی از کامپوننت‌های آماده
          معرفی شده است که فقط با کپی و پیست کردن می‌توانید از آنها برای ساخت
          طرح‌های خود استفاده کنید. همچنین می‌توانید از این کامپونتت‌ها به عنوان
          پایه‌ای برای طرح‌های خود استفاده کرده و به آسانی آنها را ویرایش و
          گسترش دهید.
        </p>
      </div>
    </div>

    <!-- Feature -->
    <div class="columns is-vcentered side-feature b-columns-half-tablet-p">
      <div
        class="column is-5 has-text-centered b-hidden-desktop b-hidden-tablet-p b-hidden-tablet-l"
      >
        <img
          src="/assets/illustrations/demo/demo-2.svg"
          alt="Benefit image"
        >
      </div>
      <div class="column is-5 is-offset-1">
        <Title
          tag="h2"
          :size="4"
          weight="bold"
          leading
        >
          <span>توسعه سریع</span>
        </Title>
        <p class="paragraph is-centered-tablet-portrait">
          وولک همراه با یک سرور داخلی Vite JS ارائه شده است که به شما در
          سفارشی‌سازی قالب کمک می‌کند. ویت کار کامپایل پروژه‌های ویو و استایل‌ها
          را انجام می‌دهد. ویت قابلیت HMR (بارگذاری مجدد سریع) هم دارد که این
          قابلیت هر بار که تغییرات خود را در ویرایشگر محبوبتان ذخیره می‌کنید،
          صفحه را تازه‌سازی می‌کند و نیازی به زدن دکمه رفرش نیست.
        </p>
      </div>
      <div class="column is-5 has-text-centered b-hidden-mobile">
        <img
          src="/assets/illustrations/demo/demo-2.svg"
          alt="Benefit image"
        >
      </div>
    </div>

    <!-- Feature -->
    <div class="columns is-vcentered side-feature b-columns-half-tablet-p">
      <div class="column is-5 is-offset-1 has-text-centered">
        <img
          src="/assets/illustrations/demo/demo-3.svg"
          alt="Benefit image"
        >
      </div>
      <div class="column is-5">
        <Title
          tag="h2"
          :size="4"
          weight="bold"
          leading
        >
          <span>مستندات کامل</span>
        </Title>
        <p class="paragraph is-centered-tablet-portrait">
          مستندات وولک یک راهنمای کامل و ارزشمند می‌باشد، از آنجا که این قالب
          دارای یک پایه کد قوی و تعداد زیادی فایل است لازم است که مستندات را به
          دقت بخوانید؛ هر گونه کمکی که برای پیشبرد پروژه خود نیاز دارید، در آنجا
          موجود است، حتی اگر یک مبتدی باشید هم براحتی می‌توانید قالب را ویرایش
          کنید.
        </p>
      </div>
    </div>
  </div>

  <div class="landing-cta-wrapper">
    <div class="cta-title">
      <h3>به طور انحصاری در مارکت راست‌چین</h3>
      <a
        href="https://rtl-theme.com"
        target="_blank"
        class="custom-button"
      >
        <img
          src="/assets/logos/envato.svg"
          alt="Envato Logo"
        >
        <span>دریافت وولک</span>
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.landing-cta-wrapper {
  padding-bottom: 3rem;

  .cta-title {
    text-align: center;

    h3 {
      font-family: var(--font-main);
      font-weight: 300;
      font-size: 1.5rem;
      color: var(--light-text);
      margin-bottom: 20px;
    }

    .custom-button {
      display: flex;
      align-items: center;
      margin: 10px auto;
      max-width: 200px;
      font-family: var(--font);
      border: 2px solid #d3f4ed;
      border-radius: 100px;
      background: #d3f4ed;
      box-shadow: var(--light-box-shadow);
      transition: all 0.3s;

      img {
        display: block;
        height: 50px;
        width: 50px;
      }

      span {
        display: block;
        font-family: var(--font);
        font-weight: 600;
        font-size: 1rem;
        color: darken(#8edfcf, 18%);
        margin-inline-start: 22px;
        transition: color 0.3s;
      }
    }
  }
}
</style>
