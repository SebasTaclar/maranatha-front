<template>
  <footer class="institutional-footer text-white">
    <div class="mx-auto max-w-6xl px-6 py-14 lg:py-20">
      <div class="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_1fr_1.2fr] lg:gap-16">
        <!-- Brand -->
        <div>
          <img
            src="https://res.cloudinary.com/dmy0prpa5/image/upload/v1792445733/Logo-fundacion-maranatha-phes-con-R_tc28b9.png"
            alt="Fundación Maranatha PHES"
            class="mb-6 h-[130px] w-auto object-contain"
          />
          <p class="mb-8 max-w-xs text-sm leading-relaxed text-white/70">
            Maranatha PHES es una organización sin ánimo de lucro que, desde la fe cristiana, impulsa
            proyectos sociales y comunitarios para transformar vidas con amor, dignidad y esperanza.
          </p>
          <RouterLink
            to="/#donaciones"
            class="inline-flex items-center gap-2 rounded-full bg-[#d7aa67] px-8 py-3.5 text-sm font-bold text-[#003d1f] transition hover:bg-[#c89a56]"
          >
            <i class="fa-solid fa-heart"></i>
            QUIERO DONAR
          </RouterLink>
        </div>

        <!-- Links -->
        <div>
          <h3 class="mb-6 text-lg font-bold text-white">Links</h3>
          <ul class="space-y-4">
            <li v-for="link in links" :key="link.label">
              <RouterLink :to="link.to" class="text-sm text-white/70 transition hover:text-white">
                {{ link.label }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="mb-6 text-lg font-bold text-white">Contact</h3>
          <p class="mb-1 text-sm text-white/70">Carrera 7 # 2 - 16 interior 3</p>
          <p class="mb-5 text-sm text-white/70">Bogotá, Colombia</p>
          <p class="mb-2 flex items-center gap-3 text-sm font-semibold text-white">
            <i class="fa-regular fa-envelope text-[#d7aa67]"></i>
            maranathaphes@gmail.com
          </p>
          <p class="mb-6 text-sm font-semibold text-white">+57 321 369 1619</p>
          <div class="flex items-center gap-3">
            <a
              :href="SOCIALS.instagramUrl"
              target="_blank"
              rel="noopener"
              class="flex h-10 w-10 items-center justify-center rounded-full bg-black/15 text-[#00c9ae] transition hover:bg-[#00c9ae] hover:text-white"
              aria-label="Instagram"
            >
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a
              :href="SOCIALS.tiktokUrl"
              target="_blank"
              rel="noopener"
              class="flex h-10 w-10 items-center justify-center rounded-full bg-black/15 text-[#00c9ae] transition hover:bg-[#00c9ae] hover:text-white"
              aria-label="TikTok"
            >
              <i class="fa-brands fa-tiktok"></i>
            </a>
            <a
              :href="SOCIALS.facebookUrl"
              target="_blank"
              rel="noopener"
              class="flex h-10 w-10 items-center justify-center rounded-full bg-black/15 text-[#00c9ae] transition hover:bg-[#00c9ae] hover:text-white"
              aria-label="Facebook"
            >
              <i class="fa-brands fa-facebook-f"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="institutional-footer-bottom py-5 text-center text-sm text-white/70">
      &copy; {{ currentYear }} Maranatha PHES
    </div>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { SOCIALS } from '@/config/brand'

const currentYear = new Date().getFullYear()

const links = [
  { label: 'Inicio', to: '/' },
  { label: 'Conócenos', to: '/#nosotros' },
  { label: 'Donaciones', to: '/#donaciones' },
  { label: 'Contacto', to: '/#contacto' },
]

defineOptions({ name: 'FooterSection' })
</script>

<style scoped>
.institutional-footer {
  position: relative;
  font-family: 'Roundo', 'Nunito', sans-serif;
  background-color: #2f4538;
  background-image:
    linear-gradient(rgba(15, 32, 24, 0.97), rgba(15, 32, 24, 0.97)),
    url('https://maranathaphes.org/wp-content/uploads/2026/06/Maranatha_phes32.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.institutional-footer-bottom {
  background: #273930;
}
</style>
