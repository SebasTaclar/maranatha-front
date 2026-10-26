<template>
  <section class="testimonials-section">
    <div class="testimonials-main">
      <div class="testimonials-background"></div>
      <div class="testimonials-overlay"></div>

      <div class="testimonials-container">
        <div class="testimonials-intro">
          <p class="testimonials-eyebrow">Testimonios</p>
          <h2>Lo que dicen de la Fundación Maranatha PHES</h2>
          <p class="testimonials-copy">
            Dios nos ha permitido servir a muchas personas y familias a través de la obra social y
            el mensaje de salvación. Estos son algunos de los testimonios de lo que Él está haciendo
            por medio de la fundación.
          </p>
          <a href="#contacto" class="testimonials-button">Ver todos los testimonios</a>
        </div>

        <div class="testimonials-slider">
          <img
            v-for="(avatar, index) in avatars"
            :key="avatar"
            :src="avatar"
            alt=""
            class="testimonial-floating-avatar"
            :class="`testimonial-floating-avatar--${index + 1}`"
            aria-hidden="true"
          />

          <article class="testimonial-card">
            <div class="testimonial-profile">
              <img :src="currentTestimonial.avatar" :alt="currentTestimonial.name" />
            </div>
            <div class="testimonial-quote" aria-hidden="true">”</div>
            <h3>{{ currentTestimonial.name }}</h3>
            <p>{{ currentTestimonial.text }}</p>
          </article>

          <div class="testimonials-controls">
            <button type="button" aria-label="Testimonio anterior" @click="previousTestimonial">
              ←
            </button>
            <button type="button" aria-label="Siguiente testimonio" @click="nextTestimonial">
              →
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="gallery-bar">
      <h2>Nuestra galería de fotos</h2>
    </div>

    <div
      ref="gallerySection"
      class="photo-gallery"
      :class="{ 'photo-gallery--visible': galleryVisible }"
    >
      <a
        v-for="(photo, index) in galleryPhotos"
        :key="photo"
        :href="photo"
        target="_blank"
        rel="noreferrer"
        class="photo-gallery-item"
        :class="`photo-gallery-item--${(index % 6) + 1}`"
        @click.prevent="openGallery(index)"
      >
        <img :src="photo" alt="Actividad de la Fundación Maranatha PHES" loading="lazy" />
      </a>
    </div>

    <div v-if="selectedGalleryIndex !== null" class="gallery-modal" @click.self="closeGallery">
      <button
        type="button"
        class="gallery-modal-close"
        aria-label="Cerrar galería"
        @click="closeGallery"
      >
        ×
      </button>
      <button
        type="button"
        class="gallery-modal-control gallery-modal-control--previous"
        aria-label="Foto anterior"
        @click="previousGalleryPhoto"
      >
        ←
      </button>
      <img
        :src="galleryPhotos[selectedGalleryIndex]"
        alt="Actividad ampliada de la Fundación Maranatha PHES"
        class="gallery-modal-image"
      />
      <button
        type="button"
        class="gallery-modal-control gallery-modal-control--next"
        aria-label="Siguiente foto"
        @click="nextGalleryPhoto"
      >
        →
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'

