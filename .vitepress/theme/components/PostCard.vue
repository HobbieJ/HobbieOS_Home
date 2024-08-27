<script setup>
import TextTitle from './TextTitle.vue';

const props = defineProps(['title', 'publishDate', 'url', 'excerpt'])
</script>

<template>
    <article>
        <a :url="props.url" class="flex flex-col">
            <TextTitle />
            <div class="max-w-prose pr-4">
                <time :datetime="props.publishDate.object">{{ props.publishDate.string }}</time>
                <h2 class="hover:underline">{{ props.title }}</h2>
                <p v-html="props.excerpt"></p>
            </div>
        </a>
    </article>
</template>