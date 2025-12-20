<script setup lang="ts">

import Card from "~/components/usable/Card.vue";
</script>

<template>
  <main id="project-section-container">
    <h2 class="synth-wave-color">Mes Projets</h2>
    <div class="cards-container">
      <Card name="Tyradex" description="Mon tout premier projet !" image="/img/tyradex_illustration.png"/>
      <Card name="GymExercisesAPI" description="Une API qui recense l'ensemble des exercices de musculation" image="/img/tyradex_illustration.png"/>
      <Card name="Tyradex" description="Mon tout premier projet !" image="/img/tyradex_illustration.png"/>
      <Card name="Tyradex" description="Mon tout premier projet !" image="/img/tyradex_illustration.png"/>
      <Card name="Tyradex" description="Mon tout premier projet !" image="/img/tyradex_illustration.png"/>
    </div>
  </main>

</template>

<style scoped>
@import url("~/assets/css/project-section.css");
</style>