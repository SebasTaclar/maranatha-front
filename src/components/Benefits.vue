<template>
  <section
    ref="benefitsSection"
    class="benefits-section"
    :class="{ 'benefits-section--visible': benefitsVisible }"
  >
    <div class="benefits-grid">
      <article
        v-for="benefit in benefits"
        :key="benefit.title"
        class="benefit-card"
        :class="`benefit-card--${benefit.theme}`"
      >
        <div class="benefit-card-content">
          <div class="benefit-heading">
            <div class="benefit-icon" aria-hidden="true">
              <img v-if="benefit.iconImage" :src="benefit.iconImage" alt="" />
              <i v-else :class="benefit.iconClass"></i>
            </div>
            <h2>{{ benefit.title }}</h2>
          </div>

          <p class="benefit-description">{{ benefit.description }}</p>

          <ul class="benefit-list">
            <li v-for="item in benefit.items" :key="item">
              <span class="benefit-check" aria-hidden="true">✓</span>
              <span>{{ item }}</span>
            </li>
          </ul>

          <a :href="benefit.href" class="benefit-button">Ver detalles</a>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

import donationIcon from '@/assets/donation-icon.png'
import volunteerIcon from '@/assets/volunteer-icon.png'

const benefits = [
  {
    theme: 'green',
    iconImage: volunteerIcon,
    iconClass: '',
    title: 'Únete y sé voluntario',
    description: 'Comparte tu tiempo y tus dones sirviendo a quienes más lo necesitan.',
    items: [
      'Tu servicio es una forma concreta de mostrar el amor de Jesús.',
      'Participa en actividades con niños, familias y comunidades vulnerables.',
      'Acompáñanos en campañas de evangelización y jornadas de ayuda social.',
    ],
    href: '/contacto',
  },
  {
    theme: 'gold',
    iconClass: '',
    iconImage: donationIcon,
    title: 'Envía un regalo a los niños',
    description: 'Con tus donaciones apoyamos a niños y familias en condición de vulnerabilidad.',
    items: [
      'Tus aportes se convierten en alimento, vestuario y detalles que llevan esperanza.',
      'Puedes apoyar con una donación única o hacerlo de manera frecuente.',
      'Juntos hacemos que más niños conozcan a Jesús y se sientan amados.',
    ],
    href: '/donaciones',
  },
]

const benefitsSection = ref<HTMLElement | null>(null)
const benefitsVisible = ref(false)
let benefitsObserver: IntersectionObserver | null = null

onMounted(() => {
  if (!benefitsSection.value) return

  benefitsObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        benefitsVisible.value = true
        benefitsObserver?.disconnect()
      }
    },
    { threshold: 0.2 },
  )

  benefitsObserver.observe(benefitsSection.value)
})

onUnmounted(() => {
  benefitsObserver?.disconnect()
})

defineOptions({ name: 'BenefitsSection' })
</script>

<style scoped>
.benefits-section {
  padding: 4.5rem 1.5rem;
  background: #ffffff;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
  max-width: 52rem;
  margin: 0 auto;
}

.benefit-card {
  position: relative;
  overflow: hidden;
  min-height: 28.125rem;
  border-radius: 0.9rem;
  color: #ffffff;
  isolation: isolate;
  opacity: 0;
  transform: translateX(-4rem);
}

.benefits-section--visible .benefit-card {
  animation: benefit-card-enter 0.8s ease-out both;
}

.benefits-section--visible .benefit-card:nth-child(2) {
  animation-name: benefit-card-enter-right;
  animation-delay: 0.15s;
}

.benefit-card::after {
  position: absolute;
  inset: 0;
  background: url('https://oxpinswp.pixydrops.com/wp-content/uploads/2022/09/feature-one-shape-1.png')
    center / cover no-repeat;
  content: '';
  opacity: 1;
  z-index: 1;
}

.benefit-card--green {
  background: #003d1f;
}

.benefit-card--gold {
  background: #e2b66f;
}

