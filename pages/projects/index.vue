<script lang="ts" setup>
const { data } = await useAsyncData('home', () =>
  queryContent('/projects').where({ published: true }).sort({ date: -1 }).find()
)

const formatedData = computed(() => {
  return data.value?.map((articles) => {
    return {
      path: articles._path,
      title: articles.title || 'no-title available',
      description: articles.description || 'no-descriptoin available',
      image: articles.image || '/wpeters.me/blog/no-image_tkiuou.jpg',
      alt: articles.alt || 'no alter data available',
      ogImage: articles.ogImage || '/wpeters.me/blog/no-image_tkiuou.jpg',
      date: articles.date || 'no-date-available',
      tags: articles.tags || [],
      published: articles.published || false,
    }
  })
})

useHead({
  title: 'Archive',
  meta: [
    {
      name: 'description',
      content:
        'Here you will find all the blog posts I have written & published on this site.',
    },
  ],
  titleTemplate: 'Wout Peters - %s',
})
</script>

<template>
  <main>
    <ArchiveHero />
    <div container m="x-auto y-10 sm:y-16" p="x-4" space="y-5">
      <template v-for="post in formatedData" :key="post.title">
        <ArchiveCard
          :path="post.path"
          :title="post.title"
          :date="post.date"
          :description="post.description"
          :image="post.image"
          :alt="post.alt"
          :og-image="post.ogImage"
          :tags="post.tags"
          :published="post.published"
        />
      </template>
    </div>
  </main>
</template>
