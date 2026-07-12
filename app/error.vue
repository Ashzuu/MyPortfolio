<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Button from "~/components/usable/Button.vue";

const props = defineProps({
  error: {
    type: Object,
    default: null
  }
})

const handleError = () => clearError({ redirect: '/' })

// Custom cursor logic to persist on the error page
const SIZE_CURSOR = 20
const VISIBILITY = "visible"

const cursorRef = ref<HTMLElement | null>(null)
const isHoveringClickable = ref(false)

function isMobile() {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') return false
  const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
  return regex.test(navigator.userAgent)
}

const handleMouseMove = (event: MouseEvent) => {
  if (cursorRef.value) {
    cursorRef.value.style.visibility = VISIBILITY
    cursorRef.value.style.top = event.clientY - SIZE_CURSOR / 2 + 'px'
    cursorRef.value.style.left = event.clientX - SIZE_CURSOR / 2 + 'px'
  }
}

const handleMouseOver = (event: MouseEvent) => {
  const target = event.target as HTMLElement | null
  if (!target) return

  let el: HTMLElement | null = target
  let isClickable = false
  
  while (el && el !== document.documentElement) {
    const computedCursor = window.getComputedStyle(el).cursor
    if (
      computedCursor === 'pointer' ||
      el.tagName === 'A' ||
      el.tagName === 'BUTTON' ||
      el.getAttribute('role') === 'button' ||
      el.getAttribute('role') === 'link' ||
      el.classList.contains('button') ||
      el.classList.contains('card') ||
      el.id === 'return-arrow'
    ) {
      isClickable = true
      break
    }
    el = el.parentElement
  }
  
  isHoveringClickable.value = isClickable
}

onMounted(() => {
  if (cursorRef.value && !isMobile()) {
    cursorRef.value.style.width = SIZE_CURSOR + "px"
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseover', handleMouseOver)
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('mousemove', handleMouseMove)
    window.removeEventListener('mouseover', handleMouseOver)
  }
})
</script>

<template>
  <div class="error-page-container">
    <div id="mouse-decoration" ref="cursorRef" :class="{ 'hover-clickable': isHoveringClickable }">
      <div class="little-effect"/>
    </div>
    
    <div class="error-content">
      <h1 class="error-code synth-wave-color">{{ error?.statusCode || 404 }}</h1>
      <h2 class="error-title">
        {{ error?.statusCode === 404 ? 'Page Introuvable' : 'Erreur Serveur' }}
      </h2>
      <p class="error-message">
        {{ error?.statusCode === 404 
           ? "Oups ! La page que vous recherchez n'existe pas ou a été déplacée." 
           : "Désolé, une erreur interne est survenue sur le serveur. Nous faisons de notre mieux pour régler cela au plus vite." 
        }}
      </p>
      <div class="button-wrapper">
        <Button link-redirect="/" variant="primary" icon-name="lucide:home" @click.prevent="handleError">
          Retourner à l'accueil
        </Button>
      </div>
    </div>
  </div>
</template>

<style>
  @import url("~/assets/css/error-page/style.css");
</style>