const testimonials = [
  {
    name: 'Nelinda Tibata Medina',
    avatar: 'https://maranathaphes.org/wp-content/uploads/2026/05/Nelinda-Tibata-Medina.jpg',
    text: 'Actualmente para la Gloria de Dios he estado aquí en la Fundación Maranatha PHES, sirviendo en las diferentes actividades y en las brigadas evangelísticas, hace aproximadamente 8 años cambió mi vida.',
  },
  {
    name: 'Samuel Andrés Vega Lopez',
    avatar: 'https://maranathaphes.org/wp-content/uploads/2026/05/Samuel-Andres-Vega-Lopez-.jpg',
    text: 'Todo comienza desde los 12 años, todo lo que viví y experimenté desde entonces hasta ahora me ayudó a conocer a Dios e incluso desde muy chiquito el Señor ya cuidaba mi corazón para no guardar rencor, agradezco que aún estando lejos no me haya soltado y me haya dado un corazón humilde para no hacer oídos sordos a su llamado.',
  },
  {
    name: 'Heilene Piedad Lopez Sánchez',
    avatar: 'https://maranathaphes.org/wp-content/uploads/2026/05/Heilene-Piedad-Lopez-Sanchez.jpg',
    text: 'Soy Heilene Piedad Lopez Sánchez y con el deseo de mostrar a otros las maravillas del poder de Dios en las vidas, buscaba la manera de servir y no sabía cómo desarrollar este deseo o anhelo, necesitaba ser capacitada, pero en su tiempo perfecto ya había el Señor dispuesto el lugar correcto y el equipo correcto.',
  },
]

const avatars = [
  'https://maranathaphes.org/wp-content/uploads/2026/05/Nelinda-Tibata-Medina.jpg',
  'https://maranathaphes.org/wp-content/uploads/2026/05/Samuel-Andres-Vega-Lopez-.jpg',
  'https://maranathaphes.org/wp-content/uploads/2026/05/Heilene-Piedad-Lopez-Sanchez.jpg',
  'https://maranathaphes.org/wp-content/uploads/2026/05/Screenshot_20260112_205706_Gallery-1-e1778512929709.png',
]

const galleryPhotos = [
  'https://maranathaphes.org/wp-content/uploads/2026/06/Maranatha_phes05.webp',
  'https://maranathaphes.org/wp-content/uploads/2026/06/Maranatha_phes06.webp',
  'https://maranathaphes.org/wp-content/uploads/2026/06/Maranatha_phes15.webp',
  'https://maranathaphes.org/wp-content/uploads/2026/06/Maranatha_phes16.webp',
  'https://maranathaphes.org/wp-content/uploads/2026/06/Maranatha_phes17.webp',
  'https://maranathaphes.org/wp-content/uploads/2026/06/Maranatha_phes32.webp',
  'https://maranathaphes.org/wp-content/uploads/2026/06/Maranatha_phes36.webp',
  'https://maranathaphes.org/wp-content/uploads/2026/05/Screenshot_20260112_205706_Gallery-1-e1778512929709.png',
  'https://maranathaphes.org/wp-content/uploads/2026/06/Maranatha_phes34.webp',
  'https://maranathaphes.org/wp-content/uploads/2026/06/Maranatha_phes10.webp',
  'https://maranathaphes.org/wp-content/uploads/2026/06/Maranatha_phes13.webp',
  'https://maranathaphes.org/wp-content/uploads/2026/06/Maranatha_phes12.webp',
  'https://maranathaphes.org/wp-content/uploads/2026/06/Maranatha_phes25.webp',
]

const currentIndex = ref(0)
const selectedGalleryIndex = ref<number | null>(null)
const gallerySection = ref<HTMLElement | null>(null)
const galleryVisible = ref(false)
let galleryObserver: IntersectionObserver | null = null

const currentTestimonial = computed(() => testimonials[currentIndex.value])

const nextTestimonial = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.length
}

const previousTestimonial = () => {
  currentIndex.value = (currentIndex.value - 1 + testimonials.length) % testimonials.length
}

const openGallery = (index: number) => {
  selectedGalleryIndex.value = index
}

const closeGallery = () => {
  selectedGalleryIndex.value = null
}

const nextGalleryPhoto = () => {
  if (selectedGalleryIndex.value === null) return
  selectedGalleryIndex.value = (selectedGalleryIndex.value + 1) % galleryPhotos.length
}

const previousGalleryPhoto = () => {
  if (selectedGalleryIndex.value === null) return
  selectedGalleryIndex.value =
    (selectedGalleryIndex.value - 1 + galleryPhotos.length) % galleryPhotos.length
}

