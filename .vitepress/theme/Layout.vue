<script setup>
import { useData } from 'vitepress'
import NotFound from './components/NotFound.vue'
import Header from './components/Header.vue'
import Home from './components/Home.vue'
import Footer from './components/Footer.vue'

// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter } = useData()
</script>

<template>
  <div class="bg-snazzy-light text-snazzy-dark font-mono w-full h-screen">
    <Header :title="site.title" />
    <!-- <Home v-if="frontmatter.home" /> -->
    <!-- <Content v-else /> -->
    <!-- <Footer /> -->
  </div>
</template>
