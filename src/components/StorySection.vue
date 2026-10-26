<template>
  <section ref="sectionRef" class="faq-section">
    <div class="faq-content">
      <div class="faq-intro">
        <p class="faq-eyebrow">Preguntas frecuentes</p>
        <h2>Algunas dudas que las personas suelen tener</h2>
        <p class="faq-description">
          Aquí respondemos algunas preguntas sobre cómo recibir ayuda, cómo apoyar la fundación y
          cómo hacer parte de esta obra. Si tienes alguna otra duda, puedes escribirnos por nuestros
          canales de contacto.
        </p>
      </div>

      <div class="faq-list">
        <article
          v-for="(faq, index) in faqs"
          :key="faq.question"
          class="faq-item"
          :class="{ 'faq-item--open': openFaq === index }"
        >
          <button
            type="button"
            class="faq-question"
            :aria-expanded="openFaq === index"
            @click="toggleFaq(index)"
          >
            <span>{{ faq.question }}</span>
            <span class="faq-toggle" aria-hidden="true">{{ openFaq === index ? '−' : '+' }}</span>
          </button>
          <div v-if="openFaq === index" class="faq-answer">
            <p>{{ faq.answer }}</p>
          </div>
        </article>
      </div>
    </div>

    <div class="faq-stats">
      <div v-for="(stat, index) in stats" :key="stat.label" class="faq-stat">
        <strong>{{ animatedValues[index] }}{{ stat.suffix }}</strong>
        <span>{{ stat.label }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const faqs = [
  {
    question: '¿Cómo puedo solicitar ayuda para mi familia?',
    answer:
      'Puedes comunicarte con nosotros por WhatsApp o correo electrónico y contarnos brevemente tu situación. Nuestro equipo revisará tu caso y, según la disponibilidad de recursos y campañas activas, te contactaremos para orientarte y agendar una visita, jornada o entrega de ayudas.',
  },
  {
    question: '¿De qué manera puedo apoyar la fundación?',
    answer:
      'Puedes apoyar a la fundación a través de donaciones económicas, donación de alimentos y vestuario, o sirviendo como voluntario en las actividades de evangelización y ayuda social. También nos ayudas mucho compartiendo la información con otras personas que quieran sumarse a esta misión.',
  },
]

const stats = [
  { target: 70, suffix: 'M', label: 'Total de donaciones' },
  { target: 48, suffix: 'K', label: 'Proyectos apoyados' },
  { target: 500, suffix: '', label: 'Niños que necesitan ayuda' },
  { target: 230, suffix: '', label: 'Nuestros voluntarios' },
]

const openFaq = ref(0)
const sectionRef = ref<HTMLElement | null>(null)
const animatedValues = ref(stats.map(() => 0))
let animationFrame = 0
let statsObserver: IntersectionObserver | null = null

const toggleFaq = (index: number) => {
  openFaq.value = openFaq.value === index ? -1 : index
}

const animateStats = () => {
  cancelAnimationFrame(animationFrame)
  const startTime = performance.now()
  const duration = 1200

  const update = (currentTime: number) => {
    const progress = Math.min((currentTime - startTime) / duration, 1)
    const easedProgress = 1 - Math.pow(1 - progress, 3)

    animatedValues.value = stats.map((stat) => Math.round(stat.target * easedProgress))

    if (progress < 1) {
      animationFrame = requestAnimationFrame(update)
    }
  }

  animationFrame = requestAnimationFrame(update)
}

onMounted(() => {
  if (!sectionRef.value) return

  statsObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        animateStats()
        statsObserver?.disconnect()
      }
    },
    { threshold: 0.35 },
  )

  statsObserver.observe(sectionRef.value)
})

onUnmounted(() => {
  cancelAnimationFrame(animationFrame)
  statsObserver?.disconnect()
})

defineOptions({ name: 'StorySection' })
</script>

<style scoped>
.faq-section {
  position: relative;
  overflow: visible;
  padding: 4.5rem 1.5rem 0;
  background:
    linear-gradient(rgba(255, 253, 249, 0.94), rgba(255, 253, 249, 0.94)),
    url('https://res.cloudinary.com/dlwzazojt/image/upload/v1793029230/Maranatha_phes35_sfrd9i.webp') center / cover
      no-repeat;
}

.faq-section::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 18rem;
  height: 100%;
  background: radial-gradient(circle at 20% 45%, rgba(0, 61, 31, 0.08), transparent 68%);
  content: '';
  pointer-events: none;
}

.faq-content {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(24rem, 1fr);
  gap: 4rem;
  max-width: 76rem;
  margin: 0 auto;
  padding-bottom: 4.5rem;
}

.faq-intro {
  padding-top: 0.2rem;
}

