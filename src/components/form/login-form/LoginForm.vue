<script setup lang="ts">
const options = ref([''])
</script>

<template>
  <form>
    <div class="login-form">
      <Field>
        <FieldLabel label="نام کاربری" />
        <Control icon="feather:user">
          <VInput placeholder="نام کاربری..." />
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

      <div class="setting-item">
        <Checkbox
          v-model="options"
          color="primary"
          name="checkbox-1"
          label="به یاد بسپار"
          value="Remember"
        />
      </div>

      <Control class="mt-4">
        <Button
          color="primary"
          fullwidth
          bold
          raised
        >
          ورود
        </Button>
      </Control>
    </div>
  </form>
</template>
