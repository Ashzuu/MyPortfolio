<script setup lang="ts">

import Card from "~/components/usable/Card.vue";
</script>

<template>
  <main id="project-section-container">
    <h2 id="project-title" class="synth-wave-color">Mes Projets</h2>
    <div class="cards-container">
      <Card name="Tyradex" description="Mon tout premier projet ! Actuellement en refonte" website="https://tyradex.app/" image="/img/tyradex_illustration.png" github-link="https://github.com/TyradexTeam/Tyradex" status="En cours"/>
      <Card name="GymExercisesAPI" description="Une API qui recense l'ensemble des exercices de musculation" github-link="https://github.com/Ashzuu/GymExercisesAPI" status="En cours"/>
      <Card name="MusculAshzboard" description="Un petit projet pour une (encore) autre passion : la musculation." github-link="https://github.com/Ashzuu/MusculAshzboard" status="En cours"/>
      <Card name="Site Commercial" description="Site commercial ou je fais la promotion de mes services" image="/img/commercial_illustration.png" github-link="https://github.com/Ashzuu/CommercialWebsite" website="https://website.evandynak.me/" status="Terminé"/>
      <Card name="Mon Portfolio" description="Oui oui, c'est ce projet que vous êtes en train de consulter !" website="https://evandynak.me/" image="/img/portfolio_illustration.png" github-link="https://github.com/Ashzuu/MyPortfolio" status="Terminé"/>
      <Card name="DS Contrôles" description="Site vitrine pour professionnel" image="/img/dscont_illustration.png" website="https://dscontroles.com" status="Terminé"/>
    </div>
  </main>

</template>

<style scoped>
@import url("~/assets/css/project-section.css");
</style>