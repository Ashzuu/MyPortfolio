<script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  import Badge from "~/components/usable/Badge.vue";

  defineProps({
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      default: ''
    },
    githubLink: {
      type: String,
      default: ''
    },
    status: {
      type: String,
      required: true
    },
    website: {
      type: String,
      default: ''
    }
  })

  const controlsVisible = ref(false);
  const isTouch = ref(false);
  const cardRoot = ref<HTMLElement | null>(null);

  const onCardClick = (e: MouseEvent) => {
    // Only handle toggle on touch devices
    if (!isTouch.value) return;
    // Prevent the document click listener from immediately closing
    e.stopPropagation();

    // If clicking on a control link, let it behave normally
    const target = e.target as HTMLElement | null;
    if (target && target.closest('.card-controls a')) return;

    // Close other open cards first
    if (!controlsVisible.value) {
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('close-all-card-controls'));
      }
      controlsVisible.value = true;
    } else {
      controlsVisible.value = false;
    }
  }

  const onDocumentClick = (e: Event) => {
    if (!cardRoot.value) return;
    const target = e.target as Node | null;
    if (!target) return;
    if (!cardRoot.value.contains(target)) {
      controlsVisible.value = false;
    }
  }

  const onCloseAll = () => {
    controlsVisible.value = false;
  }

  onMounted(() => {
    if (typeof window !== 'undefined') {
      isTouch.value = Boolean(('ontouchstart' in window) || (navigator.maxTouchPoints && navigator.maxTouchPoints > 0));
      document.addEventListener('click', onDocumentClick);
      window.addEventListener('close-all-card-controls', onCloseAll as EventListener);
    }
  })

  onBeforeUnmount(() => {
    if (typeof window !== 'undefined') {
      document.removeEventListener('click', onDocumentClick);
      window.removeEventListener('close-all-card-controls', onCloseAll as EventListener);
    }
  })
</script>

<template>
  <div ref="cardRoot" class="card" :class="{ 'controls-visible': controlsVisible }" @click="onCardClick">
    <div class="card-controls">
      <a v-if="githubLink" :href="githubLink" target="_blank" @click.stop><Icon name="mdi:github"/></a>
      <a v-if="website" :href="website" target="_blank" @click.stop><Icon name="dashicons:admin-site-alt3"/></a>
    </div>
    <div class="card-image">
      <img v-if="image" class="card-img-top" :alt="'Image de décoration pour le projet '+name" :src="image">
    </div>
    <div class="card-content">
      <Badge :class="status == 'En cours' ? 'en-cours' : status == 'Terminé' ? 'termine': status == 'Archivé' ? 'archive' : ''">{{status}}</Badge>
      <h3>{{name}}</h3>
      <p>{{description}}</p>
    </div>

  </div>
</template>

<style scoped>
@import url("~/assets/css/components/card.css");
</style>