<script setup lang="ts"></script>

<template>
  <div class="ui-mockup is-keywords">
    <div class="toolbar">
      <h3>کلمات کلیدی</h3>
      <div class="field">
        <div class="control">
          <NinjaToggle name="demo-toggle" />
        </div>
      </div>
    </div>
    <div class="keywords">
      <div class="keyword">
        <div class="word">
          <span>هدست</span>
        </div>
        <div class="sales">
          <span>1.243.243 تومان</span>
        </div>
      </div>
      <div class="keyword">
        <div class="word">
          <span>ایرپاد</span>
        </div>
        <div class="sales">
          <span>3.518.518 تومان</span>
        </div>
      </div>
      <div class="keyword">
        <div class="word">
          <span>هندزفری</span>
        </div>
        <div class="sales">
          <span>971.47 تومان</span>
        </div>
      </div>
    </div>
    <div class="button-wrap">
      <Button
        color="primary"
        fullwidth
        bold
        raised
      >
        افزودن کلیدواژه
      </Button>
    </div>
  </div>
</template>