const handleGalleryKeydown = (event: KeyboardEvent) => {
  if (selectedGalleryIndex.value === null) return
  if (event.key === 'Escape') closeGallery()
  if (event.key === 'ArrowRight') nextGalleryPhoto()
  if (event.key === 'ArrowLeft') previousGalleryPhoto()
}

onMounted(() => {
  window.addEventListener('keydown', handleGalleryKeydown)

  if (!gallerySection.value) return

  galleryObserver = new IntersectionObserver(
    ([entry]) => {
      galleryVisible.value = entry.isIntersecting
    },
    { threshold: 0.1 },
  )

  galleryObserver.observe(gallerySection.value)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleGalleryKeydown)
  galleryObserver?.disconnect()
})

defineOptions({ name: 'TestimonialsSection' })
</script>

<style scoped>
.testimonials-section {
  position: relative;
  overflow: hidden;
  background: #ffffff;
}

.testimonials-main {
  position: relative;
  min-height: 34rem;
  overflow: hidden;
  background: #263a36;
  color: #ffffff;
  isolation: isolate;
}

.gallery-bar {
  position: relative;
  display: grid;
  min-height: 7.8rem;
  place-items: center;
  padding: 1.5rem;
  background: #d7aa67;
  color: #283734;
}

.gallery-bar::after {
  position: absolute;
  bottom: -0.7rem;
  left: 50%;
  width: 0;
  height: 0;
  border-top: 0.8rem solid #d7aa67;
  border-right: 0.95rem solid transparent;
  border-left: 0.95rem solid transparent;
  content: '';
  transform: translateX(-50%);
}

.gallery-bar h2 {
  font-family: 'Roundo', 'Nunito', sans-serif;
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 900;
}

.photo-gallery {
  display: grid;
  grid-auto-rows: 7rem;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0;
  margin: 0 auto;
  padding: 3.5rem 9rem 1.5rem;
  background: #ffffff;
}

.photo-gallery-item {
  display: block;
  overflow: hidden;
  min-height: 0;
  background: #dfe5e1;
  opacity: 0;
  transform: translateY(2rem) scale(0.96);
}

.photo-gallery--visible .photo-gallery-item {
  animation: gallery-photo-enter 0.7s ease-out both;
}

.photo-gallery--visible .photo-gallery-item:nth-child(2) {
  animation-delay: 0.08s;
}

.photo-gallery--visible .photo-gallery-item:nth-child(3) {
  animation-delay: 0.16s;
}

.photo-gallery--visible .photo-gallery-item:nth-child(4) {
  animation-delay: 0.24s;
}

.photo-gallery--visible .photo-gallery-item:nth-child(5) {
  animation-delay: 0.32s;
}

.photo-gallery--visible .photo-gallery-item:nth-child(6) {
  animation-delay: 0.4s;
}

.photo-gallery--visible .photo-gallery-item:nth-child(7) {
  animation-delay: 0.48s;
}

.photo-gallery--visible .photo-gallery-item:nth-child(8) {
  animation-delay: 0.56s;
}

.photo-gallery--visible .photo-gallery-item:nth-child(9) {
  animation-delay: 0.64s;
}

.photo-gallery--visible .photo-gallery-item:nth-child(10) {
  animation-delay: 0.72s;
}

.photo-gallery--visible .photo-gallery-item:nth-child(11) {
  animation-delay: 0.8s;
}

.photo-gallery--visible .photo-gallery-item:nth-child(12) {
  animation-delay: 0.88s;
}

.photo-gallery--visible .photo-gallery-item:nth-child(13) {
  animation-delay: 0.96s;
}

.photo-gallery-item img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.35s ease;
}

.photo-gallery-item:hover img {
  transform: scale(1.06);
}

