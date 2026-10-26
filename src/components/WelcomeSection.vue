<template>
  <section class="welcome-section">
    <div class="section-padding">
      <div class="section-container welcome-grid">
        <div class="welcome-media">
          <span class="welcome-media-frame" aria-hidden="true"></span>
          <img
            src="https://maranathaphes.org/wp-content/uploads/2026/06/Maranatha_phes06.webp"
            alt="Familia de la Fundación Maranatha PHES"
            class="welcome-media-img"
            loading="lazy"
          />
          <img
            src="https://res.cloudinary.com/dmy0prpa5/image/upload/v1792445733/Logo-fundacion-maranatha-phes-con-R_tc28b9.png"
            alt="Fundación Maranatha PHES"
            class="welcome-media-badge"
            loading="lazy"
          />
        </div>

        <div class="welcome-content">
          <p class="welcome-eyebrow">Bienvenido a la Fundación Maranatha PHES</p>

          <h2 class="welcome-title">
            Un mensaje de salvación que se <br />
            convierte en obra social
          </h2>

          <p class="welcome-text">
            Somos una familia cristiana que ama servir y vive gracias a Dios; nació la Fundación
            Maranatha PHES. Nuestro deseo es extender el mensaje de salvación de Jesús a través de
            campañas de evangelización, actividades de ayuda social, donación de alimentos y
            vestuario y proyectos de capacitación para que muchas familias sean transformadas en
            todas sus áreas.
          </p>

          <blockquote class="welcome-quote">
            Desde 2024 Dios nos ha permitido servir en campañas de evangelización, jornadas de
            donación de alimentos y vestuario y proyectos de capacitación en oficios manuales.
            Nuestro anhelo es llegar a muchas más personas y familias con tu apoyo.
          </blockquote>

          <div class="welcome-features">
            <div class="welcome-feature">
              <img
                :src="volunteerIcon"
                alt=""
                class="welcome-feature-icon welcome-feature-icon-image"
              />
              <div>
                <h3 class="welcome-feature-title">
                  Únete como <br />
                  voluntario
                </h3>
                <p class="welcome-feature-text">
                  Si amas la obra social y <br />
                  a otros
                </p>
              </div>
            </div>

            <div class="welcome-feature">
              <img
                :src="donationIcon"
                alt=""
                class="welcome-feature-icon welcome-feature-icon-image"
              />
              <div>
                <h3 class="welcome-feature-title">
                  Comienza a donar <br />
                  hoy
                </h3>
                <p class="welcome-feature-text">
                  Tus aportes nos ayudan <br />
                  a crecer
                </p>
              </div>
            </div>
          </div>

          <div class="welcome-actions">
            <RouterLink to="/nosotros" class="welcome-btn welcome-btn--gold">Conócenos</RouterLink>
            <RouterLink to="/donaciones" class="welcome-btn welcome-btn--green">
              <i class="fa-solid fa-heart"></i>
              Quiero Donar
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

import donationIcon from '@/assets/welcome-donation-icon.png'
import volunteerIcon from '@/assets/welcome-volunteer-icon.png'

defineOptions({ name: 'WelcomeSection' })
</script>

<style scoped>
.welcome-section {
  background: #ffffff;
  font-family: 'Roundo', 'Nunito', sans-serif;
}

.welcome-grid {
  display: grid;
  gap: 3rem;
  align-items: center;
  padding-top: 3.5rem;
  padding-bottom: 3.5rem;
}

.welcome-media {
  position: relative;
  max-width: 26rem;
  margin: 0 auto;
}

.welcome-media-frame {
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

.welcome-media-img {
  position: relative;
  z-index: 1;
  display: block;
  width: 100%;
  height: 24rem;
  object-fit: cover;
  border-radius: 0.5rem 0.5rem 13rem 13rem;
  box-shadow: 0 15px 40px -10px rgba(0, 0, 0, 0.15);
}

.welcome-media-badge {
  position: absolute;
  z-index: 3;
  right: -0.75rem;
  bottom: 2.5rem;
  width: 8rem;
  height: auto;
  filter: drop-shadow(0 6px 14px rgba(0, 0, 0, 0.18));
}

.welcome-eyebrow {
  font-family: 'Callisto MT', 'Roundo', 'Nunito', sans-serif;
  color: #806950;
  font-size: 1.225rem;
  font-weight: 700;
  line-height: 24px;
}

.welcome-title {
  margin-top: 2px;
  color: #283734;
  font-family: 'Roundo', 'Nunito', sans-serif;
  font-size: 2rem;
  font-weight: bold;
  line-height: 40px;
  letter-spacing: -1.2px;
}

.welcome-text {
  font-family: 'Roundo', 'Nunito', sans-serif;
  margin-top: 1.25rem;
  max-width: 34rem;
  color: #6b5b4f;
  font-size: 0.875rem;
  line-height: 1.7;
}

.welcome-quote {
  margin-top: 1.5rem;
  max-width: 34rem;
  padding-left: 1.25rem;
  border-left: 3px solid #003d1f;
  color: #3d2e1f;
  font-size: 0.975rem;
  line-height: 1.7;
}

.welcome-features {
  display: grid;
  gap: 1.5rem;
  margin-top: 2rem;
}

.welcome-feature {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.welcome-feature-icon {
  color: #003d1f;
  font-size: 1.75rem;
}

.welcome-feature-icon-image {
  flex: 0 0 2.35rem;
  width: 4.15rem;
  height: 4.15rem;
  object-fit: contain;
}

.welcome-feature-title {
  color: #003d1f;
  font-family: 'Roundo', 'Nunito', sans-serif;
  font-size: 1.1625rem;
  font-weight: 700;
}

.welcome-feature-text {
  margin-top: 0.25rem;
  color: #6b5b4f;
  font-size: 0.8125rem;
  line-height: 1.5;
}

.welcome-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2.5rem;
}

.welcome-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 2.25rem;
  border-radius: 9999px;
  font-size: 0.9375rem;
  font-weight: 700;
  transition:
    background-color 0.15s ease-in-out,
    transform 0.15s ease-in-out;
}

