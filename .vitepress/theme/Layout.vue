<script setup>
import { useData } from 'vitepress'
import Home from './components/Home.vue'

// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter } = useData()
</script>

<template>
  <div class="
    bg-snazzy-light
    text-snazzy-dark
    font-roboto-mono
  ">
    <div v-if="frontmatter.home">
      <Home />
      <!-- <h1>{{ site.title }}</h1>
      <p>{{ site.description }}</p> -->
    </div>
    <!-- <div v-else>
      <a href="/">Home</a>
      <Content />
    </div> -->
  </div>
</template>
