<script setup lang="ts">
  import BaseComponent from "~/components/projects/BaseComponent.vue";
  import {ProjectService} from "~/services/ProjectService";

  const service: ProjectService = new ProjectService();
</script>

<template>
  <BaseComponent :project="service.specificProject(5)">
    <template #language-description>
      <p>TypeScript est une surcouche de JavaScript, ajoutant un système de typage statique strict au JavaScript classique.</p>

      <p>Le choix de TypeScript pour ce site s'explique par plusieurs avantages majeurs :</p>

      <ul>
        <li>Code plus robuste et moins de bugs : Contrairement à JavaScript où les erreurs apparaissent souvent à l'exécution (quand l'utilisateur est sur le site), TypeScript permet de détecter la majorité des erreurs dès l'écriture du code (à la compilation). Cela garantit un site final beaucoup plus stable.</li>
        <li>Facilité de maintenance : En forçant le développeur à définir le "type" des données (par exemple, préciser qu'une variable doit être un texte et non un nombre), le code devient beaucoup plus lisible.</li>
      </ul>
    </template>
    <template #framework-description>
      <p>NuxtJS est un framework basé sur Vue.js. Il vient combler certains manques de Vue.js pur pour créer des applications web complètes et optimisées.</p>

      <p>Le choix de NuxtJS pour un portfolio est un bon choix car :</p>

      <ul>
        <li>Référencement naturel optimal : NuxtJS permet le Server-Side Rendering (SSR) ou la Génération de Site Statique. Le code HTML est déjà "prêt" quand le robot Google ou l'utilisateur arrive.</li>
        <li>Performance et expérience utilisateur : NuxtJS est optimisé pour offrir des temps de chargement rapides, ce qui améliore l'expérience utilisateur.</li>
      </ul>
    </template>
    <template #detailled-description>
      <p>Ce site a pour but de me présenter d'un point de vue plutôt personnel, mes passions, mes hobbies, mais surtout mes réalisations informatiques, qu'elles aient été profesionnelles ou non.</p>
      <p>L'objectif est de se promouvoir à travers un site Internet simple d'utilisation, fluide, et qui correspond à mon identité.</p>

    </template>
  </BaseComponent>
</template>

<style scoped>
</style>