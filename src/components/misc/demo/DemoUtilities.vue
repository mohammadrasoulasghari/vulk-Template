<script setup lang="ts">
export interface UtilityItem {
  category: string
  class: string
  description: string
  acceptedValues: string[]
}

export interface DemoUtilities {
  utilities: UtilityItem[]
}

const props = defineProps<DemoUtilities>()
</script>

<template>
  <SimpleTable>
    <SimpleTableRow>
      <SimpleTableHeader>دسته‌بندی</SimpleTableHeader>
      <SimpleTableHeader>کلاس</SimpleTableHeader>
      <SimpleTableHeader>شرح</SimpleTableHeader>
      <SimpleTableHeader class="w-30">
        مقادیر قابل پذیرش
      </SimpleTableHeader>
    </SimpleTableRow>
    <SimpleTableRow
      v-for="(utility, index) in props.utilities"
      :key="index"
    >
      <SimpleTableCell color="default">
        {{ utility.category }}
      </SimpleTableCell>
      <SimpleTableCell
        color="main"
        size="small"
      >
        {{ utility.class }}
      </SimpleTableCell>
      <SimpleTableCell color="default">
        {{ utility.description }}
      </SimpleTableCell>
      <SimpleTableCell color="default">
        <span
          v-for="(value, v) in utility.acceptedValues"
          :key="v"
          class="has-text-start"
        >
          <span v-if="v === 0">{{ value }}</span>
          <span v-else>
            <span class="text-medium">,</span>
            {{ value }}
          </span>
        </span>
      </SimpleTableCell>
    </SimpleTableRow>
  </SimpleTable>
</template>

<style lang="scss" scoped>
.w-30 {
  width: 30%;
}
</style>
