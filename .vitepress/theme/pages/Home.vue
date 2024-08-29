<script setup>
import PostCard from '../components/PostCard.vue'
import { data as posts } from '../scripts/posts.data'
</script>

<template>
    <!-- TODO: Implement Programmable Icon Changer -->
    <main>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <PostCard v-for="{ title, publishDate, url, excerpt } of posts"
                :title="title"
                :publish-date="publishDate"
                :url="url"
                :excerpt="excerpt"
            />
        </div>
    </main>
</template>