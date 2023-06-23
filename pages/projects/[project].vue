<script setup lang="ts">
import type { BlogPost } from '@/types/blog'

const { path } = useRoute()
const articles = await queryContent(path).findOne()

const data = computed<BlogPost>(() => {
  return {
    title: articles.title || 'no-title available',
    description: articles.description || 'no-descriptoin available',
    image: articles.image || '/wpeters.me/blog/no-image_tkiuou.jpg',
    alt: articles.alt || 'no alter data available',
    ogImage: articles.ogImage || '/wpeters.me/blog/no-image_tkiuou.jpg',
    date: articles.date || 'not-date-available',
    tags: articles.tags || [],
    published: articles.published || false,
  }
})

useHead({
  title: data.value.title || '',
  meta: [
    { name: 'description', content: data.value.description },
    {
      name: 'description',
      content: data.value.description,
    },
    // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
    { property: 'og:site_name', content: 'Wout Peters' },
    { hid: 'og:type', property: 'og:type', content: 'website' },
    {
      property: 'og:url',
      content: `https://blog-wpeters.vercel.app/${path}`,
    },
    {
      property: 'og:title',
      content: data.value.title,
    },
    {
      property: 'og:description',
      content: data.value.description,
    },
    {
      property: 'og:image',
      content: data.value.ogImage || data.value.image,
    },
    // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
    { name: 'twitter:site', content: '@qdnvubp' },
    { name: 'twitter:card', content: 'summary_large_image' },
    {
      name: 'twitter:url',
      content: `https://blog-wpeters.vercel.app/${path}`,
    },
    {
      name: 'twitter:title',
      content: data.value.title,
    },
    {
      name: 'twitter:description',
      content: data.value.description,
    },
    {
      name: 'twitter:image',
      content: data.value.ogImage || data.value.image,
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: `https://blog-wpeters.vercel.app/${path}`,
    },
  ],
})
</script>

<template>
  <main container m="x-auto" p="x-6">
    <header>
      <h1
        text="xl md:3xl lg:4xl cool-gray-600 dark:cool-gray-50 center"
        m="7"
        font="semibold"
      >
        {{ data.title || '' }}
      </h1>
      <NuxtImg
        provider="cloudinary"
        :src="data.image || ''"
        :alt="data.alt || ''"
        m="auto"
        border="rounded-2xl"
        shadow="lg"
        h="52 md:96"
        w="4/5"
        object="cover"
      />
      <p text="xs sm:sm cool-gray-400 center" m="y-3 x-auto" max-w="3xl">
        {{ data.description }}
      </p>
      <div flex="~ justify-center" w="full" text="xs md:text-base" m="y-8">
        <div flex="sm:~ content-center gap-8" text="cool-gray-400 xs sm:sm">
          <div flex="~ items-center gap-1" font="semibold">
            <Icon name="mdi:calendar-outline" size="1rem" />
            <p>{{ data.date || '' }}</p>
          </div>
          <div flex="~ wrap items-center gap-1" m="y-5">
            <Icon name="mdi:tag-outline" w="4" h="4" />
            <template v-for="tag in data.tags" :key="tag">
              <span
                bg="cool-gray-400 dark:blue-gray-700"
                text="cool-gray-50 dark:cool-gray-400"
                border="rounded-md"
                font="semibold"
                p="x-2 y-2"
                >{{ tag }}</span
              >
            </template>
          </div>
        </div>
      </div>
    </header>
    <div
      class="prose prose-pre:max-w-xs sm:prose-pre:max-w-full prose-sm sm:prose-base md:prose-lg prose-h1:no-underline prose-gray dark:prose-light prose-img:rounded-lg"
      max-w="5xl"
      m="x-auto"
    >
      <ContentRenderer :value="articles">
        <template #empty>
          <p>No content found.</p>
        </template>
      </ContentRenderer>
    </div>
  </main>
</template>
