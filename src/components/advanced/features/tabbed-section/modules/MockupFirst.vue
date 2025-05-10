<script setup lang="ts"></script>

<template>
  <div class="ui-mockup">
    <h3 class="mb-3">
      برند
    </h3>
    <div class="columns is-multiline b-columns-half-tablet-p">
      <div class="column is-6">
        <Field>
          <FieldLabel label="هزینه فروش تبلیغ" />
          <Control>
            <VInput
              value="2%"
              readonly
            />
          </Control>
        </Field>
      </div>
      <div class="column is-6">
        <Field>
          <FieldLabel label=" بودجه روزانه" />
          <Control>
            <VInput
              value="348 تومان"
              readonly
            />
          </Control>
        </Field>
      </div>
    </div>
    <h3 class="mb-3">
      متفرقه
    </h3>
    <div class="columns is-multiline b-columns-half-tablet-p">
      <div class="column is-6">
        <Field>
          <FieldLabel label="هزینه فروش تبلیغ" />
          <Control>
            <VInput
              value="8%"
              readonly
            />
          </Control>
        </Field>
      </div>
      <div class="column is-6">
        <Field>
          <FieldLabel label=" بودجه روزانه" />
          <Control>
            <VInput
              value="871 تومان"
              readonly
            />
          </Control>
        </Field>
      </div>
    </div>
    <div class="button-wrap">
      <Button
        color="primary"
        fullwidth
        bold
        raised
      >
        ایجاد کمپین
      </Button>
    </div>
  </div>
</template>
