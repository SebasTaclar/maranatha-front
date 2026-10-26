import { createI18n } from 'vue-i18n'

export type SupportedLocale = 'es' | 'en'

const STORAGE_KEY = 'maranatha_locale'

const messages = {
  es: {
    brand: {
      tagline: 'Fe que se convierte en obra social',
    },
    nav: {
      newArrivals: 'Nuestra labor',
      collections: 'Proyectos',
      categories: 'Participa',
      offers: 'Donaciones',
    },
    auth: {
      access: 'Acceder',
      adminPanel: '⚙️ Panel Admin',
      logout: 'Cerrar sesión',
      hello: 'Hola, {name}',
    },
    banner: {
      tagline: 'Un mensaje de salvación que se convierte en obra social',
      explore: 'APOYAR LA FUNDACIÓN',
      learnMore: 'CONOCER MÁS',
      scrollDown: 'Desliza',
      logoAlt: 'Fundación Maranatha PHES',
    },
    visit: {
      title: 'Visítanos',
      subtitle: 'Conoce nuestra labor y sé parte de una familia que sirve con amor.',
      addressLabel: 'Dirección',
      phoneLabel: 'Teléfono',
      emailLabel: 'Correo',
      hoursLabel: 'Horarios',
    },
    footer: {
      description:
        'Fundación cristiana que impulsa proyectos de evangelización y ayuda social para transformar vidas.',
      followUs: 'Síguenos',
      quickLinks: 'Enlaces Rápidos',
      customerSupport: 'Atención al Cliente',
      madeWith: 'Servicio, fe y esperanza ✨',
      copyright: '© {year} Fundación Maranatha PHES. Todos los derechos reservados.',
      links: {
        products: 'Proyectos',
        categories: 'Nuestra labor',
        testimonials: 'Testimonios',
        contact: 'Contacto',
        shippingPolicy: 'Cómo apoyar',
        returns: 'Voluntariado',
        faq: 'Preguntas Frecuentes',
        terms: 'Términos y Condiciones',
      },
    },
    whatsapp: {
      defaultMessage:
        'Hola, Fundación Maranatha PHES. Me gustaría recibir información sobre sus proyectos y conocer cómo puedo apoyar su labor.',
    },
    store: {
      pickup: {
        title: 'Edificio Víctor Melo · Local 07',
        addressLine: 'Cl. 12 #6-10 · La Candelaria, Bogotá',
        hoursTitle: 'Horarios de atención',
        hours: {
          weekday: 'Lunes a Viernes: 9:00 AM - 6:00 PM',
          saturday: 'Sábados: 9:00 AM - 2:00 PM',
          sunday: 'Domingos y festivos: Cerrado',
        },
      },
    },
    social: {
      instagramFollow: 'Síguenos en Instagram para ver más novedades',
      instagramLabel: 'Instagram',
    },
    quotation: {
      title: 'Mi Cotización',
      empty: 'No hay productos en tu cotización',
      continueExploring: 'Continuar explorando',
      sendQuote: 'Solicitar cotización',
      addToQuote: 'Agregar a cotización',
      productsSelected: '{count} productos seleccionados',
      observations: 'Observaciones',
      observationsPlaceholder: 'Ej: Talla 10, Color amarillo, Curva C',
      remove: 'Eliminar',
      clearAll: 'Limpiar cotización',
      yourQuote: 'Tu Cotización',
    },
    terms: {
      back: 'Volver',
      title: 'Términos y Condiciones',
      updated: 'Última actualización',
      accept: 'He leído y acepto',
    },
    checkout: {
      back: 'Volver',
      title: 'Checkout',
      summaryTitle: 'Resumen del pedido',
      emptyCart: 'Tu carrito está vacío',
      goStore: 'Ir a la tienda',
      subtotal: 'Subtotal',
      shipping: 'Envío',
      shippingByDestination: 'Según destino',
      shippingNote: 'El costo de envío se calculará según tu ciudad de destino.',
      total: 'Total',
      totalAtDelivery: 'Total + envío al confirmar',
      continueShopping: 'Seguir comprando',
      contactTitle: 'Datos de contacto',
      fullName: 'Nombre completo',
      fullNamePlaceholder: 'Ej: María García',
      email: 'Correo electrónico',
      emailPlaceholder: "maria{'@'}ejemplo.com",
      idNumber: 'Número de documento',
      idNumberPlaceholder: 'Ej: 1234567890',
      phone: 'Teléfono',
      phonePlaceholder: 'Ej: 300 123 4567',
      termsAcceptPrefix: 'Acepto los',
      termsAcceptLink: 'Términos y Condiciones',
      deliveryTitle: 'Dirección de envío',
      address: 'Dirección',
      addressPlaceholder: 'Ej: Calle 45 #12-34, Apto 501',
      city: 'Ciudad',
      cityPlaceholder: 'Ej: Bogotá',
      deliveryPhone: 'Teléfono de contacto',
      confirm: 'Confirmar pedido',
      processing: 'Procesando...',
      errors: {
        nameRequired: 'El nombre es obligatorio',
        emailRequired: 'El correo es obligatorio',
        emailInvalid: 'El correo no es válido',
        idRequired: 'El número de documento es obligatorio',
        phoneRequired: 'El teléfono es obligatorio',
        addressRequired: 'La dirección es obligatoria',
        cityRequired: 'La ciudad es obligatoria',
        deliveryPhoneRequired: 'El teléfono de contacto es obligatorio',
        termsRequired: 'Debes aceptar los términos y condiciones',
      },
    },
    videos: {
      title: 'Videos',
      subtitle: 'Mira algunos de nuestros favoritos',
      viewOnTikTok: 'Ver en TikTok',
      clickToLoad: 'Click para cargar videos',
    },
  },
  en: {
    brand: {
      tagline: "Children's clothing with love",
    },
    nav: {
      newArrivals: 'New Arrivals',
      collections: 'Collections',
      categories: 'Categories',
      offers: 'Deals',
    },
    auth: {
      access: 'Sign in',
      adminPanel: '⚙️ Admin Panel',
      logout: 'Sign out',
      hello: 'Hi, {name}',
    },
    banner: {
      tagline: 'A message of salvation that becomes social action',
      explore: 'SUPPORT THE FOUNDATION',
      learnMore: 'LEARN MORE',
      scrollDown: 'Scroll',
      logoAlt: 'Fundación Maranatha PHES',
    },
    visit: {
      title: 'Visit us',
      subtitle: 'Discover our work and join a family that serves with love.',
      addressLabel: 'Address',
      phoneLabel: 'Phone',
      emailLabel: 'Email',
      hoursLabel: 'Hours',
    },
    footer: {
      description:
        'A Christian foundation advancing evangelism and social aid projects to transform lives.',
      followUs: 'Follow us',
      quickLinks: 'Quick Links',
      customerSupport: 'Customer Support',
      madeWith: 'Service, faith and hope ✨',
      copyright: '© {year} Fundación Maranatha PHES. All rights reserved.',
      links: {
        products: 'Products',
        categories: 'Categories',
        testimonials: 'Testimonials',
        contact: 'Contact',
        shippingPolicy: 'Shipping Policy',
        returns: 'Exchanges & Returns',
        faq: 'FAQ',
        terms: 'Terms & Conditions',
      },
    },
    whatsapp: {
      defaultMessage:
        'Hello, Fundación Maranatha PHES. I would like information about your projects and how I can support your work.',
    },
    store: {
      pickup: {
        title: 'Víctor Melo Building · Store 07',
        addressLine: 'Calle 12 #6-10 · La Candelaria, Bogotá',
        hoursTitle: 'Store hours',
        hours: {
          weekday: 'Mon - Fri: 9:00 AM - 6:00 PM',
          saturday: 'Saturdays: 9:00 AM - 2:00 PM',
          sunday: 'Sundays & holidays: Closed',
        },
      },
    },
    social: {
      instagramFollow: 'Follow us on Instagram for more news',
      instagramLabel: 'Instagram',
    },
    quotation: {
      title: 'My Quote',
      empty: 'No products in your quote',
      continueExploring: 'Continue browsing',
      sendQuote: 'Request quote',
      addToQuote: 'Add to quote',
      productsSelected: '{count} products selected',
      observations: 'Notes',
      observationsPlaceholder: 'E.g: Size 10, Yellow color, Curve C',
      remove: 'Remove',
      clearAll: 'Clear quote',
      yourQuote: 'Your Quote',
    },
    terms: {
      back: 'Back',
      title: 'Terms & Conditions',
      updated: 'Last updated',
      accept: 'I have read and accept',
    },
    checkout: {
      back: 'Back',
      title: 'Checkout',
      summaryTitle: 'Order summary',
      emptyCart: 'Your cart is empty',
      goStore: 'Go to store',
      subtotal: 'Subtotal',
      shipping: 'Shipping',
      shippingByDestination: 'Based on destination',
      shippingNote: 'Shipping cost will be calculated based on your destination city.',
      total: 'Total',
      totalAtDelivery: 'Total + shipping at confirmation',
      continueShopping: 'Continue shopping',
      contactTitle: 'Contact details',
      fullName: 'Full name',
      fullNamePlaceholder: 'E.g: María García',
      email: 'Email',
      emailPlaceholder: "maria{'@'}example.com",
      idNumber: 'ID number',
      idNumberPlaceholder: 'E.g: 1234567890',
      phone: 'Phone',
      phonePlaceholder: 'E.g: 300 123 4567',
      termsAcceptPrefix: 'I accept the',
      termsAcceptLink: 'Terms & Conditions',
      deliveryTitle: 'Shipping address',
      address: 'Address',
      addressPlaceholder: 'E.g: 45th St #12-34, Apt 501',
      city: 'City',
      cityPlaceholder: 'E.g: Bogotá',
      deliveryPhone: 'Contact phone',
      confirm: 'Confirm order',
      processing: 'Processing...',
      errors: {
        nameRequired: 'Name is required',
        emailRequired: 'Email is required',
        emailInvalid: 'Invalid email',
        idRequired: 'ID number is required',
        phoneRequired: 'Phone is required',
        addressRequired: 'Address is required',
        cityRequired: 'City is required',
        deliveryPhoneRequired: 'Contact phone is required',
        termsRequired: 'You must accept the terms and conditions',
      },
    },
    videos: {
      title: 'Videos',
      subtitle: 'Watch some of our favorites',
      viewOnTikTok: 'View on TikTok',
      clickToLoad: 'Click to load videos',
    },
  },
} as const

function normalizeLocale(input: string | null | undefined): SupportedLocale {
  if (!input) return 'es'
  const value = input.toLowerCase()
  if (value.startsWith('en')) return 'en'
  return 'es'
}

export function getInitialLocale(): SupportedLocale {
  const storedRaw = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null
  if (storedRaw) return normalizeLocale(storedRaw)
  const browserRaw = typeof navigator !== 'undefined' ? navigator.language : null
  return normalizeLocale(browserRaw)
}

export function persistLocale(locale: SupportedLocale) {
  localStorage.setItem(STORAGE_KEY, locale)
}

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: getInitialLocale(),
  fallbackLocale: 'es',
  messages,
})