.faq-eyebrow {
  color: #806b55;
  font-family: 'Callisto MT', 'Roundo', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
}

.faq-intro h2 {
  max-width: 28rem;
  margin-top: 0.2rem;
  color: #283734;
  font-family: 'Roundo', 'Nunito', sans-serif;
  font-size: clamp(2.2rem, 4vw, 2.55rem);
  font-weight: 900;
  line-height: 0.98;
}

.faq-description {
  max-width: 30rem;
  margin-top: 1.5rem;
  color: #87918e;
  font-family: 'Roundo', sans-serif;
  font-size: 0.95rem;
  line-height: 1.8;
}

.faq-list {
  display: grid;
  align-content: start;
  gap: 0.9rem;
}

.faq-item {
  overflow: hidden;
  border: 1px solid rgba(226, 218, 202, 0.8);
  border-radius: 1.5rem;
  background: #ffffff;
  box-shadow: 0 0.5rem 1.4rem rgba(52, 48, 37, 0.05);
}

.faq-question {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  border: 0;
  background: transparent;
  color: #283734;
  font-family: 'Roundo', sans-serif;
  font-size: 0.9rem;
  font-weight: 800;
  text-align: left;
  cursor: pointer;
}

.faq-toggle {
  display: grid;
  flex: 0 0 2.25rem;
  place-items: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  background: #f7f1e5;
  color: #283734;
  font-size: 1.3rem;
  line-height: 1;
}

.faq-item--open .faq-toggle {
  background: #d7aa67;
}

.faq-answer {
  padding: 0 1.5rem 1.4rem;
  color: #87918e;
  font-family: 'Roundo', sans-serif;
  font-size: 0.88rem;
  line-height: 1.75;
}

.faq-answer p {
  max-width: 38rem;
}

.faq-stats {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  width: min(100%, 72rem);
  margin: 0 auto;
  padding: 1.7rem 2rem;
  border-radius: 1rem;
  transform: translateY(50%);
  background:
    linear-gradient(rgba(0, 61, 31, 0.94), rgba(0, 61, 31, 0.94)),
    url('https://www.maranathaphes.com/wp-content/uploads/2026/06/Maranatha_phes17.webp') center / cover
      no-repeat;
}

.faq-stat {
  display: grid;
  justify-items: center;
  gap: 0.45rem;
  padding: 0 1rem;
  border-right: 1px solid rgba(255, 255, 255, 0.16);
  text-align: center;
}

.faq-stat:last-child {
  border-right: 0;
}

.faq-stat strong {
  color: #ffffff;
  font-family: 'Roundo', 'Nunito', sans-serif;
  font-size: clamp(1.8rem, 3.5vw, 2.7rem);
  font-weight: 900;
  line-height: 1;
}

.faq-stat span {
  color: #a9c2b7;
  font-family: 'Roundo', sans-serif;
  font-size: 0.85rem;
}

.faq-stat:last-child span {
  padding-bottom: 0.35rem;
  border-bottom: 1px solid #d7aa67;
}

@media (max-width: 800px) {
  .faq-content {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .faq-intro h2,
  .faq-description {
    max-width: 40rem;
  }

  .faq-intro h2 {
    font-size: 2.2rem;
  }
}

@media (max-width: 560px) {
  .faq-section {
    padding: 0.8rem 0.65rem 0;
  }

  .faq-content {
    gap: 0.7rem;
    padding-bottom: 0.9rem;
  }

  .faq-eyebrow {
    font-size: 1.05rem;
  }

  .faq-intro h2 {
    margin-top: 0.1rem;
    font-size: 1.9rem;
    line-height: 1.05;
  }

  .faq-description {
    margin-top: 0.4rem;
    font-size: 0.88rem;
    line-height: 1.4;
  }

  .faq-list {
    gap: 0.4rem;
  }

  .faq-item {
    border-radius: 0.9rem;
  }

  .faq-question {
    min-height: 2.4rem;
    padding: 0.4rem 0.55rem;
    font-size: 0.84rem;
  }

  .faq-toggle {
    flex-basis: 1.8rem;
    width: 1.8rem;
    height: 1.8rem;
    font-size: 1.1rem;
  }

  .faq-answer {
    padding: 0 0.55rem 0.5rem;
    font-size: 0.84rem;
    line-height: 1.55;
  }

  .faq-stats {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.75rem 0;
    padding: 0.7rem 0.2rem;
    border-radius: 0.75rem;
  }

  .faq-stat:nth-child(2) {
    border-right: 0;
  }

  .faq-stat {
    padding: 0 0.35rem;
  }

  .faq-stat strong {
    font-size: 1.35rem;
  }

  .faq-stat span {
    font-size: 0.75rem;
  }
}
</style>
