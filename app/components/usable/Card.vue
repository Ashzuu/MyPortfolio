<script setup lang="ts">
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
    }
  })
</script>

<template>
  <div class="card">
    <div class="card-image">
      <img v-if="image" class="card-img-top" :alt="'Image de décoration pour le projet '+name" :src="image">
    </div>
    <div class="card-content">
      <h3>{{name}}</h3>
      <p>{{description}}</p>
    </div>

  </div>
</template>

<style scoped>
@import url("~/assets/css/components/card.css");
</style>