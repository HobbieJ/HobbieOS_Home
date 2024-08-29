<script setup>
import { useData } from 'vitepress'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Home from './pages/Home.vue'
import Now from './pages/Now.vue'
import About from './pages/About.vue'
import Contact from './pages/Contact.vue'
import Dating from './pages/Dating.vue'
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
        <Now v-else-if="frontmatter.now" />
        <About v-else-if="frontmatter.about" />
        <Contact v-else-if="frontmatter.contact" />
        <Dating v-else-if="frontmatter.dating" />
        <NotFound v-else-if="page.isNotFound" />
        <Content v-else />
      </main>
      <!-- <Footer /> -->
    </div>
  </div>
</template>
