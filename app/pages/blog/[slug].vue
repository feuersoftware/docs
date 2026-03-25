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
    <div class="max-w-3xl mx-auto w-full">
      <div class="pt-6">
        <UButton
          to="/blog"
          variant="ghost"
          color="neutral"
          leading-icon="i-lucide-arrow-left"
          size="sm"
        >
          Alle Beiträge
        </UButton>
      </div>
      <UPageHeader
        :title="post.title"
        :description="post.description"
        :ui="{ wrapper: 'py-8' }"
      >
        <template #headline>
          <div class="flex items-center gap-3 text-sm text-muted mb-2">
            <span v-if="post.author?.name">{{ post.author.name }}</span>
            <span v-if="post.author?.name && (post.date || post.minRead)" class="text-muted">·</span>
            <span v-if="post.date">{{ new Date(post.date).toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' }) }}</span>
            <span v-if="post.minRead" class="text-muted">· {{ post.minRead }} Min. Lesezeit</span>
          </div>
        </template>
      </UPageHeader>
      <UPageBody prose>
        <ContentRenderer :value="post" />
      </UPageBody>
    </div>
  </UPage>
</template>
