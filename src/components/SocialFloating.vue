<template>
  <!-- WhatsApp flotante a la izquierda -->
  <div class="floating-whatsapp">
    <a
      :href="whatsappLink"
      target="_blank"
      rel="noopener"
      class="social-btn whatsapp"
      aria-label="Contactar por WhatsApp"
    >
      <i class="fa-brands fa-whatsapp social-icon" aria-hidden="true"></i>
    </a>
  </div>

  <!-- Flecha hacia arriba (volver al banner) -->
  <button type="button" class="floating-top" aria-label="Volver al inicio" @click="scrollToTop">
    <i class="fa-solid fa-chevron-up"></i>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { SOCIALS } from '@/config/brand'

const whatsappNumber = SOCIALS.whatsappNumber

const isValidWhatsAppNumber = /^57\d{10}$/.test(whatsappNumber)

const { t } = useI18n()
const defaultMessage = computed(() => t('whatsapp.defaultMessage'))
const whatsappLink = isValidWhatsAppNumber
  ? `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(defaultMessage.value)}`
  : '#'

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

defineOptions({ name: 'SocialFloating' })
</script>

<style scoped>
/* === WHATSAPP FLOTANTE IZQUIERDA === */
.floating-whatsapp {
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 1000;
}

.floating-whatsapp .social-btn.whatsapp {
  background: #003d1f;
  border: 2px solid #003d1f;
  opacity: 1 !important;
  box-shadow: 0 8px 24px rgba(0, 61, 31, 0.4);
}



.floating-whatsapp .social-icon {
  opacity: 1 !important;
  filter: none !important;
  color: #ffffff;
  font-size: 32px;
  width: auto;
  height: auto;
}

.social-btn {
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(10px);
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.05);
  opacity: 0.15;
}

.social-btn:hover {
  opacity: 1 !important;
  transform: scale(1.2) rotate(5deg);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.4);
}

.social-icon {
  width: 32px;
  height: 32px;
  transition: all 0.4s ease;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
}

.social-btn:hover .social-icon {
  transform: scale(1.1);
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
}

/* Tooltip para WhatsApp */
.social-tooltip {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 8px 14px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  pointer-events: none;
}

.floating-whatsapp .social-tooltip.right {
  left: 70px;
}

.floating-whatsapp .social-tooltip.right::after {
  content: '';
  position: absolute;
  right: 100%;
  left: auto;
  top: 50%;
  transform: translateY(-50%);
  border: 6px solid transparent;
  border-right-color: rgba(0, 0, 0, 0.9);
  border-left-color: transparent;
}

.social-btn:hover .social-tooltip {
  opacity: 1;
  visibility: visible;
}

.floating-whatsapp .social-btn:hover .social-tooltip {
  transform: translateY(-50%) translateX(5px);
}

.floating-whatsapp .social-btn {
  animation: slideInLeft 0.6s ease;
  animation-fill-mode: both;
}

@keyframes slideInLeft {
  from {
    transform: translateX(-100px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Efecto de pulso sutil en WhatsApp */
@keyframes pulse {
  0%,
  100% {
    box-shadow: 0 8px 24px rgba(0, 61, 31, 0.4);
  }
  50% {
    box-shadow: 0 8px 30px rgba(0, 61, 31, 0.6);
  }
}

.floating-whatsapp .social-btn.whatsapp {
  animation:
    slideInLeft 0.6s ease,
    pulse 2s ease-in-out infinite;
}

/* === FLECHA VOLVER AL BANNER === */
.floating-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 50%;
  background: #d3a868;
  color: #ffffff;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(211, 168, 104, 0.45);
  transition:
    transform 0.3s ease,
    background 0.3s ease,
    box-shadow 0.3s ease;
}

.floating-top:hover {
  background: #003d1f;
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(0, 61, 31, 0.4);
}

/* Responsivo */
@media (max-width: 768px) {
  .floating-whatsapp {
    bottom: 15px;
    left: 15px;
  }

  .social-btn {
    width: 52px;
    height: 52px;
  }

  .social-icon {
    width: 28px;
    height: 28px;
    font-size: 28px;
  }

  .social-tooltip {
    font-size: 12px;
    padding: 6px 10px;
  }

  .floating-whatsapp .social-tooltip.right {
    left: 62px;
  }

  .floating-top {
    bottom: 15px;
    right: 15px;
    width: 44px;
    height: 44px;
  }
}

@media (max-width: 480px) {
  .floating-whatsapp {
    bottom: 20px;
    left: 16px;
    z-index: 9999;
  }

  .social-btn {
    width: 50px;
    height: 50px;
  }

  .social-icon {
    width: 26px;
    height: 26px;
    font-size: 26px;
  }

  .social-tooltip {
    display: none;
  }

  .floating-top {
    z-index: 9999;
  }
}
</style>
