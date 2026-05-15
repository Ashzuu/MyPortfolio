<script setup lang="ts">
  import Card from "~/components/usable/Card.vue";
  import {ProjectService} from "~/services/ProjectService";
  const service = new ProjectService();
</script>

<template>
  <main id="project-section-container">
    <h2 id="project-title" class="synth-wave-color">Mes Projets</h2>
    <div class="cards-container">
      <Card v-for="project in service.Projects" :key="project.id" :project="project"/>
    </div>
  </main>

</template>

<style scoped>
@import url("~/assets/css/project-section.css");
</style>