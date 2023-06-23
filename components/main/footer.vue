<script setup lang="ts">
const copyrightDate = new Date().getFullYear()
</script>

<template>
  <div bg="cool-gray-50 dark:blue-gray-800">
    <div container m="x-auto" p="y-10 sm:y-16">
      <div
        flex="~ col justify-center items-center"
        text="center"
        m="b-10 sm:b-16"
      >
        <FooterLink />
      </div>

      <div flex="~ justify-center items-center" text="center">
        <div text="cool-gray-400">
          © {{ copyrightDate }} All rights reserved.
          <a
            href="https://github.com/wpeters/blog"
            target="_blank"
            rel="nofollow"
            text="dark:cool-gray-50"
            hover="underline"
            >wpeters.me</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
