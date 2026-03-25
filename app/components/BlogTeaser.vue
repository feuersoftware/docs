<script setup lang="ts">
const { data: latestPost } = useAsyncData('blog-teaser', () =>
  queryCollection('blog').order('date', 'DESC').first()
)
</script>

<template>
  <UPageSection v-if="latestPost">
    <template #title>Blog</template>
    <template #description>
      Neuigkeiten und Artikel rund um FeuerSoftware Produkte.
    </template>

    <UBlogPost
      :to="latestPost.path"
      :title="latestPost.title"
      :description="latestPost.description"
      :image="latestPost.image"
      :date="latestPost.date"
      :author="latestPost.author"
      :badge="latestPost.minRead ? { label: `${latestPost.minRead} Min. Lesezeit`, color: 'neutral' } : undefined"
    />

    <div class="mt-6">
      <UButton
        to="/blog"
        color="neutral"
        variant="outline"
        trailing-icon="i-lucide-arrow-right"
      >
        Alle Beiträge
      </UButton>
    </div>
  </UPageSection>
</template>
