<script lang="ts" setup>
import { makeFirstCharUpper } from '@/utils/helper'

type Entry = {
  name: string
  icon: string
  color: string
}

const stacks: Entry[] = [
  { name: 'javascript', icon: 'simple-icons:javascript', color: '#f7df1e' },
  { name: 'typescript', icon: 'simple-icons:typescript', color: '#3178c6' },
  { name: 'nodejs', icon: 'simple-icons:nodedotjs', color: '#215732' },
  { name: 'pnpm', icon: 'simple-icons:pnpm', color: '#f69220' },
  { name: 'valet', icon: 'simple-icons:laravel', color: '#f55247' },
  { name: 'vue', icon: 'simple-icons:vuedotjs', color: '#42b883' },
  { name: 'nuxt', icon: 'simple-icons:nuxtdotjs', color: '#00bd6f' },
  { name: 'pinia', icon: 'logos:pinia', color: '#ffd859' },
  { name: 'sass', icon: 'simple-icons:sass', color: '#bf4080' },
  { name: 'bootstrap', icon: 'simple-icons:bootstrap', color: '#712cf9' },
  { name: 'tailwindcss', icon: 'simple-icons:tailwindcss', color: '#0ea5e9' },
  { name: 'unocss', icon: 'simple-icons:unocss', color: '#00a98e' },
  { name: 'wordpress', icon: 'simple-icons:wordpress', color: '#21759b' },
  { name: 'drupal', icon: 'simple-icons:drupal', color: '#0077c0' },
  { name: 'symfony', icon: 'simple-icons:symfony', color: '#1a171b' },
  { name: 'twig', icon: 'file-icons:twig', color: '#bacf29' },
  { name: 'figma', icon: 'simple-icons:figma', color: '#5551ff' },
  { name: 'markdown', icon: 'simple-icons:markdown', color: '#499bea' },
  { name: 'obsidian', icon: 'simple-icons:obsidian', color: '#7c3aed' },
  { name: 'git', icon: 'simple-icons:git', color: '#f14e32' },
  { name: 'vscode', icon: 'simple-icons:visualstudiocode', color: '#0066b8' },
  { name: 'postman', icon: 'simple-icons:postman', color: '#ef5b25' },
  { name: 'cloudflare', icon: 'simple-icons:cloudflare', color: '#f38020' },
  { name: 'namecheap', icon: 'simple-icons:namecheap', color: '#de3723' },
]

const shuffle = (array: any[]) => {
  return array.sort(() => Math.random() - 0.5)
}

const randomStack = shuffle(stacks)

useHead({
  title: 'Categories',
  meta: [
    {
      name: 'description',
      content: 'Tools en scripttalen die ik gebruik voor mijn projecten.',
    },
  ],
  titleTemplate: 'Wout Peters - %s',
})
</script>

<template>
  <main>
    <CategoryHero />
    <div container relative m="x-auto y-10 sm:y-16" p="x-4">
      <div flex="~ wrap gap-3">
        <template v-for="stack in randomStack" :key="stack">
          <CategoryCard
            :title="makeFirstCharUpper(stack.name)"
            :icon="stack.icon"
            :color="stack.color"
          />
        </template>
      </div>
    </div>
  </main>
</template>
