export const contactBlockBProps = {
  props: [
    {
      name: 'title',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'subtitle',
      type: 'string',
      required: 'true',
      default: 'undefined',
      values: ['string'],
    },
    {
      name: 'lng',
      type: 'number',
      required: 'true',
      default: 'undefined',
      values: ['number'],
    },
    {
      name: 'lat',
      type: 'number',
      required: 'true',
      default: 'undefined',
      values: ['number'],
    },
    {
      name: 'zoom',
      type: 'number',
      required: 'true',
      default: 'undefined',
      values: ['number'],
    },
  ],
  slots: [],
}

export const contactBlockB = `
<template>
  <SideContact
    title="مخاطب Us"
    subtitle="برای تماس با ما فرم زیر را پر کنید"
    :lng="12.550343"
    :lat="55.665957"
    :zoom="16"
  />
</template>
`
