<script setup lang="ts">
import { makeFirstCharUpper } from '@/utils/helper'

const route = useRoute()

// take category from route params & make first char upper
const category = computed(() => {
  const name = route.params.category || ''
  let strName = ''

  if (Array.isArray(name)) strName = name.at(0) || ''
  else strName = name
  return makeFirstCharUpper(strName)
})
</script>

<template>
  <div>
    <div p="6" m="y-4" border="rounded-md" bg="gray-200 dark:blue-gray-700">
      <span
        font="semibold leading-tight"
        text="cool-gray-600 dark:cool-gray-50"
        md:text="xl"
        m="y-5"
      >
        {{ category }}
      </span>
    </div>
  </div>
</template>
