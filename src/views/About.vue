<template>
  <main class="about-page">
    <section class="about-hero">
      <div class="about-hero-overlay"></div>
      <h1>Gracias por interesarte en nosotros</h1>
    </section>

    <section class="about-story">
      <div class="about-story-image">
        <img
          src="https://maranathaphes.org/wp-content/uploads/2026/06/Maranatha_phes24-1024x768.webp"
          alt="Actividad de la Fundación Maranatha PHES"
        />
      </div>

      <div class="about-story-content">
        <p class="about-eyebrow">Nuestra Historia</p>
        <h2>La Fundación Maranatha PHES un Proyecto que el Señor Jesucristo</h2>
        <p>
          Nos confió para servir a otros y ayudar a los más necesitados. Hace años atrás veníamos
          realizando actividades de apoyo social, en el año 2024 donde se constituye legalmente ante
          las autoridades esta fundación.
        </p>
        <blockquote>
          Nos complace ver cómo hasta hoy Dios nos ha permitido contribuir en campañas de
          evangelización, actividades de ayuda social por medio de donación de alimentos y
          vestuario, proyectos de capacitación en oficios de trabajo manual, alianzas estratégicas y
          muchas otras acciones que transforman vidas.
        </blockquote>
      </div>
    </section>

    <section class="about-stats" aria-label="Estadísticas de la fundación">
      <div><strong>70M</strong><span>Total de donaciones</span></div>
      <div><strong>48K</strong><span>Proyectos apoyados</span></div>
      <div><strong>500</strong><span>Niños que necesitan ayuda</span></div>
      <div><strong>230</strong><span>Nuestros voluntarios</span></div>
    </section>

    <Testimonials />
  </main>
</template>

<script setup lang="ts">
import Testimonials from '@/components/Testimonials.vue'

defineOptions({ name: 'AboutView' })
</script>

<style scoped>
.about-page {
  background: #ffffff;
  color: #283734;
  font-family: 'Roundo', 'Nunito', sans-serif;
}

.about-hero {
  position: relative;
  display: grid;
  min-height: 18rem;
  place-items: center;
  overflow: hidden;
  background: url('https://maranathaphes.org/wp-content/uploads/2026/06/Maranatha_phes10.webp')
    center / cover no-repeat;
}

.about-hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(40, 55, 52, 0.53);
}

.about-hero h1 {
  position: relative;
  z-index: 1;
  color: #ffffff;
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 900;
  text-align: center;
}

.about-story {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1fr);
  gap: 5rem;
  align-items: center;
  width: min(calc(100% - 3rem), 76rem);
  margin: 0 auto;
  padding: 5rem 1rem 2rem;
}

.about-story-image {
  position: relative;
  padding: 1.4rem 1.4rem 0 0;
}

.about-story-image::before {
  position: absolute;
  inset: 0 3rem 2rem 0;
  border: 3px solid #d7aa67;
  content: '';
}

.about-story-image img {
  position: relative;
  display: block;
  width: 100%;
  height: 32rem;
  border-radius: 0 8rem 8rem 0;
  object-fit: cover;
}

.about-eyebrow {
  color: #806b55;
  font-family: 'Callisto MT', 'Roundo', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
}

.about-story-content h2 {
  max-width: 38rem;
  margin-top: 0.4rem;
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 900;
  line-height: 1.02;
}

.about-story-content > p {
  margin-top: 1.5rem;
  color: #87918e;
  line-height: 1.75;
}

.about-story-content blockquote {
  margin-top: 1.5rem;
  padding: 1rem 1.2rem;
  border-left: 4px solid #00633d;
  color: #68746f;
  line-height: 1.75;
}

.about-stats {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  width: min(calc(100% - 6rem), 70rem);
  margin: 0 auto 5rem;
  padding: 1.8rem 2rem;
  border-radius: 1rem;
  background: #003d1f;
  color: #ffffff;
  text-align: center;
}

.about-stats div + div {
  border-left: 1px solid rgba(255, 255, 255, 0.2);
}

.about-stats strong,
.about-stats span {
  display: block;
}

.about-stats strong {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 900;
}

.about-stats span {
  margin-top: 0.4rem;
  color: #a9c2b7;
  font-size: 0.8rem;
}

@media (max-width: 700px) {
  .about-hero {
    min-height: 14rem;
  }

  .about-hero h1 {
    padding: 0 1rem;
    font-size: 1.9rem;
  }

  .about-story {
    grid-template-columns: 1fr;
    gap: 2rem;
    width: calc(100% - 1rem);
    padding: 2.5rem 0.5rem 1.5rem;
  }

  .about-story-image img {
    height: 24rem;
  }

  .about-story-content h2 {
    font-size: 2rem;
  }

  .about-stats {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    width: calc(100% - 1rem);
    gap: 1rem 0;
    margin-bottom: 3rem;
    padding: 1.2rem 0.5rem;
  }

  .about-stats div:nth-child(odd) {
    border-left: 0;
  }

  .about-stats div:nth-child(even) {
    border-left: 1px solid rgba(255, 255, 255, 0.2);
  }
}
</style>
