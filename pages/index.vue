<script lang="ts" setup>
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
  <main bg="white">
    <MainHero />
    <MainRecent />
  </main>
</template>
