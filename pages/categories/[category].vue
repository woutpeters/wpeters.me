<script lang="ts" setup>
const route = useRoute()

// take category from route params & make first char upper
const category = computed(() => {
  const name = route.params.category || ''
  let strName = ''

  if (Array.isArray(name)) strName = name.at(0) || ''
  else strName = name
  return strName
})

const { data } = await useAsyncData('home', () =>
  queryContent('/projects')
    .where({ tags: { $contains: category.value } })
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
      date: articles.date || 'not-date-available',
      tags: articles.tags || [],
      published: articles.published || false,
    }
  })
})

useHead({
  title: category.value,
  meta: [
    {
      name: 'description',
      content: `You will find all the ${category.value} related post here`,
    },
  ],
  titleTemplate: 'Wout Peters - %s',
})
</script>

<template>
  <main container m="x-auto" p="x-4">
    <CategoryTopic />
    <div grid="~ cols-1 md:cols-2 lg:cols-3 gap-4">
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
  </main>
</template>
