<template>
  <section class="main-banner">
    <div class="main-banner-viewport">
      <div class="main-banner-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
        <div
          v-for="(slide, index) in slides"
          :key="slide.image"
          class="main-banner-slide"
          :class="{ 'main-banner-slide--cover': !slide.title }"
          :aria-hidden="index !== currentSlide"
        >
          <template v-if="!slide.title">
            <picture>
              <source
                v-if="slide.mobileImage"
                :srcset="slide.mobileImage"
                media="(max-width: 640px)"
              />
              <img class="main-banner-cover" :src="slide.image" :alt="slide.alt" loading="eager" />
            </picture>
          </template>

          <div v-else-if="slide.cta" class="main-banner-grid">
            <div
              class="main-banner-media"
              :class="{ 'main-banner-media--second': !slide.imageLeft }"
            >
              <img
                class="main-banner-media-img"
                :src="slide.image"
                :alt="slide.alt"
                loading="lazy"
              />
            </div>

            <div
              class="main-banner-panel"
              :class="{ 'main-banner-panel--first': !slide.imageLeft }"
            >
              <img class="main-banner-shape" :src="shapeImage" alt="" aria-hidden="true" />
              <div class="main-banner-content">
                <p
                  class="main-banner-eyebrow"
                  :class="{ 'main-banner-eyebrow--sm': slide.eyebrowSmall }"
                >
                  {{ slide.eyebrow }}
                </p>
                <h2
                  class="main-banner-title"
                  :class="{ 'main-banner-title--sm': slide.titleSmall }"
                  v-html="slide.title"
                ></h2>
                <RouterLink class="main-banner-cta" :to="slide.cta.to">
                  <i class="fa-solid fa-heart"></i>
                  {{ slide.cta.label }}
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        class="main-banner-nav main-banner-nav--prev"
        aria-label="Slide anterior"
        @click="prevSlide"
      >
        <svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" /></svg>
      </button>

      <button
        type="button"
        class="main-banner-nav main-banner-nav--next"
        aria-label="Siguiente slide"
        @click="nextSlide"
      >
        <svg viewBox="0 0 24 24"><path d="M9 6l6 6-6 6" /></svg>
      </button>

      <div class="main-banner-dots">
        <button
          v-for="(slide, index) in slides"
          :key="slide.image"
          type="button"
          class="main-banner-dot"
          :class="{ 'main-banner-dot--active': currentSlide === index }"
          :aria-label="`Ir al slide ${index + 1}`"
          :aria-current="currentSlide === index"
          @click="currentSlide = index"
        ></button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { RouterLink } from 'vue-router'

interface BannerSlide {
  image: string
  mobileImage?: string
  alt: string
  imageLeft?: boolean
  eyebrow?: string
  title?: string
  titleSmall?: boolean
  eyebrowSmall?: boolean
  subtitle?: string
  cta?: { label: string; to: string }
}

const shapeImage = 'https://res.cloudinary.com/dlwzazojt/image/upload/v1793030028/main-slider-shape-2_plcoyl.png'

const slides: BannerSlide[] = [
  {
    image:
      'https://res.cloudinary.com/dwbymtg5x/image/upload/v1792945873/banner_mes_de_la_biblia_sin_logo_4000x1756.png',
    mobileImage:
      'https://res.cloudinary.com/dwbymtg5x/image/upload/v1792984916/Gemini_Generated_Image_3ezbe3ezbe3ezbe3.jpg',
    alt: 'Mes de la Biblia - Fundación Maranatha PHES',
  },
  {
    image: 'https://res.cloudinary.com/dwbymtg5x/image/upload/v1792947263/Screenshot_24.jpg',
    alt: 'Equipo de la Fundación Maranatha PHES',
    imageLeft: true,
    eyebrow: 'Somos Fundación Maranatha PHES',
    title: 'Un mensaje <br> de Salvación',
    cta: { label: 'Dona hoy', to: '/donaciones' },
  },
  {
    image: 'https://res.cloudinary.com/dlwzazojt/image/upload/v1793029237/Maranatha_phes32_ty1z7w.webp',
    alt: 'Ayuda social de la Fundación Maranatha PHES',
    imageLeft: true,
    eyebrow: 'Juntos servimos a Jesús ayudando',
    title: 'Ayuda social <br> que lleva alimento, <br> abrigo y esperanza',
    titleSmall: true,
    cta: { label: 'ver cómo ayudar', to: '/donaciones' },
  },
  {
    image: 'https://res.cloudinary.com/dlwzazojt/image/upload/v1793029237/Maranatha_phes05_tthfbk.webp',
    alt: 'Familia de la Fundación Maranatha PHES',
    eyebrow: 'Haz parte de la familia Maranatha PHES',
    eyebrowSmall: true,
    title: 'Tu apoyo nos permite compartir a Jesús y cambiar vidas',
    titleSmall: true,
    subtitle: 'Cada gesto de generosidad multiplica el impacto en las familias que servimos.',
    cta: { label: 'unirme a la obra', to: '/donaciones' },
  },
]

