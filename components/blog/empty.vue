<template>
  <article
    border="rounded-2xl"
    bg="cool-gray-50 dark:blue-gray-700"
    overflow="hidden"
    shadow="lg"
  >
    <NuxtLink to="/">
      <div h="md:36 lg:48" p="t-5 x-5">
        <NuxtImg
          src="/wpeters.me/assets/artwork/hero-project_e79i0r.svg"
          object="contain center"
          w="full"
          h="full"
          provider="cloudinary"
        />
      </div>
      <div p="5">
        <h2 text="3xl cool-gray-600 dark:cool-gray-50" font="semibold" p="b-1">
          Geen project beschikbaar
        </h2>

        <div flex="~ items-center" text="teal-600" p="t-2">
          <p>Ga terug</p>
          <Icon
            name="mdi:arrow-right-thin"
            m="l-1"
            size="1.5rem"
            transition="~ duration-500 ease-in-out"
            group-hover="translate-x-2"
          />
        </div>
      </div>
    </NuxtLink>
  </article>
</template>
