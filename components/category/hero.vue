<template>
  <div relative overflow="hidden" bg="cool-gray-50 dark:blue-gray-800">
    <LogoHeader />
    <div container relative m="x-auto" p="x-4 y-10 sm:y-16">
      <div flex="~ col items-start">
        <div w="64" max-w="full" p="x-8 y-6">
          <NuxtImg
            src="/wpeters.me/assets/artwork/hero-project_e79i0r.svg"
            quality="100"
            object="cover center"
            provider="cloudinary"
          />
        </div>
        <div text="left">
          <h1
            text="3xl sm:4xl cool-gray-600 dark:cool-gray-50"
            font="semibold"
            m="b-2"
          >
            Tech Stack
          </h1>
          <p text="sm:text-xl cool-gray-400" font="leading-relaxed">
            Tools en scripttalen die ik gebruik voor mijn projecten.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
