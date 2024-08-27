<script setup>
const props = defineProps(['title'])
</script>

<template>
    <nav class="flex flex-wrap justify-between">
        <div>
            <a href="/" class="text-4xl font-ftg">{{ title }}</a>
        </div>
        <div>
            <ul>
                <li><a href="https://github.com/HobbieJ">👨‍💻 GitHub</a></li>
            </ul>
        </div>
    </nav>
</template>