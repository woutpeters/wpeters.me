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
    <NuxtLink :to="path">
      <NuxtImg
        h="md:36 lg:48"
        w="full"
        group-hover="scale-[1.02]"
        object="cover center"
        border="rounded-t-2xl"
        transition="all duration-500"
        shadow="lg"
        provider="cloudinary"
        :src="image"
        :alt="alt"
      />
      <div p="x-3 b-4">
        <div p="t-3 b-2">
          <div flex="~ items-center gap-1">
            <Icon name="mdi:calendar-outline" size="1rem" />
            {{ date }}
          </div>
          <div flex="~ items-center wrap gap-1">
            <Icon name="mdi:tag-outline" />
            <template v-for="tag in tags" :key="tag">
              <span>{{ tag }}</span>
            </template>
          </div>
        </div>
        <h2 text="xl" font="semibold" m="b-2" group-hover="text-teal-600">
          {{ title }}
        </h2>
        <p text="ellipsis base" line-clamp="2">
          {{ description }}
        </p>
        <div
          flex="~ items-center"
          text="teal-600"
          p="y-2"
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
