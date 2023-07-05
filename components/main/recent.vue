<script lang="ts" setup>
const { data } = await useAsyncData('recent-post', () =>
  queryContent('/projects')
    .where({ published: true })
    .limit(6)
    .sort({ date: -1 })
    .find()
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
  title: 'Home',
  meta: [
    {
      name: 'description',
      content:
        'Welcome To My Blog Site. Get Web Development, Javascript, Typescript, NodeJs, Vue, and Nuxt, Related Articles, Tips, Learning resources and more.',
    },
  ],
  titleTemplate: 'Wout Peters - %s',
})
</script>

<template>
  <div p="y-10 sm:y-16" bg="white dark:blue-gray-800 dark:opacity-95">
    <div container m="x-auto" p="x-6">
      <div text-left>
        <h2
          text="3xl sm:4xl cool-gray-600 dark:cool-gray-50"
          font="semibold"
          m="b-2"
        >
          Project Portfolio
        </h2>
        <p text="sm:xl cool-gray" font="leading-relaxed">
          Overzicht met de meest recente projecten
        </p>
      </div>
      <div grid="~ cols-1 md:cols-2 lg:cols-3 gap-4" p="t-10">
        <template v-for="post in formatedData" :key="post.title">
          <ProjectCard
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
        <template v-if="data?.length === 0">
          <ProjectEmpty />
        </template>
      </div>
    </div>
  </div>
</template>
