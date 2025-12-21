<script setup lang="ts">
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
</script>

<template>
  <div class="card">
    <div class="card-controls">
      <a v-if="githubLink" :href="githubLink" target="_blank"><Icon name="mdi:github"/></a>
      <a v-if="website" :href="website" target="_blank"><Icon name="dashicons:admin-site-alt3"/></a>
      <Icon name="uiw:more"/>
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