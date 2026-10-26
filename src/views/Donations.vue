<template>
  <main class="donations-page">
    <section class="donations-hero">
      <div class="donations-hero-overlay"></div>
      <h1>Gracias por querer donar</h1>
    </section>

    <section class="donations-content">
      <div class="donations-image">
        <img :src="selectedDonationImage" alt="Familias apoyadas por la Fundación Maranatha PHES" />
        <div class="donations-gallery" aria-label="Galería de imágenes de la donación">
          <button
            v-for="image in donationImages"
            :key="image"
            type="button"
            class="donations-thumbnail"
            :class="{ 'donations-thumbnail--active': selectedDonationImage === image }"
            :aria-label="`Ver imagen ${donationImages.indexOf(image) + 1}`"
            :aria-pressed="selectedDonationImage === image"
            @click="selectedDonationImage = image"
          >
            <img :src="image" alt="" loading="lazy" />
          </button>
        </div>
      </div>

      <div class="donations-info">
        <p class="donations-eyebrow">Tu aporte transforma vidas</p>
        <h2>Donación a la Fundación Maranatha PHES</h2>
        <p class="donations-minimum">A partir de: $5,000.00</p>
        <hr class="donations-divider" />
        <p class="donations-lead">
          Tu donación permite que la Fundación Maranatha PHES continúe llevando el mensaje de
          salvación de Jesús y brindando ayuda social a madres, cabeza de hogar, personas en
          condición de discapacidad y familias vulnerables. Elige el valor que deseas donar y súmate
          a esta obra.
        </p>

        <div class="donations-amount">
          <label for="donation-amount">A partir de ($)</label>
          <input id="donation-amount" v-model.number="donationAmount" type="number" min="5000" />
        </div>

        <div class="donations-quantity">
          <strong>Cantidad</strong>
          <div class="donations-quantity-control">
            <span>{{ donationQuantity }}</span>
            <button type="button" aria-label="Aumentar cantidad" @click="donationQuantity++">
              +
            </button>
            <button
              type="button"
              aria-label="Disminuir cantidad"
              :disabled="donationQuantity === 1"
              @click="donationQuantity = Math.max(1, donationQuantity - 1)"
            >
              −
            </button>
          </div>
        </div>

        <button type="button" class="donations-button" @click="addDonationToCart">
          <i class="fa-solid fa-cart-shopping"></i>
          Añadir al carrito
        </button>

        <p class="donations-note">
          También puedes escribirnos para conocer los medios disponibles para realizar tu donación
          de forma segura.
        </p>

        <div class="donations-share">
          <strong>Comparte esta donación</strong>
          <a
            :href="shareLinks.facebook"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compartir en Facebook"
          >
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a
            :href="shareLinks.whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compartir por WhatsApp"
          >
            <i class="fa-brands fa-whatsapp"></i>
          </a>
          <a
            :href="shareLinks.pinterest"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compartir en Pinterest"
          >
            <i class="fa-brands fa-pinterest-p"></i>
          </a>
          <a
            :href="shareLinks.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compartir en LinkedIn"
          >
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </section>

    <section class="donations-description">
      <h2>Descripción</h2>
      <p>
        Con esta donación estás apoyando directamente la misión de la Fundación Maranatha PHES:
        compartir el mensaje de salvación de Jesús y acompañar a familias que viven situaciones de
        necesidad.
      </p>
      <p>Tus aportes se destinan a:</p>
      <ul class="donations-list">
        <li>Campañas de evangelización y tiempos de oración en barrios y comunidades.</li>
        <li>
          Jornadas de entrega de alimentos, vestuario y elementos básicos a familias vulnerables.
        </li>
        <li>Acompañamiento a madres y padres cabeza de hogar, fortaleciendo su hogar y su fe.</li>
        <li>Actividades y apoyo para personas con discapacidad y sus familias.</li>
      </ul>
      <p>
        Esta donación es voluntaria y puedes definir el valor que deseas aportar. Cada peso suma
        para que más personas reciban ayuda material, espiritual y un mensaje de esperanza. Gracias
        por ser parte de lo que Dios está haciendo a través de la fundación Maranatha Phes.
      </p>
    </section>

    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31816.20510130938!2d-74.08024700000001!3d4.589422!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9901aa3a237b%3A0x7b32c092de17b7f0!2sCra.%207%20%232-16%20interior%203%2C%20Bogot%C3%A1%2C%20Colombia!5e0!3m2!1ses!2sus!4v1792526500733!5m2!1ses!2sus"
      class="donations-map"
      allowfullscreen
      loading="lazy"
      referrerpolicy="strict-origin-when-cross-origin"
      title="Ubicación Fundación Maranatha PHES"
    ></iframe>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useQuotation } from '@/composables/useQuotation'

