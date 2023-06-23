<template>
  <div relative bg="cool-gray-50 dark:blue-gray-800">
    <LogoHeader />
    <div container relative m="x-auto" p="x-4 y-16 sm:y-32">
      <div flex="~ col items-center">
        <div
          p="x-14 y-12"
          max-w="lg:md"
          w="5/6 md:1/2 lg:full"
          grid="justify-self-center"
        >
          <NuxtImg
            src="/wpeters.me/assets/artwork/hero-home_sj3bbi.svg"
            quality="100"
            object="cover center"
            provider="cloudinary"
          />
        </div>

        <div text="center">
          <h1
            text="4xl md:5xl cool-gray-600 dark:cool-gray-50"
            font="semibold"
            leading="tight"
            m="y-5"
          >
            Hallo, ik ben Wout 👋
          </h1>
          <p text="sm:xl cool-gray-400" font="leading-relaxed" m="b-12">
            Front-end Developer & Designer.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
