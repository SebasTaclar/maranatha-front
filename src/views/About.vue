<template>
  <main class="about-page">
    <section class="about-hero">
      <div class="about-hero-overlay"></div>
      <h1>Gracias por interesarte en nosotros</h1>
    </section>

    <section class="about-story">
      <div class="about-story-media">
        <span class="about-story-frame" aria-hidden="true"></span>
        <img
          src="https://maranathaphes.org/wp-content/uploads/2026/06/Maranatha_phes04.webp"
          alt="Actividad de la Fundación Maranatha PHES"
          class="about-story-img"
        />
        <img
          src="https://res.cloudinary.com/dmy0prpa5/image/upload/v1792445733/Logo-fundacion-maranatha-phes-con-R_tc28b9.png"
          alt="Fundación Maranatha PHES"
          class="about-story-badge"
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

    <section class="about-testimonials">
      <p class="about-testimonials-eyebrow">Nuestros testimonios</p>
      <h2>Lo que dicen de la<br />Fundación Maranatha PHES</h2>
      <div class="about-testimonials-grid">
        <div v-for="person in testimonialPeople" :key="person.name" class="about-testimonials-item">
          <img :src="person.avatar" :alt="person.name" loading="lazy" />
          <div class="about-testimonials-card">
            <p>{{ person.text }}</p>
            <h3>{{ person.name }}</h3>
            <span class="about-testimonials-role">{{ person.role }}</span>
            <div class="about-testimonials-stars" aria-label="5 estrellas">
              <i v-for="n in 5" :key="n" class="fa-solid fa-star"></i>
            </div>
          </div>
        </div>
      </div>
    </section>

    <JoinUsSection />

    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31816.20510130938!2d-74.08024700000001!3d4.589422!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9901aa3a237b%3A0x7b32c092de17b7f0!2sCra.%207%20%232-16%20interior%203%2C%20Bogot%C3%A1%2C%20Colombia!5e0!3m2!1ses!2sus!4v1792526500733!5m2!1ses!2sus"
      class="about-map"
      allowfullscreen
      loading="lazy"
      referrerpolicy="strict-origin-when-cross-origin"
      title="Ubicación Fundación Maranatha PHES"
    ></iframe>
  </main>
</template>

<script setup lang="ts">
import JoinUsSection from '@/components/JoinUsSection.vue'

defineOptions({ name: 'AboutView' })

const testimonialPeople = [
  {
    name: 'Nelinda Tibata Medina',
    role: 'Soy madre cabeza de familia de dos jóvenes',
    avatar: 'https://maranathaphes.org/wp-content/uploads/2026/05/Nelinda-Tibata-Medina.jpg',
    text: 'Actualmente para la Gloria de Dios he estado aquí en la Fundación Maranatha PHES, sirviendo en las diferentes actividades y en las brigadas evangelísticas, hace aproximadamente 8 años cambió mi vida, me ha venido transformando por medio de su Palabra en una mujer sabia y entendida para liderar a los dos jóvenes que el Señor me regaló. Dios me ha dado en este momento el privilegio de estudiar y compartir la palabra en amor a otras personas y gracias a esta fundación he estado adquiriendo más conocimiento del Señor Jesús y más experiencias en el ámbito de manualidades.',
  },
  {
    name: 'Heilene Piedad Lopez Sánchez',
    role: 'Deseo de mostrar a otros las maravillas del poder de Dios en las vidas',
    avatar: 'https://maranathaphes.org/wp-content/uploads/2026/05/Heilene-Piedad-Lopez-Sanchez.jpg',
    text: 'Soy Heilene Piedad Lopez Sánchez y con el deseo de mostrar a otros las maravillas del poder de Dios en las vidas, buscaba la manera de servir y no sabía cómo desarrollar este deseo o anhelo, necesitaba ser capacitada, pero en su tiempo perfecto ya había el Señor dispuesto el lugar correcto y el equipo correcto, el cual para mí es la Fundación Maranatha PHES, permitiéndonos a mí y a mi hijo contribuir en su obra. Aquí hemos podido dar una mano aquellos vulnerables, solitarios, necesitados, no solo de Cristo, que es lo más importante y objetivo principal de la fundación, sino aquellos que están en desventaja social, física, económica, emocional y sobre todo espiritual, es una bendición muy grande y un privilegio servir en el Reino para el Señor y hacerlo desde el lugar que el señor dispuso en su perfecta voluntad, gracias a Dios y a la Fundación Maranatha PHES.',
  },
  {
    name: 'Samuel Andrés Vega Lopez',
    role: 'Empecé evangelizando en compañía de personas que reflejan el carácter de Cristo con un corazón manso y humilde',
    avatar: 'https://maranathaphes.org/wp-content/uploads/2026/05/Samuel-Andres-Vega-Lopez-.jpg',
    text: 'Todo comienza desde los 12 años, todo lo que viví y experimenté desde entonces hasta ahora me ayudó a conocer a Dios e incluso desde muy chiquito el Señor ya cuidaba mi corazón para no guardar rencor, agradezco que aún estando lejos no me haya soltado y me haya dado un corazón humilde para no hacer oídos sordos a su llamado, y cuando me permitió conocerlo, Él me condujo a servirle de una manera que no esperaba pero poco a poco me introdujo a una fundación llamada Maranatha PHES, dónde empecé evangelizando en compañía de personas que reflejan el carácter de Cristo con un corazón manso y humilde, de las cuales he podido aprender y madurar, cada vez más en el conocimiento del Señor, y solo puedo decir gracias a ti mi Dios por permitirme servirte, para tu obra y sobre todo para tu gloria y honra.',
  },
]
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
  background: url('https://maranathaphes.org/wp-content/uploads/2026/06/Maranatha_phes36.webp')
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

