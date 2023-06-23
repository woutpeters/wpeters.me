<template>
  <div>
    <p text="xl cool-gray-600 dark:cool-gray-50" font="semibold" m="b5">
      Volg mij
    </p>

    <div flex="~ row gap-4 xl:gap-8">
      <NuxtLink
        btn
        btn-secondary
        to="https://github.com/woutpeters"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Github"
      >
        <Icon name="mdi:github" w="6 sm:8" h="6 sm:8" />
      </NuxtLink>
      <NuxtLink
        btn
        btn-secondary
        to="https://www.linkedin.com/in/woutpeters/"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="LinkedIn"
      >
        <Icon name="mdi:linkedin" w="6 sm:8" h="6 sm:8" />
      </NuxtLink>
      <NuxtLink
        btn
        btn-secondary
        to="https://twitter.com/woutpeters_"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Twitter"
      >
        <Icon name="mdi:twitter" w="6 sm:8" h="6 sm:8" />
      </NuxtLink>
      <NuxtLink
        btn
        btn-secondary
        to="https://www.instagram.com/woutpeters/"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Instagram"
      >
        <Icon name="mdi:instagram" w="6 sm:8" h="6 sm:8" />
      </NuxtLink>
    </div>
  </div>
</template>
