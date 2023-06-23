<script setup lang="ts">
const colorMode = useColorMode()
const toggleMode = () =>
  colorMode.value === 'light'
    ? (colorMode.preference = 'dark')
    : (colorMode.preference = 'light')
</script>

<template>
  <button
    btn
    btn-secondary
    aria-label="Color Mode"
    :title="`Enable ${colorMode.value === 'dark' ? 'Light' : 'Dark'} Mode`"
    p="2"
    flex="~ items-center"
    @click.prevent="toggleMode"
  >
    <ColorScheme placeholder="" tag="span">
      <template v-if="colorMode.value === 'dark'">
        <Icon name="mdi:moon-and-stars" size="24" />
      </template>
      <template v-else>
        <Icon name="mdi:weather-sunny" size="24" />
      </template>
    </ColorScheme>
  </button>
</template>