.about-story-media {
  position: relative;
  max-width: 26rem;
  margin: 0 auto;
}

.about-story-frame {
  position: absolute;
  top: -1.1rem;
  left: -1.1rem;
  width: calc(100% - 2.9rem);
  height: calc(100% - 4.1rem);
  border: 3px solid #d7aa67;
  border-radius: 0.5rem 0.5rem 11rem 11rem;
  z-index: 2;
  pointer-events: none;
}

.about-story-img {
  position: relative;
  z-index: 1;
  display: block;
  width: 100%;
  height: 32rem;
  object-fit: cover;
  border-radius: 0.5rem 0.5rem 13rem 13rem;
  box-shadow: 0 15px 40px -10px rgba(0, 0, 0, 0.15);
}

.about-story-badge {
  position: absolute;
  z-index: 3;
  right: -0.75rem;
  bottom: 2.5rem;
  width: 8rem;
  height: auto;
  filter: drop-shadow(0 6px 14px rgba(0, 0, 0, 0.18));
}

.about-eyebrow {
  color: #b18a4d;
  font-family: 'Callisto MT', 'Roundo', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
}

.about-story-content h2 {
  max-width: 38rem;
  margin-top: 0.4rem;
  font-size: clamp(2rem, 4vw, 2.3rem);
  font-weight: 900;
  line-height: 1.02;
}

.about-story-content > p {
  margin-top: 1.5rem;
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
  font-size: 0.7rem;
}

.about-map {
  display: block;
  width: 100%;
  height: 16rem;
  border: 0;
}

.about-testimonials {
  text-align: center;
  padding: 4rem 1.5rem 5rem;
}

.about-testimonials-eyebrow {
  color: #b18a4d;
  font-family: 'Callisto MT', 'Roundo', sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
}

.about-testimonials h2 {
  margin-top: 0.3rem;
  color: #283734;
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 900;
  line-height: 1.1;
}

.about-testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;
  max-width: 60rem;
  margin: 3rem auto 0;
}

.about-testimonials-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.about-testimonials-item img {
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #e8e4df;
}

.about-testimonials-card {
  width: 100%;
  margin-top: 1.5rem;
  padding: 2rem 1.5rem;
  border: 1px solid #e0dcd6;
  border-radius: 1.5rem;
  background: #ffffff;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
  text-align: center;
}

.about-testimonials-card p {
  color: #6b5b4f;
  font-family: 'Callisto MT', 'Roundo', sans-serif;
  font-size: 0.9rem;
  line-height: 1.8;
}

.about-testimonials-card h3 {
  margin-top: 1rem;
  color: #283734;
  font-size: 1.05rem;
  font-weight: 900;
}

.about-testimonials-role {
  display: block;
  margin-top: 0.2rem;
  color: #9a9490;
  font-size: 0.75rem;
}

.about-testimonials-stars {
  display: flex;
  justify-content: center;
  gap: 0.15rem;
  margin-top: 0.6rem;
  color: #f5a623;
  font-size: 0.95rem;
}

@media (min-width: 1024px) {
  .about-hero {
    padding: 4rem 2rem 3rem;
  }

  .about-hero-grid {
    grid-template-columns: 0.85fr 1fr;
    gap: 4.5rem;
  }

  .about-hero-media {
    max-width: none;
  }

  .about-hero-img {
    height: 34rem;
    border-radius: 0.5rem 0.5rem 16rem 16rem;
  }

  .about-hero-frame {
    border-width: 4px;
    border-radius: 0.5rem 0.5rem 14rem 14rem;
  }

  .about-hero-content h1 {
    text-align: left;
  }
}

@media (max-width: 700px) {
  .about-hero {
    padding: 2rem 1rem 1.5rem;
  }

  .about-hero-media {
    width: min(100%, 18rem);
    max-width: 18rem;
  }

  .about-hero-frame {
    top: -0.75rem;
    left: -0.65rem;
    width: calc(100% - 1.75rem);
    height: calc(100% - 2.5rem);
    border-width: 2px;
    border-radius: 0.45rem 0.45rem 8rem 8rem;
  }

  .about-hero-img {
    height: 22rem;
    border-radius: 0.45rem 0.45rem 9rem 9rem;
  }

  .about-hero-badge {
    right: -0.35rem;
    bottom: 1.25rem;
    width: 5.5rem;
  }

  .about-hero-content h1 {
    font-size: 1.9rem;
    padding: 0 0.5rem;
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

  .about-testimonials {
    padding: 2.5rem 1rem 3rem;
  }

  .about-testimonials-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
    max-width: 22rem;
    margin: 2rem auto 0;
  }

  .about-testimonials-item img {
    width: 8rem;
    height: 8rem;
  }
}
</style>
