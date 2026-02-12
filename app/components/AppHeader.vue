<script setup lang="ts">
const appConfig = useAppConfig()
const site = useSiteConfig()

const links = computed(() =>
  appConfig.github?.url
    ? [{
        icon: 'i-simple-icons-github',
        to: appConfig.github.url,
        target: '_blank',
        'aria-label': 'GitHub',
      }]
    : []
)
</script>

<template>
  <UHeader
    :ui="{
      root: 'bg-theme backdrop-blur',
      center: 'flex-1',
      header: 'bg-theme',
      toggle: 'text-white hover:bg-white/10 active:bg-white/20 focus-visible:bg-white/10',
    }"
    :to="'/'"
    :title="appConfig.header?.title || site?.name"
  >
    <AppHeaderCenter />

    <template #title>
      <AppHeaderLogo class="h-8 w-auto shrink-0" />
    </template>

    <template #right>
      <UContentSearchButton 
        class="lg:hidden"
        :ui="{
          base: 'text-white hover:bg-white/10 active:bg-white/20 focus-visible:bg-white/10',
          leadingIcon: 'text-white'
        }"
      />

      <ClientOnly>
        <UColorModeButton 
          variant="ghost"
          :ui="{ 
            base: 'text-white hover:bg-white/10 active:bg-white/20 focus-visible:bg-white/10',
            leadingIcon:  'text-white' 
          }"
        />
        <template #fallback>
          <div class="h-8 w-8 animate-pulse bg-neutral-200 dark:bg-neutral-800 rounded-md" />
        </template>
      </ClientOnly>

      <template v-if="links?.length">
        <UButton
          v-for="(link, index) of links"
          :key="index"
          v-bind="{ color: 'neutral', variant: 'ghost', ...link }"
          :ui="{ 
            base: 'text-white hover:bg-white/10 active:bg-white/20 focus-visible:bg-white/10',
            leadingIcon:  'text-white' 
          }"
        />
      </template>
    </template>

    <template #body>
      <AppHeaderBody
      />
    </template>
  </UHeader>
</template>