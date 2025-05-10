<script setup lang="ts"></script>

<template>
  <div class="timeline-conversation">
    <!--Message-->
    <div class="conversation-message">
      <div class="message-text">
        <div class="message-box primary">
          <p>
            پیش‌نمایشی از استقرار بروزرسانی اپلیکیشن:
            <br>
            https://shop-git-new-checkout.vercel.app
          </p>
        </div>
        <span class="meta">آنا (تیم فرانت)</span>
      </div>
      <AvatarSimple
        picture="/assets/demo/img/avatars/42.jpg"
        size="medium"
      />
    </div>
    <!--Message-->
    <div class="conversation-message">
      <div class="message-text">
        <div class="message-box primary">
          <p>خوبه. اون مواردی که بررسی کردیم برطرف شدن؟</p>
        </div>
        <span class="meta">جی (تیم تجربه کاربری)</span>
      </div>
      <AvatarSimple
        picture="/assets/demo/img/avatars/45.jpg"
        size="medium"
      />
    </div>
    <!--Message-->
    <div class="conversation-message">
      <div class="message-text">
        <div class="message-box secondary">
          <p>عالیه. منم سمت خودم رو آپدیت زدم آماده کاره!</p>
        </div>
        <span class="meta">کریستین (تیم بک‌اند)</span>
      </div>
      <AvatarSimple
        picture="/assets/demo/img/avatars/29.jpg"
        size="medium"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.timeline-conversation {
  .conversation-message {
    display: flex;
    justify-content: flex-end;

    :deep(.avatar) {
      margin-top: auto;
    }

    .message-text {
      margin-inline-end: 2rem;

      .message-box {
        padding: 1rem;
        border-radius: 1rem;
        border-end-end-radius: 0;
        font-family: var(--font);
        font-size: 0.9rem;
        line-height: 1.3;
        margin-bottom: 0.25rem;

        &.primary {
          background: var(--primary);
          color: var(--white-smoke);
        }

        &.secondary {
          background: var(--secondary);
          color: var(--white-smoke);
        }
      }

      .meta {
        display: block;
        text-align: end;
        margin-inline-start: auto;
        font-family: var(--font);
        font-size: 0.9rem;
        color: var(--light-text);
      }
    }

    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }
}
</style>
