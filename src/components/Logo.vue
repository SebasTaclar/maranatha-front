<template>
  <div class="flex items-center gap-2 select-none" role="img" :aria-label="ariaLabel">
    <img
      src="https://maranathaphes.org/wp-content/uploads/2024/01/Logo-fundacion-maranatha-phes-con-R.png"
      :style="{ height: `${size}px`, width: 'auto' }"
      alt="Fundación Maranatha PHES"
      class="flex-shrink-0 object-contain"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  size?: number
  showText?: boolean
  ariaLabel?: string
}

withDefaults(defineProps<Props>(), {
  size: 40,
  showText: false,
  ariaLabel: 'Fundación Maranatha PHES',
})

defineOptions({ name: 'MaranathaLogo' })
</script>
