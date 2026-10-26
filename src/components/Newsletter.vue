<template>
  <section id="contacto" class="contact-section">
    <div class="contact-hero">
      <div class="contact-hero-overlay"></div>
      <h2>Hablemos, contáctanos</h2>
    </div>

    <div class="contact-details">
      <a
        href="https://wa.me/573213691619?text=Hola%2C%20Fundaci%C3%B3n%20Maranatha%20PHES.%20Me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n."
        target="_blank"
        rel="noopener noreferrer"
        class="contact-detail"
      >
        <span class="contact-icon" aria-hidden="true">
          <i class="fa-solid fa-phone-volume"></i>
        </span>
        <span>
          <small>Línea de atención</small>
          <strong>+57 321 369 1619</strong>
        </span>
      </a>

      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=maranathaphes@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        class="contact-detail"
      >
        <span class="contact-icon" aria-hidden="true">
          <i class="fa-regular fa-envelope"></i>
        </span>
        <span>
          <small>Escríbenos</small>
          <strong>maranathaphes@gmail.com</strong>
        </span>
      </a>

      <a
        href="https://www.google.com/maps/search/?api=1&query=Carrera+7+%232-16+interior+3%2C+Bogot%C3%A1%2C+Colombia"
        target="_blank"
        rel="noopener noreferrer"
        class="contact-detail"
      >
        <span class="contact-icon" aria-hidden="true">
          <i class="fa-solid fa-location-dot"></i>
        </span>
        <span>
          <small>Carrera 7 # 2 - 16 interior 3</small>
          <strong>Bogotá, Colombia</strong>
        </span>
      </a>
    </div>

    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31816.20510130938!2d-74.08024700000001!3d4.589422!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9901aa3a237b%3A0x7b32c092de17b7f0!2sCra.%207%20%232-16%20interior%203%2C%20Bogot%C3%A1%2C%20Colombia!5e0!3m2!1ses!2sus!4v1792526500733!5m2!1ses!2sus"
      class="contact-map"
      allowfullscreen
      loading="lazy"
      referrerpolicy="strict-origin-when-cross-origin"
      title="Ubicación Fundación Maranatha PHES"
    ></iframe>
  </section>
</template>

<script setup lang="ts">
defineOptions({ name: 'NewsletterSection' })
</script>

<style scoped>
.contact-section {
  position: relative;
  background: #ffffff;
  font-family: 'Roundo', 'Nunito', sans-serif;
}

.contact-hero {
  position: relative;
  display: grid;
  min-height: 15.5rem;
  place-items: center;
  overflow: hidden;
  background: url('https://maranathaphes.org/wp-content/uploads/2026/06/Maranatha_phes32.webp')
    center / cover no-repeat;
}

.contact-hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(40, 55, 52, 0.48);
}

.contact-hero h2 {
  position: relative;
  z-index: 1;
  margin: 0;
  color: #ffffff;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 900;
  text-align: center;
}

.contact-details {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  width: min(calc(100% - 2rem), 58rem);
  margin: -2.7rem auto 0;
  padding: 1.6rem 2rem;
  border-radius: 1.25rem;
  background: #ffffff;
  box-shadow: 0 0.8rem 2rem rgba(40, 55, 52, 0.14);
}

.contact-detail {
  display: flex;
  align-items: center;
  min-width: 0;
  gap: 0.75rem;
  padding: 0 1.5rem;
  color: #283734;
}

.contact-detail + .contact-detail {
  border-left: 1px solid #e8e4da;
}

.contact-icon {
  display: grid;
  flex: 0 0 2.8rem;
  width: 2.8rem;
  height: 2.8rem;
  place-items: center;
  border-radius: 50%;
  background: #d7aa67;
  color: #283734;
  font-size: 1.15rem;
}

.contact-detail small,
.contact-detail strong {
  display: block;
}

.contact-detail small {
  margin-bottom: 0.2rem;
  color: #7d8581;
  font-size: 0.75rem;
}

.contact-detail strong {
  overflow-wrap: anywhere;
  font-size: 0.82rem;
  font-weight: 700;
}

.contact-map {
  display: block;
  width: 100%;
  height: 18rem;
  margin-top: 3.2rem;
  border: 0;
}

@media (max-width: 700px) {
  .contact-hero {
    min-height: 12rem;
  }

  .contact-hero h2 {
    padding: 0 1rem;
    font-size: 1.8rem;
  }

  .contact-details {
    grid-template-columns: 1fr;
    gap: 0.9rem;
    width: calc(100% - 1rem);
    margin-top: -1.6rem;
    padding: 1.1rem 0.75rem;
  }

  .contact-detail {
    padding: 0.2rem 0.5rem;
  }

  .contact-detail + .contact-detail {
    padding-top: 0.9rem;
    border-top: 1px solid #e8e4da;
    border-left: 0;
  }

  .contact-map {
    height: 16rem;
    margin-top: 2rem;
  }
}
</style>
