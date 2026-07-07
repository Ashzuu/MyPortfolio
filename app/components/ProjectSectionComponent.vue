<script setup lang="ts">
  import Card from "~/components/usable/Card.vue";
  import {ProjectService} from "~/services/ProjectService";
  import Button from "~/components/usable/Button.vue";
  const service = new ProjectService();
</script>

<template>
  <main id="project-section-container">
    <h2 id="project-title" class="synth-wave-color">Mes Projets</h2>
    <div class="cards-container">
      <Card v-for="project in service.SummaryProjects" :key="project.id" :project="project"/>
    </div>
    <div @click="service.changeProjectMode()">
      <Button v-if="service.SummaryProjects.length === 6" link-redirect="">Voir plus de projets</Button>
      <Button v-else-if="service.SummaryProjects.length > 6" link-redirect="">Voir moins de projets</Button>
    </div>
  </main>

</template>

<style scoped>
@import url("~/assets/css/home-page/project-section.css");
</style>