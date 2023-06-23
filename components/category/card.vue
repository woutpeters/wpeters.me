<script setup lang="ts">
interface Props {
  title: string
  icon: string
  color: string
}

withDefaults(defineProps<Props>(), {
  title: 'No title available',
})
</script>

<template>
  <div
    border="rounded"
    text="white"
    transition="duration-500"
    hover="underline scale-[1.05]"
    :style="`background-color: ${color};`"
  >
    <NuxtLink
      :to="`/categories/${title.toLocaleLowerCase()}`"
      flex="~ items-center gap-1"
      p="x-3 y-1"
    >
      <Icon :name="icon" />
      <span>{{ title }}</span>
    </NuxtLink>
  </div>
</template>
