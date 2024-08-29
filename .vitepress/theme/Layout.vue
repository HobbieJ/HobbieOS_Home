<script setup>
import { useData } from 'vitepress'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Home from './pages/Home.vue'
import NotFound from './pages/NotFound.vue'

// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter } = useData()
</script>

<template>
  <div class="antialiased bg-snazzy-light text-snazzy-dark">
    <div class="mx-auto px-6">
      <Header :title="site.title" />
      <main class="pt-24 max-w-screen-xl mx-auto">
        <Home v-if="frontmatter.home" />
        <!-- <Content v-else /> -->
      </main>
      <!-- <Footer /> -->
    </div>
  </div>
</template>
