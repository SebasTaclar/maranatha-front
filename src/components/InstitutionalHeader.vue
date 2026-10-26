<template>
  <div class="h-20 lg:hidden" aria-hidden="true"></div>
  <header class="fixed inset-x-0 top-0 z-[1000] bg-white shadow-sm lg:sticky lg:inset-x-auto">
    <div class="relative hidden h-[86px] border-t border-[#003d1f] lg:block">
      <div class="flex h-full items-center pl-[317px] pr-8">
        <RouterLink
          to="/"
          class="absolute bottom-[-64px] left-0 z-10 flex h-[150px] w-[317px] items-center justify-start bg-white pl-10 translate-y-1"
          aria-label="Ir al inicio"
        >
          <img
            src="https://res.cloudinary.com/dmy0prpa5/image/upload/v1792445733/Logo-fundacion-maranatha-phes-con-R_tc28b9.png"
            alt="Fundación Maranatha PHES"
            class="h-[110px] w-auto object-contain"
          />
          <img
            src="https://res.cloudinary.com/dmy0prpa5/image/upload/v1792446292/main-menu-shape-1_oeobiq.png"
            alt=""
            aria-hidden="true"
            class="institutional-menu-shape pointer-events-none absolute right-8 bottom-2 w-32 object-contain"
          />
        </RouterLink>

        <div class="flex min-w-0 flex-1 items-center justify-start gap-6 text-[#003d1f]">
          <RouterLink to="/contacto" class="flex items-center gap-2.5 hover:opacity-75">
            <span
              class="flex h-10 w-10 items-center justify-center rounded-full bg-[#d7aa67] text-xl"
              >♥</span
            >
            <span>
              <strong class="block text-sm font-semibold">Hazte voluntario</strong>
            </span>
          </RouterLink>
          <a
            href="https://wa.me/573213691619?text=Hola%2C%20Fundaci%C3%B3n%20Maranatha%20PHES.%20Me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n."
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2.5 hover:opacity-75"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.75"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-[22px] w-[22px] shrink-0"
            >
              <path
                d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
              />
              <path d="M14.05 2a9 9 0 0 1 8 7.94" />
            </svg>
            <span>
              <small class="block text-xs text-slate-500">Línea de atención</small>
              <strong class="block text-sm font-semibold">57 321 369 1619</strong>
            </span>
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=maranathaphes@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2.5 hover:opacity-75"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.75"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-[22px] w-[22px] shrink-0"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <span>
              <small class="block text-xs text-slate-500">Escríbenos</small>
              <strong class="block text-sm font-semibold">maranathaphes@gmail.com</strong>
            </span>
          </a>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Carrera+7+%232-16+interior+3%2C+Bogot%C3%A1%2C+Colombia"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2.5 hover:opacity-75"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.75"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-[22px] w-[22px] shrink-0"
            >
              <path
                d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
              />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>
              <small class="block text-xs text-slate-500">Sede principal</small>
              <strong class="block text-sm font-semibold">Carrera 7 # 2 - 16 interior 3</strong>
            </span>
          </a>
          <div class="hidden items-center gap-3 ml-auto xl:flex">
            <a
              :href="SOCIALS.instagramUrl"
              target="_blank"
              rel="noopener"
              class="flex h-9 w-9 items-center justify-center rounded-full bg-[#fdf6e9] text-base text-[#00c9ae] transition hover:bg-[#00c9ae] hover:text-white"
              aria-label="Instagram"
            >
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a
              :href="SOCIALS.tiktokUrl"
              target="_blank"
              rel="noopener"
              class="flex h-9 w-9 items-center justify-center rounded-full bg-[#fdf6e9] text-base text-[#00c9ae] transition hover:bg-[#00c9ae] hover:text-white"
              aria-label="TikTok"
            >
              <i class="fa-brands fa-tiktok"></i>
            </a>
            <a
              :href="SOCIALS.facebookUrl"
              target="_blank"
              rel="noopener"
              class="flex h-9 w-9 items-center justify-center rounded-full bg-[#fdf6e9] text-base text-[#00c9ae] transition hover:bg-[#00c9ae] hover:text-white"
              aria-label="Facebook"
            >
              <i class="fa-brands fa-facebook-f"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="relative bg-white lg:ml-[317px] lg:bg-[#003d1f] lg:[border-top-left-radius:15px]">
      <div class="flex h-20 items-center justify-between px-4 lg:h-16 lg:pl-0 lg:pr-0">
        <RouterLink to="/" class="flex items-center lg:hidden" aria-label="Ir al inicio">
          <Logo :size="52" :show-text="true" />
        </RouterLink>

        <nav class="hidden h-full flex-1 items-center lg:flex" aria-label="Navegación principal">
          <RouterLink
            v-for="link in links"
            :key="link.label"
            :to="link.to"
            class="relative px-7 py-5 text-base text-white/70 transition hover:text-white"
            active-class="!text-white"
          >
            {{ link.label }}
          </RouterLink>
        </nav>

        <div class="flex items-center gap-2">
          <button
            class="flex h-10 w-10 items-center justify-center rounded-xl text-[#003d1f] lg:hidden"
            :aria-expanded="menuOpen"
            aria-label="Abrir menú"
            @click="menuOpen = !menuOpen"
          >
            <i :class="menuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'" class="text-xl"></i>
          </button>
          <button
            class="relative hidden h-10 w-10 items-center justify-center text-xl text-white transition hover:opacity-75 lg:flex"
            aria-label="Abrir carrito"
            @click="openDrawer"
          >
            <i class="fa-solid fa-cart-shopping"></i>
            <span
              v-if="totalItems > 0"
              class="absolute -top-1 -right-1 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-[#d7aa67] px-1 text-[10px] font-bold text-[#003d1f]"
            >
              {{ totalItems > 99 ? '99+' : totalItems }}
            </span>
          </button>
          <RouterLink
            to="/donaciones"
            class="hidden h-16 items-center gap-2 bg-[#d7aa67] px-5 text-sm font-bold text-[#003d1f] transition hover:bg-[#c89a56] sm:px-12 lg:flex"
          >
            <i class="fa-solid fa-heart"></i>
            <span class="hidden sm:inline">QUIERO DONAR</span>
            <span class="sm:hidden">DONAR</span>
          </RouterLink>
        </div>
      </div>

      <nav
        v-if="menuOpen"
        class="fixed top-20 right-0 bottom-0 left-0 z-[1001] overflow-y-auto border-t border-white/10 bg-[#283734] px-4 py-3 shadow-lg lg:hidden"
        aria-label="Menú móvil"
      >
        <div class="grid grid-cols-1 gap-1">
          <RouterLink
            v-for="link in links"
            :key="link.label"
            :to="link.to"
            class="rounded-lg px-3 py-2 text-white/85 hover:bg-white/10 hover:text-white"
            @click="menuOpen = false"
          >
            {{ link.label }}
          </RouterLink>
        </div>

        <div class="mt-2 grid grid-cols-2 gap-2 border-t border-white/15 pt-2">
          <button
            class="flex items-center gap-2 rounded-lg px-3 py-2 text-left text-sm text-white/85 hover:bg-white/10 hover:text-white"
            aria-label="Abrir carrito de compras"
            @click="openMobileCart"
          >
            <span class="relative">
              <i class="fa-solid fa-cart-shopping"></i>
              <span
                v-if="totalItems > 0"
                class="absolute -top-2 -right-3 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-[#d7aa67] px-1 text-[10px] font-bold text-[#283734]"
              >
                {{ totalItems > 99 ? '99+' : totalItems }}
              </span>
            </span>
            Carrito de compras
          </button>
          <RouterLink
            to="/donaciones"
            class="flex items-center gap-2 rounded-lg bg-[#d7aa67] px-3 py-2 text-sm font-bold text-[#003d1f] hover:bg-[#c89a56]"
            @click="menuOpen = false"
          >
            <i class="fa-solid fa-heart"></i>
            Quiero donar
          </RouterLink>
        </div>

        <div class="mt-2 flex items-center gap-2 border-t border-white/15 px-1 pt-2">
          <span class="mr-1 text-xs text-white/70">Síguenos</span>
          <a
            :href="SOCIALS.facebookUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white hover:text-[#283734]"
            aria-label="Facebook"
          >
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a
            :href="SOCIALS.instagramUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white hover:text-[#283734]"
            aria-label="Instagram"
          >
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a
            :href="SOCIALS.tiktokUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white hover:text-[#283734]"
            aria-label="TikTok"
          >
            <i class="fa-brands fa-tiktok"></i>
          </a>
        </div>

        <div class="mt-3 space-y-2 border-t border-white/15 px-1 pt-3">
          <a
            href="tel:+573213691619"
            class="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-white/85 hover:bg-white/10 hover:text-white"
          >
            <i class="fa-solid fa-phone w-4 text-center"></i>
            <span>57 321 369 1619</span>
          </a>
          <a
            href="mailto:maranathaphes@gmail.com"
            class="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-white/85 hover:bg-white/10 hover:text-white"
          >
            <i class="fa-solid fa-envelope w-4 text-center"></i>
            <span class="break-all">maranathaphes@gmail.com</span>
          </a>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import Logo from '@/components/Logo.vue'
import { useQuotation } from '@/composables/useQuotation'
import { SOCIALS } from '@/config/brand'

const { totalItems, openDrawer } = useQuotation()

const menuOpen = ref(false)
const links = [
  { label: 'Inicio', to: '/' },
  { label: 'Conócenos', to: '/nosotros' },
  { label: 'Donaciones', to: '/donaciones' },
  { label: 'Contacto', to: '/contacto' },
]

const openMobileCart = () => {
  openDrawer()
  menuOpen.value = false
}

defineOptions({ name: 'InstitutionalHeader' })
</script>

<style scoped>
header {
  font-family: 'Roundo', 'Nunito', sans-serif;
}

.institutional-menu-shape {
  animation: institutional-shape-sway 3s ease-in-out infinite;
  transform-origin: center;
}

@keyframes institutional-shape-sway {
  0%,
  100% {
    transform: translate3d(-8px, 0, 0);
  }

  50% {
    transform: translate3d(8px, 0, 0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .institutional-menu-shape {
    animation: none;
  }
}
</style>
