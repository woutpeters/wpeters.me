<script setup lang="ts"></script>

<template>
  <div>
    <LogoHeader />
    <div container max-w="xl" m="x-auto" flex="~ col items-center" p="x-4">
      <div max-w="lg:md" w="5/6 md: 1/2 lg:full" p="x-14 y-12">
        <NuxtImg
          src="/wpeters.me/assets/artwork/hero-404_rp4lhm.svg"
          quality="100"
          object="cover center"
          provider="cloudinary"
        />
      </div>
      <div text="center">
        <h2
          text="3xl sm:4xl cool-gray-600 dark:cool-gray-50"
          m="b-3"
          font="semibold"
        >
          Sorry, de pagina die u zoekt kan niet worden gevonden
        </h2>
        <p text="sm:xl cool-gray" m="b-16" leading="relaxed">
          We hebben ons best gedaan, maar het lijkt erop dat deze pagina niet
          (meer) bestaat of misschien verhuisd is.
        </p>
        <div flex="~ justify-center">
          <NuxtLink
            to="/"
            bg="primary-500"
            p="x-7 y-3"
            border="rounded-lg"
            shadow="sm"
            text-lg
            text-white
            >Terug naar de homepage</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>