.benefit-card-content {
  position: relative;
  z-index: 2;
  padding: 2.3rem 2.35rem 2rem;
}

.benefit-heading {
  display: flex;
  align-items: center;
  gap: 1.4rem;
}

.benefit-icon {
  display: grid;
  flex: 0 0 5.5rem;
  place-items: center;
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 50%;
  color: #003d1f;
  background: #00633d;
}

.benefit-icon i {
  font-size: 3.1rem;
}

.benefit-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 50%;
  mix-blend-mode: multiply;
}

.benefit-card--green .benefit-icon {
  color: #000000;
  background: #005b35;
  transition: background-color 0.2s ease-in-out;
}

.benefit-card--green .benefit-icon:hover {
  background: #d7aa67;
}

.benefit-card--green .benefit-icon:hover img {
  filter: brightness(0);
}

.benefit-card--green .benefit-icon img {
  width: 70%;
  height: 70%;
  mix-blend-mode: normal;
  filter: brightness(0) invert(1);
}

.benefit-card--gold .benefit-icon {
  color: #000000;
  background: #e2b66f;
  transition: background-color 0.2s ease-in-out;
}

.benefit-card--gold .benefit-icon:hover {
  background: #003d1f;
}

.benefit-card--gold .benefit-icon img {
  width: 70%;
  height: 70%;
  mix-blend-mode: normal;
  filter: brightness(0);
}

.benefit-card--gold .benefit-icon:hover img {
  filter: brightness(0) invert(1);
}

.benefit-heading h2 {
  max-width: 13rem;
  font-family: 'Roundo', 'Nunito', sans-serif;
  font-size: clamp(1.5rem, 2.2vw, 1.7rem);
  font-weight: 900;
  line-height: 1.05;
}

.benefit-description {
  margin-top: 1.35rem;
  color: #98a8a5;
  font-family: 'Callisto MT', 'Roundo', sans-serif;
  font-size: 1.2rem;
  line-height: 1.45;
}

.benefit-card--gold .benefit-description {
  color: #98a8a5;
}

.benefit-list {
  font-family: 'Roundo', sans-serif;
  display: grid;
  gap: 0.7rem;
  margin-top: 1.15rem;
  font-size: 0.78rem;
  font-weight: 600;
  line-height: 1.45;
}

.benefit-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
}

.benefit-check {
  display: grid;
  flex: 0 0 1rem;
  place-items: center;
  width: 1rem;
  height: 1rem;
  margin-top: 0.1rem;
  border-radius: 50%;
  background: #ffffff;
  color: #003d1f;
  font-size: 0.7rem;
  font-weight: 900;
}

.benefit-button {
  display: inline-flex;
  margin-top: 1.5rem;
  padding: 0.7rem 2.3rem;
  border-radius: 9999px;
  background: #ffffff;
  color: #283734;
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  transition:
    transform 0.15s ease-in-out,
    background-color 0.15s ease-in-out;
}

.benefit-button:hover {
  background: #d7aa67;
  color: #283734;
  transform: translateY(-2px);
}

.benefit-card--gold .benefit-button:hover {
  background: #003d1f;
  color: #ffffff;
}

@keyframes benefit-card-enter {
  from {
    opacity: 0;
    transform: translateX(-4rem);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes benefit-card-enter-right {
  from {
    opacity: 0;
    transform: translateX(4rem);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@media (max-width: 700px) {
  .benefits-section {
    padding: 3.5rem 1rem;
  }

  .benefits-grid {
    grid-template-columns: 1fr;
    max-width: 32rem;
  }
}

@media (max-width: 480px) {
  .benefit-card-content {
    padding: 2rem 1.5rem;
  }

  .benefit-heading {
    gap: 1rem;
  }

  .benefit-icon {
    flex-basis: 4.5rem;
    width: 4.5rem;
    height: 4.5rem;
  }

  .benefit-icon i {
    font-size: 2.5rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .benefit-card {
    opacity: 1;
    transform: none;
    animation: none;
  }
}
</style>
