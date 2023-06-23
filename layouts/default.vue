<template>
  <div app-container font-sans>
    <MainHeader />
    <main bg="cool-gray-50 dark:blue-gray-800">
      <slot />
    </main>
    <footer>
      <MainFooter />
    </footer>
    <NuxtBackToTop color="#14b8a6" width="40px" height="40px" />
  </div>
</template>
