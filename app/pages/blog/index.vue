<script setup lang="ts">
const { data: posts } = await useAsyncData('blog-posts', () =>
  queryCollection('blog').order('date', 'DESC').all()
)

useSeoMeta({
  title: 'Blog – FeuerSoftware',
  ogTitle: 'Blog – FeuerSoftware',
  description: 'Neuigkeiten und Artikel rund um FeuerSoftware Produkte.',
  ogDescription: 'Neuigkeiten und Artikel rund um FeuerSoftware Produkte.'
})
</script>

<template>
  <UPage>
    <div class="max-w-3xl mx-auto w-full">
      <UPageHero
        title="Blog"
        description="Neuigkeiten und Artikel rund um FeuerSoftware Produkte."
        :ui="{
          title: '!mx-0 text-left',
          description: '!mx-0 text-left',
          links: 'justify-start'
        }"
      />
      <UPageSection
        :ui="{
          container: '!pt-0 !px-0'
        }"
      >
        <UBlogPosts orientation="vertical">
          <UBlogPost
            v-for="post in posts"
            :key="post.path"
            variant="naked"
            orientation="horizontal"
            :to="post.path"
            :title="post.title"
            :description="post.description"
            :image="post.image"
            :date="post.date"
            :author="post.author"
            :badge="post.minRead ? { label: `${post.minRead} Min. Lesezeit`, color: 'neutral' } : undefined"
            :ui="{
              root: 'lg:grid lg:grid-cols-[220px_1fr] lg:items-start gap-x-6',
              header: 'relative overflow-hidden rounded-lg w-full h-36 pointer-events-none shadow-lg shrink-0',
              image: 'object-cover w-full h-full'
            }"
          />
        </UBlogPosts>
      </UPageSection>
    </div>
  </UPage>
</template>
