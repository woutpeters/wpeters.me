<script setup>
const description =
  'Front-end Developer - I am currently working fulltime at Netvlies'
const ogTitle =
  'Front-end Developer with 5+ years experience in HTML, CSS, Javascript, Typescript, Vue, Nuxt'
const twitterDescription =
  'My portfolio website, where I play around with Nuxt, Vue, and more and showcase my projects & stack'
const image =
  'https://res.cloudinary.com/wpeters/image/upload/v1687527908/wpeters.me/blog/2023/old-1950s-computer-on-a-pink-background_qovpah.jpg'
const mySite = 'https://wpeters.me/'
useHead({
  htmlAttrs: {
    lang: 'en',
  },
  meta: [
    {
      name: 'description',
      content: description,
    },
    // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
    { property: 'og:site_name', content: mySite },
    { property: 'og:type', content: 'website' },
    {
      property: 'og:url',
      content: mySite,
    },
    {
      property: 'og:title',
      content: ogTitle,
    },
    {
      property: 'og:description',
      content: description,
    },
    {
      property: 'og:image',
      content: image,
    },
    // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
    { name: 'twitter:site', content: '@debs_obrien' },
    { name: 'twitter:card', content: 'summary_large_image' },
    {
      name: 'twitter:url',
      content: mySite,
    },
    {
      name: 'twitter:title',
      content: ogTitle,
    },
    {
      name: 'twitter:description',
      content: twitterDescription,
    },
    {
      name: 'twitter:image',
      content: image,
    },
  ],
})
</script>

<template>
  <Body min-h-screen font-sans>
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </Body>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  @apply font-serif;
}

@layer default {
  :root {
    --color-primary-base: #14b8a6;
  }
}
</style>
