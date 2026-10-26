<template>
  <main class="contact-page">
    <Newsletter />
  </main>
</template>

<script setup lang="ts">
import Newsletter from '@/components/Newsletter.vue'

defineOptions({ name: 'ContactView' })
</script>

<style scoped>
.contact-page {
  min-height: calc(100vh - 5rem);
  background: #ffffff;
}
</style>
