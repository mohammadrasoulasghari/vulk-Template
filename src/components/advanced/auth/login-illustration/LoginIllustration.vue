<script setup lang="ts">
import config from '/@src/app.config'
</script>

<template>
  <div>
    <div class="auth-nav">
      <div class="left" />
      <div class="center">
        <RouterLink
          to="/"
          class="header-item"
        >
          <DarkImage
            :src="config.logo.src"
            :src-dark="config.logo.srcDark"
            alt=""
            :width="config.logo.width"
            :height="config.logo.height"
          />
        </RouterLink>
      </div>
      <div class="right">
        <ThemeToggle />
      </div>
    </div>
    <div class="auth-wrapper">
      <Container>
        <div class="columns is-vcentered">
          <div class="column is-5">
            <div class="form-card">
              <div class="auth-head">
                <Title
                  tag="h2"
                  :size="3"
                  weight="thin"
                  narrow
                >
                  خوش آمدید
                </Title>
                <RouterLink
                  to="/auth/signup-3/"
                  class="rem-90"
                >
                  هنوز حساب کاربری ایجاد نکرده‌ام
                </RouterLink>
              </div>
              <LoginForm />
            </div>
            <div class="forgot-link has-text-centered">
              <RouterLink to="/auth/signup-3/">
                گذرواژه را فراموش کرده‌اید؟
              </RouterLink>
            </div>
          </div>
          <div class="column is-7 is-hidden-mobile">
            <DarkImage
              src="/assets/illustrations/hero/login-hero.svg"
              src-dark="/assets/illustrations/hero/login-hero-dark.svg"
              alt=""
            />
          </div>
        </div>
      </Container>
    </div>
  </div>
</template>

<style scoped lang="scss">
.auth-nav {
  position: absolute;
  top: 0;
  inset-inline-start: 0;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;

  .left,
  .right {
    display: flex;
    align-items: center;
    width: 20%;
  }

  .right {
    justify-content: flex-end;

    .dark-mode {
      transform: scale(0.7);
    }
  }

  .center {
    flex-grow: 2;

    a {
      display: flex;
      justify-content: center;
      align-items: center;

      :deep(img) {
        width: 100%;
        max-width: 40px;
      }
    }
  }
}

.auth-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: var(--wrap-muted-color);

  .form-card {
    background: var(--card-bg-color);
    border: 1px solid var(--card-border-color);
    border-radius: 0.9rem;
    padding: 3.25rem;
    max-width: 400px;
    margin: 2rem auto 0;

    .auth-head {
      margin-bottom: 1.25rem;
      text-align: center;

      a,
      p {
        font-family: var(--font);
      }
    }
  }

  .forgot-link {
    margin-top: 0.75rem;

    a {
      font-family: var(--font-alt);
      font-size: 0.9rem;
      color: var(--light-text);
      transition: color 0.3s;

      &:hover {
        color: var(--primary);
      }
    }
  }
}

/* stylelint-disable */

//IPad Air
@media only screen and (min-device-width: 820px) and (max-device-height: 1180px) and (-webkit-min-device-pixel-ratio: 1.5) and (orientation: portrait) {
  .columns {
    display: block;
    margin: 0;

    .column {
      width: 100%;
      margin: 0 !important;
    }
  }
}

//IPad pro
@media only screen and (min-device-width: 1024px) and (max-device-height: 1366px) and (-webkit-min-device-pixel-ratio: 1.5) and (orientation: portrait) {
  .columns {
    display: block;

    .column {
      width: 100%;
      margin: 0 !important;
    }
  }
}

/* stylelint-enable */
</style>
