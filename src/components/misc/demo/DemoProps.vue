<script setup lang="ts">
export interface PropItem {
  name: string
  type: string
  required: string
  default: string
  values: string[]
}

export interface slotItem {
  name: string
  description: string
}

export interface DemoProps {
  props: PropItem[]
  slots?: slotItem[]
}

const props = withDefaults(defineProps<DemoProps>(), {
  slots: () => [],
})
</script>

<template>
  <SimpleTable>
    <SimpleTableRow>
      <SimpleTableHeader>نام</SimpleTableHeader>
      <SimpleTableHeader>نوع</SimpleTableHeader>
      <SimpleTableHeader>الزامی است؟</SimpleTableHeader>
      <SimpleTableHeader>پیشفرض</SimpleTableHeader>
      <SimpleTableHeader>مقادیر</SimpleTableHeader>
    </SimpleTableRow>
    <SimpleTableRow
      v-for="(prop, index) in props.props"
      :key="index"
    >
      <SimpleTableCell color="default">
        {{ prop.name }}
      </SimpleTableCell>
      <SimpleTableCell
        color="green"
        size="small"
      >
        {{ prop.type }}
      </SimpleTableCell>
      <SimpleTableCell
        color="default"
        size="small"
      >
        {{ prop.required === 'true' ? 'بله' : 'خیر' }}
      </SimpleTableCell>
      <SimpleTableCell color="default">
        {{ prop.default }}
      </SimpleTableCell>
      <SimpleTableCell color="default">
        <span
          v-for="(value, v) in prop.values"
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