@keyframes gallery-photo-enter {
  from {
    opacity: 0;
    transform: translateY(2rem) scale(0.96);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.gallery-modal {
  position: fixed;
  inset: 0;
  z-index: 50;
  display: grid;
  place-items: center;
  padding: 3rem 5rem;
  background: rgba(15, 27, 24, 0.92);
}

.gallery-modal-image {
  max-width: min(80vw, 64rem);
  max-height: 84vh;
  border: 3px solid #d7aa67;
  object-fit: contain;
}

.gallery-modal-close,
.gallery-modal-control {
  position: absolute;
  display: grid;
  place-items: center;
  border: 0;
  border-radius: 50%;
  background: #ffffff;
  color: #283734;
  font-size: 1.5rem;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    color 0.2s ease;
}

.gallery-modal-close:hover,
.gallery-modal-control:hover {
  background: #d7aa67;
  color: #ffffff;
}

.gallery-modal-close {
  top: 1.5rem;
  right: 1.5rem;
  width: 2.75rem;
  height: 2.75rem;
  font-size: 2rem;
}

.gallery-modal-control {
  top: 50%;
  width: 3rem;
  height: 3rem;
  transform: translateY(-50%);
}

.gallery-modal-control--previous {
  left: 2rem;
}

.gallery-modal-control--next {
  right: 2rem;
}

.photo-gallery-item--1,
.photo-gallery-item--4 {
  grid-row: span 2;
}

.photo-gallery-item--2,
.photo-gallery-item--5 {
  grid-row: span 3;
}

.photo-gallery-item--3,
.photo-gallery-item--6 {
  grid-row: span 1;
}

.testimonials-background {
  position: absolute;
  inset: 0;
  background: url('https://maranathaphes.org/wp-content/uploads/2026/06/Maranatha_phes17.webp')
    center / cover no-repeat;
  mix-blend-mode: luminosity;
  opacity: 0.1;
  z-index: -2;
}

.testimonials-overlay {
  position: absolute;
  inset: 0;
  background: #263a36;
  opacity: 0.15;
  z-index: -1;
}

.testimonials-container {
  position: relative;
  display: grid;
  grid-template-columns: minmax(17rem, 0.8fr) minmax(32rem, 1.2fr);
  gap: 4rem;
  max-width: 62rem;
  min-height: 34rem;
  margin: 0 auto;
  padding: 4.5rem 1.5rem;
  align-items: center;
}

.testimonials-intro {
  max-width: 19rem;
}

.testimonials-eyebrow {
  color: #d7aa67;
  font-family: 'Callisto MT', 'Roundo', sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
}

.testimonials-intro h2 {
  margin-top: 0.2rem;
  font-family: 'Roundo', 'Nunito', sans-serif;
  font-size: clamp(1.8rem, 3vw, 1.8rem);
  font-weight: 900;
  line-height: 1.02;
}

.testimonials-copy {
  margin-top: 1.5rem;
  color: #b7c2be;
  font-size: 0.9rem;
  line-height: 1.8;
}

.testimonials-button {
  display: inline-flex;
  margin-top: 2rem;
  padding: 0.8rem 2rem;
  border-radius: 9999px;
  background: #d7aa67;
  color: #283734;
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
  transition:
    background-color 0.2s ease,
    transform 0.2s ease;
}

.testimonials-button:hover {
  background: #ffffff;
  transform: translateY(-2px);
}

.testimonials-slider {
  position: relative;
  min-height: 21rem;
  display: grid;
  place-items: center;
  transform: translateX(2rem);
}

.testimonial-card {
  position: relative;
  width: min(100%, 34rem);
  min-height: 12.5rem;
  margin-top: 2rem;
  padding: 3.4rem 2.5rem 2rem;
  border: 2px solid #d7aa67;
  border-radius: 1rem;
  background: #ffffff;
  color: #6b5b4f;
  text-align: center;
}

.testimonial-card h3 {
  position: absolute;
  top: -4.5rem;
  left: 10.5rem;
  color: #ffffff;
  font-family: 'Roundo', 'Nunito', sans-serif;
  font-size: 1.35rem;
  font-weight: 900;
  white-space: nowrap;
}

.testimonial-card p {
  font-family: 'Callisto MT', 'Roundo', sans-serif;
  font-size: 1rem;
  line-height: 1.9;
}

.testimonial-profile {
  position: absolute;
  top: -4.5rem;
  left: 2rem;
  width: 7rem;
  height: 7rem;
  overflow: hidden;
  border: 3px solid #d7aa67;
  border-radius: 50%;
  background: #ffffff;
}

.testimonial-profile img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.testimonial-quote {
  position: absolute;
  top: -1.55rem;
  right: 2rem;
  display: grid;
  width: 3rem;
  height: 3rem;
  place-items: center;
  border-radius: 50%;
  background: #003d1f;
  color: #ffffff;
  font-family: Georgia, serif;
  font-size: 3rem;
  line-height: 1;
  padding-top: 1rem;
}

.testimonial-floating-avatar {
  position: absolute;
  width: 4.5rem;
  height: 4.5rem;
  border: 3px solid rgba(215, 170, 103, 0.85);
  border-radius: 50%;
  object-fit: cover;
  opacity: 0.2;
  mix-blend-mode: luminosity;
  animation: testimonial-float 6s ease-in-out infinite;
}

.testimonial-floating-avatar--1 {
  top: -4rem;
  left: -5rem;
}

.testimonial-floating-avatar--2 {
  top: -2rem;
  right: -8rem;
  animation-delay: -1.5s;
}

.testimonial-floating-avatar--3 {
  right: -7rem;
  bottom: -2rem;
  animation-delay: -3s;
}

.testimonial-floating-avatar--4 {
  bottom: -4rem;
  left: 3rem;
  animation-delay: -4.5s;
}

@keyframes testimonial-float {
  0%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(0, -0.5rem, 0);
  }
}

.testimonials-controls {
  position: absolute;
  right: 2rem;
  bottom: -3rem;
  display: flex;
  gap: 0.3rem;
}

.testimonials-controls button {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: #ffffff;
  color: #283734;
  font-size: 1rem;
  transition:
    background-color 0.2s ease,
    transform 0.2s ease;
}

.testimonials-controls button:hover {
  background: #003d1f;
  color: #ffffff;
  transform: translateY(-2px);
}

@media (max-width: 800px) {
  .testimonials-container {
    grid-template-columns: 1fr;
    gap: 4rem;
    padding-top: 4rem;
    padding-bottom: 5rem;
  }

  .testimonials-slider {
    transform: none;
  }

  .photo-gallery {
    grid-auto-rows: 6rem;
    padding-right: 3rem;
    padding-left: 3rem;
  }

  .testimonials-intro {
    max-width: 32rem;
  }
}

@media (max-width: 560px) {
  .testimonials-section,
  .testimonials-container {
    min-height: 0;
  }

  .testimonials-container {
    padding: 3.5rem 1rem 5rem;
  }

  .testimonial-card {
    min-height: 15rem;
    padding: 3.3rem 1.25rem 1.5rem;
  }

  .testimonial-card h3 {
    top: -3.2rem;
    left: 6.5rem;
    font-size: 1rem;
  }

  .testimonial-profile {
    top: -3.2rem;
    left: 1rem;
    width: 5.5rem;
    height: 5.5rem;
  }

  .testimonial-quote {
    top: -1.35rem;
    right: 1rem;
  }

  .testimonial-floating-avatar {
    display: none;
  }

  .photo-gallery {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-auto-rows: 4.5rem;
    padding: 2rem 0.5rem 1rem;
  }

  .gallery-bar {
    padding: 1rem;
  }

  .gallery-bar h2 {
    font-size: 1.35rem;
    text-align: center;
  }

  .gallery-modal {
    padding: 3rem 1rem;
  }

  .gallery-modal-control--previous {
    left: 0.75rem;
  }

  .gallery-modal-control--next {
    right: 0.75rem;
  }

  .testimonials-controls {
    right: 0;
    bottom: -2.5rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .photo-gallery-item {
    opacity: 1;
    transform: none;
    animation: none;
  }
}
</style>
