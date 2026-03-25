<script setup lang="ts">
const route = useRoute()
const slug = computed(() =>
  Array.isArray(route.params.slug) ? route.params.slug[0] : route.params.slug
)

const { data: post } = await useAsyncData(`blog-${slug.value}`, () =>
  queryCollection('blog').path(`/blog/${slug.value}`).first()
)

if (!post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Artikel nicht gefunden',
    fatal: true
  })
}

useSeoMeta({
  title: post.value?.seo?.title || post.value?.title,
  ogTitle: post.value?.seo?.title || post.value?.title,
  description: post.value?.seo?.description || post.value?.description,
  ogDescription: post.value?.seo?.description || post.value?.description
})
</script>

<template>
  <UPage v-if="post">
    <UPageHeader
      :title="post.title"
      :description="post.description"
    />
    <UPageBody>
      <ContentRenderer :value="post" />
    </UPageBody>
  </UPage>
</template>
