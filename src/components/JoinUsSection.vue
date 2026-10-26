<template>
  <section id="voluntariado" class="join-us">
    <div class="join-us-hero">
      <div class="join-us-overlay"></div>
      <div class="join-us-hero-content">
        <h2>
          Hazte voluntario, únete a nosotros para llevar<br />esperanza y salvación a muchas
          familias
        </h2>
        <RouterLink to="/contacto" class="join-us-button">Quiero servir</RouterLink>
      </div>
      <div class="join-us-hero-shape" aria-hidden="true"></div>
    </div>

    <div class="join-us-events">
      <div class="join-us-events-intro">
        <p class="join-us-eyebrow">Únase a</p>
        <h3>Nuestros próximos eventos</h3>
        <p>
          Te invitamos a ser parte de esta gran familia. Fundación Maranatha PHES y sus
          participantes se unen a esta obra para que con tu ayuda juntos impactemos muchas vidas y
          familias.
        </p>
      </div>

      <div class="join-us-event-list">
        <article v-for="event in events" :key="event.title" class="join-us-event">
          <p class="join-us-event-type">Bogotá, Colombia</p>
          <RouterLink to="/contacto" class="join-us-event-title">{{ event.title }}</RouterLink>
          <RouterLink to="/contacto" class="join-us-event-link">→ Más información</RouterLink>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

const events = [
  {
    title: 'Manos a la obra: Taller de Bisutería para la comunidad',
  },
  {
    title: 'Unidos en oración: cada viernes en Maranatha PHES',
  },
  {
    title: 'Taller de Marroquinería en Fundación Maranatha PHES',
  },
]

defineOptions({ name: 'JoinUsSection' })
</script>

<style scoped>
.join-us {
  overflow: hidden;
  background: #f9f4e8;
  color: #283734;
}

.join-us-hero {
  position: relative;
  min-height: 22rem;
  display: grid;
  place-items: center;
  background: #003d1f;
  isolation: isolate;
}

.join-us-hero::before {
  position: absolute;
  inset: 0;
  background: url('https://maranathaphes.org/wp-content/uploads/2026/06/Maranatha_phes36.webp')
    center 43% / cover no-repeat;
  content: '';
  mix-blend-mode: luminosity;
  opacity: 0.6;
}

.join-us-hero-shape {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 106px;
  background-image: url('https://oxpinswp.pixydrops.com/wp-content/uploads/2022/09/become-volunteer-shape-1.png');
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: cover;
  z-index: 2;
}

.join-us-overlay {
  position: absolute;
  inset: 0;
  background: #003d1f;
  opacity: 0.6;
  z-index: -1;
}

.join-us-hero-content {
  position: relative;
  z-index: 1;
  padding: 2rem 1rem 3.5rem;
  color: #ffffff;
  text-align: center;
}

.join-us-hero h2 {
  font-family: 'Roundo', 'Nunito', sans-serif;
  font-size: 40px;
  font-weight: 900;
  line-height: 52px;
  letter-spacing: -0.04em;
}

.join-us-button {
  display: inline-flex;
  margin-top: 1.25rem;
  padding: 0.65rem 1.5rem;
  border-radius: 9999px;
  background: #d7aa67;
  color: #283734;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  transition:
    background-color 0.15s ease-in-out,
    transform 0.15s ease-in-out;
}

.join-us-button:hover {
  background: #e4bd80;
  transform: translateY(-2px);
}

.join-us-events {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(28rem, 1fr);
  gap: 5rem;
  max-width: 78rem;
  margin: 0 auto;
  padding: 6rem 2rem 6.5rem;
  background: #f9f4e8;
  color: #ffffff;
}

.join-us-events-intro {
  max-width: 32rem;
  padding-top: 0.5rem;
}

.join-us-eyebrow {
  color: #806850;
  font-family: 'Callisto MT', 'Roundo', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
}

.join-us-events h3 {
  margin-top: 0.35rem;
  font-family: 'Roundo', 'Nunito', sans-serif;
  font-size: clamp(1.75rem, 3vw, 2.3rem);
  font-weight: 700;
  line-height: 1.05;
  color: #283734;
}

.join-us-events-intro > p:last-child {
  margin-top: 1.5rem;
  color: #6f7775;
  font-size: 1rem;
  line-height: 1.7;
}

.join-us-event-list {
  display: grid;
  gap: 1.15rem;
  width: 100%;
  max-width: 30rem;
  justify-self: end;
}

.join-us-event {
  padding: 1.95rem 1.5rem;
  border-radius: 0.9rem;
  background: #ffffff;
  box-shadow: 0 5px 16px rgba(40, 55, 52, 0.06);
}

.join-us-event-type {
  color: #b17c34;
  font-family: 'Callisto MT', 'Roundo', sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
}

.join-us-event-title {
  display: block;
  margin-top: 0.35rem;
  color: #283734;
  font-family: 'Roundo', 'Nunito', sans-serif;
  font-size: 1.4rem;
  font-weight: 900;
  line-height: 1.2;
  text-decoration: none;
}

.join-us-event-title:hover {
  color: #00633d;
}

.join-us-event-link {
  display: inline-block;
  margin-top: 0.7rem;
  color: #283734;
  font-size: 0.8rem;
  font-weight: 600;
}

.join-us-event-link:hover {
  color: #00633d;
}

@media (max-width: 700px) {
  .join-us-hero {
    min-height: 17rem;
  }

  .join-us-events {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 4rem 1.5rem 4.5rem;
  }

  .join-us-events-intro {
    max-width: none;
  }

  .join-us-event-list {
    max-width: none;
  }

  .join-us-hero h2 {
    max-width: 22rem;
    font-size: 1.55rem;
    line-height: 1.15;
  }

  .join-us-hero h2 br {
    display: none;
  }

  .join-us-hero-content {
    padding: 1.75rem 1rem 4.5rem;
  }

  .join-us-events {
    padding-right: 1rem;
    padding-left: 1rem;
  }

  .join-us-event {
    padding: 1.35rem 1.1rem;
  }

  .join-us-event-title {
    font-size: 1.15rem;
  }
}
</style>
