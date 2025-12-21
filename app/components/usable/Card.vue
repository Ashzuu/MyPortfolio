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
      default: 'https://github.com/Ashzuu?tab=repositories'
    },
    status: {
      type: String,
      required: true
    }
  })
</script>

<template>
  <div class="card">
    <div class="card-controls">
      <a :href="githubLink" target="_blank"><Icon name="mdi:github"/></a>
      <Icon name="uiw:more"/>
    </div>
    <div class="card-image">
      <img v-if="image" class="card-img-top" :alt="'Image de décoration pour le projet '+name" :src="image">
    </div>
    <div class="card-content">
      <Badge :class="status == 'En cours' ? 'en-cours' : status == 'Terminé' ? 'termine': 'no-status'">{{status}}</Badge>
      <h3>{{name}}</h3>
      <p>{{description}}</p>
    </div>

  </div>
</template>

<style scoped>
@import url("~/assets/css/components/card.css");
</style>