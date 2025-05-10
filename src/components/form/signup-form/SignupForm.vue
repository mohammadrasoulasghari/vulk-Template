<script setup lang="ts">
const options = ref([''])
</script>

<template>
  <form>
    <div class="login-form">
      <Field>
        <FieldLabel label="ایمیل" />
        <Control icon="feather:mail">
          <VInput placeholder="آدرس ایمیل..." />
        </Control>
      </Field>
      <Field>
        <FieldLabel label="گذرواژه" />
        <Control icon="feather:lock">
          <VInput
            type="password"
            placeholder="گذرواژه..."
          />
        </Control>
      </Field>
      <Field>
        <FieldLabel label="تکرار گذرواژه" />
        <Control icon="feather:lock">
          <VInput
            type="password"
            placeholder="تکرار گذرواژه..."
          />
        </Control>
      </Field>

      <div class="setting-item">
        <Checkbox
          v-model="options"
          color="primary"
          name="checkbox-1"
          label="قوانین را خوانده و قبول دارم"
          value="terms"
        />
      </div>

      <Control class="mt-4">
        <Button
          color="primary"
          fullwidth
          bold
          raised
        >
          ثبت نام
        </Button>
      </Control>
    </div>
  </form>
</template>