const currentSlide = ref(0)

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length
}

let autoplayTimer: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  autoplayTimer = setInterval(nextSlide, 10000)
})

onUnmounted(() => {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
  }
})

defineOptions({ name: 'MainBanner' })
</script>

<style scoped>
.main-banner {
  position: relative;
  overflow: hidden;
  background-color: #003d1f;
  font-family: 'Roundo', 'Nunito', sans-serif;
}

.main-banner-viewport {
  position: relative;
  height: 66vh;
  min-height: 460px;
}

.main-banner-track {
  display: flex;
  height: 100%;
  transition: transform 0.7s ease-out;
}

.main-banner-slide {
  position: relative;
  width: 100%;
  height: 100%;
  flex-shrink: 0;
}

.main-banner-cover,
.main-banner-media-img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.main-banner-slide--cover picture {
  display: block;
  width: 100%;
  height: 100%;
}

.main-banner-grid {
  display: grid;
  height: 100%;
  grid-template-rows: 42% 58%;
}

.main-banner-media {
  position: relative;
  order: 1;
  overflow: hidden;
}

.main-banner-panel {
  position: relative;
  display: flex;
  align-items: center;
  order: 2;
  overflow: hidden;
  padding: 2rem 1.5rem;
  background-color: #003d1f;
  background-image:
    linear-gradient(rgba(0, 61, 31, 0.65), rgba(0, 61, 31, 0.65)),
    url('https://res.cloudinary.com/dwbymtg5x/image/upload/v1792948800/Gemini_Generated_Image_bcagj7bcagj7bcag.jpg');
  background-position: center;
  background-size: cover;
}

.main-banner-panel--first {
  padding-left: 3.75rem;
}

.main-banner-shape {
  position: absolute;
  top: 105%;
  left: 50%;
  width: 70%;
  max-width: 32rem;
  opacity: 0.06;
  pointer-events: none;
  animation: main-banner-shape-drift 2s ease-in-out infinite alternate;
}

