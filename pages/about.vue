<script setup lang="ts"></script>

<template>
  <div>
    <LogoHeader />
    <div container relative m-auto p="y-10 sm:y-16 x-4">
      <div flex="~ col md:row" grid="md:gap-12 lg:gap-24">
        <div flex="~ col md:items-start" w="sm:3/4">
          <div p="x-8 y-6" max-w="full" w="64">
            <NuxtImg
              src="/wpeters.me/assets/artwork/hero-about_idhsvc.svg"
              quality="100"
              object="cover center"
              provider="cloudinary"
            />
          </div>
          <div flex="~ justify-between">
            <h1
              text="xl sm:4xl cool-gray-600 dark:cool-gray-50"
              font="semibold"
              p="b-2"
            >
              Aangenaam!
            </h1>
          </div>
          <p text="cool-gray" m="b-3" leading="relaxed">
            Mijn naam is Wout Peters. Van jongs af aan ben ik al bezig met
            techniek. Dat begon met het uit elkaar schroeven van computers en
            daarna weer in elkaar zetten zodat het weer werkt. Mijn passie voor
            techniek en het werken met computers heeft mij geleid naar de studie
            ICT &amp; Media Design. Na het afronden van deze studie ben ik aan
            de slag gegaan als front-end developer.
          </p>
          <p text="cool-gray" m="b-3" leading="relaxed">
            In mijn portfolio neem ik websites en projecten op waar ik trots op
            ben en die ik graag met de buitenwereld deel!
          </p>
        </div>

        <div w="3/5 sm:1/2">
          <NuxtImg
            src="/wpeters.me/assets/profile_z4f4bm.jpg"
            border="rounded-xl"
            w="96"
            m="l-auto"
            object="cover center"
            shadow="lg"
            provider="cloudinary"
          />
        </div>
      </div>
    </div>
  </div>
</template>
