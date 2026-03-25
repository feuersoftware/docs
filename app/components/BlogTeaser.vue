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
      orientation="horizontal"
      :to="latestPost.path"
      :title="latestPost.title"
      :description="latestPost.description"
      :image="latestPost.image"
      :date="latestPost.date"
      :author="latestPost.author"
      :badge="latestPost.minRead ? { label: `${latestPost.minRead} Min. Lesezeit`, color: 'neutral' } : undefined"
      :ui="{
        root: 'md:grid md:grid-cols-[200px_1fr] md:gap-6 md:items-start',
        image: 'md:h-full md:max-h-40 object-cover rounded-lg'
      }"
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
