<script lang="ts" setup>
interface Props {
  path: string
  title: string
  date: string
  description: string
  image: string
  alt: string
  ogImage: string
  tags: Array<string>
  published: boolean
}

withDefaults(defineProps<Props>(), {
  path: '/',
  title: 'no-title',
  date: 'no-date',
  description: 'no-description',
  image: '/wpeters.me/blog/no-image_tkiuou.jpg',
  alt: 'no-alt',
  ogImage: '/wpeters.me/blog/no-image_tkiuou.jpg',
  tags: () => [],
  published: false,
})
</script>

<template>
  <article
    class="group"
    text="cool-gray-600 dark:cool-gray-50"
    overflow="hidden"
    border="rounded-2xl"
    shadow="lg"
    bg="cool-gray-50 dark:blue-gray-700"
  >
    <NuxtLink :to="path" grid="~ cols-1 sm:cols-10 gap-1">
      <div grid="sm:col-span-3">
        <NuxtImg
          border="rounded-t-2xl sm:rounded-l-2xl sm:rounded-t-none"
          w="full"
          h="full"
          object="cover center"
          shadow="lg"
          transition="~ duration-500"
          group-hover="scale-[1.02]"
          provider="cloudinary"
          :src="image"
          :alt="alt"
        />
      </div>
      <div grid="sm:col-span-7" p="5">
        <h2 text="xl" font="semibold" p="b-1">
          {{ title }}
        </h2>
        <p text-ellipsis line-clamp-2>
          {{ description }}
        </p>
        <div flex="md:~ gap-2" text="sm" p="t-2 b-1">
          <div flex="~ items-center gap-1">
            <Icon name="mdi:calendar-outline" size="1rem" />
            {{ date }}
          </div>
          <div flex="~ wrap items-center gap-1">
            <Icon name="mdi:tag-outline" size="1rem" />
            <template v-for="tag in tags" :key="tag">
              <span>{{ tag }}</span>
            </template>
          </div>
        </div>
        <div
          flex="~ items-center"
          p="t-2"
          text="teal-600"
          group-hover="underline"
        >
          <p>Lees meer</p>
          <Icon
            name="mdi:arrow-right-thin"
            m="l-1"
            size="1.5rem"
            transition="~ duration-500 ease-in-out"
            group-hover="translate-x-2"
          />
        </div>
      </div>
    </NuxtLink>
  </article>
</template>
