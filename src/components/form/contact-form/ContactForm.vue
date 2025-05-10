<script setup lang="ts"></script>

<template>
  <div class="contact-form">
    <form>
      <div class="columns is-multiline">
        <div class="column is-6">
          <Field>
            <FieldLabel label="نام">
              نام
            </FieldLabel>
            <Control icon="feather:user">
              <VInput placeholder="نام کوچک شما" />
            </Control>
          </Field>
        </div>
        <div class="column is-6">
          <Field>
            <FieldLabel label="نام خانوادگی">
              نام خانوادگی
            </FieldLabel>
            <Control icon="feather:user">
              <VInput placeholder="نام خانوادگی شما" />
            </Control>
          </Field>
        </div>
        <div class="column is-12">
          <Field>
            <FieldLabel label="نام">
              آدرس ایمیل
            </FieldLabel>
            <Control icon="feather:mail">
              <VInput placeholder="آدرس ایمیل شما" />
            </Control>
          </Field>
        </div>
        <div class="column is-12">
          <Field>
            <FieldLabel label="نام">
              پیغام
            </FieldLabel>
            <Control>
              <VTextarea
                :rows="4"
                placeholder="پیغام خود را بنویسید..."
              />
            </Control>
          </Field>
        </div>
        <div class="column is-12">
          <Control>
            <Button
              color="primary"
              bold
              raised
              fullwidth
            >
              <span>ارسال پیغام</span>
            </Button>
          </Control>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped lang="scss">
.contact-form {
  position: relative;

  .column {
    padding: 0.4rem;
  }
}
</style>