const donationImages = [
  'https://res.cloudinary.com/dlwzazojt/image/upload/v1793029231/Maranatha_phes24-1024x768_uqobh7.webp',
  'https://res.cloudinary.com/dlwzazojt/image/upload/v1793029231/Maranatha_phes23-1024x768_exfcxl.webp',
  'https://res.cloudinary.com/dlwzazojt/image/upload/v1793029231/Maranatha_phes21-570x428_bh24mt.webp',
  'https://res.cloudinary.com/dlwzazojt/image/upload/v1793029232/Maranatha_phes16_xd3cqj.webp',
  'https://res.cloudinary.com/dlwzazojt/image/upload/v1793029232/Maranatha_phes15_tj0vgr.webp',
  'https://res.cloudinary.com/dlwzazojt/image/upload/v1793029231/Maranatha_phes23-1024x768_exfcxl.webp',
]

const selectedDonationImage = ref(donationImages[0])
const donationAmount = ref(5000)
const donationQuantity = ref(1)
const { addToQuotation, openDrawer } = useQuotation()

const shareUrl = encodeURIComponent(window.location.href)
const shareTitle = encodeURIComponent('Donación a la Fundación Maranatha PHES')
const shareLinks = {
  facebook: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
  whatsapp: `https://wa.me/?text=${shareTitle}%20${shareUrl}`,
  pinterest: `https://pinterest.com/pin/create/button/?url=${shareUrl}&description=${shareTitle}`,
  linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
}

const addDonationToCart = () => {
  addToQuotation(
    {
      id: 'donation-maranatha',
      name: 'Donación a la Fundación Maranatha PHES',
      sku: 'DONACION',
      brand: 'Maranatha PHES',
      price: donationAmount.value,
      image: selectedDonationImage.value,
      category: 'donaciones',
      categoryName: 'Donaciones',
      description: 'Donación para apoyar la misión social de la Fundación Maranatha PHES.',
      inStock: true,
    },
    donationQuantity.value,
  )
  openDrawer()
}

defineOptions({ name: 'DonationsView' })
</script>

<style scoped>
.donations-page {
  min-height: calc(100vh - 5rem);
  background: #fffdf9;
  color: #283734;
  font-family: 'Roundo', 'Nunito', sans-serif;
}

.donations-hero {
  position: relative;
  display: grid;
  min-height: 18rem;
  place-items: center;
  overflow: hidden;
  background: url('https://res.cloudinary.com/dlwzazojt/image/upload/v1793029230/Maranatha_phes35_sfrd9i.webp')
    center / cover no-repeat;
}

.donations-hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(40, 55, 52, 0.78);
}

.donations-hero h1 {
  position: relative;
  z-index: 1;
  color: #ffffff;
  font-size: clamp(2.2rem, 5vw, 4rem);
  font-weight: 900;
  text-align: center;
}

.donations-content {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(22rem, 0.9fr);
  gap: 4rem;
  width: min(calc(100% - 3rem), 76rem);
  margin: -3rem auto 0;
  padding: 2rem;
  position: relative;
  z-index: 2;
  border-radius: 1.5rem;
  background: #ffffff;
  box-shadow: 0 1rem 2.5rem rgba(40, 55, 52, 0.14);
}

.donations-image img {
  display: block;
  width: 100%;
  height: 31rem;
  border-radius: 1rem;
  object-fit: cover;
}

.donations-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  margin-top: 0.75rem;
}

.donations-thumbnail {
  width: 4.5rem;
  height: 4.5rem;
  padding: 0;
  overflow: hidden;
  border: 2px solid transparent;
  border-radius: 0.5rem;
  background: #f3efe6;
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    transform 0.2s ease;
}

.donations-thumbnail:hover,
.donations-thumbnail--active {
  border-color: #d7aa67;
  transform: translateY(-2px);
}