.welcome-btn--gold {
  background-color: #d7aa67;
  color: #ffffff;
}

.welcome-btn--gold:hover {
  background-color: #c89a56;
}

.welcome-btn--green {
  background-color: #003d1f;
  color: #ffffff;
}

.welcome-btn--green:hover {
  background-color: #0a5c31;
}

@media (min-width: 640px) {
  .welcome-media-img {
    height: 30rem;
  }
}

@media (max-width: 639px) {
  .welcome-grid {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    padding: 2rem 0.9rem 2.5rem;
  }

  .welcome-content {
    display: contents;
  }

  .welcome-eyebrow {
    order: 1;
  }

  .welcome-title {
    order: 2;
  }

  .welcome-text {
    order: 3;
  }

  .welcome-media {
    order: 4;
    width: min(100%, 18rem);
    max-width: 18rem;
    margin-top: 0.35rem;
    margin-bottom: 0.35rem;
  }

  .welcome-media-frame {
    top: -0.75rem;
    left: -0.65rem;
    width: calc(100% - 1.75rem);
    height: calc(100% - 2.5rem);
    border-width: 2px;
    border-radius: 0.45rem 0.45rem 8rem 8rem;
  }

  .welcome-media-img {
    height: 20rem;
    border-radius: 0.45rem 0.45rem 9rem 9rem;
  }

  .welcome-media-badge {
    right: -0.35rem;
    bottom: 1.25rem;
    width: 5.5rem;
  }

  .welcome-eyebrow {
    font-size: 0.95rem;
    line-height: 1.3;
  }

  .welcome-title {
    margin-top: 0.35rem;
    font-size: 1.85rem;
    line-height: 1.12;
    letter-spacing: -0.5px;
    text-align: center;
  }

  .welcome-title br,
  .welcome-text br,
  .welcome-quote br,
  .welcome-feature-title br,
  .welcome-feature-text br {
    display: none;
  }

  .welcome-text {
    margin-top: 0.9rem;
    font-size: 0.9rem;
    line-height: 1.55;
    text-align: justify;
  }

  .welcome-quote {
    order: 5;
    margin-top: 1rem;
    padding-left: 0.8rem;
    font-size: 0.92rem;
    line-height: 1.55;
  }

  .welcome-features {
    order: 6;
    gap: 0.9rem;
    margin-top: 1.25rem;
  }

  .welcome-feature {
    gap: 0.6rem;
  }

  .welcome-feature-icon {
    flex: 0 0 1.85rem;
    font-size: 1.95rem;
  }

  .welcome-feature-icon-image {
    flex-basis: 2.45rem;
    width: 3.45rem;
    height: 3.45rem;
  }

  .welcome-feature-title {
    font-size: 1.15rem;
  }

  .welcome-feature-text {
    margin-top: 0.15rem;
    font-size: 0.92rem;
  }

  .welcome-actions {
    order: 7;
    gap: 0.6rem;
    margin-top: 1.5rem;
  }

  .welcome-btn {
    flex: 1 1 9rem;
    justify-content: center;
    padding: 0.65rem 0.75rem;
    font-size: 0.95rem;
  }
}

@media (min-width: 1024px) {
  .welcome-grid {
    grid-template-columns: 0.85fr 1fr;
    gap: 4.5rem;
    padding-top: 5rem;
    padding-bottom: 5rem;
  }

  .welcome-media {
    max-width: none;
  }

  .welcome-media-img {
    height: 34rem;
    border-radius: 0.5rem 0.5rem 16rem 16rem;
  }

  .welcome-media-frame {
    border-width: 4px;
    border-radius: 0.5rem 0.5rem 14rem 14rem;
  }

  .welcome-features {
    grid-template-columns: max-content max-content;
    gap: 2rem;
    justify-content: start;
  }
}
</style>
