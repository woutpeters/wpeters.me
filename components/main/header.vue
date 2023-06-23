<script setup lang="ts">
const isOpen = ref(false)
</script>

<template>
  <div bg="cool-gray-50 dark:blue-gray-800">
    <nav container m="x-auto" p="x-4">
      <div z-10 block sm:flex sm:items-center py-8 transition-all>
        <div flex="~ items-center" p="x-0">
          <NuxtLink to="/">
            <span text="2xl cool-gray-600 dark:cool-gray-50" font="semibold"
              >wout</span
            >
            <span text="2xl teal-500" font="semibold">peters</span>
          </NuxtLink>

          <MainColor display="sm:none" m="l-auto" />

          <div display="sm:none">
            <button
              @click="isOpen = !isOpen"
              type="button"
              bg="white dark:teal-500"
              shadow="md"
              border="rounded-lg"
              m="l-4"
              p="2"
              text="cool-gray-600 dark:cool-gray-50"
              focus="outline-none"
            >
              <Icon v-if="isOpen" name="mdi:close" size="24" />
              <Icon v-if="!isOpen" name="mdi:menu" size="24" />
            </button>
          </div>
        </div>

        <ul
          :display="isOpen ? 'block' : 'none'"
          bg="white sm:transparent dark:blue-gray-700 sm:dark:transparent"
          m="0 sm:l-auto t-8 sm:t-0"
          p="4 sm:p-0"
          flex="sm:~ col sm:row justify-center items-center"
          space="y-5 sm:y-0 sm:x-6"
          text="sm sm:lg"
          shadow="sm sm:none"
          border="rounded-lg"
        >
          <li>
            <NuxtLink
              display="block"
              w="full sm:auto"
              title="Projects"
              to="/projects"
              aria-label="Projects"
              text="sm:lg dark:cool-gray-50"
              hover="text-teal-500"
              transition="colors"
              m="sm:x-2 m-2 sm:b-0"
              p="sm:y-2 sm:x-2"
            >
              Projects
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              display="block"
              w="full sm:auto"
              title="Categories"
              to="/categories"
              aria-label="Categories"
              text="sm:lg dark:cool-gray-50"
              hover="text-teal-500"
              transition="colors"
              m="sm:x-2 m-2 sm:b-0"
              p="sm:y-2 sm:x-2"
            >
              Categories
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              display="block"
              w="full sm:auto"
              title="About Me"
              to="/about"
              aria-label="About me"
              text="sm:lg dark:cool-gray-50"
              hover="text-teal-500"
              transition="colors"
              m="sm:x-2 m-2 sm:b-0"
              p="sm:y-2 sm:x-2"
              >About</NuxtLink
            >
          </li>
        </ul>

        <div display="none sm:flex">
          <MainColor />
        </div>
      </div>
    </nav>
  </div>
</template>
