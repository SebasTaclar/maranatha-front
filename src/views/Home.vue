<template>
  <main class="home-main">
    <MainBanner />

    <WelcomeSection />

    <!-- ProductsSection conservada, pero temporalmente oculta. -->
    <ProductsSection v-if="false" />

    <EmotionalBanner />

    <JoinUsSection />

    <Benefits />

    <Testimonials />

    <div id="nosotros">
      <StorySection />
    </div>

    <NoticiasYArticulos />

    <div id="contacto">
      <Newsletter />
    </div>
  </main>
</template>

<script setup lang="ts">
import MainBanner from '@/components/MainBanner.vue'
import WelcomeSection from '@/components/WelcomeSection.vue'
import ProductsSection from '@/components/ProductsSection.vue'
import EmotionalBanner from '@/components/EmotionalBanner.vue'
import JoinUsSection from '@/components/JoinUsSection.vue'
import StorySection from '@/components/StorySection.vue'
import Benefits from '@/components/Benefits.vue'
import Testimonials from '@/components/Testimonials.vue'
import NoticiasYArticulos from '@/components/NoticiasYArticulos.vue'
import Newsletter from '@/components/Newsletter.vue'

defineOptions({ name: 'HomeView' })
</script>

<style scoped>
.home-main {
  background: #fff8e8;
}
</style>
