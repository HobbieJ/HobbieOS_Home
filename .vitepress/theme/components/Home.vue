<script setup>
import PostCard from './PostCard.vue'
import { data as posts } from './../posts.data'
</script>

<template>
    <main class="flex flex-col flex-initial">
        <div class="w-full max-w-screen-xl m-auto">
            <!-- TODO: Implement Programmable Icon Changer -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <PostCard v-for="post of posts" :title="post.frontmatter.title"/>
            </div>
        </div>
    </main>
</template>