@keyframes main-banner-shape-drift {
  from {
    transform: translate(calc(-50% - 1.5rem), -50%);
  }

  to {
    transform: translate(calc(-50% + 1.5rem), -50%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .main-banner-shape {
    animation: none;
    transform: translate(-50%, -50%);
  }
}

.main-banner-content {
  position: relative;
  width: 100%;
  max-width: 36rem;
}

.main-banner-eyebrow {
  font-family: 'Roundo', sans-serif;
  margin-bottom: 0.75rem;
  color: #d7aa67;
  font-size: 30px;
  font-weight: bold;
}

.main-banner-title {
  margin-top: 2.5rem;
  margin-bottom: 3.5rem;
  color: #ffffff;
  font-family: 'Callisto MT', 'Roundo', 'Nunito', sans-serif;
  font-weight: 400;
  font-size: 65px;
  line-height: 1;
}

.main-banner-title--sm {
  font-size: 50px;
}

.main-banner-eyebrow--sm {
  font-size: 27px;
}

.main-banner-text {
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.875rem;
  line-height: 1.625;
}

.main-banner-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.75rem;
  border-radius: 9999px;
  background-color: #d7aa67;
  color: #003d1f;
  font-size: 0.875rem;
  font-weight: 700;
  transition: background-color 0.15s ease-in-out;
}

.main-banner-cta:hover {
  background-color: #c89a56;
}

.main-banner-nav {
  position: absolute;
  top: 50%;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 9999px;
  color: #ffffff;
  cursor: pointer;
  transform: translateY(-50%);
  transition: background-color 0.15s ease-in-out;
}

.main-banner-nav svg {
  width: 1.25rem;
  height: 1.25rem;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.main-banner-nav--prev {
  left: 0.75rem;
  border: 1px solid #d7aa67;
  background-color: #003d1f;
  color: #d7aa67;
  box-shadow:
    0 2px 15px -3px rgba(0, 0, 0, 0.05),
    0 4px 6px -4px rgba(0, 0, 0, 0.03);
}

.main-banner-nav--prev:hover {
  border-color: #ffffff;
  background-color: #0a5c31;
  color: #ffffff;
}

.main-banner-nav--next {
  right: 0.75rem;
  border: 1px solid #d7aa67;
  background-color: #003d1f;
  color: #d7aa67;
  box-shadow:
    0 2px 15px -3px rgba(0, 0, 0, 0.05),
    0 4px 6px -4px rgba(0, 0, 0, 0.03);
}

.main-banner-nav--next:hover {
  border-color: #ffffff;
  background-color: #0a5c31;
  color: #ffffff;
}

.main-banner-dots {
  position: absolute;
  bottom: 1.25rem;
  left: 50%;
  z-index: 20;
  display: flex;
  gap: 0.5rem;
  transform: translateX(-50%);
}

.main-banner-dot {
  width: 0.625rem;
  height: 0.625rem;
  border-radius: 9999px;
  background-color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: all 0.3s ease;
}

.main-banner-dot:not(.main-banner-dot--active):hover {
  background-color: rgba(255, 255, 255, 0.7);
}

.main-banner-dot--active {
  width: 2rem;
  background-color: #d7aa67;
}

@media (max-width: 640px) {
  .main-banner-viewport {
    height: auto;
    height: 27rem;
    min-height: 0;
  }

  .main-banner-grid {
    min-height: 27rem;
    grid-template-rows: 50% 50%;
  }

  .main-banner-media {
    min-height: 13rem;
  }

  .main-banner-media-img,
  .main-banner-cover {
    height: 100%;
    object-position: center;
  }

  .main-banner-slide--cover {
    height: 29rem;
  }

  .main-banner-slide--cover .main-banner-cover {
    object-fit: cover;
    object-position: center center;
    background: #003d1f;
  }

  .main-banner-panel {
    align-items: flex-start;
    padding: 1.35rem 2.6rem 2.4rem;
  }

  .main-banner-panel--first {
    padding-left: 2.6rem;
  }

  .main-banner-content {
    max-width: 100%;
  }

  .main-banner-eyebrow {
    margin-bottom: 0.25rem;
    font-size: 1rem;
    line-height: 1.15;
  }

  .main-banner-title {
    margin-top: 0.45rem;
    margin-bottom: 1rem;
    font-size: 2rem;
    line-height: 1.05;
  }

  .main-banner-title--sm {
    font-size: 1.8rem;
  }

  .main-banner-eyebrow--sm {
    font-size: 1rem;
  }

  .main-banner-cta {
    padding: 0.65rem 1.15rem;
    font-size: 0.75rem;
    white-space: nowrap;
  }

  .main-banner-nav {
    width: 2.25rem;
    height: 2.25rem;
  }

  .main-banner-nav--prev {
    left: 0.5rem;
  }

  .main-banner-nav--next {
    right: 0.5rem;
  }
}

@media (max-width: 380px) {
  .main-banner-viewport,
  .main-banner-grid {
    min-height: 25rem;
    grid-template-rows: 48% 52%;
  }

  .main-banner-viewport {
    height: 25rem;
  }

  .main-banner-media {
    min-height: 11.25rem;
  }

  .main-banner-slide--cover {
    height: 27rem;
  }

  .main-banner-panel,
  .main-banner-panel--first {
    padding-right: 2.35rem;
    padding-left: 2.35rem;
  }

  .main-banner-eyebrow {
    font-size: 0.9rem;
  }

  .main-banner-title {
    font-size: 1.75rem;
  }

  .main-banner-title--sm {
    font-size: 1.6rem;
  }
}

@media (min-width: 640px) {
  .main-banner-panel {
    padding: 2rem 2.5rem;
  }

  .main-banner-panel--first {
    padding-left: 4.75rem;
  }

  .main-banner-text {
    font-size: 1rem;
  }

  .main-banner-cta {
    font-size: 1rem;
  }

  .main-banner-nav {
    width: 3rem;
    height: 3rem;
  }

  .main-banner-nav--prev {
    left: 1.25rem;
  }

  .main-banner-nav--next {
    right: 1.25rem;
  }
}

@media (min-width: 1024px) {
  .main-banner-viewport {
    height: 72vh;
  }

  .main-banner-grid {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: none;
  }

  .main-banner-media--second {
    order: 2;
  }

  .main-banner-panel--first {
    order: 1;
  }

  .main-banner-panel {
    padding: 3rem 4rem;
  }

  .main-banner-panel--first {
    padding-left: 5.75rem;
  }
}
</style>
