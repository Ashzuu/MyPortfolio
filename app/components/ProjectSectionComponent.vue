<script setup lang="ts">

import Card from "~/components/usable/Card.vue";
</script>

<template>
  <main id="project-section-container">
    <h2 id="project-title" class="synth-wave-color">Mes Projets</h2>
    <div class="cards-container">
      <Card name="Tyradex" description="Mon tout premier projet !" image="/img/tyradex_illustration.png" github-link="https://github.com/TyradexTeam/Tyradex" status="En cours"/>
      <Card name="Mon Portfolio" description="Oui oui, c'est ce projet que vous êtes en train de consulter !" image="/img/portfolio.png" github-link="https://github.com/Ashzuu/MyPortfolio" status="En cours"/>
      <Card name="GymExercisesAPI" description="Une API qui recense l'ensemble des exercices de musculation" github-link="https://github.com/Ashzuu/GymExercisesAPI" status="En cours"/>
      <Card name="MusculAshzboard" description="Un petit projet pour une (encore) autre passion : la musculation." github-link="https://github.com/Ashzuu/MusculAshzboard" status="En cours"/>
      <Card name="DS Contrôles" description="Site vitrine pour professionnel" image="/img/dscontroles_site.png" website="https://dscontroles.com" status="Terminé"/>
    </div>
  </main>

</template>

<style scoped>
@import url("~/assets/css/project-section.css");
</style>