<script setup lang="ts">
  import BaseComponent from "~/components/projects/BaseComponent.vue";
  import {ProjectService} from "~/services/ProjectService";
  import Caroussel from "~/components/usable/Caroussel.vue";

  const service: ProjectService = new ProjectService();
  const imgs = [];
</script>

<template>
  <BaseComponent :project="service.specificProject(3)">
    <template #language-description>
      <p>Pour cette interface utilisateur riche, la sécurité du code est primordiale :</p>
      <ul>
        <li>TypeScript : L'utilisation exclusive de TypeScript permet de bénéficier d'un typage strict. C'est indispensable pour manipuler en toute sécurité les données complexes renvoyées par une API (statistiques, historiques, listes d'exercices) sans risquer d'erreurs pendant la navigation de l'utilisateur.</li>
      </ul>
    </template>
    <template #framework-description>
      <p>Le choix s'est porté sur un framework conçu pour les applications d'envergure :</p>
      <ul>
        <li>Angular : Excellent pour créer des "Single Page Applications" (applications sur une seule page). Il fournit d'office tous les outils nécessaires (routage, gestion des états, composants réutilisables) pour construire un tableau de bord interactif, fluide et sans rechargement de page.</li>
      </ul>
    </template>
    <template #detailled-description>
      <p>MusculAshzboard est un projet personnel motivé par l'une de mes passions : la musculation. C'est un tableau de bord (dashboard) dédié au suivi des entraînements et à l'analyse des performances sportives.</p>
      <p>L'aspect intéressant de ce projet est qu'il s'intègre et consomme ma propre interface <strong>GymExercisesAPI</strong>. Cela démontre ma capacité à concevoir et faire communiquer un écosystème logiciel complet, allant de la conception de la base de données jusqu'à l'affichage d'une interface utilisateur dynamique et intuitive.</p>
    </template>
    <template #caroussel>
      <Caroussel :images="imgs"/>
    </template>
  </BaseComponent>
</template>

<style scoped>

</style>