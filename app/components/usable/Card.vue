<script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  import Badge from "~/components/usable/Badge.vue";
  import type {Project} from "~/models/Project";

  const props = defineProps<{
    project: Project
  }>();
  const controlsVisible = ref(false);
  const isTouch = ref(false);
  const cardRoot = ref<HTMLElement | null>(null);

  const onCardClick = (e: MouseEvent) => {
    if (!isTouch.value) return;
    e.stopPropagation();

    const target = e.target as HTMLElement | null;
    if (target && target.closest('.card-controls a')) return;

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
      <a v-if="props.project.urlGithub" :href="props.project.urlGithub" target="_blank" @click.stop><Icon name="mdi:github"/></a>
      <a v-if="props.project.urlWebsite" :href="props.project.urlWebsite" target="_blank" @click.stop><Icon name="dashicons:admin-site-alt3"/></a>
    </div>
    <div class="card-image">
      <img v-if="props.project.urlImage" class="card-img-top" :alt="'Image de décoration pour le projet '+ props.project.name" :src="props.project.urlImage">
    </div>
    <NuxtLink
        v-slot="{ navigate }"
        :to="{
          path: '/projects/' + props.project.path,
          state: { project: props.project }
          }"
        custom>
      <div class="card-content" role="link" @click="navigate">
        <Badge :class="props.project.status == 'En cours' ? 'en-cours' : props.project.status == 'Terminé' ? 'termine': props.project.status == 'Archivé' ? 'archive' : ''">{{props.project.status}}</Badge>
        <h3>{{props.project.name}}</h3>
        <p>{{props.project.description}}</p>
      </div>
    </NuxtLink>

  </div>
</template>

<style scoped>
@import url("~/assets/css/components/card.css");
</style>