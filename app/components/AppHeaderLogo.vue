<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <NuxtImg
    v-if="appConfig.header?.logo?.light"
    :src="appConfig.header.logo.light"
    :alt="appConfig.header.logo.alt || appConfig.header?.title || 'Logo'"
    v-bind="$attrs"
  />
  <span v-else>{{ appConfig.header?.title || 'FeuerSoftware' }}</span>
</template>