.donations-thumbnail img {
  width: 100%;
  height: 100%;
  border-radius: 0;
  object-fit: cover;
}

.donations-info {
  align-self: center;
}

.donations-eyebrow {
  color: #b18a4d;
  font-size: 1rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.donations-info h2 {
  max-width: 32rem;
  margin-top: 0.7rem;
  font-size: clamp(2rem, 3.5vw, 2rem);
  font-weight: 900;
  line-height: 1.05;
}

.donations-lead {
  margin-top: 1.3rem;
  color: #68746f;
  font-size: 0.9rem;
  line-height: 1.75;
}

.donations-minimum {
  margin-top: 2rem;
  color: #003d1f;
  font-size: 0.9rem;
  font-weight: 900;
}

.donations-divider {
  margin: 1.3rem 0;
  border: 0;
  border-top: 1px solid #e8e1d3;
}

.donations-amount {
  display: grid;
  gap: 0.45rem;
  margin-top: 1.6rem;
}

.donations-amount label {
  font-size: 0.85rem;
  font-weight: 700;
}

.donations-amount input {
  width: 100%;
  max-width: 15rem;
  padding: 0.8rem 1rem;
  border: 1px solid #d9d4c8;
  border-radius: 0.5rem;
  color: #283734;
  font: inherit;
}

.donations-button {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  margin-top: 1.4rem;
  padding: 0.95rem 1.7rem;
  border-radius: 9999px;
  background: #d7aa67;
  color: #283734;
  font-size: 1rem;
  font-weight: 900;
  transition: background 0.2s ease;
}

.donations-quantity {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1.5rem;
}

.donations-quantity-control {
  display: grid;
  grid-template-columns: 3rem 1.6rem;
  grid-template-rows: 1.2rem 1.2rem;
  overflow: hidden;
  border: 1px solid #e2ddd3;
  border-radius: 0.8rem;
}

.donations-quantity-control span {
  display: grid;
  grid-row: span 2;
  place-items: center;
  border-right: 1px solid #e2ddd3;
}

.donations-quantity-control button {
  border: 0;
  background: #ffffff;
  color: #283734;
  font-weight: 700;
  line-height: 1;
  cursor: pointer;
}

.donations-quantity-control button + button {
  border-top: 1px solid #e2ddd3;
}

.donations-quantity-control button:disabled {
  color: #b7b4ad;
  cursor: not-allowed;
}

.donations-share {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.65rem;
  margin-top: 1.5rem;
  color: #283734;
  font-size: 0.8rem;
}

.donations-share a {
  display: grid;
  width: 2rem;
  height: 2rem;
  place-items: center;
  border-radius: 50%;
  background: #f5f0e5;
  color: #283734;
}

.donations-button:hover {
  background: #c89a56;
}

.donations-note {
  max-width: 28rem;
  margin-top: 1rem;
  color: #87918e;
  font-size: 0.8rem;
  line-height: 1.6;
}

.donations-description {
  width: min(calc(100% - 3rem), 76rem);
  margin: 0 auto;
  padding: 4rem 2rem 5rem;
}

.donations-description h2 {
  font-size: 1.8rem;
  font-weight: 900;
}

.donations-description p {
  max-width: 52rem;
  margin-top: 0.8rem;
  color: #68746f;
  line-height: 1.75;
}

.donations-list {
  max-width: 60rem;
  margin: 0.25rem 0 0;
  padding-left: 1.5rem;
  color: #68746f;
  line-height: 1.75;
}

.donations-list li::marker {
  color: #68746f;
}

.donations-map {
  display: block;
  width: 100%;
  height: 16rem;
  border: 0;
}

@media (max-width: 700px) {
  .donations-hero {
    min-height: 14rem;
  }

  .donations-content {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    width: calc(100% - 1rem);
    margin-top: -1.5rem;
    padding: 1rem;
  }

  .donations-image img {
    height: 18rem;
  }

  .donations-thumbnail {
    width: 3.8rem;
    height: 3.8rem;
  }

  .donations-info h2 {
    font-size: 1.9rem;
  }

  .donations-lead {
    font-size: 0.95rem;
  }

  .donations-minimum {
    margin-top: 1.2rem;
  }

  .donations-description {
    width: calc(100% - 1rem);
    padding: 2rem 1rem 3rem;
  }

  .donations-map {
    height: 13rem;
  }
}
</style>
