<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

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
    cursorRef.value.style.visibility = VISIBILITY;
    cursorRef.value.style.top = event.clientY - SIZE_CURSOR / 2 + 'px';
    cursorRef.value.style.left = event.clientX - SIZE_CURSOR / 2 + 'px';
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
    cursorRef.value.style.width = SIZE_CURSOR + "px";
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
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
  <div>
    <div id="mouse-decoration" ref="cursorRef" :class="{ 'hover-clickable': isHoveringClickable }">
      <div class="little-effect"/>
    </div>
    <NuxtPage />
  </div>
</template>

<style>
  #mouse-decoration {
    z-index: 100;
    pointer-events: none;
    position: fixed;
    visibility: hidden;
    aspect-ratio: 1/1;
    border-radius: 100%;
    background-color: rgb(170 0 255 / 0.8);
    transition: background-color 0.2s ease;

    .little-effect {
      opacity: 1;
      position: relative;
      width: 100%;
      height: 100%;
      border-radius: 100%;
      box-shadow: 0 0 20px 20px rgb(247 0 255 / 0.3);
      animation: haloAnimation 2.2s ease-in-out infinite alternate;
    }
  }

  #mouse-decoration.hover-clickable {
    background-color: var(--enhanced-color-secondary) !important;
    animation: blinkAnimation 0.4s infinite alternate !important;

    .little-effect {
      box-shadow: 0 0 20px 20px rgba(0, 255, 229, 0.55) !important;
      animation: none !important;
    }
  }

  @keyframes haloAnimation {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0.4;
    }
  }

  @keyframes blinkAnimation {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0.6;
    }
  }
</style>
